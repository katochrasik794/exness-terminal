import { useState } from 'react'

export default function BottomPanel() {
  const [activeTab, setActiveTab] = useState('Open')

  const tabs = ['Open', 'Pending', 'Closed']

  const openPositions = [
    {
      symbol: 'XAU/USD',
      type: 'Buy',
      volume: '0.01',
      openPrice: '4,072.786',
      currentPrice: '4,035.345',
      tp: 'Add',
      sl: 'Add',
      pl: '-37.44',
      plColor: 'text-red-400'
    }
  ]

  return (
    <div className="h-64 bg-[#141d22]  border-t border-gray-700 flex flex-col overflow-hidden">
      {/* Tabs */}
      <div className="flex items-center border-b border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-xs font-medium border-r border-gray-700 ${
              activeTab === tab
                ? 'bg-[#0f1419] text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab} {tab === 'Open' && <span className="ml-1 text-[10px] bg-blue-600 px-1 rounded">1</span>}
          </button>
        ))}
        
        <div className="flex-1" />
        
        {/* Actions */}
        <div className="flex items-center gap-1 px-3">
          <button className="text-gray-400 hover:text-white p-1" title="Group positions">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white p-1" title="Ungroup positions">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white p-1" title="More options">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white p-1" title="Close panel">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[10px]">
          <thead className="sticky top-0 bg-[#1a1f26] border-b border-gray-700">
            <tr className="text-gray-400">
              <th className="px-2 py-1 text-left font-normal">Symbol</th>
              <th className="px-2 py-1 text-left font-normal">Type</th>
              <th className="px-2 py-1 text-right font-normal">Volume, lot</th>
              <th className="px-2 py-1 text-right font-normal">Open price</th>
              <th className="px-2 py-1 text-right font-normal">Current price</th>
              <th className="px-2 py-1 text-center font-normal">T/P</th>
              <th className="px-2 py-1 text-right font-normal">P/L, USD</th>
              <th className="px-2 py-1 text-center font-normal w-8"></th>
              <th className="px-2 py-1 text-center font-normal w-8"></th>
            </tr>
          </thead>
          <tbody>
            {activeTab === 'Open' && openPositions.map((position, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-800 hover:bg-[#1c252f]"
              >
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full flex items-center justify-center text-[8px] font-bold bg-yellow-500">
                      🥇
                    </div>
                    <span className="text-white font-medium text-sm">{position.symbol}</span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-white text-sm">{position.type}</span>
                  </div>
                </td>
                <td className="px-2 py-2 text-right text-white text-sm">{position.volume}</td>
                <td className="px-2 py-2 text-right text-white text-sm font-mono">{position.openPrice}</td>
                <td className="px-2 py-2 text-right text-white text-sm font-mono">{position.currentPrice}</td>
                <td className="px-2 py-2 text-center">
                  <button className="text-gray-400 hover:text-blue-400 text-sm">{position.tp}</button>
                </td>
                <td className="px-2 py-2 text-right">
                  <span className={`font-medium text-sm ${position.plColor}`}>{position.pl}</span>
                </td>
                <td className="px-2 py-2 text-center">
                  <button className="text-gray-400 hover:text-white" title="Edit position">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </td>
                <td className="px-2 py-2 text-center">
                  <button className="text-gray-400 hover:text-white" title="Close position">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}

            {activeTab === 'Pending' && (
              <tr>
                <td colSpan="9" className="text-center py-8 text-gray-400 text-sm">
                  No pending orders
                </td>
              </tr>
            )}

            {activeTab === 'Closed' && (
              <tr>
                <td colSpan="9" className="text-center py-8 text-gray-400 text-sm">
                  No closed positions
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#0f1419] border-t border-gray-700 text-[10px] text-gray-400">
        <div className="flex items-center gap-4">
          <span>Equity: <span className="text-white">1,006.71 USD</span></span>
          <span>Free Margin: <span className="text-white">1,002.37 USD</span></span>
          <span>Balance: <span className="text-white">999.73 USD</span></span>
          <span>Margin: <span className="text-white">4.34 USD</span></span>
          <span>Margin level: <span className="text-white">23,196.08%</span></span>
          <span>Total P/L, USD: <span className="text-red-400">-37.44</span></span>
        </div>
        <button className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-[10px]">
          Close all
        </button>
      </div>
    </div>
  )
}