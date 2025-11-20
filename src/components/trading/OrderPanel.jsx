import { useState } from 'react'

export default function OrderPanel() {
  const [isPending, setIsPending] = useState(true)
  const [buyActive, setBuyActive] = useState(true)

  return (
    <div className="bg-[#1a1f26] border-l border-gray-700 flex flex-col h-full w-full">
      <form className="flex flex-col h-full" tabIndex="0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2" aria-label="Gold vs US Dollar">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 relative">
                <div className="w-3 h-3 bg-yellow-500 rounded-full absolute"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full absolute right-0"></div>
              </div>
              <span className="text-white font-medium">XAU/USD</span>
            </div>
          </div>
          <button className="p-1 text-gray-400 hover:text-white" type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Mode Select */}
        <div className="p-4 border-b border-gray-700">
          <div className="relative">
            <select className="w-full bg-[#2a2f36] border border-gray-600 rounded px-3 py-2 text-white appearance-none">
              <option value="regular">Regular form</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6l6-6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Order Buttons */}
        <div className="p-4">
          <div className="flex gap-0 mb-4">
            <button 
              className={`flex-1 py-3 px-4 flex flex-col items-center transition-colors ${
                buyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500/50 hover:bg-red-600'
              } text-white`}
              type="button"
              onClick={() => setBuyActive(false)}
            >
              <span className="text-xs mb-1">Sell</span>
              <div className="text-sm">
                <span>4,068.</span>
                <span className="font-bold text-lg">20</span>
                <span className="text-xs">5</span>
              </div>
            </button>
            <button 
              className={`flex-1 py-3 px-4 flex flex-col items-center transition-colors ${
                buyActive ? 'bg-blue-600 hover:bg-blue-700 ring-2 ring-blue-400' : 'bg-blue-500/50 hover:bg-blue-600'
              } text-white`}
              type="button"
              onClick={() => setBuyActive(true)}
            >
              <span className="text-xs mb-1">Buy</span>
              <div className="text-sm">
                <span>4,068.</span>
                <span className="font-bold text-lg">20</span>
                <span className="text-xs">5</span>
              </div>
            </button>
          </div>

          {/* Spread */}
          <div className="text-center py-2 border border-gray-600 rounded mb-4">
            <span className="text-gray-400 text-sm">0.00 USD</span>
          </div>

          {/* Sentiment */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-400 text-sm">39%</span>
              <span className="text-blue-400 text-sm">61%</span>
            </div>
            <div className="h-1 rounded" style={{
              background: 'linear-gradient(to right, #ef4444 0%, #ef4444 36%, #3b82f6 39%, #3b82f6 100%)'
            }}></div>
          </div>
        </div>

        {/* Market/Pending Toggle */}
        <div className="px-4 mb-4">
          <div className="flex bg-[#2a2f36] rounded overflow-hidden">
            <button 
              className={`flex-1 py-2 px-4 text-sm transition-colors ${
                !isPending ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
              type="button"
              onClick={() => setIsPending(false)}
            >
              Market
            </button>
            <button 
              className={`flex-1 py-2 px-4 text-sm transition-colors ${
                isPending ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
              type="button"
              onClick={() => setIsPending(true)}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Input Fields */}
        <div className="px-4 space-y-4 flex-1">
          {/* Open Price (only for pending orders) */}
          {isPending && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <label className="text-gray-400 text-sm">Open price</label>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  value="4068.515"
                  className="w-full bg-[#2a2f36] border border-gray-600 rounded px-3 py-2 text-white pr-24"
                  placeholder="Not set"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <div className="bg-gray-600 text-white text-xs px-2 py-1 rounded mr-2">
                    Stop
                  </div>
                  <button className="p-1 text-gray-400 hover:text-white" type="button">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13H5v-2h14v2z"/>
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:text-white" type="button">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                +31.0 pips
              </div>
            </div>
          )}

          {/* Volume */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Volume</label>
            <div className="relative">
              <input 
                type="text" 
                value="0.01" 
                className="w-full bg-[#2a2f36] border border-gray-600 rounded px-3 py-2 text-white pr-20"
                placeholder="Not set"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="text-gray-400 text-xs mr-2">Lots</span>
                <button className="p-1 text-gray-400 hover:text-white" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-white" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Take Profit */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-gray-400 text-sm">Take Profit</label>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="relative">
              <input 
                type="text" 
                className="w-full bg-[#2a2f36] border border-gray-600 rounded px-3 py-2 text-white pr-24"
                placeholder="Not set"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button className="text-gray-400 text-xs mr-2 flex items-center gap-1" type="button">
                  Price
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-white" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-white" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Stop Loss */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-gray-400 text-sm">Stop Loss</label>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="relative">
              <input 
                type="text" 
                className="w-full bg-[#2a2f36] border border-gray-600 rounded px-3 py-2 text-white pr-24"
                placeholder="Not set"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button className="text-gray-400 text-xs mr-2 flex items-center gap-1" type="button">
                  Price
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-white" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-white" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3 border-t border-gray-700">
          <button 
            className={`w-full py-3 px-4 rounded font-medium transition-colors ${
              buyActive 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
            type="submit"
          >
            Confirm {buyActive ? 'Buy' : 'Sell'} {isPending ? 'Stop' : ''} 0.01 lots
          </button>
          <button 
            className="w-full py-2 px-4 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 rounded transition-colors"
            type="button"
          >
            Cancel
          </button>
        </div>

        {/* Details */}
        <div className="p-4 border-t border-gray-700 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <span className="text-gray-400">Fees:</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-white">≈ 0.11 USD</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <span className="text-gray-400">Leverage:</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-white">1:2000</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Margin:</span>
            <span className="text-white">2.03 USD</span>
          </div>
          <button className="text-gray-400 hover:text-white text-xs" type="button">
            More
          </button>
        </div>
      </form>
    </div>
  )
}