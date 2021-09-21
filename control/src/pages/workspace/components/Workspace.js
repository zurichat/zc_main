import React from 'react'
// Components
import WorkspaceHeader from './WorkspaceHeader'
import { WorkspaceProvider } from './WorkspaceContext'
import { useWorkspaceContext } from './WorkspaceContext'
// Styles
import styles from '../style/workspace.module.css'
import WorkspaceCard from './WorkspaceCard'
import WorkspaceFooter from './WorkspaceFooter'
import SelectedWorkspace from './SelectedWorkspace'

const Workspace = () => {
  return (
    <WorkspaceProvider>
      <div className={`${styles.workspace}`}>
        <main className={`${styles.workspace_container}`}>
          <WorkspaceHeader />
          <article className={`${styles.workspace_wrapper}`}>
            <SelectedWorkspace />
            <WorkspaceCard />
          </article>
        </main>
        <WorkspaceFooter />
      </div>
    </WorkspaceProvider>
  )
}

export default Workspace
