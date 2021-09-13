import React, { useContext } from 'react'
import ProfileModal from './ProfileModal'
import NotificationPreference from '../pages/preferences/components/NotificationPreference'
import SidebarPreference from '../pages/preferences/components/SidebarPreference'
import Themes from '../pages/preferences/components/Themes'
import MessagesMedia from '../pages/preferences/components/MessagesMedia'
import PreferenceMenu from '../pages/preferences/components/PreferenceMenu'
import styles from '../pages/preferences/styles/NotificationPreference.module.css'
import { ProfileContext } from '../context/ProfileModal'
<<<<<<< HEAD
import AdvancedSettings from '../pages/preferences/components/AdvancedSettings'
import AudioVideo from '../pages/preferences/components/AudioVideo'
=======
import LanguageRegion from '../pages/preferences/components/LanguageRegion'
>>>>>>> 0c1cc8bac5e63ac026dcd538af35e8915e0c1f6c

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
<<<<<<< HEAD
          {sideBar === 8 && <AudioVideo />}
          {sideBar === 9 && <AdvancedSettings />}
=======
          {sideBar === 3 && <Themes />}
          {sideBar === 4 && <MessagesMedia />}
          {sideBar === 5 && <LanguageRegion />}
>>>>>>> 0c1cc8bac5e63ac026dcd538af35e8915e0c1f6c
        </div>
      </div>
    </ProfileModal>
  )
}

export default Preferences
