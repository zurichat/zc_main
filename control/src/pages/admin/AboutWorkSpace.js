import React from "react"
import AdminSettings from "./index"
import AboutWorkSpaceTabs from "./components/AboutWorkSpaceTabs"
import styles from "./styles/aboutWorkspace.module.css"
import { FiAlertOctagon } from "react-icons/fi"

const AboutWorkSpace = () => {
  return (
    <AdminSettings>
      <div className={styles.workSpaceContainer}>
        <div className={styles.contentWrapper}>
          <h5 className={styles.contentHeading}>
            {" "}
            <FiAlertOctagon className={styles.icon} /> About This Workspace
          </h5>
          <AboutWorkSpaceTabs />
        </div>
      </div>
    </AdminSettings>
  )
}

export default AboutWorkSpace
