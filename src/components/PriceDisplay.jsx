export default function PriceDisplay({ price, change, size = 'md' }) {
  const isPositive = change && (change.startsWith('+') || parseFloat(change) > 0)
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  return (
    <div className="flex flex-col">
      <span className={`text-white font-medium ${sizeClasses[size]}`}>
        {price}
      </span>
      {change && (
        <span className={`text-xs ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
      )}
    </div>
  )
}