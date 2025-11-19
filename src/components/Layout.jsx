import { useState } from 'react'

export default function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false)
  const [bottomPanelCollapsed, setBottomPanelCollapsed] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-[#0f1419] text-white">
      {children}
    </div>
  )
}