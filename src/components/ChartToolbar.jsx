export default function ChartToolbar() {
  return (
    <div className="bg-[#1a1f26] border-b border-gray-700 h-10 flex items-center px-4 gap-4">
      {/* Compare/Add Symbol */}
      <button className="p-1 text-gray-400 hover:text-white" title="Compare or Add Symbol">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
          <path d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
          <path d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/>
        </svg>
      </button>

      <div className="w-px h-6 bg-gray-600"></div>

      {/* Time Interval */}
      <button className="px-2 py-1 text-white text-sm hover:bg-gray-700 rounded" title="1 minute">
        1m
      </button>

      <div className="w-px h-6 bg-gray-600"></div>

      {/* Chart Style */}
      <button className="p-1 text-gray-400 hover:text-white" title="Candles">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
          <path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/>
          <path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/>
          <path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/>
          <path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/>
        </svg>
      </button>

      <div className="w-px h-6 bg-gray-600"></div>

      {/* Indicators */}
      <button className="flex items-center gap-2 px-3 py-1 text-white text-sm hover:bg-gray-700 rounded" title="Indicators & Strategies">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
          <path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/>
        </svg>
        Indicators
      </button>

      {/* Indicator Templates */}
      <button className="p-1 text-gray-400 hover:text-white" title="Indicator templates">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
          <path fillRule="evenodd" d="M8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM6 8c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm11-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8zm-4 8H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8zm9 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z"/>
        </svg>
      </button>

      <div className="w-px h-6 bg-gray-600"></div>

      {/* Undo/Redo */}
      <div className="flex">
        <button className="p-1 text-gray-400 hover:text-white" title="Undo">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
            <path d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/>
          </svg>
        </button>
        <button className="p-1 text-gray-500" title="Redo" disabled>
          <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor">
            <path d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/>
          </svg>
        </button>
      </div>

      <div className="flex-1"></div>

      {/* Save */}
      <div className="flex items-center">
        <button className="px-3 py-1 text-white text-sm hover:bg-gray-700 rounded" title="Save">
          Save
        </button>
        <button className="p-1 text-gray-400 hover:text-white" title="Manage layouts">
          <svg width="16" height="8" viewBox="0 0 16 8" fill="currentColor">
            <path d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/>
          </svg>
        </button>
      </div>

      <div className="w-px h-6 bg-gray-600"></div>

      {/* Screenshot */}
      <button className="p-1 text-gray-400 hover:text-white" title="Take a snapshot">
        <svg width="20" height="20" fill="currentColor">
          <path fillRule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/>
          <path fillRule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/>
        </svg>
      </button>
    </div>
  )
}