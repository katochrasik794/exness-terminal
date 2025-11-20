import { useState, useRef, useEffect } from 'react'

export default function ResizableLayout({ leftComponent, rightComponent }) {
  const [leftWidth, setLeftWidth] = useState(60) // percentage
  const [isResizing, setIsResizing] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !containerRef.current) return
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100
      
      // Constrain between 30% and 80%
      if (newLeftWidth >= 30 && newLeftWidth <= 80) {
        setLeftWidth(newLeftWidth)
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
    <div ref={containerRef} className="flex flex-1 min-h-0 relative h-full">
      <div style={{ width: `${leftWidth}%` }} className="min-h-0 h-full">
        {leftComponent}
      </div>
      
      {/* Resize handle */}
      <div
        className="w-1 bg-gray-700 hover:bg-blue-500 cursor-col-resize flex-shrink-0 transition-colors"
        onMouseDown={handleMouseDown}
      />
      
      <div style={{ width: `${100 - leftWidth}%` }} className="min-h-0 h-full">
        {rightComponent}
      </div>
    </div>
  )
}