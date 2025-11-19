import { useState } from 'react'

export default function WatchlistPanel() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedWatchlist, setSelectedWatchlist] = useState('favorites')

  const instruments = [
    {
      symbol: 'BTC',
      name: 'Bitcoin vs US Dollar',
      bid: '91,365.54',
      ask: '91,365.54',
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
      bid: '4,114.253',
      ask: '4,114.253',
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
      bid: '267.88',
      ask: '267.93',
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
      bid: '1.15704',
      ask: '1.15704',
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
      bid: '1.31202',
      ask: '1.31202',
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
      bid: '156.034',
      ask: '156.034',
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
      bid: '24,644.96',
      ask: '24,644.96',
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
      bid: '60.154',
      ask: '60.154',
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
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="flex items-center justify-between p-3 border-b border-gray-700">
        <h2 className="text-gray-300 text-xs font-medium uppercase">Instruments</h2>
        <div className="flex items-center gap-1">
          <button className="p-1 text-gray-400 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="3" cy="8" r="1"/>
              <circle cx="8" cy="8" r="1"/>
              <circle cx="13" cy="8" r="1"/>
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="4" x2="4" y2="12"/>
              <line x1="4" y1="4" x2="12" y2="12"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="p-3 space-y-3">
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
            className="w-full pl-10 pr-3 py-2 bg-[#2a3441] border border-gray-600 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <select
          value={selectedWatchlist}
          onChange={(e) => setSelectedWatchlist(e.target.value)}
          className="w-full px-3 py-2 bg-[#2a3441] border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-blue-500"
        >
          <option value="favorites">Favorites</option>
          <option value="forex">Forex</option>
          <option value="crypto">Crypto</option>
          <option value="indices">Indices</option>
        </select>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400">
              <th className="px-2 py-2 text-left font-normal">Symbol</th>
              <th className="px-1 py-2 text-center font-normal w-10">Signal</th>
              <th className="px-1 py-2 text-right font-normal w-16">Bid</th>
              <th className="px-1 py-2 text-right font-normal w-16">Ask</th>
              <th className="px-1 py-2 text-center font-normal w-20">1D change</th>
              <th className="px-1 py-2 text-right font-normal w-16">P/L, USD</th>
              <th className="px-1 py-2 text-center font-normal w-6"></th>
            </tr>
          </thead>
          <tbody>
            {filteredInstruments.map((item, idx) => (
              <tr
                key={`${item.symbol}-${idx}`}
                className="border-b border-gray-800 hover:bg-[#1c252f] cursor-pointer"
              >
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1">
                    <svg width="6" height="12" className="text-gray-500" fill="currentColor">
                      <rect x="0" y="2" width="1" height="8"/>
                      <rect x="2" y="2" width="1" height="8"/>
                      <rect x="4" y="2" width="1" height="8"/>
                    </svg>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span className="text-white font-medium">{item.symbol}</span>
                    {item.marketClosed && (
                      <svg width="10" height="10" className="text-red-400" fill="currentColor">
                        <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <line x1="2" y1="2" x2="8" y2="8" stroke="currentColor" strokeWidth="1"/>
                      </svg>
                    )}
                  </div>
                </td>
                
                <td className="px-1 py-2 text-center">
                  {item.signal === 'up' && (
                    <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center mx-auto">
                      <svg width="6" height="8" fill="white">
                        <path d="M3 1l2 3H4v4H2V4H1l2-3z"/>
                      </svg>
                    </div>
                  )}
                  {item.signal === 'down' && (
                    <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center mx-auto">
                      <svg width="6" height="8" fill="white">
                        <path d="M3 7L1 4h1V0h2v4h1l-2 3z"/>
                      </svg>
                    </div>
                  )}
                  {!item.signal && <span className="text-gray-500">-</span>}
                </td>
                
                <td className="px-1 py-2 text-right">
                  <span className={`font-mono ${item.changeColor === 'red' ? 'text-red-400' : item.changeColor === 'green' ? 'text-green-400' : 'text-white'}`}>
                    {item.bid}
                  </span>
                </td>
                
                <td className="px-1 py-2 text-right">
                  <span className={`font-mono ${item.changeColor === 'red' ? 'text-red-400' : item.changeColor === 'green' ? 'text-green-400' : 'text-white'}`}>
                    {item.ask}
                  </span>
                </td>
                
                <td className="px-1 py-2 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className={`font-mono ${item.changeColor === 'red' ? 'text-red-400' : item.changeColor === 'green' ? 'text-green-400' : 'text-white'}`}>
                      {item.change !== '-' && (
                        <svg width="6" height="8" className="inline mr-1" fill="currentColor">
                          {item.changeColor === 'green' ? (
                            <path d="M3 1l2 3H4v4H2V4H1l2-3z"/>
                          ) : item.changeColor === 'red' ? (
                            <path d="M3 7L1 4h1V0h2v4h1l-2 3z"/>
                          ) : null}
                        </svg>
                      )}
                      {item.change}
                    </span>
                    <div className="w-10 h-2 bg-gray-800 rounded-sm"></div>
                  </div>
                </td>
                
                <td className="px-1 py-2 text-right">
                  <span className={`font-mono ${item.pl.startsWith('+') ? 'text-green-400' : 'text-gray-400'}`}>
                    {item.pl}
                  </span>
                </td>
                
                <td className="px-1 py-2 text-center">
                  {item.favorite && (
                    <svg width="10" height="10" fill="#ffde02" stroke="#ffde02">
                      <path d="M5 1l1 2h2l-1.5 1.5L7 7l-2-1-2 1 .5-2.5L2 3h2l1-2z"/>
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