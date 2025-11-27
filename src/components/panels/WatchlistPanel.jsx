import { useState } from 'react'

export default function WatchlistPanel({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedWatchlist, setSelectedWatchlist] = useState('favorites')

  const instruments = [
    {
      symbol: 'BTC',
      name: 'Bitcoin vs US Dollar',
      bid: '85,787.56',
      ask: '85,787.56',
      change: '-1.67%',
      changeColor: 'red',
      signal: 'down',
      pl: '-',
      favorite: true,
      flag: 'btc'
    },
    {
      symbol: 'XAU/USD',
      name: 'Gold vs US Dollar',
      bid: '4,048.162',
      ask: '4,048.162',
      change: '+0.92%',
      changeColor: 'green',
      signal: 'up',
      pl: '+41.47',
      favorite: true,
      flag: 'xau-usd'
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      bid: '266.56',
      ask: '266.56',
      change: '-',
      changeColor: 'gray',
      signal: 'up',
      pl: '-',
      favorite: true,
      flag: 'aapl',
      marketClosed: true
    },
    {
      symbol: 'EUR/USD',
      name: 'Euro vs US Dollar',
      bid: '1.15389',
      ask: '1.15389',
      change: '-0.09%',
      changeColor: 'red',
      signal: 'down',
      pl: '-',
      favorite: true,
      flag: 'eur-usd'
    },
    {
      symbol: 'GBP/USD',
      name: 'Great Britain Pound vs US Dollar',
      bid: '1.30924',
      ask: '1.30924',
      change: '-0.21%',
      changeColor: 'red',
      signal: 'down',
      pl: '-',
      favorite: true,
      flag: 'gbp-usd'
    },
    {
      symbol: 'USD/JPY',
      name: 'US Dollar vs Japanese Yen',
      bid: '157.185',
      ask: '157.185',
      change: '+0.32%',
      changeColor: 'green',
      signal: 'up',
      pl: '-',
      favorite: true,
      flag: 'usd-jpy'
    },
    {
      symbol: 'USTEC',
      name: 'US Tech 100 Index',
      bid: '24,091.83',
      ask: '24,091.83',
      change: '+0.41%',
      changeColor: 'green',
      signal: null,
      pl: '-',
      favorite: true,
      flag: 'ustec'
    },
    {
      symbol: 'USOIL',
      name: 'Crude Oil',
      bid: '58.164',
      ask: '58.164',
      change: '-0.73%',
      changeColor: 'red',
      signal: 'up',
      pl: '-',
      favorite: true,
      flag: 'usoil'
    }
  ]

  const filteredInstruments = instruments.filter(item =>
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#141d22]">
      {/* Header */}
      <header className="flex items-center justify-between p-3 border-b border-gray-700 flex-shrink-0">
        <h2 className="text-gray-400 text-[11px] font-medium uppercase">INSTRUMENTS</h2>
        <div className="flex items-center gap-1">
          <button className="p-1 text-gray-400 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="3" cy="8" r="1"/>
              <circle cx="8" cy="8" r="1"/>
              <circle cx="13" cy="8" r="1"/>
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-white" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="4" x2="4" y2="12"/>
              <line x1="4" y1="4" x2="12" y2="12"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="p-3 space-y-3 flex-shrink-0">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-[#141d22] border border-gray-600 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <select
          value={selectedWatchlist}
          onChange={(e) => setSelectedWatchlist(e.target.value)}
          className="w-full px-3 py-2 bg-[#141d22] border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-blue-500"
        >
          <option value="favorites">Favorites</option>
          <option value="forex">Forex</option>
          <option value="crypto">Crypto</option>
          <option value="indices">Indices</option>
        </select>
      </div>

      {/* Table Container with synchronized scrolling */}
      <div className="flex-1 overflow-auto min-h-0">
        <table className="w-full min-w-[540px] text-[10px]">
          <thead className="sticky top-0 bg-[#1a1f26] border-b border-gray-700">
            <tr className="text-gray-400">
              <th className="px-1 py-1 text-left font-normal w-[120px]">Symbol</th>
              <th className="px-1 py-1 text-center font-normal w-[40px]">Signal</th>
              <th className="px-1 py-1 text-right font-normal w-[80px]">Bid</th>
              <th className="px-1 py-1 text-right font-normal w-[80px]">Ask</th>
              <th className="px-1 py-1 text-center font-normal w-[100px]">1D change</th>
              <th className="px-1 py-1 text-right font-normal w-[80px]">P/L, USD</th>
              <th className="px-1 py-1 text-center font-normal w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredInstruments.map((item, idx) => (
              <tr
                key={`${item.symbol}-${idx}`}
                className="border-b-2 border-gray-700 hover:bg-[#1c252f] cursor-pointer"
              >
                <td className="px-1 py-1">
                  <div className="flex items-center gap-1">
                    <svg width="4" height="8" className="text-gray-500" fill="currentColor">
                      <rect x="0" y="1" width="1" height="6"/>
                      <rect x="1.5" y="1" width="1" height="6"/>
                      <rect x="3" y="1" width="1" height="6"/>
                    </svg>
                    <div className="w-3 h-3 rounded-full flex items-center justify-center text-[15px] font-bold" style={{
                      backgroundColor: item.symbol === 'BTC' ? '#f7931a' : 
                                     item.symbol === 'XAU/USD' ? '#ffd700' :
                                     item.symbol === 'AAPL' ? '#000000' :
                                     item.symbol === 'EUR/USD' ? '#003399' :
                                     item.symbol === 'GBP/USD' ? '#012169' :
                                     item.symbol === 'USD/JPY' ? '#bc002d' :
                                     item.symbol === 'USTEC' ? '#0066cc' :
                                     item.symbol === 'USOIL' ? '#000000' : '#666'
                    }}>
                      {item.symbol === 'BTC' ? '₿' : 
                       item.symbol === 'XAU/USD' ? '🥇' :
                       item.symbol === 'AAPL' ? '🍎' :
                       item.symbol === 'EUR/USD' ? '🇪🇺' :
                       item.symbol === 'GBP/USD' ? '🇬🇧' :
                       item.symbol === 'USD/JPY' ? '🇯🇵' :
                       item.symbol === 'USTEC' ? '📈' :
                       item.symbol === 'USOIL' ? '🛢️' : '💰'}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.symbol}</div>
                      {item.marketClosed && (
                        <svg width="8" height="8" className="text-red-400" fill="currentColor">
                          <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                          <line x1="2" y1="2" x2="6" y2="6" stroke="currentColor" strokeWidth="1"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </td>
                
                <td className="px-1 py-1 text-center">
                  {item.signal === 'up' && (
                    <div className="w-4 h-4 bg-green-600 rounded flex items-center justify-center mx-auto">
                      <svg width="4" height="6" fill="white">
                        <path d="M2 1l1.5 2H3v3H1V3H0.5l1.5-2z"/>
                      </svg>
                    </div>
                  )}
                  {item.signal === 'down' && (
                    <div className="w-4 h-4 bg-red-600 rounded flex items-center justify-center mx-auto">
                      <svg width="4" height="6" fill="white">
                        <path d="M2 5L0.5 3H1V0h2v3h0.5l-1.5 2z"/>
                      </svg>
                    </div>
                  )}
                  {!item.signal && <span className="text-gray-500">-</span>}
                </td>
                
                <td className="px-1 py-1 text-right">
                  <span className={`font-mono text-xs ${item.changeColor === 'red' ? 'text-red-400' : item.changeColor === 'green' ? 'text-green-400' : 'text-white'}`}>
                    {item.bid}
                  </span>
                </td>
                
                <td className="px-1 py-1 text-right">
                  <span className={`font-mono text-xs ${item.changeColor === 'red' ? 'text-red-400' : item.changeColor === 'green' ? 'text-green-400' : 'text-white'}`}>
                    {item.ask}
                  </span>
                </td>
                
                <td className="px-1 py-1 text-center">
                  <div className="flex flex-col items-center">
                    <span className={`font-mono text-[10px] ${item.changeColor === 'red' ? 'text-red-400' : item.changeColor === 'green' ? 'text-green-400' : 'text-white'}`}>
                      {item.change !== '-' && (
                        <svg width="4" height="6" className="inline mr-0.5" fill="currentColor">
                          {item.changeColor === 'green' ? (
                            <path d="M2 1l1.5 2H3v3H1V3H0.5l1.5-2z"/>
                          ) : item.changeColor === 'red' ? (
                            <path d="M2 5L0.5 3H1V0h2v3h0.5l-1.5 2z"/>
                          ) : null}
                        </svg>
                      )}
                      {item.change}
                    </span>
                    <div className="w-8 h-0.5 bg-gray-800 rounded-sm mt-0.5"></div>
                  </div>
                </td>
                
                <td className="px-1 py-1 text-right">
                  <span className={`font-mono text-[10px] ${item.pl.startsWith('+') ? 'text-green-400' : 'text-gray-400'}`}>
                    {item.pl}
                  </span>
                </td>
                
                <td className="px-1 py-1 text-center">
                  {item.favorite && (
                    <svg width="8" height="8" fill="#ffde02" stroke="#ffde02">
                      <path d="M4 1l0.8 1.6h1.6l-1.2 1.2L5.6 6l-1.6-0.8L2.4 6l0.4-1.2L1.6 3.6h1.6L4 1z"/>
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}