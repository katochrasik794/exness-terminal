import { useState, useRef, useEffect } from 'react'
import LeftSidebar from '../components/layout/LeftSidebar'
import ChartSection from '../components/layout/ChartSection'
import OrderPanel from '../components/trading/OrderPanel'
import BottomPanel from '../components/panels/BottomPanel'
import StatusBar from '../components/layout/StatusBar'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/resizable'

export default function TradingTerminal() {
  const [isPanelExpanded, setIsPanelExpanded] = useState(false)
  const leftPanelRef = useRef(null)

  // Resize the left panel when it expands or collapses
  useEffect(() => {
    if (leftPanelRef.current) {
      if (isPanelExpanded) {
        leftPanelRef.current.resize(15) // 15% ≈ 290px on 1920px screen
      } else {
        leftPanelRef.current.resize(3)
      }
    }
  }, [isPanelExpanded])

  return (
    <ResizablePanelGroup direction="horizontal" className="flex-1 overflow-hidden min-h-0">
      {/* Left sidebar with panels */}
      <ResizablePanel 
        ref={leftPanelRef}
        defaultSize={3}
        minSize={3}
        maxSize={40}
        className="min-h-0 h-full"
        collapsible={false}
      >
        <LeftSidebar onPanelStateChange={setIsPanelExpanded} />
      </ResizablePanel>
      
      {/* Horizontal resize handle - only show when panel is expanded */}
      {isPanelExpanded && <ResizableHandle withHandle />}
      
      {/* Main content area with status bar */}
      <ResizablePanel defaultSize={97} className="flex flex-col h-full">
        {/* Top content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Center resizable area with vertical panels */}
          <ResizablePanelGroup direction="vertical" className="flex-1">
            {/* Chart section */}
            <ResizablePanel defaultSize={70} minSize={40} maxSize={85} className="min-h-0 overflow-hidden">
              <ChartSection />
            </ResizablePanel>
            
            {/* Vertical resize handle */}
            <ResizableHandle />
            
            {/* Bottom panel */}
            <ResizablePanel defaultSize={30} minSize={15} maxSize={60} className="min-h-0 overflow-hidden">
              <BottomPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
          
          {/* Right sidebar - Order Panel with full height */}
          <div className="w-62 h-full flex-shrink-0 overflow-hidden">
            <OrderPanel />
          </div>
        </div>
        
        {/* Status bar only for center and right areas */}
        <StatusBar />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}