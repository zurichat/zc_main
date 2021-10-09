import React from 'react'
import LoadingWorkspace from './LoadingWorkspace'
import { WorkspaceProvider } from './WorkspaceContext'
import { Helmet } from 'react-helmet'

const Workspace = () => {
  return (
    <WorkspaceProvider>
      <Helmet>
        <title>Workspace - Zuri Chat</title>
      </Helmet>
      <LoadingWorkspace />
    </WorkspaceProvider>
  )
}

export default Workspace
