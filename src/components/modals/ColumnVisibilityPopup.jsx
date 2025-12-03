import React from 'react';
import ReactDOM from 'react-dom';

const ColumnVisibilityPopup = ({ isOpen, onClose, visibleColumns, toggleColumn, anchorRef }) => {
  if (!isOpen) return null;

  const columns = [
    { id: 'type', label: 'Type' },
    { id: 'volume', label: 'Volume' },
    { id: 'openPrice', label: 'Open price' },
    { id: 'currentPrice', label: 'Current price' },
    { id: 'tp', label: 'Take profit' },
    { id: 'sl', label: 'Stop loss' },
    { id: 'ticket', label: 'Order / Position ID' },
    { id: 'openTime', label: 'Open time' },
    { id: 'swap', label: 'Swap' },
    { id: 'commission', label: 'Commission' },
    { id: 'marketCloses', label: 'Market closes in' },
  ];

  // Calculate position based on anchor
  const style = {};
  if (anchorRef?.current) {
    const rect = anchorRef.current.getBoundingClientRect();
    style.bottom = `${window.innerHeight - rect.top + 8}px`;
    style.right = `${window.innerWidth - rect.right}px`;
  } else {
    style.top = '50%';
    style.left = '50%';
    style.transform = 'translate(-50%, -50%)';
  }

  return ReactDOM.createPortal(
    <>
      <div 
        className="fixed inset-0 z-[9998]" 
        onClick={onClose}
      />
      <div 
        className="fixed z-[9999] bg-[#2c3438] rounded-lg shadow-2xl w-[280px] overflow-hidden text-[#e1e1e1] font-sans text-[14px]"
        style={style}
      >
        <div className="px-4 py-3 border-b border-[#2a3038] flex justify-between items-center">
          <span className="font-medium text-[#8b9096] text-[12px] uppercase tracking-wide">Columns</span>
          <div className="flex gap-3">
             <button className="text-[#8b9096] hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </button>
             <button className="text-[#8b9096] hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
             </button>
          </div>
        </div>
        <div className="py-2 max-h-[400px] overflow-y-auto">
          {columns.map((col) => (
            <div key={col.id} className="flex items-center justify-between px-4 py-2 hover:bg-[#363c45] transition-colors group">
              <div className="flex items-center gap-3">
                <div className="text-[#585c63] cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM8 18a2 2 0 11-4 0 2 2 0 014 0zM16 6a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 11-4 0 2 2 0 014 0zM16 18a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span>{col.label}</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={visibleColumns[col.id]}
                  onChange={() => toggleColumn(col.id)}
                />
                <div className="w-9 h-5 bg-[#585c63] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0099ff]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>,
    document.body
  );
};

export default ColumnVisibilityPopup;
