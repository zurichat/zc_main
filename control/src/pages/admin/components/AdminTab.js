import React, { useState } from 'react'

import styles from '../styles/adminTab.module.css'

// components
import OverviewTab from '../components/OverviewTab'
import SettingsTab from '../components/SettingsTab'
import PaymentTab from '../components/PaymentTab'
import MembersTab from '../components/MembersTab'
import HistoryTab from '../components/HistoryTab'
import TokensTab from '../components/TokensTab'

// icon
import { FiMenu } from 'react-icons/fi'

const AdminTab = () => {
  const [openTab, setOpenTab] = useState(false)
  const [active, setActive] = useState(1)

  return (
    <div className={styles.tabWrapper}>
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
          History
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
          Settings
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
          Member changes
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
          Tokens
        </div>
        <div
          onClick={() => {
            setActive(6)
            setOpenTab(!openTab)
          }}
          className={
            active === 6 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Payment method
        </div>
      </div>
      <div className={styles.tabContent}>
        {active === 1 && (
          <OverviewTab
            setActive={setActive}
            setOpenTab={setOpenTab}
            openTab={openTab}
          />
        )}
        {active === 2 && <HistoryTab />}
        {active === 3 && <SettingsTab />}
        {active === 4 && <MembersTab />}
        {active === 5 && <TokensTab />}
        {active === 6 && <PaymentTab />}
      </div>
    </div>
  )
}

export default AdminTab
