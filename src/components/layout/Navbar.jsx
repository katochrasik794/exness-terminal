import React, { useState } from 'react'
import { 
  FiBell, 
  FiGrid, 
  FiUser, 
  FiX, 
  FiPlus, 
  FiChevronDown,
  FiDollarSign
} from 'react-icons/fi'

// Flag Icon Component - realistic flag representations
function FlagIcon({ type }) {
  switch (type) {
    case 'xauusd':
      return (
        <div className="relative w-8 h-8">
          <div className="absolute top-0 left-0 w-5.5 h-5.5 rounded-full bg-yellow-400 border-2 border-yellow-300 z-10 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-5.5 h-5.5 rounded-full bg-blue-600 border-2 border-blue-500 z-20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-blue-700 rounded-full"></div>
          </div>
        </div>
      )
    case 'us500':
      return (
        <div className="w-8 h-8 rounded-full bg-blue-900 border-2 border-blue-800 overflow-hidden relative">
          {/* US Flag pattern */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#dc2626_0,#dc2626_1px,#ffffff_1px,#ffffff_3px)]"></div>
          <div className="absolute top-0 left-0 w-3 h-3 bg-blue-700">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0deg_25%,#1e40af_25deg_50%,#1e3a8a_50deg_75%,#1e40af_75deg_100%)]"></div>
          </div>
        </div>
      )
    case 'btc':
      return (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-orange-500 flex items-center justify-center text-white font-bold text-xs">
          ₿
        </div>
      )
    case 'usdjpy':
      return (
        <div className="relative w-8 h-8">
          {/* US Flag (left) */}
          <div className="absolute top-0 left-0 w-5.5 h-5.5 rounded-full bg-blue-900 border-2 border-blue-800 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#dc2626_0,#dc2626_1px,#ffffff_1px,#ffffff_2.5px)]"></div>
            <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-blue-700 rounded-tl-full"></div>
          </div>
          {/* JPY Flag (right) */}
          <div className="absolute bottom-0 right-0 w-5.5 h-5.5 rounded-full bg-white border-2 border-gray-300 z-20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
          </div>
        </div>
      )
    default:
      return <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-500"></div>
  }
}

// Individual Tab Component
function InstrumentTab({ tab, isActive, onClick, onClose }) {
  return (
    <div
      className={`relative px-6 py-4 cursor-pointer group ${
        isActive 
          ? 'bg-[#0f1419] text-white' 
          : 'text-gray-300 hover:text-white'
      }`}
      onClick={() => onClick(tab.id)}
      data-test="instrument-tab"
      role="button"
      tabIndex="0"
    >
      {/* Close button in upper right corner */}
      <button
        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded text-gray-400 hover:text-white hover:bg-gray-600 z-10"
        data-test="instrument-tab-close"
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onClose(tab.id)
        }}
      >
        <FiX size={14} className="stroke-current fill-none" />
      </button>
      
      {/* Tab content */}
      <div className="flex items-center gap-3">
        <FlagIcon type={tab.flagType} />
        <div className="text-sm font-medium" data-test="instrument-tab-symbol">
          {tab.symbol}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [tabs, setTabs] = useState([
    { id: '1', symbol: 'XAU/USD', flagType: 'xauusd', isActive: true },
    { id: '2', symbol: 'US500', flagType: 'us500', isActive: false },
    { id: '3', symbol: 'BTC', flagType: 'btc', isActive: false },
    { id: '4', symbol: 'USD/JPY', flagType: 'usdjpy', isActive: false }
  ])

  const [balance] = useState('997.67')
  const [accountInfo] = useState({
    type: 'Demo',
    identifier: 'Zero',
    currency: 'USD'
  })

  const handleTabClick = (tabId) => {
    setTabs(prevTabs => 
      prevTabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    )
  }

  const handleCloseTab = (tabId) => {
    const tabIndex = tabs.findIndex(tab => tab.id === tabId)
    const isActiveTab = tabs[tabIndex]?.isActive
    
    const newTabs = tabs.filter(tab => tab.id !== tabId)
    
    // If we closed the active tab, make the first remaining tab active
    if (isActiveTab && newTabs.length > 0) {
      newTabs[0].isActive = true
    }
    
    setTabs(newTabs)
  }

  const handleAddTab = () => {
    const newId = Date.now().toString()
    const newTab = {
      id: newId,
      symbol: 'NEW',
      flagType: 'btc',
      isActive: true
    }
    
    setTabs(prevTabs => 
      prevTabs.map(tab => ({ ...tab, isActive: false })).concat([newTab])
    )
  }

  return (
    <nav className="bg-[#1a1f26] border-b border-gray-700 flex-shrink-0">
      <div className="flex items-center h-16">
        {/* Logo */}
        <div className="px-4">
          <div className='flex items-center'>
            <div className="text-yellow-300 font-semi-bold text-4xl">exness</div>
          </div>
        </div>

        {/* Instrument Tabs */}
        <div className="flex-1">
          <div className="flex items-center h-16">
            <div className="flex items-center h-16">
              <div className="flex">
                {tabs.map((tab) => (
                  <InstrumentTab
                    key={tab.id}
                    tab={tab}
                    isActive={tab.isActive}
                    onClick={handleTabClick}
                    onClose={handleCloseTab}
                  />
                ))}
              </div>
              
              {/* Add Tab Button */}
              <div>
                <button 
                  className="px-3 py-4 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors mx-1"
                  data-test="add-tab-button"
                  type="button"
                  onClick={handleAddTab}
                  title="Add New Instrument"
                >
                  <FiPlus size={18} className="stroke-current fill-none" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 px-4">
          {/* Account Button */}
          <div>
            <button 
              className="flex items-center px-3 py-2 hover:bg-gray-700 rounded"
              data-test="account-button-83067517"
              type="button"
            >
              <div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block">
                      <span 
                        className="px-2 py-1 bg-green-600 text-green-100 text-xs rounded"
                        data-test="account-info-trading-mode"
                      >
                        {accountInfo.type}
                      </span>
                    </span>
                    <span 
                      className="text-gray-300 text-xs"
                      data-test="account-info-identifier"
                    >
                      {accountInfo.identifier}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="flex items-center">
                      <div>
                        <span className="text-white font-bold">{balance}</span>
                      </div>
                      <div>
                        <span 
                          className="text-gray-300 text-sm ml-1"
                          data-test="account-info-currency"
                        >
                          {accountInfo.currency}
                        </span>
                      </div>
                    </span>
                    <FiChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Alert Button */}
          <div data-test="alerts-header-button">
            <button 
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              type="button"
              title="Alerts"
            >
              <FiBell size={20} />
            </button>
          </div>

          <div className="mx-1"></div>

          {/* Apps Button */}
          <div data-test="apps-header-button">
            <button 
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              type="button"
              title="Applications"
            >
              <FiGrid size={20} />
            </button>
          </div>

          <div className=" mx-1"></div>

          {/* User Button */}
          <div data-test="apps-menu-button">
            <button 
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              type="button"
              title="Account Menu"
            >
              <FiUser size={20} />
            </button>
          </div>

          {/* Deposit Button */}
          <div>
            <button 
              className="flex items-center gap-2 px-8 py-2 border border-gray-600 text-white hover:bg-gray-700 rounded transition-colors"
              data-test="deposit-button"
              type="button"
            >
              {/* <FiDollarSign size={16} /> */}
              Deposit
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}