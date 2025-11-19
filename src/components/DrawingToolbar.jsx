import { useState } from 'react'

export default function DrawingToolbar() {
  const [activeTool, setActiveTool] = useState('cross')

  const tools = [
    { id: 'cross', label: 'Cross', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M18 15h8v-1h-8z"/>
        <path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z"/>
      </svg>
    )},
    { id: 'trend', label: 'Trend Line', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M7.354 21.354l14-14-.707-.707-14 14z"/>
        <path d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"/>
      </svg>
    )},
    { id: 'horizontal', label: 'Horizontal Line', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M4 14h20v-1H4z"/>
        <circle cx="4" cy="13.5" r="1.5" fill="currentColor"/>
        <circle cx="24" cy="13.5" r="1.5" fill="currentColor"/>
      </svg>
    )},
    { id: 'fibonacci', label: 'Fibonacci', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M3 5h22v-1h-22z"/>
        <path d="M3 17h22v-1h-22z"/>
        <path d="M3 11h19.5v-1h-19.5z"/>
        <path d="M5.5 23h19.5v-1h-19.5z"/>
      </svg>
    )},
    { id: 'brush', label: 'Brush', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M1.789 23l.859-.854.221-.228c.18-.19.38-.409.597-.655.619-.704 1.238-1.478 1.815-2.298.982-1.396 1.738-2.776 2.177-4.081 1.234-3.667 5.957-4.716 8.923-1.263z"/>
      </svg>
    )},
    { id: 'text', label: 'Text', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M8 6.5c0-.28.22-.5.5-.5H14v16h-2v1h5v-1h-2V6h5.5c.28 0 .5.22.5.5V9h1V6.5c0-.83-.67-1.5-1.5-1.5h-12C7.67 5 7 5.67 7 6.5V9h1V6.5Z"/>
      </svg>
    )},
    { id: 'emoji', label: 'Emoji', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M4.05 14a9.95 9.95 0 1 1 19.9 0 9.95 9.95 0 0 1-19.9 0ZM14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm-3 13.03a.5.5 0 0 1 .64.3 2.5 2.5 0 0 0 4.72 0 .5.5 0 0 1 .94.34z"/>
        <circle cx="11.5" cy="11.5" r="1" fill="currentColor"/>
        <circle cx="16.5" cy="11.5" r="1" fill="currentColor"/>
      </svg>
    )},
    { id: 'measure', label: 'Measure', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M2 9.75a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h24a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5z" transform="rotate(-45 14 14)"/>
      </svg>
    )},
    { id: 'zoom', label: 'Zoom', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M17.646 18.354l4 4 .708-.708-4-4z"/>
        <path d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"/>
        <path d="M9 13h7v-1H9z"/>
        <path d="M13 16V9h-1v7z"/>
      </svg>
    )},
    { id: 'magnet', label: 'Magnet', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M14 10a2 2 0 0 0-2 2v11H6V12c0-4.416 3.584-8 8-8s8 3.584 8 8v11h-6V12a2 2 0 0 0-2-2z"/>
      </svg>
    )},
    { id: 'lock', label: 'Lock', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M14 6a3 3 0 0 0-3 3v3h8.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 6 21.5v-7A2.5 2.5 0 0 1 8.5 12H10V9a4 4 0 0 1 8 0z"/>
      </svg>
    )},
    { id: 'hide', label: 'Hide', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <path d="M5 10.76l-.41-.72-.03-.04.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12 2.73 0 4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12z"/>
      </svg>
    )},
    { id: 'settings', label: 'Settings', icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
        <circle cx="14" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 1v2M14 25v2M25 14h-2M5 14H3M21.36 6.64l-1.42 1.42M8.06 19.94l-1.42 1.42M21.36 21.36l-1.42-1.42M8.06 8.06L6.64 6.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )}
  ]

  return (
    <div className="absolute left-0 top-10 bg-[#2a3441] border-r border-gray-600 flex flex-col w-12 h-full z-10">
      {/* Drawing Tools */}
      <div className="flex flex-col py-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 ${
              activeTool === tool.id ? 'bg-gray-600 text-white' : ''
            }`}
            title={tool.label}
          >
            {tool.icon}
          </button>
        ))}
      </div>
    </div>
  )
}