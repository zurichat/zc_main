import React, { useState } from "react"

import styles from "../styles/CustomizeWorkspaceTab.module.css"

// components
import Emoji from "./Emoji"
import Zuribot from "./Zuribot"
import WorkspaceIcon from "./WorkspaceIcon"
import Statuses from "./Statuses"
import ChannelPrefixes from "./ChannelPrefixes"

// icon
import { FiMenu } from "react-icons/fi"

const CustomizeWorkspaceTab = () => {
  const [openTab, setOpenTab] = useState(false)
  const [active, setActive] = useState(1)

  return (
    <div className={`${styles.tabWrapper} mt-4`}>
      <div onClick={() => setOpenTab(!openTab)} className={styles.mobileToggle}>
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
          Emoji
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
          Zuribot
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
          Workspace Icon
        </div>
        <div
          onClick={() => {
            setActive(4)
            setOpenTab(!openTab)
          }}
          className={
            active === 4 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Statuses
        </div>
        <div
          onClick={() => {
            setActive(5)
            setOpenTab(!openTab)
          }}
          className={
            active === 5 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Channel Prefixes
        </div>
      </div>
      <div className={styles.tabContent}>
        {active === 1 && <Emoji />}
        {active === 2 && <Zuribot />}
        {active === 3 && <WorkspaceIcon />}
        {active === 4 && <Statuses />}
        {active === 5 && <ChannelPrefixes />}
      </div>
    </div>
  )
}

export default CustomizeWorkspaceTab
