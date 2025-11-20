import { useState } from 'react'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('XAU/USD')

  const tabs = [
    { id: '1', symbol: 'XAU/USD', hasHMR: true, isActive: true },
    { id: '2', symbol: 'US500', hasHMR: false, isActive: false },
    { id: '3', symbol: 'BTC', hasHMR: false, isActive: false },
    { id: '4', symbol: 'USD/JPY', hasHMR: true, isActive: false }
  ]

  const handleTabClick = (symbol) => {
    setActiveTab(symbol)
  }

  const handleCloseTab = (e, id) => {
    e.stopPropagation()
    // Close tab logic
  }

  return (
    <header className="bg-[#1a1f26] border-b border-gray-700 flex-shrink-0">
      <nav className="flex items-center h-16">
        {/* Logo */}
        <div className="px-4">
          <div>
            <div className="text-yellow-400 font-bold text-lg">exness</div>
          </div>
        </div>

        {/* Instrument Tabs */}
        <div className="flex-1">
          <div className="flex items-center h-16">
            <div className="flex items-center h-16">
              <div className="flex">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`flex items-center px-6 py-4 cursor-pointer relative ${
                      activeTab === tab.symbol 
                        ? 'bg-[#0f1419] text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => handleTabClick(tab.symbol)}
                    data-test="instrument-tab"
                    role="button"
                    tabIndex="0"
                  >
                    <div className="flex items-center gap-3">
                      {/* Flag Icon */}
                      <div className="w-8 h-8 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                      </div>
                      
                      {/* Symbol */}
                      <div className="text-sm font-medium" data-test="instrument-tab-symbol">
                        {tab.symbol}
                      </div>
                      
                      {/* HMR Icon */}
                      {tab.hasHMR && (
                        <div className="text-orange-400" data-test="instrument-tab-hmr">
                          <div title="9:45 AM - 10:01 AM Period of High Margin Requirements Max leverage 1:200">
                            <svg width="16" height="16" className="fill-current">
                              <rect y="2" width="4" height="12"></rect>
                              <rect x="6" y="2" width="4" height="12"></rect>
                              <rect x="12" y="2" width="4" height="12"></rect>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Close Button */}
                    <button
                      className="ml-3 opacity-0 hover:opacity-100 transition-opacity"
                      data-test="instrument-tab-close"
                      type="button"
                      onClick={(e) => handleCloseTab(e, tab.id)}
                    >
                      <svg width="16" height="16" className="text-gray-400">
                        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Add Tab Button */}
              <div>
                <button 
                  className="px-4 py-4 text-gray-400 hover:text-white"
                  data-test="add-tab-button"
                  type="button"
                >
                  <svg width="24" height="24">
                    <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 px-4">
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
                        Demo
                      </span>
                    </span>
                    <span 
                      className="text-gray-300 text-xs"
                      data-test="account-info-identifier"
                    >
                      Zero
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="flex items-center">
                      <div>
                        <span className="text-white font-bold">1,022.21</span>
                      </div>
                      <div>
                        <span 
                          className="text-gray-300 text-sm ml-1"
                          data-test="account-info-currency"
                        >
                          USD
                        </span>
                      </div>
                    </span>
                    <svg width="16" height="16" className="text-gray-400">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Alert Button */}
          <div data-test="alerts-header-button">
            <button 
              className="p-3 text-gray-400 hover:text-white"
              type="button"
            >
              <svg width="24" height="24">
                <path d="M6 2v6h.01M6 18H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Apps Button */}
          <div data-test="apps-header-button">
            <button 
              className="p-3 text-gray-400 hover:text-white"
              type="button"
            >
              <svg width="24" height="24">
                <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* User Button */}
          <div data-test="apps-menu-button">
            <button 
              className="p-3 text-gray-400 hover:text-white"
              type="button"
            >
              <svg width="24" height="24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* Deposit Button */}
          <div>
            <button 
              className="px-4 py-2 border border-gray-600 text-white hover:bg-gray-700 rounded"
              data-test="deposit-button"
              type="button"
            >
              Deposit
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}