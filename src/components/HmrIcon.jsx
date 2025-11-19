import React, { useState } from 'react';

export const HmrIcon = ({ tooltipText = '' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="cursor-pointer">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          className="text-amber-500 fill-current"
        >
          <rect y="2" width="4" height="12"></rect>
          <rect x="6" y="2" width="4" height="12"></rect>
          <rect x="12" y="2" width="4" height="12"></rect>
        </svg>
      </div>
      
      {showTooltip && tooltipText && (
        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-gray-800 text-white text-xs rounded-lg whitespace-pre-line max-w-xs shadow-lg">
          {tooltipText}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <svg width="8" height="8" className="text-gray-800 fill-current" viewBox="0 0 8 8">
              <polygon points="0,0 8,0 4,8"></polygon>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};