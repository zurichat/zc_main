import React from 'react'

import styles from '../styles/Plans.module.css'

import { AiOutlineInfoCircle } from 'react-icons/ai'

const PlansTab = () => {
  return (
    <div className={styles.plansContainer}>
      <div className={styles.tokenAmount}>
        <span>0 &nbsp;</span>
        tokens
        <AiOutlineInfoCircle className={styles.infoIcon} />
      </div>

      <div className={styles.plansContent}>
        <h1 className={styles.plansHeader}>
          Your workspace is currently on the{' '}
          <b className={styles.bold}>Free Plan</b>
        </h1>
        <div className={styles.buttonWrapper}>
          <button className={styles.mainCta}>Subscribe to a plan</button>
        </div>

        <div className={styles.plansDetails}>
          <h5 className={styles.subHeading}>
            With a Zuri Chat paid plan, you team gets:
          </h5>

          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlansTab
