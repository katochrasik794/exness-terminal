import { useState, useEffect } from 'react'
import WatchlistPanel from '../panels/WatchlistPanel'
import EconomicCalendarPanel from '../panels/EconomicCalendarPanel'
import SettingsPanel from '../panels/SettingsPanel'
import ResizablePanel from '../panels/ResizablePanel'

export default function LeftSidebar({ onPanelStateChange }) {
  const [activePanel, setActivePanel] = useState(null)

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel)
  }

  const closePanel = () => {
    setActivePanel(null)
  }

  const hasActivePanel = activePanel !== null

  // Notify parent component about panel state changes
  useEffect(() => {
    if (onPanelStateChange) {
      onPanelStateChange(hasActivePanel)
    }
  }, [hasActivePanel, onPanelStateChange])

  return (
    <div className="border-0 border-gray-600 flex h-full overflow-hidden min-h-0">
      <aside className="bg-[#141d22] border-r-4 border-gray-600 w-14 flex flex-col items-center py-2 gap-4 flex-shrink-0 h-full">
        {/* Instruments Button */}
        <div>
          <button 
            className={`w-8 h-8 flex items-center border border-gray-600 justify-center text-gray-300 hover:text-white hover:bg-gray-700 rounded ${
              activePanel === 'instruments' ? 'bg-gray-600' : ''
            }`}
            type="button"
            data-test="aside-panel-watchlist-button"
            aria-label="Instruments"
            onClick={() => togglePanel('instruments')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="2" y="3" width="12" height="2"/>
              <rect x="2" y="7" width="12" height="2"/>
              <rect x="2" y="11" width="12" height="2"/>
            </svg>
          </button>
        </div>

        {/* Economic Calendar Button */}
        <div>
          <button 
            className={`w-8 h-8 flex items-center border border-gray-700 justify-center text-gray-300 hover:text-white hover:bg-gray-700 rounded ${
              activePanel === 'calendar' ? 'bg-gray-600' : ''
            }`}
            type="button"
            data-test="aside-panel-calendar-events-button"
            aria-label="Economic calendar"
            onClick={() => togglePanel('calendar')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="2" y="3" width="12" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="5" y="1" width="1" height="4"/>
              <rect x="10" y="1" width="1" height="4"/>
              <line x1="2" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="4" y="8" width="2" height="2"/>
            </svg>
          </button>
        </div>

        {/* Settings Button */}
        <div>
          <button 
            className={`w-8 h-8 flex items-center border border-gray-700 justify-center text-gray-300 hover:text-white hover:bg-gray-700 rounded ${
              activePanel === 'settings' ? 'bg-gray-600' : ''
            }`}
            type="button"
            data-test="aside-panel-settings-button"
            aria-label="Settings"
            onClick={() => togglePanel('settings')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.36 2.64l-1.42 1.42M4.06 11.94l-1.42 1.42M13.36 13.36l-1.42-1.42M4.06 4.06L2.64 2.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </aside>
      
      {/* Panel Content - only show when panel is active */}
      {hasActivePanel && (
        <>
          {activePanel === 'instruments' && (
            <div className="bg-[#1a1f26] border-r border-gray-700 flex flex-col h-full min-h-0 overflow-hidden flex-1">
              <WatchlistPanel onClose={closePanel} />
            </div>
          )}
          {activePanel === 'calendar' && (
            <div className="bg-[#1a1f26] border-r border-gray-700 flex flex-col h-full min-h-0 overflow-hidden flex-1">
              <EconomicCalendarPanel onClose={closePanel} />
            </div>
          )}
          {activePanel === 'settings' && (
            <div className="bg-[#1a1f26] border-r border-gray-700 flex flex-col h-full min-h-0 overflow-hidden flex-1">
              <SettingsPanel onClose={closePanel} />
            </div>
          )}
        </>
      )}
    </div>
  )
}