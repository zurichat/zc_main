import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/LandingPage.module.css'
import landing_waving_hand from '../assets/landingPage-images/landing_waving_hand.png'
import landing_zuri_logo from '../assets/landingPage-images/landing_zuri_logo.png'
import landing_flower_left from '../assets/landingPage-images/landing_flower_left.png'
import landing_team from '../assets/landingPage-images/landing_team.png'
import landing_flower_right from '../assets/landingPage-images/landing_flower_right.png'
// Button Component
const ContinueButton = () => {
  return (
    <Link className={styles.btn__continue} to="/home" replace={true}>
      Continue
    </Link>
  )
}
// LandingPage Component
const LandingPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.welcome__div}>
        <h1>
          <span>
            Hi
            <img src={landing_waving_hand} alt="waving hand" /> ,
          </span>
          <span> Welcome to</span>
        </h1>
        <img src={landing_zuri_logo} alt="zuri chat logo" />
        <ContinueButton />
      </div>
      <div className={styles.welcome__div}>
        <h1>
          <span>
            Hi
            <img src={landing_waving_hand} alt="waving hand" /> ,
          </span>
          <span> Welcome to</span>
        </h1>
        <img src={landing_zuri_logo} alt="zuri chat logo" />
        <ContinueButton />
      </div>

      <div className={styles.img__div}>
        <img
          src={landing_flower_left}
          className={styles.display_none}
          alt="flower pot right"
        />
        <img src={landing_team} alt="zuri team" />
        <img
          src={landing_flower_right}
          className={styles.display_none}
          alt="flower pot right"
        />
      </div>
    </section>
  )
}

export default LandingPage
