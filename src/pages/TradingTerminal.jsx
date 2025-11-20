import { useState, useRef, useEffect } from 'react'
import LeftSidebar from '../components/layout/LeftSidebar'
import ChartSection from '../components/layout/ChartSection'
import OrderPanel from '../components/trading/OrderPanel'
import BottomPanel from '../components/panels/BottomPanel'

export default function TradingTerminal() {
  const [leftWidth, setLeftWidth] = useState(60) // percentage for chart
  const [topHeight, setTopHeight] = useState(70) // percentage for top section
  const [isResizingHorizontal, setIsResizingHorizontal] = useState(false)
  const [isResizingVertical, setIsResizingVertical] = useState(false)
  const containerRef = useRef(null)

  // Horizontal resize logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizingHorizontal || !containerRef.current) return
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100
      
      if (newLeftWidth >= 30 && newLeftWidth <= 80) {
        setLeftWidth(newLeftWidth)
      }
    }

    const handleMouseUp = () => {
      setIsResizingHorizontal(false)
      document.body.style.cursor = 'default'
      document.body.style.userSelect = 'auto'
    }

    if (isResizingHorizontal) {
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizingHorizontal])

  // Vertical resize logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizingVertical || !containerRef.current) return
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const newTopHeight = ((e.clientY - containerRect.top) / containerRect.height) * 100
      
      if (newTopHeight >= 40 && newTopHeight <= 85) {
        setTopHeight(newTopHeight)
      }
    }

    const handleMouseUp = () => {
      setIsResizingVertical(false)
      document.body.style.cursor = 'default'
      document.body.style.userSelect = 'auto'
    }

    if (isResizingVertical) {
      document.body.style.cursor = 'row-resize'
      document.body.style.userSelect = 'none'
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizingVertical])

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* <LeftSidebar /> */}
      
      {/* Center resizable area */}
      <div ref={containerRef} className="flex-1 flex flex-col h-full">
        {/* Chart section with vertical resizing */}
        <div style={{ height: `${topHeight}%` }} className="min-h-0">
          <ChartSection />
        </div>
        
        {/* Vertical resize handle */}
        <div
          className="h-1 bg-gray-600 hover:bg-blue-500 cursor-row-resize flex-shrink-0 transition-colors z-10"
          onMouseDown={(e) => {
            e.preventDefault()
            setIsResizingVertical(true)
          }}
        />
        
        {/* Bottom panel */}
        <div style={{ height: `${100 - topHeight}%` }} className="min-h-0 overflow-hidden">
          <BottomPanel />
        </div>
      </div>
      
      {/* Right sidebar - Order Panel with full height */}
      <div className="w-80 h-full">
        <OrderPanel />
      </div>
    </div>
  )
}