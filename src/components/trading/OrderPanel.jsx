import { useState } from 'react'
import { ChevronDown, ChevronUp, X, Info, Minus, Plus, HelpCircle } from 'lucide-react'

export default function OrderPanel() {
  const [isPending, setIsPending] = useState(false)
  const [orderSide, setOrderSide] = useState('sell') // 'buy' or 'sell'
  const [volume, setVolume] = useState('0.01')
  const [isModeDropdownOpen, setIsModeDropdownOpen] = useState(false)
  const [selectedMode, setSelectedMode] = useState('Regular form')

  return (
    <div className="bg-[#141d22] flex flex-col h-full w-full overflow-hidden text-[#c0c0c0] font-sans border-l-4 border-gray-600">
      <form className="flex flex-col h-full overflow-y-auto overflow-x-hidden custom-scrollbar" onSubmit={(e) => e.preventDefault()}>
        
        {/* Header */}
        <div className="px-4 py-3 flex-shrink-0 border-b border-[#2a2f36]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center relative">
                {/* Overlapping Flags */}
                <div className="w-5 h-5 rounded-full overflow-hidden border border-[#2a2f36] z-10">
                   <img src="https://flagcdn.com/svg/us.svg" alt="USD" className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#2a2f36] -ml-2 z-0">
                  <div className="w-full h-full bg-yellow-500 flex items-center justify-center text-[8px] text-black font-bold">G</div>
                </div>
              </div>
              <span className="text-white font-medium text-xs">XAU/USD</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors cursor-pointer" type="button">
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Mode Select */}
        <div className="px-3 py-2 flex-shrink-0 relative z-50">
          <div className="relative">
            <button 
              type="button" 
              onClick={() => setIsModeDropdownOpen(!isModeDropdownOpen)}
              className={`w-full bg-[#1e2329] border ${isModeDropdownOpen ? 'border-[#2a2f36]' : 'border-[#2a2f36]'} rounded px-3 py-2 text-white text-sm flex items-center justify-between hover:border-gray-500 transition-colors cursor-pointer`}
            >
              <span>{selectedMode}</span>
              {isModeDropdownOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </button>
            
            {isModeDropdownOpen && (
              <div className="absolute top-full left-0 w-full mt-1 bg-[#2a2f36] border border-[#3b4148] rounded-md shadow-xl overflow-hidden py-1">
                {['Regular form', 'One-click form', 'Risk calculator form'].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => {
                      setSelectedMode(mode)
                      setIsModeDropdownOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 text-sm text-[#c0c0c0] hover:bg-[#3b4148] hover:text-white transition-colors cursor-pointer ${selectedMode === mode ? 'bg-[#3b4148] text-white' : ''}`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Order Buttons */}
        <div className="px-3 flex-shrink-0">
          <div className="flex gap-1 mb-1 relative">
            {/* Sell Button */}
            <button 
              className={`flex-1 rounded-l-md p-2 pb-4 flex flex-col items-start transition-colors relative overflow-hidden group cursor-pointer ${
                orderSide === 'sell' 
                  ? 'bg-[#ff444f] hover:bg-[#eb3b46]' 
                  : 'bg-transparent border border-[#ff444f] hover:bg-[#ff444f]/10'
              }`}
              type="button"
              onClick={() => setOrderSide('sell')}
            >
              <span className={`text-[10px] font-medium mb-0.5 ${orderSide === 'sell' ? 'text-red-100 opacity-90' : 'text-[#ff444f]'}`}>Sell</span>
              <div className={`flex items-baseline ${orderSide === 'sell' ? 'text-white' : 'text-[#ff444f]'}`}>
                <span className="text-sm">4,172.</span>
                <span className="text-lg font-bold">61</span>
                <span className="text-[9px] align-top ml-0.5 -mt-1">5</span>
              </div>
            </button>

            {/* Buy Button */}
              <button 
                className={`flex-1 rounded-r-md p-2 pb-4 flex flex-col items-end transition-colors relative overflow-hidden group cursor-pointer ${
                  orderSide === 'buy' 
                    ? 'bg-[#007bff] hover:bg-[#0069d9]' 
                    : 'bg-transparent border border-[#007bff] hover:bg-[#007bff]/10'
                }`}
                type="button"
                onClick={() => setOrderSide('buy')}
              >
                <span className={`text-[10px] font-medium mb-0.5 ${orderSide === 'buy' ? 'text-blue-100 opacity-90' : 'text-[#007bff]'}`}>Buy</span>
                <div className={`flex items-baseline ${orderSide === 'buy' ? 'text-white' : 'text-[#007bff]'}`}>
                  <span className="text-sm">4,172.</span>
                  <span className="text-lg font-bold">61</span>
                  <span className="text-[9px] align-top ml-0.5 -mt-1">5</span>
                </div>
              </button>

            {/* Spread Badge - Absolute positioned to overlap */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
               <div className="bg-[#2a2f36] text-white text-[9px] px-1.5 py-0.5 rounded border border-[#141d22]">
                 0.00 USD
               </div>
            </div>
          </div>

          {/* Spacer for the overlapping badge */}
          <div className="h-2"></div>

          {/* Sentiment Bar */}
          <div className="mt-1 mb-2">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[#ff444f] text-[12px] font-medium">29%</span>
              <span className="text-[#007bff] text-[12px] font-medium">71%</span>
            </div>
            <div className="h-0.5 w-full bg-[#2a2f36] rounded-full overflow-hidden flex">
              <div className="h-full bg-[#ff444f] w-[29%]"></div>
              <div className="h-full bg-[#007bff] w-[71%]"></div>
            </div>
          </div>
        </div>

        {/* Tabs (Market / Pending) */}
        <div className="px-3 mb-3 flex-shrink-0">
          <div className="bg-[#1e2329] p-1 rounded-md flex border border-[#2a2f36]">
            <button 
              className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                !isPending ? 'bg-[#2a2f36] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
              type="button"
              onClick={() => setIsPending(false)}
            >
              Market
            </button>
            <button 
              className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                isPending ? 'bg-[#2a2f36] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
              type="button"
              onClick={() => setIsPending(true)}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Input Fields */}
        <div className="px-3 space-y-3 flex-shrink-0">
          
          {/* Open Price (only for pending orders) */}
          {isPending && (
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-[#c0c0c0] text-xs">Open price</label>
                <HelpCircle size={12} className="text-gray-500" />
              </div>
              <div className="flex items-center">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    defaultValue="4068.515"
                    className="w-full bg-[#1e2329] border border-[#2a2f36] rounded-l px-3 py-2 text-white text-sm focus:border-gray-500 focus:outline-none transition-colors"
                  />
                  <div className="absolute right-0 top-0 h-full flex items-center pr-2 gap-1">
                    <span className="bg-gray-700 text-[10px] px-1.5 py-0.5 rounded text-white">Stop</span>
                  </div>
                </div>
                <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                  <Minus size={14} />
                </button>
                <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] rounded-r h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                  <Plus size={14} />
                </button>
              </div>
              <div className="text-[10px] text-gray-500 mt-1 text-right">
                +31.0 pips
              </div>
            </div>
          )}

          {/* Volume Input */}
          <div>
            <label className="block text-[#c0c0c0] text-xs mb-1">Volume</label>
            <div className="flex items-center">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full bg-[#1e2329] border border-[#2a2f36] rounded-l px-3 py-2 text-white text-sm focus:border-gray-500 focus:outline-none transition-colors"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">Lots</span>
              </div>
              <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                <Minus size={14} />
              </button>
              <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] rounded-r h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Take Profit */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[#c0c0c0] text-xs">Take Profit</label>
              <HelpCircle size={12} className="text-gray-500" />
            </div>
            <div className="flex items-center">
               <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Not set"
                  className="w-full bg-[#1e2329] border border-[#2a2f36] rounded-l px-3 py-2 text-white text-sm focus:border-gray-500 focus:outline-none transition-colors placeholder-gray-600"
                />
                <div className="absolute right-0 top-0 h-full flex items-center pr-2">
                   <button className="text-gray-500 text-xs flex items-center gap-1 hover:text-white cursor-pointer">
                     Price <ChevronDown size={12} />
                   </button>
                </div>
              </div>
              <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                <Minus size={14} />
              </button>
              <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] rounded-r h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Stop Loss */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[#c0c0c0] text-xs">Stop Loss</label>
              <HelpCircle size={12} className="text-gray-500" />
            </div>
            <div className="flex items-center">
               <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Not set"
                  className="w-full bg-[#1e2329] border border-[#2a2f36] rounded-l px-3 py-2 text-white text-sm focus:border-gray-500 focus:outline-none transition-colors placeholder-gray-600"
                />
                 <div className="absolute right-0 top-0 h-full flex items-center pr-2">
                   <button className="text-gray-500 text-xs flex items-center gap-1 hover:text-white cursor-pointer">
                     Price <ChevronDown size={12} />
                   </button>
                </div>
              </div>
              <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                <Minus size={14} />
              </button>
              <button type="button" className="bg-[#1e2329] border-y border-r border-[#2a2f36] rounded-r h-[38px] w-[38px] flex items-center justify-center hover:bg-[#2a2f36] transition-colors cursor-pointer">
                <Plus size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Confirmation Button */}
        <div className="px-3 mt-3 flex-shrink-0">
          <button 
            className={`w-full text-white font-medium py-2 rounded text-[13px] transition-colors shadow-lg cursor-pointer ${
              orderSide === 'sell' 
                ? 'bg-[#ff444f] hover:bg-[#eb3b46] shadow-red-900/20' 
                : 'bg-[#007bff] hover:bg-[#0069d9] shadow-blue-900/20'
            }`}
            type="submit"
          >
            Confirm {orderSide === 'sell' ? 'Sell' : 'Buy'} {volume} lots
          </button>
          
          <button 
            className="w-full mt-2 py-1.5 text-[#c0c0c0] hover:text-white text-[11px] transition-colors bg-[#1e2329] border border-[#2a2f36] rounded hover:bg-[#2a2f36] cursor-pointer"
            type="button"
          >
            Cancel
          </button>
        </div>

        {/* Footer Details */}
        <div className="px-3 py-3 border-t border-[#2a2f36] space-y-2 flex-shrink-0 mt-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <span className="text-gray-500">Fees:</span>
              <HelpCircle size={12} className="text-gray-600" />
            </div>
            <span className="text-white">≈ 0.11 USD</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <span className="text-gray-500">Leverage:</span>
              <HelpCircle size={12} className="text-gray-600" />
            </div>
            <span className="text-white">1:2000</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Margin:</span>
            <span className="text-white">2.03 USD</span>
          </div>
          <button className="text-gray-500 hover:text-white text-xs cursor-pointer" type="button">
            More
          </button>
        </div>
        
      </form>
    </div>
  )
}
