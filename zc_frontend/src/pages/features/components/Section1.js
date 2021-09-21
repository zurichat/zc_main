import React from 'react'
import styles from '../styles/Section1.module.css'
import group from '../../../assets/image.png'

const Section1 = () => {
  return (
    <div className={styles.total}>
      <div className={styles.feat}>
        <h2>Zuri Chat Features</h2>
        <h3>The best platform for your team, your work and fun.</h3>
        <p>
          Connect and work with your team on Zuri Chat. With Zuri hat, you can
          do it all, work and fun. DMs, game room, channels, all in one with
          easy access.
        </p>
        <div className={styles.btn}>
          <button className={`${styles.getStarted} ${styles.button}`}>
            Get Started
          </button>
          <button className={`${styles.features} ${styles.button}`}>
            See all Features
          </button>
        </div>
      </div>
      <div className={group}>
        <img src={group} alt="group" className={styles.groupImage} />
      </div>
    </div>
  )
}

export default Section1
