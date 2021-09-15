import React, { useContext } from 'react'
import ProfileModal from './ProfileModal'
import NotificationPreference from '../pages/preferences/components/NotificationPreference'
import SidebarPreference from '../pages/preferences/components/SidebarPreference'
import Themes from '../pages/preferences/components/Themes'
import MessagesMedia from '../pages/preferences/components/MessagesMedia'
import PreferenceMenu from '../pages/preferences/components/PreferenceMenu'
import MarkAsRead from '../pages/preferences/components/MarkAsRead'
import LanguageAndRegion from '../pages/preferences/components/LanguageAndRegion'
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
          {sideBar === 3 && <Themes />}
          {sideBar === 4 && <MessagesMedia />}
          {sideBar === 5 && <LanguageAndRegion />}
          {sideBar === 7 && <MarkAsRead />}
        </div>
      </div>
    </ProfileModal>
  )
}

export default Preferences
