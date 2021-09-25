import React from 'react'
import LoadingWorkspace from './LoadingWorkspace'
import { WorkspaceProvider } from './WorkspaceContext'

const Workspace = () => {
  return (
    <WorkspaceProvider>
      <LoadingWorkspace />
    </WorkspaceProvider>
  )
}

export default Workspace
