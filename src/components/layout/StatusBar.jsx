import { GiNetworkBars } from "react-icons/gi";
export default function StatusBar() {
  return (
    <div className="bg-gray-900 border-t border-gray-600 flex items-center justify-between px-4 py-2 text-[11px] text-gray-400">
      {/* Left section - Account info */}
      <div className="flex items-center gap-6">
        <span>Equity: <span className="text-white font-mono">952.29 USD</span></span>
        <span>Free Margin: <span className="text-white font-mono">950.25 USD</span></span>
        <span>Balance: <span className="text-white font-mono">991.62 USD</span></span>
        <span>Margin: <span className="text-white font-mono">2.04 USD</span></span>
      </div>
      
      {/* Center section - P/L and Close all */}
      <div className="flex items-center gap-4">
        <span>Total P/L, USD: <span className="text-red-400 font-mono font-medium">-39.33</span></span>
        <button className="px-3 py-1 border border-gray-600 hover:border-gray-500 text-white rounded text-[11px] flex items-center gap-1">
          Close all
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Right section - Connection status */}
      <div className="flex items-center" title="Internet connection is stable">
        <GiNetworkBars size={15} className="text-green-400" />
      </div>
    </div>
  )
}