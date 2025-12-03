import { useState } from 'react'
import FlagIcon from '../ui/FlagIcon'
import IconButton from '../ui/IconButton'
import Tooltip from '../ui/Tooltip'

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
      ticket: '12345678',
      openTime: 'Nov 26, 11:04:32 AM',
      swap: '0',
      commission: '-0.33',
      pl: '+48.74',
      plColor: 'text-[#00ffaa]', // Bright green for profit
      flag: 'xauusd'
    },
    {
      symbol: 'BTC',
      type: 'Buy',
      volume: '0.01',
      openPrice: '91,250.00',
      currentPrice: '91,419.25',
      tp: '95,000.00',
      sl: '89,000.00',
      ticket: '12345679',
      openTime: 'Nov 26, 12:30:15 PM',
      swap: '-0.50',
      commission: '-0.10',
      pl: '+169.25',
      plColor: 'text-[#00ffaa]',
      flag: 'btc'
    }
  ]

  const closedPositions = [
    {
      symbol: 'EUR/USD',
      type: 'Sell',
      volume: '1.00',
      openPrice: '1.05200',
      closePrice: '1.05100',
      tp: '1.05000',
      sl: '1.05500',
      ticket: '87654321',
      time: 'Nov 25, 10:00:00 AM',
      swap: '0',
      commission: '-5.00',
      pl: '+100.00',
      plColor: 'text-[#00ffaa]',
      flag: 'eurusd'
    },
    {
      symbol: 'GBP/USD',
      type: 'Buy',
      volume: '0.50',
      openPrice: '1.26000',
      closePrice: '1.26200',
      tp: '1.26500',
      sl: '1.25500',
      ticket: '87654322',
      time: 'Nov 25, 11:30:00 AM',
      swap: '-1.20',
      commission: '-2.50',
      pl: '+100.00',
      plColor: 'text-[#00ffaa]',
      flag: 'gbpusd'
    },
    {
      symbol: 'USD/JPY',
      type: 'Sell',
      volume: '2.00',
      openPrice: '153.500',
      closePrice: '153.200',
      tp: '153.000',
      sl: '154.000',
      ticket: '87654323',
      time: 'Nov 25, 02:15:00 PM',
      swap: '2.50',
      commission: '-10.00',
      pl: '+600.00',
      plColor: 'text-[#00ffaa]',
      flag: 'usdjpy'
    },
    {
      symbol: 'XAU/USD',
      type: 'Buy',
      volume: '0.10',
      openPrice: '2000.00',
      closePrice: '1995.00',
      tp: '2010.00',
      sl: '1990.00',
      ticket: '87654324',
      time: 'Nov 24, 09:45:00 AM',
      swap: '-0.80',
      commission: '-1.00',
      pl: '-50.00',
      plColor: 'text-[#f6465d]',
      flag: 'xauusd'
    },
    {
      symbol: 'BTC',
      type: 'Sell',
      volume: '0.05',
      openPrice: '37500.00',
      closePrice: '37600.00',
      tp: '37000.00',
      sl: '38000.00',
      ticket: '87654325',
      time: 'Nov 24, 03:20:00 PM',
      swap: '-2.00',
      commission: '-0.50',
      pl: '-500.00',
      plColor: 'text-[#f6465d]',
      flag: 'btc'
    },
    {
      symbol: 'USOIL',
      type: 'Buy',
      volume: '10.00',
      openPrice: '75.00',
      closePrice: '76.50',
      tp: '78.00',
      sl: '74.00',
      ticket: '87654326',
      time: 'Nov 23, 01:00:00 PM',
      swap: '0',
      commission: '-5.00',
      pl: '+1500.00',
      plColor: 'text-[#00ffaa]',
      flag: 'usoil'
    },
    {
      symbol: 'AAPL',
      type: 'Buy',
      volume: '50',
      openPrice: '185.00',
      closePrice: '190.00',
      tp: '200.00',
      sl: '180.00',
      ticket: '87654327',
      time: 'Nov 23, 10:00:00 AM',
      swap: '0',
      commission: '-2.00',
      pl: '+250.00',
      plColor: 'text-[#00ffaa]',
      flag: 'aapl'
    }
  ]

  return (
    <div className="h-full bg-[#141d22] flex flex-col overflow-hidden font-sans rounded-md">
      {/* Header Section */}
      <div className="flex items-center justify-between px-1 border-b border-[#2a3038] bg-[#141d22] h-[40px] min-h-[40px]">
        {/* Tabs */}
        <div className="flex items-center h-full">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative h-full px-5 text-[14px] font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                activeTab === tab
                  ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white'
                  : 'text-[#8b9096] hover:text-white'
              }`}
            >
              {tab}
              {tab === 'Open' && (
                <span className={`text-[11px] px-1.5 py-0.5 rounded-[3px] leading-none ${
                  activeTab === 'Open' ? 'bg-[#2a3038] text-white' : 'bg-[#2a3038] text-[#8b9096]'
                }`}>{openPositions.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Group/Ungroup Toggle */}
          <div className="flex items-center border border-[#2a353e] rounded p-[2px] mr-2">
            <Tooltip text="Group positions">
              <button 
                onClick={() => setIsGrouped(true)}
                className={`p-1 rounded cursor-pointer transition-colors ${isGrouped ? 'bg-[#2a353e] text-white' : 'text-[#8b9096] hover:text-white'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7L3 12l9 5 9-5-9-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17l-9-5 9-5 9 5-9 5z" />
                </svg>
              </button>
            </Tooltip>
            <Tooltip text="Ungroup positions">
              <button 
                onClick={() => setIsGrouped(false)}
                className={`p-1 rounded cursor-pointer transition-colors ${!isGrouped ? 'bg-[#2a353e] text-white' : 'text-[#8b9096] hover:text-white'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </button>
            </Tooltip>
          </div>

          <IconButton tooltip="Settings">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </IconButton>
          <IconButton tooltip="Hide panel">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </IconButton>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto bg-[#141d22]">
        <table className="w-full text-[14px] border-collapse min-w-max">
          <thead className="sticky top-0 bg-[#141d22] z-40">
            <tr className="text-[12px] text-gray-400 border-b border-[#2a3038]">
              <th className="px-4 py-[4px] text-left font-normal w-[220px] whitespace-nowrap">Symbol</th>
              <th className="px-4 py-[4px] text-left font-normal whitespace-nowrap">Type</th>
              <th className="px-4 py-[4px] text-right font-normal whitespace-nowrap">Volume, lot</th>
              <th className="px-4 py-[4px] text-right font-normal whitespace-nowrap">Open price</th>
              <th className="px-4 py-[4px] text-right font-normal whitespace-nowrap">
                {activeTab === 'Closed' ? 'Close price' : 'Current price'}
              </th>
              <th className="px-4 py-[4px] text-center font-normal text-[#8b9096] whitespace-nowrap">T/P</th>
              <th className="px-4 py-[4px] text-center font-normal text-[#8b9096] whitespace-nowrap">S/L</th>
              <th className="px-4 py-[4px] text-left font-normal whitespace-nowrap">Position</th>
              <th className="px-4 py-[4px] text-left font-normal whitespace-nowrap">
                {activeTab === 'Closed' ? 'Close time' : 'Open time'}
              </th>
              <th className="px-4 py-[4px] text-left font-normal whitespace-nowrap">Swap, USD</th>
              <th className="px-4 py-[4px] text-left font-normal whitespace-nowrap">Commission, USD</th>
              
              {/* Sticky Columns Header */}
              <th className="px-4 text-right font-normal whitespace-nowrap sticky right-[60px] bg-[#141d22] z-50 shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.3)] border-b border-[#2a3038]">P/L, USD</th>
              <th className="px-4 text-center font-normal w-[60px] min-w-[60px] sticky right-0 bg-[#141d22] z-50 border-b border-[#2a3038]"></th>
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
                      <FlagIcon type={position.flag || 'xauusd'} />
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
                  <button className="text-[#8b9096] hover:text-[#0099ff] border-b border-dashed border-[#8b9096] hover:border-[#0099ff] leading-none pb-px cursor-pointer">
                    {position.tp}
                  </button>
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <button className="text-[#8b9096] hover:text-[#0099ff] border-b border-dashed border-[#8b9096] hover:border-[#0099ff] leading-none pb-px cursor-pointer">
                    {position.sl}
                  </button>
                </td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.ticket}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.openTime}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.swap}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.commission}</td>
                
                {/* Sticky Columns Data */}
                <td className="px-4 py-3 text-right whitespace-nowrap sticky right-[60px] bg-[#141d22] group-hover:bg-[#1c252f] z-20 shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.3)] border-b border-[#2a3038]">
                  <span className={`font-medium ${position.plColor}`}>{position.pl}</span>
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap sticky right-0 bg-[#141d22] group-hover:bg-[#1c252f] z-20 border-b border-[#2a3038]">
                  <IconButton tooltip="Close position" placement="left" className="text-[#8b9096]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </IconButton>
                </td>
              </tr>
            ))}

            {activeTab === 'Closed' && closedPositions.map((position, idx) => (
              <tr
                key={idx}
                className="border-b border-[#2a3038] hover:bg-[#1c252f] group"
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 relative">
                      <FlagIcon type={position.flag || 'xauusd'} />
                    </div>
                    <span className="text-white font-medium">{position.symbol}</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${position.type === 'Buy' ? 'bg-[#0099ff]' : 'bg-[#f6465d]'}`}></div>
                    <span className="text-white">{position.type}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-white whitespace-nowrap">{position.volume}</td>
                <td className="px-4 py-3 text-right text-white whitespace-nowrap">{position.openPrice}</td>
                <td className="px-4 py-3 text-right text-white whitespace-nowrap">{position.closePrice}</td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <span className="text-[#8b9096]">{position.tp}</span>
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <span className="text-[#8b9096]">{position.sl}</span>
                </td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.ticket}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.time}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.swap}</td>
                <td className="px-4 py-3 text-left text-white whitespace-nowrap">{position.commission}</td>
                
                {/* Sticky Columns Data */}
                <td className="px-4 py-3 text-right whitespace-nowrap sticky right-[60px] bg-[#141d22] group-hover:bg-[#1c252f] z-20 shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.3)] border-b border-[#2a3038]">
                  <span className={`font-medium ${position.plColor}`}>{position.pl}</span>
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap sticky right-0 bg-[#141d22] group-hover:bg-[#1c252f] z-20 border-b border-[#2a3038]">
                  {/* Empty cell for closed positions */}
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
          </tbody>
        </table>
      </div>
    </div>
  )
}