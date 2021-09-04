import React, { useState } from 'react'

import styles from '../styles/settingsNav.module.css'
import { BiMenuAltRight } from 'react-icons/bi'

const SettingsNav = () => {
  const [menu, setMenu] = useState(false)

  // THE SECTION OF THE STYLE MENU
  // const styleMenu = {
  //   left: menu ? 0 : '-100%'
  // }

  return (
    <div className={styles.containers}>
      <div className={styles.accountbar}>
        <div className={styles.brand}>
          <img src="./zurichatlogo.svg" alt="" />
          <h3>ZURI</h3>
        </div>

        <div className={styles.menubars} onClick={() => setMenu(!menu)}>
          <BiMenuAltRight />
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search here"
          />
          <img
            src="/search-2-line.svg"
            className={styles.searchSvg}
            alt="search"
          />
        </div>
      </div>

      <div className={styles.rightnav}>
        <div className={styles.settings}>
          <img src="/settings.svg" alt="settings" />
        </div>


        <div className={styles.profile}>
          <div className={styles.status}>4️⃣</div>
          <img src="/profilepic.png" alt="Profile" />
          <div className={styles.circles}></div>
        </div>
      </div>
    </div>
  )
}

export default SettingsNav
