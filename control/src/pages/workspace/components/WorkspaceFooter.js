import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/workspace.module.css'

const WorkspaceFooter = () => {
  return (
    <footer className={`${styles.workspace_footer}`}>
      <p>Not seeing your workspace?</p>
      <Link to="/login">Try a different email</Link>
    </footer>
  )
}

export default WorkspaceFooter
