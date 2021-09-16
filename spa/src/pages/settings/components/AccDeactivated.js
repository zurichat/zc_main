import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/AccountDeactivated.module.css'

const AccDeactivated = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.brand}>
          <img src="zurichatlogo.svg" alt="" />
          <p>ZURI</p>
        </div>
      </div>
      <div className={styles.content}>
        <h2>Account Deactivated</h2>
        <p>
          Your account has been deactivated. You can close this page or{' '}
          <Link to="/login" className={styles.login}>
            log in
          </Link>{' '}
          to another workspace
        </p>
        <p className={styles.greeting}>Thank you for using Zurichat!</p>
      </div>
    </div>
  )
}

export default AccDeactivated
