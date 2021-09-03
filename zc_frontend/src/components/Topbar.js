import React, { useContext } from 'react'
import { TopbarContext } from '../contexts/Topbar'

import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'
import StatusBadge from './StatusBadge'

export const Topbar = () => {
  const state = useContext(TopbarContext)
  const { openModal } = state

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <SearchBar />
        <img src="/settings.svg" alt="settings" />
        <StatusBadge />
        <div className={styles.profile} onClick={openModal}>
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}
