import React, { useContext } from 'react'

import { URLContext } from '../contexts/Url'
import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'

export const Topbar = () => {
  const state = useContext(URLContext)
  const { openModal } = state

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <SearchBar />
        <img src="/settings.svg" alt="settings" />
        <div className={styles.profile} onClick={openModal}>
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}
