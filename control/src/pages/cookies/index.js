import React from 'react'
import styles from './styles/Cookie.module.css'
import hamburger from '../../component-assets/hamburger.png'
import { Link } from 'react-router-dom'

const Cookies = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBox}>
        <div className={styles.bannerLogo}>
          <img className={`mx-auto`} src={hamburger} alt="hamburger" />
          <div className={styles.bannerTitle}>
            <h1>OUR COOKIE POLICY</h1>
          </div>
          <div className={styles.bannerText}>
            <p>
              We use cookies to ensure that we give the best experience on our
              website. By clicking "Allow", you agree Zuri Chat can store
              cookies on your device.{' '}
              <Link to="/cookies-settings">manage cookie settings </Link>
              at anytime.
            </p>
          </div>
        </div>
        <div className={styles.bannerButtons}>
          <button
            className={`${styles.allowButton} ${styles.button}`}
            onClick={handleClickAllow}
          >
            Allow
          </button>
          <button className={`${styles.settingsButton} ${styles.button}`}>
            <Link to="/cookies-settings"> Settings </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

const handleClickAllow = event => {
  sessionStorage.setItem('cookies-allow', 'true')
  event.target.parentNode.parentNode.parentNode.style.display = 'none'
}

export default Cookies
