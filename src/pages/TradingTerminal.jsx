import { useRef, useEffect } from 'react'
import LeftSidebar from '../components/layout/LeftSidebar'
import ChartSection from '../components/layout/ChartSection'
import OrderPanel from '../components/trading/OrderPanel'
import BottomPanel from '../components/panels/BottomPanel'
import StatusBar from '../components/layout/StatusBar'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/resizable'

export default function TradingTerminal({ isSidebarExpanded, onSidebarStateChange }) {
  const leftPanelRef = useRef(null)

  // Resize the left panel when it expands or collapses
  useEffect(() => {
    if (leftPanelRef.current) {
      if (isSidebarExpanded) {
        leftPanelRef.current.resize(23) // 15% ≈ 290px on 1920px screen
      } else {
        leftPanelRef.current.resize(3)
      }
    }
  }, [isSidebarExpanded])

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
        <LeftSidebar onPanelStateChange={onSidebarStateChange} />
      </ResizablePanel>
      
      {/* Horizontal resize handle */}
      <ResizableHandle />
      
      {/* Main content area with status bar */}
      <ResizablePanel defaultSize={97} className="flex flex-col h-full gap-1">
        {/* Top content area */}
        <div className="flex flex-1 overflow-hidden gap-1">
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
          <div className="w-[260px] h-full flex-shrink-0 overflow-hidden">
            <OrderPanel />
          </div>
        </div>
        
        {/* Status bar only for center and right areas */}
        <StatusBar />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}