import React, { useContext, useState } from 'react'
import styles from '../styles/Profile.module.css'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../context/ProfileModal'
import { TopbarContext } from '../context/Topbar'

import Preferences from './Preferences'

export const Dropdown = () => {
  const { toggleModalState } = useContext(ProfileContext)
  const [modal, setModal] = useState('')
  const state = useContext(TopbarContext)
  const { presence } = state
  const [active, setActive] = presence
  return (
    <>
      <div className={styles.profileDropDown}>
        <div className={styles.topSection}>
          <p
            onClick={() => {
              setModal('preference')
              toggleModalState()
            }}
            className={styles.paragraph}
          >
            View preferences
          </p>
          <p className={styles.paragraph}>View your files</p>
          <p onClick={() => setActive(!active)} className={styles.paragraph}>
            Set yourself {active ? 'away' : 'active'}
          </p>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.paragraphNull}>Copy member ID</p>
          <small className={styles.small}>U031203013</small>
          <Link to="/settings">
            <p className={styles.paragraphNull}>Account settings</p>
          </Link>
        </div>
      </div>
      {modal === 'preference' && <Preferences />}
    </>
  )
}
