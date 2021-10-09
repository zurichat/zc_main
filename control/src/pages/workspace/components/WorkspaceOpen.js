import React from 'react'
import styles from '../style/workspace.module.css'
import { useWorkspaceContext } from './WorkspaceContext'

const WorkspaceOpen = ({ workspaceID }) => {
  const { redirectPage } = useWorkspaceContext()

  const handleNextPage = id => {
    localStorage.setItem('currentWorkspace', id)
    redirectPage()
  }

  return (
    <button
      type="button"
      className={`${styles.workspace_btn}`}
      onClick={() => handleNextPage(workspaceID)}
    >
      <p>Open</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="17"
        height="16"
        viewBox="0 0 17 16"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M3.2 8h10.6M9.8 
        4l4 4-4 4"
        />
      </svg>
    </button>
  )
}

//b7

export default WorkspaceOpen
