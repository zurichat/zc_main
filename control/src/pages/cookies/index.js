import React from 'react'
import styles from './styles/Cookie.module.css'
import cookie from '../../component-assets/cookie.svg'
import { Link } from 'react-router-dom'

const cookieStorage = {
  getItem: key => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key.trim()]: value
        }),
        {}
      )
    return cookies[key]
  },
  setItem: (key, value, age) => {
    document.cookie = `${key}=${value}; max-age=${age}`
  }
}

const handleClickAllow = event => {
  cookieStorage.setItem('Zuri Chat Accept', 'true', '2592000')
  event.target.parentNode.parentNode.parentNode.parentNode.style.opacity = '0'
}
const handleClickDecline = event => {
  cookieStorage.setItem('Zuri Chat Decline', 'true')
  event.target.parentNode.parentNode.parentNode.parentNode.style.opacity = '0'
}

const Cookies = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={cookie} alt="cookies" title="cookies" />
      <div className={styles.cookie_body}>
        <span>
          We use third-party{' '}
          <Link to="/cookies-settings" className={styles.cookie}>
            cookies
          </Link>{' '}
          in order to personalize your site experience.
        </span>
        <ul className={styles.buttons}>
          <li>
            <button onClick={handleClickAllow} className={styles.allow}>
              Allow
            </button>
          </li>
          <li>
            <button onClick={handleClickDecline} className={styles.decline}>
              Decline
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cookies
