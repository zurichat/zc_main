import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

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
        <Link to="/account_settings">
          <img src="/settings.svg" alt="settings" />
        </Link>
        <div className={styles.profile} onClick={openModal}>
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}
