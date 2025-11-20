import LeftSidebar from '../components/layout/LeftSidebar'
import ChartSection from '../components/layout/ChartSection'
import OrderPanel from '../components/trading/OrderPanel'
import BottomPanel from '../components/panels/BottomPanel'
import { useVerticalResize } from '../hooks/useResizable'

export default function TradingTerminal() {
  const { height: topHeight, containerRef, startResize } = useVerticalResize(70, 40, 85)

  return (
    <div className="flex flex-1 overflow-hidden min-h-0">
      {/* <LeftSidebar /> */}
      
      {/* Center resizable area */}
      <div ref={containerRef} className="flex-1 flex flex-col h-full min-h-0">
        {/* Chart section with vertical resizing */}
        <div style={{ height: `${topHeight}%` }} className="min-h-0 overflow-hidden">
          <ChartSection />
        </div>
        
        {/* Vertical resize handle */}
        <div
          className="h-1 bg-gray-600 cursor-row-resize flex-shrink-0 z-10 resize-handle resize-handle-vertical"
          onMouseDown={startResize}
        />
        
        {/* Bottom panel */}
        <div style={{ height: `${100 - topHeight}%` }} className="min-h-0 overflow-hidden">
          <BottomPanel />
        </div>
      </div>
      
      {/* Right sidebar - Order Panel with full height */}
      <div className="w-70 h-full flex-shrink-0 overflow-hidden">
        <OrderPanel />
      </div>
    </div>
  )
}