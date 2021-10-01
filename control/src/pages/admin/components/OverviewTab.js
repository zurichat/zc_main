import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Loader from 'react-loader-spinner'

import styles from '../styles/adminOverview.module.css'
import { authAxios } from '../Utils/Api'

import { getToken, getUser, getCurrentWorkspace } from '../Utils/Common'

// icons
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FiCheck } from 'react-icons/fi'

const OverviewTab = ({ setActive, setOpenTab, openTab }) => {

  const currentWorkspace = getCurrentWorkspace()
  const user = getUser()
  const [workspaceData, setWorkspaceData] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  console.log(workspaceData);

  useEffect(() => {
    if (currentWorkspace) {
      authAxios.get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data)
          console.log(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [currentWorkspace])

  const handlePlan = () => {
    setLoading(true)

    authAxios.post(`/organizations/${currentWorkspace}/upgrade-to-pro`)
      .then(res => {
        setLoading(false)
        console.log(res.data)
        toast.success(res.data.message, {
          position: 'top-center'})
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
        toast.error('Oops, something went wrong check and try again', {
          position: 'top-center'})
      })
  }

  return (
    <div className={styles.plansContainer}>
      <div className={styles.tokenAmount}>
        <span>{workspaceData.tokens} &nbsp;</span>
        tokens
        <AiOutlineInfoCircle className={styles.infoIcon} />
      </div>

      <div className={styles.plansContent}>
        <h1 className={styles.plansHeader}>
          Your workspace is currently on the{' '}
          <b className={styles.bold}>{workspaceData.version === "pro" ? "Pro Plan" : "Free Plan"}</b>
        </h1>
        <div className={styles.buttonWrapper}>
          <button onClick={handlePlan} disabled={workspaceData.version === "pro"} className={styles.mainCta}>
            {loading ? 
              <Loader type="ThreeDots" color="#fff" height={40} width={40} /> : 
              "Subscribe to a plan"}
          </button>
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
            <span onClick={() => { setActive(5); setOpenTab(!openTab) }} className={styles.cta}>Buy now</span>
          </p>
        </div>
      </div>

      <div className={styles.planCta}>
        <div className={styles.info}>
          <h6 className={styles.infoHeader}>Zuri Chat Pro Plan</h6>
          <p className={styles.infoBody}>Do More. Anytime.</p>
        </div>
        <div className={styles.buttonCont}>
          <button className={styles.btnSecondary}>Learn More</button>
          <button onClick={handlePlan} disabled={workspaceData.version === "pro"} className={styles.btnPrimary}>{loading ? 
                <Loader type="ThreeDots" color="#fff" height={40} width={40} /> : 
                "Upgrade"}</button>
        </div>
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
      <Toaster />
    </div>
  )
}

export default OverviewTab
