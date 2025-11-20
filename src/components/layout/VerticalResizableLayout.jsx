import { useState, useRef, useEffect } from 'react'

export default function VerticalResizableLayout({ topComponent, bottomComponent }) {
  const [topHeight, setTopHeight] = useState(70) // percentage
  const [isResizing, setIsResizing] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !containerRef.current) return
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const newTopHeight = ((e.clientY - containerRect.top) / containerRect.height) * 100
      
      // Constrain between 40% and 85%
      if (newTopHeight >= 40 && newTopHeight <= 85) {
        setTopHeight(newTopHeight)
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing])

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsResizing(true)
  }

  return (
    <div ref={containerRef} className="flex flex-col flex-1 min-h-0 relative h-full">
      <div style={{ height: `${topHeight}%` }} className="min-h-0 flex">
        {topComponent}
      </div>
      
      {/* Resize handle */}
      <div
        className="h-1 bg-gray-600 hover:bg-blue-500 cursor-row-resize flex-shrink-0 transition-colors z-10"
        onMouseDown={handleMouseDown}
      />
      
      <div style={{ height: `${100 - topHeight}%` }} className="min-h-0 overflow-hidden">
        {bottomComponent}
      </div>
    </div>
  )
}