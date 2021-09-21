import React, { useContext } from 'react'
import styles from '../styles/PreferenceMenu.module.css'
import { ProfileContext } from '../context/ProfileModal'
import { AiOutlineBell, AiOutlineEye, AiOutlineSetting } from 'react-icons/ai'
import { BsLayoutSidebar, BsCheckCircle } from 'react-icons/bs'
import { FiMessageCircle, FiGlobe, FiVideo } from 'react-icons/fi'
import { CgScreen } from 'react-icons/cg'

const PreferenceMenu = () => {
  const { sideBar, setSideBar } = useContext(ProfileContext)

  return (
    <div className={styles.notifySidebar}>
      <div className={styles.itemsContainer}>
        <div
          onClick={() => setSideBar(1)}
          className={sideBar === 1 ? styles.active : styles.one}
        >
          <p>
            <AiOutlineBell className={styles.icon} />
            Notifications
          </p>
        </div>
        <div
          onClick={() => setSideBar(2)}
          className={sideBar === 2 ? styles.active : styles.one}
        >
          <p>
            <BsLayoutSidebar className={styles.icon} />
            Sidebar
          </p>
        </div>
        <div
          onClick={() => setSideBar(3)}
          className={sideBar === 3 ? styles.active : styles.one}
        >
          <p>
            <AiOutlineEye className={styles.icon} />
            Themes
          </p>
        </div>
        <div
          onClick={() => setSideBar(4)}
          className={sideBar === 4 ? styles.active : styles.one}
        >
          <p>
            <FiMessageCircle className={styles.icon} />
            Messages & Media
          </p>
        </div>
        <div
          onClick={() => setSideBar(5)}
          className={sideBar === 5 ? styles.active : styles.one}
        >
          <p>
            <FiGlobe className={styles.icon} />
            Languages & Region
          </p>
        </div>
        <div
          onClick={() => setSideBar(6)}
          className={sideBar === 6 ? styles.active : styles.one}
        >
          <p>
            <CgScreen className={styles.icon} />
            Accessibility
          </p>
        </div>
        <div
          onClick={() => setSideBar(7)}
          className={sideBar === 7 ? styles.active : styles.one}
        >
          <p>
            <BsCheckCircle className={styles.icon} />
            Mark as read
          </p>
        </div>
        <div
          onClick={() => setSideBar(8)}
          className={sideBar === 8 ? styles.active : styles.one}
        >
          <p>
            <FiVideo className={styles.icon} /> Audio & Video
          </p>
        </div>
        <div
          onClick={() => setSideBar(9)}
          className={sideBar === 9 ? styles.active : styles.one}
        >
          <p>
            <AiOutlineSetting className={styles.icon} />
            Advanced
          </p>
        </div>
      </div>
    </div>
  )
}

export default PreferenceMenu
