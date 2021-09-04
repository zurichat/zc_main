import React, { useState } from 'react'

import styles from '../styles/settingsNav.module.css'
import { BiMenuAltRight } from 'react-icons/bi'

const SettingsNav = () => {
  const [menu, setMenu] = useState(false)

  // THE SECTION OF THE STYLE MENU
  const styleMenu = {
    left: menu ? 0 : '-100%'
  }

  return (
    <div className={styles.containers}>
      <div className={styles.brand}>
        <img src="./zurichatlogo.svg" alt="" />
        <h3>ZURI</h3>
      </div>

      <div className={styles.menubars} onClick={() => setMenu(!menu)}>
        <BiMenuAltRight />
      </div>

      <div className={styles.accountbar} style={styleMenu}>
        <div className={styles.searchBar}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search here"
          />
          <img
            src="/search-2-line.svg"
            className={styles.searchSvg}
            alt="search"
          />
        </div>

        <img src="/settings.svg" alt="settings" />

        <div className={styles.profile}>
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default SettingsNav
