import { useState } from 'react'
import LeftSidebar from '../components/layout/LeftSidebar'
import ChartSection from '../components/layout/ChartSection'
import OrderPanel from '../components/trading/OrderPanel'
import BottomPanel from '../components/panels/BottomPanel'
import StatusBar from '../components/layout/StatusBar'
import { useVerticalResize, useHorizontalResize } from '../hooks/useResizable'

export default function TradingTerminal() {
  const { height: topHeight, containerRef: verticalContainerRef, startResize: startVerticalResize } = useVerticalResize(70, 40, 85)
  const { width: leftWidth, containerRef: terminalContainerRef, startResize: startHorizontalResize } = useHorizontalResize(20, 15, 70)
  const [isPanelExpanded, setIsPanelExpanded] = useState(false)

  return (
    <div ref={terminalContainerRef} className="flex flex-1 overflow-hidden min-h-0">
      {/* Left sidebar with panels */}
      <div style={{ width: isPanelExpanded ? `min(${leftWidth}%, 70%)` : '48px' }} className="min-h-0 h-full transition-all duration-200">
        <LeftSidebar onPanelStateChange={setIsPanelExpanded} />
      </div>
      
      {/* Horizontal resize handle - only show when panel is expanded */}
      {isPanelExpanded && (
        <div
          className="w-1 bg-blue-500 hover:bg-blue-400 cursor-col-resize flex-shrink-0 resize-handle resize-handle-horizontal"
          onMouseDown={startHorizontalResize}
          style={{ width: '4px' }}
        />
      )}
      
      {/* Main content area with status bar */}
      <div 
        style={{ 
          width: isPanelExpanded ? 
            `max(${100 - leftWidth}%,)` : 
            'calc(100% - 48px)'
        }} 
        className="flex flex-col h-full transition-all duration-200"
      >
        {/* Top content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Center resizable area */}
          <div ref={verticalContainerRef} className="flex-1 flex flex-col h-full min-h-0">
            {/* Chart section with vertical resizing */}
            <div style={{ height: `${topHeight}%` }} className="min-h-0 overflow-hidden">
              <ChartSection />
            </div>
            
            {/* Vertical resize handle */}
            <div
              className="h-1 bg-gray-600 cursor-row-resize flex-shrink-0 z-10 resize-handle resize-handle-vertical"
              onMouseDown={startVerticalResize}
            />
            
            {/* Bottom panel */}
            <div style={{ height: `${100 - topHeight}%` }} className="min-h-0 overflow-hidden">
              <BottomPanel />
            </div>
          </div>
          
          {/* Right sidebar - Order Panel with full height */}
          <div className="w-62 h-full flex-shrink-0 overflow-hidden">
            <OrderPanel />
          </div>
        </div>
        
        {/* Status bar only for center and right areas */}
        <StatusBar />
      </div>
    </div>
  )
}