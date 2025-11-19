export default function TradingButton({ 
  type = 'buy', 
  price, 
  percentage, 
  onClick, 
  disabled = false,
  size = 'md' 
}) {
  const baseClasses = 'rounded text-center font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
  
  const typeClasses = {
    buy: 'bg-blue-600 hover:bg-blue-700 text-white',
    sell: 'bg-red-600 hover:bg-red-700 text-white'
  }
  
  const sizeClasses = {
    sm: 'py-2 px-4',
    md: 'py-4 px-6',
    lg: 'py-6 px-8'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${typeClasses[type]} ${sizeClasses[size]}`}
    >
      <div className="text-lg font-bold capitalize">{type}</div>
      {price && <div className="text-2xl font-bold">{price}</div>}
      {percentage && <div className="text-sm opacity-75">{percentage}%</div>}
    </button>
  )
}