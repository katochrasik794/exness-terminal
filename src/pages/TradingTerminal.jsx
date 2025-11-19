import LeftSidebar from '../components/LeftSidebar'
import ChartSection from '../components/ChartSection'
import OrderPanel from '../components/OrderPanel'
import BottomPanel from '../components/BottomPanel'

export default function TradingTerminal() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1">
          <ChartSection />
          <OrderPanel />
        </div>
        <BottomPanel />
      </div>
    </div>
  )
}