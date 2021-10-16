import React, { useState } from "react"

import styles from "../styles/aboutWorkspaceTab.module.css"
import {Link} from 'react-router-dom'
// components
import SettingsTab from "../../settings/components/SettingsTab"

// icons
import { FiMenu } from "react-icons/fi"
import { CardProvider } from "../../../context/CardContext"

const AccountsProfileTabs = () => {
  const [openTab, setOpenTab] = useState(false)
  const [active, setActive] = useState(1)

  return (
    <CardProvider>
      <div className={styles.tabWrapper}>
        <div
          className={styles.mobileToggle}
          onClick={() => setOpenTab(!openTab)}
        >
          <FiMenu className={styles.menuIcon} />
        </div>
        <div className={openTab ? styles.tabHeaderActive : styles.tabHeader}>
          <div
            onClick={() => {
              setActive(1)
              setOpenTab(!openTab)
            }}
            className={
              active === 1 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Settings
          </div>
          <div
            onClick={() => {
              setActive(2)
              setOpenTab(!openTab)
            }}
            className={
              active === 2 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
           Notification
          </div>
          <div
            
            className={
              active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          ><Link to="/homepage/profile" style={{color: "#333", fontSize:"1.125rem", fontWeight:"600", padding: "0.875rem 1.2rem"}}>
            Profile
            </Link>
          </div>
        </div>

        
        <div className={styles.tabContent}>
          {active === 1 && (
            <SettingsTab
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          )}
        </div>
      </div>
    </CardProvider>
  )
}

export default AccountsProfileTabs
