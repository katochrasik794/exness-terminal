import ChartToolbar from './ChartToolbar'
import DrawingToolbar from './DrawingToolbar'

export default function ChartSection() {
  return (
    <div className="flex-1 flex flex-col bg-[#1c1c1c] relative">
      {/* Drawing Toolbar */}
      <DrawingToolbar />
      
      {/* Chart Toolbar */}
      <ChartToolbar />
      
      {/* Chart Area */}
      <div className="flex-1 relative">
        {/* Chart Legend */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <button className="text-white hover:text-gray-300">Gold vs US Dollar</button>
            <span className="text-gray-400">1</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>O <span className="text-green-400">4,115.586</span></span>
            <span>H <span className="text-green-400">4,115.923</span></span>
            <span>L <span className="text-green-400">4,115.586</span></span>
            <span>C <span className="text-green-400">4,115.648</span></span>
            <span className="text-green-400">+0.044 (+0.00%)</span>
          </div>
          <button className="text-gray-400 hover:text-white p-1">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            </svg>
          </button>
        </div>

        {/* Chart Canvas Area */}
        <div className="w-full h-full bg-gradient-to-b from-[#1c1c1c] to-[#1a1a1a] flex items-center justify-center">
          <div className="text-gray-500 text-lg">Chart Area</div>
        </div>

        {/* Chart Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/20 rounded p-2">
          <button className="p-2 text-gray-400 hover:text-white" title="Zoom out">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
              <path d="M14 10H4V8.5h10V10Z"/>
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-white" title="Zoom in">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
              <path d="M8.25 13.75v-9.5h1.5v9.5h-1.5Z"/>
              <path d="M13.75 9.75h-9.5v-1.5h9.5v1.5Z"/>
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-white" title="Reset chart view">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
              <path d="M10 6.38V8L6 5.5 10 3v1.85A5.25 5.25 0 1 1 3.75 10a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 0 10 6.38Z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="bg-[#1a1f26] border-t border-gray-700 h-10 flex items-center px-4 gap-4">
        {/* Date Range */}
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 text-gray-400 hover:text-white text-xs">5y</button>
          <button className="px-2 py-1 text-gray-400 hover:text-white text-xs">1y</button>
          <button className="px-2 py-1 text-gray-400 hover:text-white text-xs">6m</button>
          <button className="px-2 py-1 text-gray-400 hover:text-white text-xs">3m</button>
          <button className="px-2 py-1 text-gray-400 hover:text-white text-xs">1m</button>
          <button className="px-2 py-1 text-gray-400 hover:text-white text-xs">5d</button>
          <button className="px-2 py-1 text-gray-400 hover:text-white text-xs">1d</button>
        </div>

        <div className="w-px h-6 bg-gray-600"></div>

        {/* Go to Date */}
        <button className="p-1 text-gray-400 hover:text-white" title="Go to">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
            <path fillRule="evenodd" d="M11 4h-1v2H7.5A2.5 2.5 0 0 0 5 8.5V13h1v-2h16v8.5c0 .83-.67 1.5-1.5 1.5H14v1h6.5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 20.5 6H18V4h-1v2h-6V4Zm6 4V7h-6v1h-1V7H7.5C6.67 7 6 7.67 6 8.5V10h16V8.5c0-.83-.67-1.5-1.5-1.5H18v1h-1Zm-5.15 10.15-3.5-3.5-.7.7L10.29 18H4v1h6.3l-2.65 2.65.7.7 3.5-3.5.36-.35-.36-.35Z"/>
          </svg>
        </button>

        <div className="flex-1"></div>

        {/* Right Controls */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>11:22:03 UTC</span>
          <button className="hover:text-white" title="Toggle Percentage">%</button>
          <button className="hover:text-white" title="Toggle Log Scale">log</button>
          <button className="hover:text-white" title="Toggle Auto Scale">auto</button>
        </div>
      </div>
    </div>
  )
}