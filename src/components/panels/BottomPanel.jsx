import { useState } from 'react'
import FlagIcon from '../ui/FlagIcon'

export default function BottomPanel() {
  const [activeTab, setActiveTab] = useState('Open')
  const [isGrouped, setIsGrouped] = useState(true)

  const tabs = ['Open', 'Pending', 'Closed']

  const openPositions = [
    {
      symbol: 'XAU/USD',
      type: 'Buy',
      volume: '0.03',
      openPrice: '≈ 4,157.977',
      currentPrice: '4,174.225',
      tp: 'Add',
      sl: 'Add',
      ticket: '', // Position column
      openTime: 'Nov 26, 11:04:32 AM',
      swap: '0',
      commission: '-0.33',
      pl: '+48.74',
      plColor: 'text-[#00ffaa]', // Bright green for profit
    }
  ]

  return (
    <div className="h-full bg-[#141d22] flex flex-col overflow-hidden font-sans">
      {/* Header Section */}
      <div className="flex items-center justify-between px-1 border-b border-[#2a3038] bg-[#141d22] h-[40px] min-h-[40px]">
        {/* Tabs */}
        <div className="flex items-center h-full">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative h-full px-5 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === tab
                  ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white'
                  : 'text-[#8b9096] hover:text-white'
              }`}
            >
              {tab}
              {tab === 'Open' && (
                <span className={`text-[11px] px-1.5 py-0.5 rounded-[3px] leading-none ${
                  activeTab === 'Open' ? 'bg-[#2a3038] text-white' : 'bg-[#2a3038] text-[#8b9096]'
                }`}>3</span>
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Group/Ungroup Toggle */}
          <div className="flex items-center bg-[#1e252b] rounded p-0.5 mr-2">
            <button 
              onClick={() => setIsGrouped(true)}
              className={`p-1.5 rounded ${isGrouped ? 'bg-[#2a3038] text-white' : 'text-[#8b9096] hover:text-white'}`}
              title="Group positions"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              onClick={() => setIsGrouped(false)}
              className={`p-1.5 rounded ${!isGrouped ? 'bg-[#2a3038] text-white' : 'text-[#8b9096] hover:text-white'}`}
              title="Ungroup positions"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>

          <button className="p-2 text-[#8b9096] hover:text-white transition-colors" title="Settings">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
          <button className="p-2 text-[#8b9096] hover:text-white transition-colors" title="Hide panel">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto bg-[#141d22]">
        <table className="w-full text-[14px] border-collapse min-w-max">
          <thead className="sticky top-0 bg-[#141d22] z-20">
            <tr className="text-[12px] text-gray-100 border-b border-[#2a3038]">
              <th className="px-4 text-left font-normal w-[220px] whitespace-nowrap">Symbol</th>
              <th className="px-4 text-left font-normal whitespace-nowrap">Type</th>
              <th className="px-4 text-right font-normal whitespace-nowrap">Volume, lot</th>
              <th className="px-4 text-right font-normal whitespace-nowrap">Open price</th>
              <th className="px-4 text-right font-normal whitespace-nowrap">Current price</th>
              <th className="px-4 text-center font-normal text-[#8b9096] whitespace-nowrap">T/P</th>
              <th className="px-4 text-center font-normal text-[#8b9096] whitespace-nowrap">S/L</th>
              <th className="px-4 text-left font-normal whitespace-nowrap">Position</th>
              <th className="px-4 text-left font-normal whitespace-nowrap">Open time</th>
              <th className="px-4 text-left font-normal whitespace-nowrap">Swap, USD</th>
              <th className="px-4 text-left font-normal whitespace-nowrap">Commission, USD</th>
              
              {/* Sticky Columns Header */}
              <th className="px-4 text-right font-normal whitespace-nowrap sticky right-[50px] bg-[#141d22] z-30 shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.3)] border-b border-[#2a3038]">P/L, USD</th>
              <th className="px-4 text-center font-normal w-[55px] sticky right-0 bg-[#141d22] z-30 border-b border-[#2a3038]"></th>
            </tr>
          </thead>
          <tbody>
            {activeTab === 'Open' && openPositions.map((position, idx) => (
              <tr
                key={idx}
                className="border-b border-[#2a3038] hover:bg-[#1c252f] group"
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 relative">
                      <FlagIcon type="xauusd" />
                    </div>
                    <span className="text-white font-medium">{position.symbol}</span>
                    <span className="ml-1 text-[12px] bg-[#2a3038] text-[#8b9096] px-1.5 rounded">3</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#0099ff]"></div>
                    <span className="text-white">{position.type}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-white whitespace-nowrap">{position.volume}</td>
                <td className="px-4 py-3 text-right text-white whitespace-nowrap">{position.openPrice}</td>
                <td className="px-4 py-3 text-right text-white whitespace-nowrap">{position.currentPrice}</td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <button className="text-[#8b9096] hover:text-[#0099ff] border-b border-dashed border-[#8b9096] hover:border-[#0099ff] leading-none pb-px">
                    {position.tp}
                  </button>
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <button className="text-[#8b9096] hover:text-[#0099ff] border-b border-dashed border-[#8b9096] hover:border-[#0099ff] leading-none pb-px">
                    {position.sl}
                  </button>
                </td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.ticket}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.openTime}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.swap}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.commission}</td>
                
                {/* Sticky Columns Data */}
                <td className="px-4 py-3 text-right whitespace-nowrap sticky right-[50px] bg-[#141d22] group-hover:bg-[#1c252f] z-20 shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.3)] border-b border-[#2a3038]">
                  <span className={`font-medium ${position.plColor}`}>{position.pl}</span>
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap sticky right-0 bg-[#141d22] group-hover:bg-[#1c252f] z-20 border-b border-[#2a3038]">
                  <button className="text-[#8b9096] hover:text-white transition-colors" title="Close position">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}

            {activeTab === 'Pending' && (
              <tr>
                <td colSpan="13" className="text-center py-16 text-[#8b9096]">
                  No pending orders
                </td>
              </tr>
            )}

            {activeTab === 'Closed' && (
              <tr>
                <td colSpan="13" className="text-center py-16 text-[#8b9096]">
                  No closed positions
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}