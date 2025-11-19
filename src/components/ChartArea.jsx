import { useState } from 'react'

export default function ChartArea() {
  const [activeTab, setActiveTab] = useState('USD/JPY')
  const [timeframe, setTimeframe] = useState('1D')

  const tabs = [
    { symbol: 'XAU/USD', flag: '🇺🇸' },
    { symbol: 'US500', flag: '🇺🇸' },
    { symbol: 'BTC', flag: '₿' },
    { symbol: 'USD/JPY', flag: '🇯🇵' }
  ]

  const timeframes = ['1M', '5M', '15M', '30M', '1H', '4H', '1D', '1W']

  return (
    <div className="flex-1 bg-[#0f1419] flex flex-col">
      {/* Chart Tabs */}
      <div className="flex items-center bg-[#1a1f26] border-b border-gray-700">
        {tabs.map(tab => (
          <div
            key={tab.symbol}
            className={`flex items-center gap-2 px-4 py-3 cursor-pointer border-r border-gray-700 ${
              activeTab === tab.symbol ? 'bg-[#0f1419] text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab.symbol)}
          >
            <span className="text-sm">{tab.flag}</span>
            <span className="text-sm font-medium">{tab.symbol}</span>
            {activeTab === tab.symbol && (
              <button className="ml-2 text-gray-400 hover:text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        ))}
        <button className="px-3 py-3 text-gray-400 hover:text-white border-r border-gray-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Chart Toolbar */}
      <div className="flex items-center justify-between bg-[#1a1f26] px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-4">
          {/* Timeframes */}
          <div className="flex items-center gap-1">
            {timeframes.map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2 py-1 text-xs rounded ${
                  timeframe === tf
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* Chart Tools */}
          <div className="flex items-center gap-2 ml-4">
            <button className="p-1 text-gray-400 hover:text-white" title="Indicators">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-white" title="Drawing Tools">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Price Info */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">O</span>
            <span className="text-white">155.538</span>
            <span className="text-gray-400">H</span>
            <span className="text-green-400">155.679</span>
            <span className="text-gray-400">L</span>
            <span className="text-red-400">155.214</span>
            <span className="text-gray-400">C</span>
            <span className="text-green-400">155.598</span>
            <span className="text-green-400">+0.064 (+0.04%)</span>
          </div>

          {/* Chart Actions */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded">
              Save
            </button>
            <button className="p-1 text-gray-400 hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="flex-1 relative bg-[#0f1419]">
        {/* Placeholder for actual chart */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <p className="text-lg">Chart Area</p>
            <p className="text-sm">Trading chart will be displayed here</p>
          </div>
        </div>

        {/* Price Scale (Right) */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-[#1a1f26] border-l border-gray-700 flex flex-col justify-between py-4">
          {[160.000, 158.223, 157.500, 155.598, 152.500, 150.000, 147.500].map(price => (
            <div key={price} className="text-xs text-gray-400 text-right pr-2">
              {price.toFixed(3)}
            </div>
          ))}
        </div>

        {/* Time Scale (Bottom) */}
        <div className="absolute bottom-0 left-0 right-16 h-8 bg-[#1a1f26] border-t border-gray-700 flex items-center justify-between px-4">
          {['Sep', '2024', 'Apr', 'Jul', 'Oct', '2025', 'Apr', 'Jul', 'Oct'].map((time, idx) => (
            <span key={idx} className="text-xs text-gray-400">{time}</span>
          ))}
        </div>
      </div>
    </div>
  )
}