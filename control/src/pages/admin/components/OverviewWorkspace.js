import React from "react"
import styles from "../styles/overviewWorkspace.module.css"
import { Link } from "react-router-dom"
const OverviewWorkspace = () => {
  return (
    <div>
      <div className={styles.details}>
        <div className={styles.imgContainer}>WM</div>
        <div className={styles.name}>
          <h3 className={styles.h3}>Web Mekanic</h3>
          <Link to="/" className={styles.link}>
            webmekanic.slack.com
          </Link>
        </div>
      </div>
      <div className={styles.workspacePlan}>
        <h3 className={styles.workspaceHeader}>Plan type</h3>
        <p className={styles.workspacePara}>Free</p>
      </div>
      <div className={styles.workspaceDate}>
        <h3 className={styles.workspaceDateHeader}>Date created</h3>
        <h4 className={styles.workspaceDatePara}>October 13th,2021</h4>
      </div>
      <div className={styles.workspaceTerms}>
        <h3 className={styles.workspaceTermHeader}>Terms of service</h3>
        <Link to="/privacy" className={styles.review}>
          Review
        </Link>
      </div>
    </div>
  )
}
export default OverviewWorkspace;