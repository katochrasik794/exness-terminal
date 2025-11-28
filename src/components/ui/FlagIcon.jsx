import React from 'react'

// Flag Icon Component - realistic flag representations
export default function FlagIcon({ type, className = "" }) {
  const baseClass = `relative w-full h-full ${className}`

  switch (type) {
    case 'xauusd':
      return (
        <div className={baseClass}>
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-yellow-400 border border-yellow-300 z-10 flex items-center justify-center">
            <div className="w-[50%] h-[50%] bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-full bg-blue-600 border border-blue-500 z-20 flex items-center justify-center">
            <div className="w-[40%] h-[40%] bg-blue-700 rounded-full"></div>
          </div>
        </div>
      )
    case 'eurusd':
      return (
        <div className={baseClass}>
           {/* EU Flag (left/top) */}
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-blue-700 border border-blue-600 z-10 flex items-center justify-center text-[6px] text-yellow-400">
            ★
          </div>
          {/* US Flag (right/bottom) */}
          <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-full bg-red-600 border border-red-500 z-20 overflow-hidden">
             <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0,transparent_1px,#fff_1px,#fff_2px)]"></div>
             <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-800"></div>
          </div>
        </div>
      )
    case 'gbpusd':
      return (
        <div className={baseClass}>
           {/* UK Flag (left/top) */}
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-blue-800 border border-blue-700 z-10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[20%] bg-white absolute rotate-45"></div>
                <div className="w-full h-[20%] bg-white absolute -rotate-45"></div>
                <div className="w-[20%] h-full bg-white absolute"></div>
                <div className="w-full h-[20%] bg-white absolute"></div>
                <div className="w-[10%] h-full bg-red-600 absolute"></div>
                <div className="w-full h-[10%] bg-red-600 absolute"></div>
            </div>
          </div>
          {/* US Flag (right/bottom) */}
          <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-full bg-red-600 border border-red-500 z-20 overflow-hidden">
             <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0,transparent_1px,#fff_1px,#fff_2px)]"></div>
             <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-800"></div>
          </div>
        </div>
      )
    case 'usdjpy':
      return (
        <div className={baseClass}>
          {/* US Flag (left) */}
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-blue-900 border border-blue-800 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#dc2626_0,#dc2626_1px,#ffffff_1px,#ffffff_2.5px)]"></div>
            <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-blue-700 rounded-tl-full"></div>
          </div>
          {/* JPY Flag (right) */}
          <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-full bg-white border border-gray-300 z-20 flex items-center justify-center">
            <div className="w-[40%] h-[40%] bg-red-600 rounded-full"></div>
          </div>
        </div>
      )
    case 'us500':
      return (
        <div className={`${baseClass} rounded-full overflow-hidden border border-gray-600`}>
           <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#dc2626_0,#dc2626_2px,#ffffff_2px,#ffffff_4px)]"></div>
           <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-800 flex items-center justify-center">
             <div className="text-[4px] text-white">★</div>
           </div>
        </div>
      )
    case 'btc':
      return (
        <div className={`${baseClass} rounded-full bg-[#f7931a] flex items-center justify-center text-white font-bold text-[10px]`}>
          ₿
        </div>
      )
    case 'aapl':
      return (
        <div className={`${baseClass} flex items-center justify-center text-gray-300`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.66-1.6 3.05-2.47 3.05-2.47s.34 2.29-1.5 4.43c-.61.74-1.59 1.37-2.5 1.37-.23 0-2.48-.18-1.53-4.43z" />
          </svg>
        </div>
      )
    case 'ustec':
       return (
        <div className={`${baseClass} rounded-full overflow-hidden border border-gray-600`}>
           <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#dc2626_0,#dc2626_2px,#ffffff_2px,#ffffff_4px)]"></div>
           <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-800 flex items-center justify-center">
             <div className="text-[4px] text-white">★</div>
           </div>
        </div>
      )
    case 'usoil':
      return (
        <div className={`${baseClass} flex items-center justify-center text-white`}>
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
             <path d="M12 2C12 2 5 11 5 16C5 19.866 8.13401 23 12 23C15.866 23 19 19.866 19 16C19 11 12 2 12 2Z" />
           </svg>
        </div>
      )
    default:
      return <div className={`${baseClass} bg-gray-600 rounded-full border border-gray-500`}></div>
  }
}

