import React from 'react';
import { 
  FaBitcoin, 
  FaApple,
  FaDollarSign,
  FaYenSign,
  FaEuroSign,
  FaPoundSign,
  FaCircle
} from 'react-icons/fa';

const getCurrencyIcon = (symbol) => {
  switch (symbol.toLowerCase()) {
    case 'xau':
      return <FaCircle className="text-yellow-500" />;
    case 'usd':
      return <FaDollarSign className="text-green-600" />;
    case 'jpy':
      return <FaYenSign className="text-red-500" />;
    case 'eur':
      return <FaEuroSign className="text-blue-500" />;
    case 'gbp':
      return <FaPoundSign className="text-purple-500" />;
    case 'btc':
      return <FaBitcoin className="text-orange-500" />;
    case 'aapl':
      return <FaApple className="text-gray-800" />;
    case 'us500':
      return (
        <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          SPX
        </div>
      );
    default:
      return <FaDollarSign className="text-gray-500" />;
  }
};

export const FlagIcon = ({ icons, size = 32 }) => {
  if (icons.length === 1) {
    return (
      <div className="flex items-center justify-center" style={{ width: size, height: size }}>
        <div className="relative">
          {getCurrencyIcon(icons[0])}
        </div>
      </div>
    );
  }

  // For double flags (currency pairs)
  return (
    <div className="flex items-center justify-center" style={{ width: size, height: size }}>
      <div className="relative flex space-x-1">
        {icons.map((icon, index) => (
          <div key={index} className="relative">
            {getCurrencyIcon(icon)}
          </div>
        ))}
      </div>
    </div>
  );
};