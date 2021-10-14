import React, { useState } from "react"

import styles from "../styles/adminTab.module.css"

// components
import Emoji from "../components/OverviewTab"
import Slackbot from "../components/SettingsTab"
import WorkspaceIcon from "../components/PaymentTab"
import Statuses from "../components/MembersTab"
import ChannelPrefixes from "./ChannelPrefixes"

// icons
import { FiMenu } from "react-icons/fi"
import { CardProvider } from "../../../context/CardContext"

const WorkspaceTab = () => {
  const [openTab, setOpenTab] = useState(false)
  const [active, setActive] = useState(1)

  return (
    <CardProvider>
      <div className={styles.tabWrapper}>
        <div
          onClick={() => setOpenTab(!openTab)}
          className={styles.mobileToggle}
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
            Slackbot
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
          {active === 1 && (
            <Emoji
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          )}
          {active === 2 && <Slackbot />}
          {active === 3 && <WorkspaceIcon />}
          {active === 4 && <Statuses />}
          {active === 5 && <ChannelPrefixes />}
        </div>
      </div>
    </CardProvider>
  )
}

export default WorkspaceTab
