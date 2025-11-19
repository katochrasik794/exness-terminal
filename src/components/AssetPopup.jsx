import React, { useState, useEffect } from 'react';
import { FlagIcon } from './FlagIcon';

const instrumentsData = {
  forex: [
    { id: 'EURUSD', symbol: 'EUR/USD', description: 'Euro vs US Dollar', flags: ['eur', 'usd'] },
    { id: 'GBPUSD', symbol: 'GBP/USD', description: 'Great Britain Pound vs US Dollar', flags: ['gbp', 'usd'] },
    { id: 'USDJPY', symbol: 'USD/JPY', description: 'US Dollar vs Japanese Yen', flags: ['usd', 'jpy'] }
  ],
  crypto: [
    { id: 'BTCUSD', symbol: 'BTC', description: 'Bitcoin vs US Dollar', flags: ['btc'] },
    { id: 'ETHUSD', symbol: 'ETH', description: 'Ethereum vs US Dollar', flags: ['btc'] },
    { id: 'LTCUSD', symbol: 'LTC', description: 'Litecoin vs US Dollar', flags: ['btc'] },
    { id: 'XRPUSD', symbol: 'XRP', description: 'Ripple vs US Dollar', flags: ['btc'] }
  ],
  stocks: [
    { id: 'AAPL', symbol: 'AAPL', description: 'Apple Inc.', flags: ['aapl'], marketClosed: true },
    { id: 'GOOGL', symbol: 'GOOGL', description: 'Alphabet Inc.', flags: ['aapl'], marketClosed: true },
    { id: 'MSFT', symbol: 'MSFT', description: 'Microsoft Corporation', flags: ['aapl'], marketClosed: true },
    { id: 'TSLA', symbol: 'TSLA', description: 'Tesla Inc.', flags: ['aapl'], marketClosed: true },
    { id: 'AMZN', symbol: 'AMZN', description: 'Amazon.com Inc.', flags: ['aapl'], marketClosed: true }
  ],
  commodities: [
    { id: 'XAUUSD', symbol: 'XAU/USD', description: 'Gold vs US Dollar', flags: ['xau', 'usd'] },
    { id: 'XAGUSD', symbol: 'XAG/USD', description: 'Silver vs US Dollar', flags: ['xau', 'usd'] },
    { id: 'USOIL', symbol: 'USOIL', description: 'Crude Oil', flags: ['xau'] }
  ],
  indices: [
    { id: 'USTEC', symbol: 'USTEC', description: 'US Tech 100 Index', flags: ['usd'] },
    { id: 'US500', symbol: 'US500', description: 'S&P 500 Index', flags: ['us500'] },
    { id: 'US30', symbol: 'US30', description: 'Dow Jones Industrial Average', flags: ['usd'] }
  ]
};

const categories = [
  { id: 'all', name: 'All Instruments' },
  { id: 'forex', name: 'Forex' },
  { id: 'crypto', name: 'Cryptocurrency' },
  { id: 'stocks', name: 'Stocks' },
  { id: 'commodities', name: 'Commodities' },
  { id: 'indices', name: 'Indices' }
];

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-search">
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
    <path d="M21 21l-6 -6"></path>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-down">
    <path d="M6 9l6 6l6 -6"></path>
  </svg>
);

export const AssetPopup = ({ isOpen, onClose, onAddInstrument, favorites = [], onToggleFavorite }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.asset-popup-container')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter instruments based on search and category
  const getFilteredInstruments = () => {
    let allInstruments = [];
    
    if (selectedCategory === 'all') {
      Object.values(instrumentsData).forEach(categoryInstruments => {
        allInstruments = [...allInstruments, ...categoryInstruments];
      });
    } else {
      allInstruments = instrumentsData[selectedCategory] || [];
    }

    // Filter by search term
    if (searchTerm) {
      allInstruments = allInstruments.filter(instrument =>
        instrument.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instrument.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allInstruments;
  };

  const filteredInstruments = getFilteredInstruments();

  const handleInstrumentClick = (instrument) => {
    onAddInstrument(instrument);
    onClose();
  };

  const handleToggleFavorite = (instrumentId, e) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(instrumentId);
    }
  };

  const isFavorite = (instrumentId) => favorites.includes(instrumentId);

  return (
    <div className="asset-popup-container absolute top-full left-0 mt-2 z-50 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[90vh] overflow-hidden">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add Instrument</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            ✕
          </button>
        </div>

        {/* Search Input */}
        <div className="mb-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Select */}
        <div className="mb-4 relative">
          <div 
            className="border border-gray-300 rounded-md p-2 cursor-pointer flex items-center justify-between hover:border-gray-400"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            <span>{categories.find(cat => cat.id === selectedCategory)?.name || 'All Instruments'}</span>
            <ChevronDownIcon />
          </div>
          
          {/* Category Dropdown */}
          {showCategoryDropdown && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {categories.map(category => (
                <div
                  key={category.id}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${selectedCategory === category.id ? 'bg-blue-50 text-blue-600' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowCategoryDropdown(false);
                  }}
                >
                  {category.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Instrument List */}
      <div className="max-h-80 overflow-y-auto border-t">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b border-gray-200 bg-gray-50 sticky top-0">
          <span className="font-medium text-sm">Symbol</span>
          <span className="font-medium text-sm">Description</span>
          <span></span>
        </div>

        {/* Instrument Rows */}
        {filteredInstruments.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No instruments found
          </div>
        ) : (
          filteredInstruments.map((instrument) => (
            <div
              key={instrument.id}
              className="flex items-center p-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
              data-symbol={`${instrument.id}z`}
              onClick={() => handleInstrumentClick(instrument)}
            >
              {/* Symbol */}
              <div className="flex items-center space-x-2 flex-1">
                <FlagIcon icons={instrument.flags} size={20} />
                <span className="font-medium">{instrument.symbol}</span>
              </div>

              {/* Description */}
              <span className="flex-1 text-left text-sm text-gray-600">
                {instrument.description}
              </span>

              {/* Favorite Star */}
              <div className="ml-2">
                <button
                  className="p-1 hover:bg-gray-200 rounded"
                  onClick={(e) => handleToggleFavorite(instrument.id, e)}
                >
                  {isFavorite(instrument.id) ? (
                    <span className="text-yellow-500">★</span>
                  ) : (
                    <span className="text-gray-400">☆</span>
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

