import React from "react"
import AdminSettings from "."
import CustomizeTab from "./components/CustomizeTab"
import styles from "./styles/customize.module.css"
import { Link } from "react-router-dom"

const Customize = () => {
  return (
    <AdminSettings>
      <div className={styles.customizeContainer}>
        <div className={styles.contentWrapper}>
          <h5 className={styles.contentHeading}>Customize Your Workspace</h5>
          <h5 className={styles.contentSubHeading}>
            Use these settings to make Zuri Chat your own. Let your imagination
            run wild and free! As an admin, you can prevent members from editing
            these on the <a href="#">Permissions Page</a>
          </h5>
          <CustomizeTab />
        </div>
      </div>
    </AdminSettings>
  )
}

export default Customize
