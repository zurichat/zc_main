import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { URLContext } from '../contexts/Url'
import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'

export const Topbar = () => {
  const state = useContext(URLContext)
  const { openModal } = state
<<<<<<< HEAD

=======
>>>>>>> 216e38aad34079b5acb93e1043f9a4c6cbedd999

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <SearchBar />
<<<<<<< HEAD
        <Link to="/account_settings">
          <img src="/settings.svg" alt="settings" />
        </Link>
=======
        <img src="/settings.svg" alt="settings" />
>>>>>>> 216e38aad34079b5acb93e1043f9a4c6cbedd999
        <div className={styles.profile} onClick={openModal}>
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}
