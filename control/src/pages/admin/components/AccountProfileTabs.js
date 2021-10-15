import React, { useState } from "react"

import styles from "../styles/aboutWorkspaceTab.module.css"

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
            onClick={() => {
              setActive(3)
              setOpenTab(!openTab)
            }}
            className={
              active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            Profile
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
