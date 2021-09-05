import React from 'react'
import styles from "../../styles/Cookies.modules.css"
import hamburger from '../../assets/hamburger.png'
import {Link } from 'react-router-dom'

const Cookies = () => {
  return (
    <div className={styles.Bannercontainer}>
    <div className={styles.BannerBox}>
      <div className={styles.BannerLogo}>
        <img src={hamburger} alt="hamburger" />
<<<<<<< HEAD
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
=======
      </div>
      <div className={styles.BannerTitle}>
        <h1>OUR COOKIE POLICY</h1> 
        
      </div>
      <div className={styles.BannerText}>
        <p>We use cookies to ensure that that we give the best experience on or website. We also use cookies to ensure we show<br/> you advertisiing that si relevant to you <a href="#">manage cookie settings</a> at anytime.</p>
      </div>
      <div className={styles.BannerButtons}>
        <button
        className={styles.AllowButtons}
        >Allow all cookies</button>
        <button
        className={styles.DeclineButtons}
        >Decline</button>
>>>>>>> 73ded42640d4a4475ebaabccf25be0b2b1388ffd
      </div>
    </div>
</div>
  )
}

export default Cookies
