import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/workspace.module.css'

const WorkspaceFooter = () => {
  return (
    <footer className={`${styles.workspace_footer}`}>
      <Link to="/login">Or login to a new workspace here</Link>
    </footer>
  )
}

export default WorkspaceFooter
