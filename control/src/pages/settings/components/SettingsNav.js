import React, { useState, useContext } from 'react'

import { TopbarContext } from '../../../context/Topbar'

import styles from '../styles/settingsNav.module.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
<<<<<<< HEAD:zc_frontend/src/pages/settings/components/SettingsNav.js
import zuri from '../../images/zuri.svg'
=======
import zuri from '../assets/zuri.svg'
import navImage from '../assets/navImage.png'
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/settings/components/SettingsNav.js

const SettingsNav = () => {
  const [menu, setMenu] = useState(false)
  // const state = useContext(TopbarContext)
  // const [active] = state.presence

  return (
    <div className={styles.containers}>
      <div className={styles.accountbar}>
        <Link to="/home">
          <div className={styles.brand}>
            <img src={zuri} alt="Zuri logo" />
          </div>
        </Link>

        <div className={styles.menubars} onClick={() => setMenu(!menu)}>
          <BiMenuAltRight />
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search here"
          />
        </div>
      </div>

      <div className={styles.rightnav}>
        <div className={styles.pImage}>
<<<<<<< HEAD:zc_frontend/src/pages/settings/components/SettingsNav.js
          <img
            src="/navImage.png"
            alt="Profile"
            className={styles.profileImg}
          />
          {active ? (
            <div className={styles.circles}></div>
          ) : (
            <div className={styles.circleAway}></div>
          )}
=======
          <img src={navImage} alt="Profile" className={styles.profileImg} />
          {/* {active ? (
            <div className={styles.circles}></div>
          ) : (
            <div className={styles.circleAway}></div>
          )} */}
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/settings/components/SettingsNav.js
        </div>
      </div>
    </div>
  )
}

export default SettingsNav
