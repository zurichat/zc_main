import React, { useContext } from 'react'
import ProfileModal from './ProfileModal'
import NotificationPreference from '../pages/preferences/components/NotificationPreference'
import SidebarPreference from '../pages/preferences/components/SidebarPreference'
import Themes from '../pages/preferences/components/Themes'
import MessagesMedia from '../pages/preferences/components/MessagesMedia'
import PreferenceMenu from '../pages/preferences/components/PreferenceMenu'
import styles from '../pages/preferences/styles/NotificationPreference.module.css'
import { ProfileContext } from '../context/ProfileModal'
import LanguageRegion from '../pages/preferences/components/LanguageRegion'
import AudioVideo from '../pages/preferences/components/AudioVideo'
import AdvancedSettings from '../pages/preferences/components/AdvancedSettings'

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
          {sideBar === 5 && <LanguageRegion />}
          {sideBar === 8 && <AudioVideo />}
          {sideBar === 9 && <AdvancedSettings />}
        </div>
      </div>
    </ProfileModal>
  )
}

export default Preferences
