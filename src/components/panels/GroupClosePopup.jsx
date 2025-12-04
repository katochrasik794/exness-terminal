import { useEffect, useRef } from 'react'

export default function GroupClosePopup({ isOpen, onClose, onConfirm, position }) {
  const popupRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  if (!isOpen || !position) return null

  return (
    <div 
      ref={popupRef}
      className="fixed z-[100] bg-[#2a3038] border border-[#363c47] rounded-lg shadow-xl p-2 flex items-center gap-2 w-auto whitespace-nowrap"
      style={{ 
        top: position.top, 
        left: position.left,
        transform: 'translateY(-100%)' // Move up by its own height
      }}
    >
      <button
        onClick={onClose}
        className="px-3 py-1.5 text-[12px] font-medium text-[#b2b5be] hover:text-white hover:bg-[#363c47] rounded transition-colors cursor-pointer"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className="px-3 py-1.5 text-[12px] font-medium text-white bg-gray-500 hover:bg-gray-700 rounded transition-colors cursor-pointer"
      >
        Close All
      </button>
    </div>
  )
}
