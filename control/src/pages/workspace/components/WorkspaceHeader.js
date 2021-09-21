import React from 'react'
import { Link } from 'react-router-dom'
import ZuriLogo from './ZuriLogo'
import styles from '../style/workspace.module.css'

const WorkspaceHeader = () => {
  return (
    <header className={`${styles.workspace_header}`}>
      <section className={`${styles.page_header}`}>
        <ZuriLogo />
        <div>
          <h1>Choose a workspace</h1>
          <p>We’ll add the workspaces you choose to your desktop app</p>
        </div>
      </section>
      <section className={`${styles.header_extra}`}>
        <p>New to zurichat?</p>
        <Link to="./signup">Create an account</Link>
      </section>
    </header>
  )
}

export default WorkspaceHeader
