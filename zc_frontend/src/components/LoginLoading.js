import React from 'react'
import { useHistory } from 'react-router'
import styles from '../styles/LoginLoading.module.css'

const LoginLoading = () => {
  //Redirect to dashboard
  let history = useHistory()
  setTimeout(() => {
    history.push('/home')
  }, 2000)
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingHeader}>
        <img src="/zurichatlogo.svg" alt="logo" />
        <span>ZURI</span>
      </div>
      <div className={styles.loaderContainer}>
        <div className={styles.loadingCircle}></div>
        <img src="/zurichatlogo.svg" alt="logo" />
      </div>
      <div className={styles.loadingStatus}>
        <h1>Launching Zuri Chat</h1>
      </div>
      <div className={styles.loadingImage}>
        <img src="/loading-image-1.svg" alt="" />
        <img src="/loading-image-2.svg" alt="" />
        <img src="/loading-image-3.svg" alt="" />
      </div>
    </div>
  )
}

export default LoginLoading
