import React, { useContext } from 'react'
import { TopbarContext } from '../contexts/Topbar'

import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'
import StatusBadge from './StatusBadge'
import TopbarModal from './TopbarModal';

export const Topbar = () => {
  const state = useContext(TopbarContext)
  const { openModal } = state

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.topbar}>
        <img src="/settings.svg" alt="settings" />
        <StatusBadge />
        <div className={styles.profile} onClick={openModal}>
          <img src="/profilepic.png" alt="Profile" />
        </div>
      </div>

      <TopbarModal />
    </div>
  )
}
