import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from '../../styles/Signout.module.css'
import logo from '../images/zuri.svg'

const Signout = () => {
  return (
    <main id={styles.signout}>
      <div className={styles.logo}>
        <img src={logo} alt="zuri" />
      </div>
      <div className={styles.write}>
        <div className={styles.wrapper}>
          <h1 className={styles.firstText}>
            Signed out of Team Einstein Workspace
          </h1>
          <h5 className={styles.secondText}>
            You have been signed out of Team Einstein Workspace
          </h5>
          <a href="/login" className={styles.button}>
            Sign in
          </a>
          <h6 className={styles.displaySmall}>
            Or <a href="/login">sign into</a> another workspace
          </h6>
        </div>
      </div>
    </main>
  )
}

export default withRouter(Signout)
