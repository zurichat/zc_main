import React from 'react'
import { Helmet } from 'react-helmet'
import AdminSettings from '..'
import WorkspaceTab from './WorkspaceTab'

const index = () => {
  return (
    <AdminSettings>
      <div>
        <Helmet>
          <title>Customize Your Workspace</title>
        </Helmet>
        <WorkspaceTab />
      </div>
    </AdminSettings>
  )
}

export default index
