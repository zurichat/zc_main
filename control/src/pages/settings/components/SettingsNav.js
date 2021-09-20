import React, { useState, useContext } from 'react'

// import { TopbarContext } from '../../../context/Topbar'

import styles from '../styles/settingsNav.module.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
<<<<<<< HEAD:zc_frontend/src/pages/settings/components/SettingsNav.js
import zuri from '../../images/zuri.svg'
=======
import zuri from '../../../component-assets/zuri.svg'
import searchIcon from '../../../component-assets/search-2-line.svg'
import settingsIcon from '../../../component-assets/settings.svg'
import profilePic from '../../../component-assets/profilepic.png'
// import StatusBadge from './../../../components/StatusBadge'
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/settings/components/SettingsNav.js

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
<<<<<<< HEAD:zc_frontend/src/pages/settings/components/SettingsNav.js
=======
          <img src={searchIcon} className={styles.searchSvg} alt="search" />
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/settings/components/SettingsNav.js
        </div>
      </div>

      <div className={styles.rightnav}>
<<<<<<< HEAD:zc_frontend/src/pages/settings/components/SettingsNav.js
        <div className={styles.pImage}>
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
        <div className={styles.settings}>
          <img src={settingsIcon} alt="settings" />
        </div>

        <div className={styles.profile}>
          <div className={styles.status}>{/*<StatusBadge />*/}</div>
          <div className={styles.pImage}>
            <img src={profilePic} alt="Profile" className={styles.profileImg} />
            <div className={styles.circles}></div>
            {/*active ? (
              <div className={styles.circles}></div>
            ) : (
              <div className={styles.circleAway}></div>
            )*/}
          </div>
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/settings/components/SettingsNav.js
        </div>
      </div>
    </div>
  )
}

export default SettingsNav
