import './App.css'
import Navbar from './components/layout/Navbar'
import LeftSidebar from './components/layout/LeftSidebar'
import TradingTerminal from './pages/TradingTerminal'

function App() {
  return (
    <div className="h-screen flex flex-col bg-[#0f1419] overflow-hidden">
      <Navbar />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <LeftSidebar />
        <TradingTerminal />
      </div>
    </div>
  )
}

export default App
