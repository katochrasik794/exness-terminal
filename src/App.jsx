import './App.css'
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import TradingTerminal from './pages/TradingTerminal'

function App() {
  return (
    <div className="h-screen flex flex-col bg-[#0f1419]">
      <Navbar />
      <div className="flex flex-1">
        <LeftSidebar />
        <TradingTerminal />
      </div>
    </div>
  )
}

export default App
