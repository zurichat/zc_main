import React from "react"
import AdminSettings from "."
import CustomizeWorkspaceTab from "./Settings/components/CustomizeWorkspaceTab"
import styles from "./styles/customizeWorkspace.module.css"

function Customize() {
  return (
    <div>
      <AdminSettings>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <h5 className={styles.contentHeading}>Customize Your Workspace</h5>
            <CustomizeWorkspaceTab />
          </div>
        </div>
      </AdminSettings>
    </div>
  )
}

export default Customize
