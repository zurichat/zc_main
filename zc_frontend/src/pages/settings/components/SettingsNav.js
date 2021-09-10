import React, { useState } from 'react'

import styles from '../styles/settingsNav.module.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Topbar from '../../../components/Topbar'
import { TopbarProvider } from '../../../context/Topbar'
import { ProfileProvider } from '../../../context/ProfileModal'

const SettingsNav = () => {
  const [menu, setMenu] = useState(false)

  // THE SECTION OF THE STYLE MENU
  // const styleMenu = {
  //   left: menu ? 0 : '-100%'
  // }

  return (
    <div className={styles.containers}>
      <div className={styles.accountbar}>
        <Link to="/home">
          <div className={styles.brand}>
            <img src="zurichatlogo.svg" alt="" />
            <h3>ZURI</h3>
          </div>
        </Link>

        <div className={styles.menubars} onClick={() => setMenu(!menu)}>
          <BiMenuAltRight />
        </div>
        <ProfileProvider>
          <TopbarProvider>
            <Topbar />
          </TopbarProvider>
        </ProfileProvider>
      </div>

      {/* <div className={styles.rightnav}>
        <div className={styles.settings}>
          <img src="/settings.svg" alt="settings" />
        </div>

        <div className={styles.profile}>
          <div className={styles.status}>4️⃣</div>
          <div className={styles.pImage}>
            <img
              src="/profilepic.png"
              alt="Profile"
              className={styles.profileImg}
            />
            <div className={styles.circles}></div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SettingsNav
