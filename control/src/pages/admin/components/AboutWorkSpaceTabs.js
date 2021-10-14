import React, { useState } from "react"

import styles from "../styles/aboutWorkspaceTab.module.css"

// components
import RetentionAndExports from "../components/RetentionAndExports"
import OverviewWorkspace from "../components/OverviewWorkspace"

// icons
import { FiMenu } from "react-icons/fi"
import { CardProvider } from "../../../context/CardContext"

const AboutWorkSpaceTabs = () => {
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
            Overview
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
            Admins & Owners
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
            Retention & Exports
          </div>
        </div>

        <div className={styles.tabContent}>
          {active === 3 && (
            <RetentionAndExports
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          )}
            {active === 1 && (
            <OverviewWorkspace
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

export default AboutWorkSpaceTabs
