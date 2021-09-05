import React from 'react'
import styles from "../../styles/Cookies.modules.css"
import hamburger from '../../assets/hamburger.png'
import {Link } from 'react-router-dom'

const Cookies = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.first}>OUR COOKIE POLICY</h1>
      <div className={styles.content}>
        <img src={hamburger} alt="hamburger" />
        <p>
          We use cookies to ensure that we give you the best experience on our
          website. We also use cookies to ensure we show <br></br>
          you advertising that is relevant to you{' '}
          <Link href ="/cookies-settings" className={styles.second}>
           Manage cookie settings
          </Link>
         
          at anytime.
        </p>
      </div>
      <div className={styles.wrapper}>
        <button className={styles.third}>
          Allow all cookies
        </button>
        <button href="./settings" className={styles.fourth}>
          Decline
        </button>
      </div>
    </div>
  )
}

export default Cookies
