import React from 'react'

import styles from '../styles/adminOverview.module.css'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FiCheck } from 'react-icons/fi'

const OverviewTab = () => {
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
          <h6 className={styles.subHeading}>
            With a Zuri Chat paid plan, you team gets:
          </h6>

          <ul className={styles.planList}>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited message archive
            </li>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited number of apps
            </li>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited number of plugins
            </li>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited number of songs and game time
            </li>
            <li className={styles.listItemGreen}>See all top features</li>
          </ul>
          <p className={styles.getToken}>
            Don’t have enough tokens?{' '}
            <span className={styles.cta}>Buy now</span>
          </p>
        </div>
      </div>

      <div className={styles.planCta}>
        <div className={styles.info}>
          <h6 className={styles.infoHeader}>Zuri Chat Pro Plan</h6>
          <p className={styles.infoBody}>Do More. Anytime.</p>
        </div>
        <button className={styles.btnSecondary}>Learn More</button>
        <button className={styles.btnPrimary}>Upgrade</button>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Visit our Help Center to see if you qualify for a discounted plan.
        </p>

        <p className={styles.footerLink}>
          Have a promo code?{' '}
          <span className={styles.footerLinkSpan}>Enter it here</span>
        </p>
      </div>
    </div>
  )
}

export default OverviewTab
