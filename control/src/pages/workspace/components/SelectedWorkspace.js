import React from 'react'
import { useWorkspaceContext } from './WorkspaceContext'
import styles from '../style/workspace.module.css'
import { useHistory } from 'react-router-dom'

const SelectedWorkspace = () => {
  const { organizations } = useWorkspaceContext()

  const numSelectedWorkspace = organizations.filter(org => org.selected)

  const numberOfSelected =
    numSelectedWorkspace.length > 0 ? numSelectedWorkspace.length : 'None'
  const history = useHistory()

  const handleNextPage = () => {
    if (!numSelectedWorkspace.length) {
      return
    } else {
      history.push('/home')
    }
  }

  return (
    <div className={`${styles.workspace_section_intro}`}>
      <p>{numberOfSelected} selected</p>
      <button
        style={{
          background: `${
            !numSelectedWorkspace.length ? '#00b87c79' : '#00B87C'
          }`,
          borderColor: `${
            !numSelectedWorkspace.length ? '#00b87c79' : '#00B87C'
          }`
        }}
        type="button"
        className={`${styles.workspace_btn}`}
        onClick={handleNextPage}
      >
        Open &nbsp; &nbsp;
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
    </div>
  )
}

export default SelectedWorkspace
