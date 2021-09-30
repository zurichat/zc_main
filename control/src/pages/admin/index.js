import React from 'react'
import AdminHeader from './components/AdminHeader'
import AdminSidebar from './components/AdminSidebar'
import styles from './styles/adminSettings.module.css'

const AdminSettings = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <AdminHeader />
      <div className={styles.adminContainer}>
        <AdminSidebar />
        <div className={styles.settingsContent}>{children}</div>
      </div>
    </div>
  )
}

export default AdminSettings
