import React, { useContext } from 'react'
import styles from '../styles/PreferenceMenu.module.css'
import { ProfileContext } from '../context/ProfileModal'
import { AiOutlineBell, AiOutlineEye, AiOutlineSetting } from 'react-icons/ai'
import { BsLayoutSidebar, BsCheckCircle } from 'react-icons/bs'
import { FiMessageCircle, FiGlobe, FiVideo } from 'react-icons/fi'
import { CgScreen } from 'react-icons/cg'
import { Text } from '../context/Language'
import { useTranslation } from 'react-i18next'

const PreferenceMenu = () => {
  const { sideBar, setSideBar } = useContext(ProfileContext)
  const { t } = useTranslation()
  return (
    <div className={styles.notifySidebar}>
      <div className={styles.itemsContainer}>
        <div
          onClick={() => setSideBar(1)}
          className={sideBar === 1 ? styles.active : styles.one}
        >
          <AiOutlineBell className={styles.icon} />
          <p>{t('notification')}</p>
        </div>
        <div
          onClick={() => setSideBar(2)}
          className={sideBar === 2 ? styles.active : styles.one}
        >
          <BsLayoutSidebar className={styles.icon} />
          <p>{t('barre')}</p>
        </div>
        <div
          onClick={() => setSideBar(3)}
          className={sideBar === 3 ? styles.active : styles.one}
        >
          <AiOutlineEye className={styles.icon} />
          <p>{t('Theme')}</p>
        </div>
        <div
          onClick={() => setSideBar(4)}
          className={sideBar === 4 ? styles.active : styles.one}
        >
          <FiMessageCircle className={styles.icon} />
          <p>{t('msg')}</p>
        </div>
        <div
          onClick={() => setSideBar(5)}
          className={sideBar === 5 ? styles.active : styles.one}
        >
          <FiGlobe className={styles.icon} />
          <p>{t('langRegion')}</p>
        </div>
        <div
          onClick={() => setSideBar(6)}
          className={sideBar === 6 ? styles.active : styles.one}
        >
          <CgScreen className={styles.icon} />
          <p>{t('access')}</p>
        </div>
        <div
          onClick={() => setSideBar(7)}
          className={sideBar === 7 ? styles.active : styles.one}
        >
          <BsCheckCircle className={styles.icon} />
          <p>{t('asRead')}</p>
        </div>
        <div
          onClick={() => setSideBar(8)}
          className={sideBar === 8 ? styles.active : styles.one}
        >
          <FiVideo className={styles.icon} />
          <p>{t('audiovideo')}</p>
        </div>
        <div
          onClick={() => setSideBar(9)}
          className={sideBar === 9 ? styles.active : styles.one}
        >
          <AiOutlineSetting className={styles.icon} />
          <p>{t('notify')}</p>
        </div>
      </div>
    </div>
  )
}

export default PreferenceMenu
