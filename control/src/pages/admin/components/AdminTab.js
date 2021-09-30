import React, { useState } from 'react'

import styles from '../styles/adminTab.module.css'

// components
import OverviewTab from '../components/OverviewTab'
import SettingsTab from '../components/SettingsTab'
import PaymentTab from '../components/PaymentTab'
import MembersTab from '../components/MembersTab'
import HistoryTab from '../components/HistoryTab'
import TokensTab from '../components/TokensTab'

const AdminTab = () => {
  const [active, setActive] = useState(1)

  return (
    <div className={styles.tabWrapper}>
      <div className={styles.tabHeader}>
        <div
          onClick={() => setActive(1)}
          className={
            active === 1 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Overview
        </div>
        <div
          onClick={() => setActive(2)}
          className={
            active === 2 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          History
        </div>
        <div
          onClick={() => setActive(3)}
          className={
            active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Settings
        </div>
        <div
          onClick={() => setActive(4)}
          className={
            active === 4 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Member changes
        </div>
        <div
          onClick={() => setActive(5)}
          className={
            active === 5 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Tokens
        </div>
        <div
          onClick={() => setActive(6)}
          className={
            active === 6 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Payment method
        </div>
      </div>
      <div className={styles.tabContent}>
        {active === 1 && <OverviewTab />}
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
