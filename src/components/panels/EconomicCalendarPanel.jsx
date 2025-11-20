import { useState } from 'react'

export default function EconomicCalendarPanel() {
  const [selectedImpact, setSelectedImpact] = useState('All impacts')
  const [selectedCountry, setSelectedCountry] = useState('All countries')
  const [activeTab, setActiveTab] = useState('Actual')

  const economicEvents = [
    {
      time: '12:00 AM',
      event: 'Local Elections',
      country: 'NO',
      impact: 'low',
      actual: '-',
      forecast: '-',
      previous: '-'
    },
    {
      time: '12:30 AM',
      event: 'RBA Meeting Minutes',
      country: 'AU',
      impact: 'medium',
      actual: '-',
      forecast: '-',
      previous: '-'
    },
    {
      time: '12:55 AM',
      event: 'Fed Logan Speech',
      country: 'US',
      impact: 'medium',
      actual: '-',
      forecast: '-',
      previous: '-'
    },
    {
      time: '1:35 AM',
      event: '1-Year Bill Auction',
      country: 'US',
      impact: 'low',
      actual: '2.4%',
      forecast: '-',
      previous: '2.4%'
    },
    {
      time: '1:35 AM',
      event: '6-Month Bill Auction',
      country: 'US',
      impact: 'low',
      actual: '2.4%',
      forecast: '-',
      previous: '2.4%'
    },
    {
      time: '1:35 AM',
      event: '3-Month Bill Auction',
      country: 'US',
      impact: 'low',
      actual: '-',
      forecast: '-',
      previous: '-'
    },
    {
      time: '2:00 AM',
      event: 'GDP Growth Rate',
      country: 'US',
      impact: 'high',
      actual: '2.8%',
      forecast: '2.5%',
      previous: '2.4%'
    },
    {
      time: '2:30 AM',
      event: 'Unemployment Rate',
      country: 'US',
      impact: 'high',
      actual: '4.1%',
      forecast: '4.2%',
      previous: '4.1%'
    },
    {
      time: '3:00 AM',
      event: 'Consumer Price Index',
      country: 'US',
      impact: 'high',
      actual: '2.6%',
      forecast: '2.4%',
      previous: '2.4%'
    },
    {
      time: '3:30 AM',
      event: 'Retail Sales',
      country: 'US',
      impact: 'medium',
      actual: '0.4%',
      forecast: '0.3%',
      previous: '0.4%'
    },
    {
      time: '4:00 AM',
      event: 'Industrial Production',
      country: 'US',
      impact: 'medium',
      actual: '0.3%',
      forecast: '0.2%',
      previous: '0.1%'
    },
    {
      time: '4:30 AM',
      event: 'Housing Starts',
      country: 'US',
      impact: 'low',
      actual: '1.31M',
      forecast: '1.33M',
      previous: '1.35M'
    },
    {
      time: '5:00 AM',
      event: 'Building Permits',
      country: 'US',
      impact: 'low',
      actual: '1.42M',
      forecast: '1.44M',
      previous: '1.43M'
    },
    {
      time: '5:30 AM',
      event: 'Durable Goods Orders',
      country: 'US',
      impact: 'medium',
      actual: '0.2%',
      forecast: '0.5%',
      previous: '0.8%'
    },
    {
      time: '6:00 AM',
      event: 'Personal Income',
      country: 'US',
      impact: 'medium',
      actual: '0.6%',
      forecast: '0.4%',
      previous: '0.3%'
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
      'NO': '🇳🇴',
      'AU': '🇦🇺',
      'US': '🇺🇸'
    }
    return flags[country] || '🏳️'
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-white font-medium">ECONOMIC CALENDAR</h2>
            <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              CENTRAL BANKS
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
        
        {/* Filters */}
        <div className="space-y-2">
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
              <option>Australia</option>
              <option>Norway</option>
            </select>
            <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 flex-shrink-0">
        {['Actual', 'Forecast', 'Previous'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-medium ${
              activeTab === tab 
                ? 'text-white border-b-2 border-blue-500' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Load Previous Button */}
      <div className="p-4 flex-shrink-0">
        <button className="w-full bg-[#2a3441] hover:bg-[#3a4451] text-white py-2 rounded text-sm transition-colors">
          Load previous
        </button>
      </div>

      {/* Date Header */}
      <div className="px-4 py-2 bg-[#2a3441] text-white font-medium text-sm flex-shrink-0">
        November 18
      </div>

      {/* Events List */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {economicEvents.map((event, index) => (
          <div key={index} className="px-4 py-3 border-b border-gray-800 hover:bg-[#1c252f]">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">{event.time}</span>
                <span className="text-lg">{getCountryFlag(event.country)}</span>
                <div className={`w-1 h-3 ${getImpactColor(event.impact)}`}></div>
              </div>
              <div className="text-white text-xs">{event.actual}</div>
            </div>
            <div className="text-white text-sm">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  )
}