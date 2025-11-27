import React from 'react'

// Flag Icon Component - realistic flag representations
export default function FlagIcon({ type }) {
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
