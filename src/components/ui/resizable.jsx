import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

function ResizablePanelGroup({ className, ...props }) {
  return (
    <PanelGroup
      className={`flex h-full w-full data-[panel-group-direction=vertical]:flex-col ${className || ''}`}
      {...props}
    />
  )
}

function ResizablePanel({ className, ...props }) {
  return <Panel className={className} {...props} />
}

function ResizableHandle({ withHandle, className, ...props }) {
  return (
    <PanelResizeHandle
      className={`relative flex w-1 items-center justify-center bg-gray-600 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 hover:bg-gray-500 transition-colors ${className || ''}`}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-gray-600 bg-gray-700">
          <PiDotsThreeOutlineVerticalFill className="h-2.5 w-2.5 text-gray-400" />
        </div>
      )}
    </PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
