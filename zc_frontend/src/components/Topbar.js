import React, { useContext } from 'react'
import { TopbarContext } from '../contexts/Topbar'

import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'
import StatusBadge from './StatusBadge'
<<<<<<< HEAD
import TopbarModal from './TopbarModal';
=======
import ProfileModal from './ProfileModal'
>>>>>>> 891157794c0faf2fc360bb52192c67843274f2a9

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
        <ProfileModal />
      </div>

      <TopbarModal />
    </div>
  )
}
