import { useState } from 'react'

export default function BottomPanel() {
  const [activeTab, setActiveTab] = useState('Open')

  const tabs = ['Open', 'Pending', 'Closed']

  const openPositions = [
    {
      symbol: 'BTC',
      type: 'Buy',
      volume: '0.01',
      openPrice: '92,170.24',
      currentPrice: '91,273.14',
      tp: 'Add',
      sl: 'Add',
      pl: '-8.97',
      plColor: 'text-red-400'
    },
    {
      symbol: 'XAU/USD',
      type: 'Buy',
      volume: '0.01',
      openPrice: '4,072.786',
      currentPrice: '4,088.741',
      tp: 'Add',
      sl: 'Add',
      pl: '+15.95',
      plColor: 'text-green-400'
    }
  ]

  return (
    <div className="h-64 bg-[#1a1f26] border-t border-gray-700 flex flex-col overflow-hidden">
      {/* Tabs */}
      <div className="flex items-center border-b border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-r border-gray-700 ${
              activeTab === tab
                ? 'bg-[#0f1419] text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab} {tab === 'Open' && <span className="ml-1 text-xs bg-blue-600 px-1 rounded">2</span>}
          </button>
        ))}
        
        <div className="flex-1" />
        
        {/* Actions */}
        <div className="flex items-center gap-2 px-4">
          <button className="text-gray-400 hover:text-white p-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white p-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white p-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded">
            Close all
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[80px_60px_80px_100px_100px_60px_60px_80px_60px_60px] gap-4 px-4 py-2 text-xs text-gray-400 border-b border-gray-700">
        <span>Symbol</span>
        <span>Type</span>
        <span>Volume, lot</span>
        <span>Open price</span>
        <span>Current price</span>
        <span>T/P</span>
        <span>S/L</span>
        <span>P/L, USD</span>
        <span></span>
        <span></span>
      </div>

      {/* Table Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'Open' && openPositions.map((position, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[80px_60px_80px_100px_100px_60px_60px_80px_60px_60px] gap-4 px-4 py-3 text-sm border-b border-gray-800 hover:bg-[#1c252f]"
          >
            <div className="flex items-center gap-2">
              <span className="text-orange-400">●</span>
              <span className="text-white font-medium">{position.symbol}</span>
            </div>
            <div className="flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${
                position.type === 'Buy' ? 'bg-blue-500' : 'bg-red-500'
              }`}></span>
              <span className="text-white">{position.type}</span>
            </div>
            <span className="text-white">{position.volume}</span>
            <span className="text-white">{position.openPrice}</span>
            <span className="text-white">{position.currentPrice}</span>
            <button className="text-gray-400 hover:text-blue-400 text-left">{position.tp}</button>
            <button className="text-gray-400 hover:text-blue-400 text-left">{position.sl}</button>
            <span className={`font-medium ${position.plColor}`}>{position.pl}</span>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}

        {activeTab === 'Pending' && (
          <div className="flex items-center justify-center h-full text-gray-400">
            No pending orders
          </div>
        )}

        {activeTab === 'Closed' && (
          <div className="flex items-center justify-center h-full text-gray-400">
            No closed positions
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0f1419] border-t border-gray-700 text-xs text-gray-400">
        <div className="flex items-center gap-6">
          <span>Equity: <span className="text-white">1,006.71 USD</span></span>
          <span>Free Margin: <span className="text-white">1,002.37 USD</span></span>
          <span>Balance: <span className="text-white">999.73 USD</span></span>
          <span>Margin: <span className="text-white">4.34 USD</span></span>
          <span>Margin level: <span className="text-white">23,196.08%</span></span>
          <span>Total P/L, USD: <span className="text-green-400">+6.98</span></span>
        </div>
        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded">
          Close all
        </button>
      </div>
    </div>
  )
}