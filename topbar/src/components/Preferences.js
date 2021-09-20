import React, { useContext } from 'react'
import ProfileModal from './ProfileModal'
import NotificationPreference from '../components/NotificationPreference'
import SidebarPreference from '../components/SidebarPreference'
import Themes from '../components/Themes'
import MessagesMedia from '../components/MessagesMedia'
import PreferenceMenu from '../components/PreferenceMenu'
import MarkAsRead from '../components/MarkAsRead'
import LanguageAndRegion from '../components/LanguageAndRegion'
import styles from '../styles/NotificationPreference.module.css'
import { ProfileContext } from '../context/ProfileModal'
import AudioVideo from '../components/AudioVideo'
import AdvancedSettings from '../components/AdvancedSettings'

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
          {sideBar === 8 && <AudioVideo />}
          {sideBar === 9 && <AdvancedSettings />}
        </div>
      </div>
    </ProfileModal>
  )
}

export default Preferences
