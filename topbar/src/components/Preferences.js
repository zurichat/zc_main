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
<<<<<<< HEAD:zc_frontend/src/components/Preferences.js
import AudioVideo from '../pages/preferences/components/AudioVideo'
import AdvancedSettings from '../pages/preferences/components/AdvancedSettings'
=======
import AudioVideo from '../components/AudioVideo'
import AdvancedSettings from '../components/AdvancedSettings'
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:topbar/src/components/Preferences.js

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
