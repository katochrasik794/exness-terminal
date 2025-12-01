import { useState, useEffect } from 'react'
import WatchlistPanel from '../panels/WatchlistPanel'
import EconomicCalendarPanel from '../panels/EconomicCalendarPanel'
import SettingsPanel from '../panels/SettingsPanel'
import ResizablePanel from '../panels/ResizablePanel'
import { LuList, LuCalendar, LuSettings } from 'react-icons/lu'

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
    <div className={`flex h-full overflow-hidden min-h-0 bg-[#141d22] ${!hasActivePanel ? 'border-r-4 border-gray-600' : ''}`}>
      <aside className={`w-[48px] flex flex-col items-center py-3 gap-4 flex-shrink-0 h-full ${hasActivePanel ? 'border-r-4 border-gray-600' : 'pr-4'}`}>
        {/* Instruments Button */}
        <div>
          <button 
            className={`cursor-pointer w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-md transition-all duration-200 ${
              activePanel === 'instruments' ? 'bg-gray-800 border-2 border-gray-400 text-white' : 'hover:bg-gray-800 hover:border-2 hover:border-gray-400 border-2 border-transparent'
            }`}
            type="button"
            data-test="aside-panel-watchlist-button"
            aria-label="Instruments"
            onClick={() => togglePanel('instruments')}
          >
            <LuList size={16} className={activePanel === 'instruments' ? 'text-white' : 'text-gray-300'} />
          </button>
        </div>

        {/* Economic Calendar Button */}
        <div>
          <button 
            className={`cursor-pointer w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-md transition-all duration-200 ${
              activePanel === 'calendar' ? 'bg-gray-800 border-2 border-gray-400 text-white' : 'hover:bg-gray-800 hover:border-2 hover:border-gray-400 border-2 border-transparent'
            }`}
            type="button"
            data-test="aside-panel-calendar-events-button"
            aria-label="Economic calendar"
            onClick={() => togglePanel('calendar')}
          >
            <LuCalendar size={16} className={activePanel === 'calendar' ? 'text-white' : 'text-gray-300'} />
          </button>
        </div>

        {/* Settings Button */}
        <div>
          <button 
            className={`cursor-pointer w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-md transition-all duration-200 ${
              activePanel === 'settings' ? 'bg-gray-800 border-2 border-gray-400 text-white' : 'hover:bg-gray-800 hover:border-2 hover:border-gray-400 border-2 border-transparent'
            }`}
            type="button"
            data-test="aside-panel-settings-button"
            aria-label="Settings"
            onClick={() => togglePanel('settings')}
          >
            <LuSettings size={16} className={activePanel === 'settings' ? 'text-white' : 'text-gray-300'} />
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
