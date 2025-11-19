import { useState } from 'react'

export default function OrderPanel() {
  const [orderType, setOrderType] = useState('Market')
  const [volume, setVolume] = useState('0.01')
  const [takeProfit, setTakeProfit] = useState('')
  const [stopLoss, setStopLoss] = useState('')

  return (
    <div className="w-80 bg-[#1a1f26] border-l border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-medium">USD/JPY</h2>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Order Type */}
        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="w-full bg-[#2a3441] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
        >
          <option value="Market">Regular form</option>
          <option value="Limit">Limit Order</option>
          <option value="Stop">Stop Order</option>
        </select>
      </div>

      {/* Buy/Sell Buttons */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-red-600 hover:bg-red-700 text-white py-8 rounded text-center">
            <div className="text-lg font-bold">Sell</div>
            <div className="text-2xl font-bold">155.598</div>
            <div className="text-sm opacity-75">61%</div>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-8 rounded text-center">
            <div className="text-lg font-bold">Buy</div>
            <div className="text-2xl font-bold">155.598</div>
            <div className="text-sm opacity-75">39%</div>
          </button>
        </div>

        {/* Order Form */}
        <div className="space-y-4">
          {/* Volume */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Volume</label>
            <div className="flex items-center">
              <input
                type="text"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="flex-1 bg-[#2a3441] border border-gray-600 rounded-l px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
              <span className="bg-[#2a3441] border border-l-0 border-gray-600 rounded-r px-3 py-2 text-sm text-gray-400">
                Lots
              </span>
              <div className="flex ml-2">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-2 rounded-l text-xs">
                  -
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-2 rounded-r text-xs">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Take Profit */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Take Profit</label>
            <div className="flex items-center">
              <input
                type="text"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
                placeholder="Not set"
                className="flex-1 bg-[#2a3441] border border-gray-600 rounded-l px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <span className="bg-[#2a3441] border border-l-0 border-gray-600 rounded-r px-3 py-2 text-sm text-gray-400">
                Price
              </span>
              <div className="flex ml-2">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-2 rounded-l text-xs">
                  -
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-2 rounded-r text-xs">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Stop Loss */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Stop Loss</label>
            <div className="flex items-center">
              <input
                type="text"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
                placeholder="Not set"
                className="flex-1 bg-[#2a3441] border border-gray-600 rounded-l px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <span className="bg-[#2a3441] border border-l-0 border-gray-600 rounded-r px-3 py-2 text-sm text-gray-400">
                Price
              </span>
              <div className="flex ml-2">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-2 rounded-l text-xs">
                  -
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-2 rounded-r text-xs">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Market/Pending Toggle */}
        <div className="flex bg-[#2a3441] rounded p-1">
          <button className="flex-1 py-2 text-sm font-medium text-white bg-blue-600 rounded">
            Market
          </button>
          <button className="flex-1 py-2 text-sm font-medium text-gray-400 hover:text-white">
            Pending
          </button>
        </div>

        {/* Risk Info */}
        <div className="text-xs text-gray-400 space-y-1">
          <div className="flex justify-between">
            <span>Margin:</span>
            <span>4.34 USD</span>
          </div>
          <div className="flex justify-between">
            <span>Margin level:</span>
            <span>23,196.08%</span>
          </div>
        </div>
      </div>
    </div>
  )
}