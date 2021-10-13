import React, { useState, useContext } from "react"
import ProfileModal from "./ProfileModal"
import NotificationPreference from "../components/NotificationPreference"
import Themes from "../components/Themes"
import MessagesMedia from "../components/MessagesMedia"
import PreferenceMenu from "../components/PreferenceMenu"
import MobilePreferenceMenu from "../components/MobilePreferenceMenu"
import MarkAsRead from "../components/MarkAsRead"
import LanguageAndRegion from "../components/LanguageAndRegion"
import styles from "../styles/NotificationPreference.module.css"
import { ProfileContext } from "../context/ProfileModal"
import AdvancedSettings from "../components/AdvancedSettings"
import Accessibility from "./Accessibility"
import { HiMenuAlt2 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"

const Preferences = () => {
  const { sideBar } = useContext(ProfileContext)
  const [navbarOpen, setNavbarOpen] = useState(true)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <ProfileModal title="Preference">
      <div className={styles.body}>
        <div className={styles.buttonToggle}>
          <PreferenceMenu />
          <div>
            <button className={styles.toggle} onClick={handleToggle}>
              {navbarOpen ? (
                <IoMdClose />
              ) : (
                <HiMenuAlt2 onClick={() => closeMenu()} />
              )}
            </button>
          </div>

          <hr className={styles.hrLine} />
          <MobilePreferenceMenu
            navbarOpen={navbarOpen}
            closeMenu={closeMenu}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          {sideBar === 1 && <NotificationPreference />}

          {sideBar === 3 && <Themes />}
          {sideBar === 4 && <MessagesMedia />}
          {sideBar === 5 && <LanguageAndRegion />}
          {sideBar === 6 && <Accessibility />}
          {sideBar === 7 && <MarkAsRead />}

          {sideBar === 9 && <AdvancedSettings />}
        </div>
      </div>
    </ProfileModal>
  )
}

export default Preferences
