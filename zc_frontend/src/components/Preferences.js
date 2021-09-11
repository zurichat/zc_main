import React, { useContext } from 'react'
import ProfileModal from './ProfileModal'
import NotificationPreference from '../pages/preferences/components/NotificationPreference'
import SidebarPreference from '../pages/preferences/components/SidebarPreference'
import PreferenceMenu from '../pages/preferences/components/PreferenceMenu'
import styles from '../pages/preferences/styles/NotificationPreference.module.css'
import { ProfileContext } from '../context/ProfileModal'

const Preferences = () => {
  const { sideBar } = useContext(ProfileContext)

  return (
    <ProfileModal title="Preference">
      <div className={styles.body}>
        <div>
          <PreferenceMenu />
        </div>

        <div>
          {sideBar === 1 && <NotificationPreference />}
          {sideBar === 2 && <SidebarPreference />}
        </div>
      </div>
    </ProfileModal>
  )
}

export default Preferences
