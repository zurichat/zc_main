import React, { useContext } from 'react'

import { URLContext } from '../contexts/Url'
import styles from '../styles/Topbar.module.css'

export const Topbar = () => {
  const state = useContext(URLContext)
  const {openModal} = state


  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search here"
        />
        <img src="/settings.svg" alt="settings" />
        <div className={styles.profile} onClick={openModal}>
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}
