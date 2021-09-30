import React from 'react'
// Components
import WorkspaceHeader from './WorkspaceHeader'
import { useWorkspaceContext } from './WorkspaceContext'
import LoginLoading from '../../../components/LoginLoading'
// Styles
import styles from '../style/workspace.module.css'
import WorkspaceCard from './WorkspaceCard'
import WorkspaceFooter from './WorkspaceFooter'

const LoadingWorkspace = () => {
  const { pageLoading } = useWorkspaceContext()

  return (
    <>
      {pageLoading ? (
        <LoginLoading />
      ) : (
        <div className={`${styles.workspace}`}>
          <main className={`${styles.workspace_container}`}>
            <WorkspaceHeader />
            <article className={`${styles.workspace_wrapper}`}>
              <WorkspaceCard />
            </article>
          </main>
          <WorkspaceFooter />
        </div>
      )}
    </>
  )
}

export default LoadingWorkspace
