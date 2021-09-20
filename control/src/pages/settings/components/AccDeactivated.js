import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/AccountDeactivated.module.css'
import zuriLogo from '../../../component-assets/zurichatlogo.svg'

const AccDeactivated = () => {
  return (
    <div className={styles.container}>
<<<<<<< HEAD:zc_frontend/src/pages/settings/components/AccDeactivated.js
=======
      <div className={styles.nav}>
        <div className={styles.brand}>
          <img src={zuriLogo} alt="" />
          <p>ZURI</p>
        </div>
      </div>
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/settings/components/AccDeactivated.js
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
