import React, { useContext } from 'react'
import { TopbarContext } from '../contexts/Topbar'
import { Link } from 'react-router-dom'

import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'
import StatusBadge from './StatusBadge'
import TopbarModal from './TopbarModal'
import ProfileModal from './ProfileModal'
import { MembersModalButton } from './MembersModal'

export const Topbar = () => {
  const state = useContext(TopbarContext)
  const { openModal } = state

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.topbar}>
        <MembersModalButton />
        <Link to="/settings">
          <img src="/settings.svg" alt="settings" className={styles.settings} />
        </Link>
        <StatusBadge />
        <div className={styles.profile} onClick={openModal}>
          <img src="/profilepic.png" alt="Profile" />
          <div className={styles.circles}></div>
        </div>
      </div>

      <ProfileModal />
      <TopbarModal />
    </div>
  )
}
