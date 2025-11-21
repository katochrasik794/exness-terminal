import { useState } from 'react'

export default function EconomicCalendarPanel() {
  const [selectedImpact, setSelectedImpact] = useState('All impacts')
  const [selectedCountry, setSelectedCountry] = useState('All countries')
  const [activeTab, setActiveTab] = useState('Actual')

  const economicEvents = [
    {
      time: '1:15 AM',
      event: 'Loan Prime Rate 1Y',
      country: 'CN',
      impact: 'medium',
      actual: '3%',
      forecast: '3%',
      previous: '3%'
    },
    {
      time: '1:15 AM',
      event: 'Loan Prime Rate 5Y',
      country: 'CN',
      impact: 'medium',
      actual: '3.5%',
      forecast: '3.5%',
      previous: '3.5%'
    },
    {
      time: '1:30 AM',
      event: 'BoJ Koeda Speech',
      country: 'JP',
      impact: 'medium',
      actual: '-',
      forecast: '-',
      previous: '-'
    },
    {
      time: '2:00 AM',
      event: 'RBA Hunter Speech',
      country: 'AU',
      impact: 'medium',
      actual: '-',
      forecast: '-',
      previous: '-'
    },
    {
      time: '3:00 AM',
      event: 'Current Account',
      country: 'DE',
      impact: 'low',
      actual: '$ 4B',
      forecast: '$ 800M',
      previous: '-$ 2.7B'
    },
    {
      time: '5:15 AM',
      event: '6-Month T-Bill Auction',
      country: 'US',
      impact: 'low',
      actual: '-',
      forecast: '-',
      previous: '-'
    }
  ]

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-orange-500'
      case 'low': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getCountryFlag = (country) => {
    const flags = {
      'CN': '🇨🇳',
      'JP': '🇯🇵',
      'AU': '🇦🇺',
      'DE': '🇩🇪',
      'US': '🇺🇸'
    }
    return flags[country] || '🏳️'
  }

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#1a1f26]">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-300 text-sm font-medium uppercase">ECONOMIC CALENDAR</h2>
          <div className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded">
            CENTRAL BANKS
          </div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Filters */}
      <div className="p-3 space-y-3 flex-shrink-0">
        <div className="relative">
          <select 
            value={selectedImpact}
            onChange={(e) => setSelectedImpact(e.target.value)}
            className="w-full bg-[#2a3441] border border-gray-600 rounded px-3 py-2 text-sm text-white appearance-none cursor-pointer"
          >
            <option>All impacts</option>
            <option>High impact</option>
            <option>Medium impact</option>
            <option>Low impact</option>
          </select>
          <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="relative">
          <select 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full bg-[#2a3441] border border-gray-600 rounded px-3 py-2 text-sm text-white appearance-none cursor-pointer"
          >
            <option>All countries</option>
            <option>United States</option>
            <option>China</option>
            <option>Japan</option>
            <option>Australia</option>
            <option>Germany</option>
          </select>
          <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 flex-shrink-0 text-gray-400 text-xs">
        {['Actual', 'Forecast', 'Previous'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 font-medium ${
              activeTab === tab 
                ? 'text-white border-b-2 border-blue-500' 
                : 'hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Load Previous Button */}
      <div className="p-3 flex-shrink-0">
        <button className="w-full bg-[#2a3441] hover:bg-[#3a4451] text-white py-2 rounded text-sm transition-colors">
          Load previous
        </button>
      </div>

      {/* Date Header */}
      <div className="px-3 py-2 bg-[#2a3441] text-white font-medium text-sm flex-shrink-0">
        November 20
      </div>

      {/* Events List */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {economicEvents.map((event, index) => (
          <div key={index} className="px-3 py-2 border-b border-gray-800 hover:bg-[#1c252f] cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-400 text-xs font-mono">{event.time}</span>
                  <span className="text-sm">{getCountryFlag(event.country)}</span>
                  <div className={`w-1 h-3 ${getImpactColor(event.impact)} rounded-full`}></div>
                </div>
                <div className="text-white text-xs mb-1">{event.event}</div>
                <div className="flex items-center gap-4 text-[10px]">
                  <span className="text-gray-400">{event.actual}</span>
                  <span className="text-gray-400">{event.forecast}</span>
                  <span className="text-gray-400">{event.previous}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white ml-2">
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}