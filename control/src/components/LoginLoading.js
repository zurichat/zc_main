import React from 'react'
import styles from '../component-styles/LoginLoading.module.css'

const LoginLoading = () => {
  //Redirect to dashboard
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loaderContainer}>
        <svg
          width="121"
          height="122"
          viewBox="0 0 121 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={styles.topLeft}
            x="21.127"
            width="46.0952"
            height="46.0952"
            rx="1.0991"
            fill="#00B87C"
          />
          <rect
            className={styles.bottomLeft}
            y="53.7773"
            width="46.0952"
            height="46.0952"
            rx="1.0991"
            fill="#FEA162"
          />
          <rect
            className={styles.topRight}
            x="74.9043"
            y="21.1289"
            width="46.0952"
            height="46.0952"
            rx="1.0991"
            fill="#1A61DB"
          />
          <rect
            className={styles.bottomRight}
            x="53.7773"
            y="74.9062"
            width="48.0994"
            height="46.0952"
            rx="1.0991"
            fill="#DC1AA3"
          />
        </svg>
        <div className={styles.loadingStatus}>
          <h1>Launching Zuri Chat...</h1>
        </div>
      </div>
      {/* <div className={styles.loadingImage}>
        <img src="/loading-image-1-new.png" alt="" />
        <img src="/loading-image-2-new.svg" alt="" />
        <img src="/loading-image-3-new.png" alt="" />
      </div> */}
    </div>
  )
}

export default LoginLoading
