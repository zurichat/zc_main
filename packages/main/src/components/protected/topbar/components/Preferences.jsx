import React, { useState, useContext, useEffect } from "react";
import ProfileModal from "./ProfileModal";
import NotificationPreference from "./NotificationPreference";
import Themes from "./Themes";
import MessagesMedia from "./MessagesMedia";
import PreferenceMenu from "./PreferenceMenu";
import MobilePreferenceMenu from "./MobilePreferenceMenu";
import LanguageAndRegion from "./LanguageAndRegion";
import styles from "../styles/NotificationPreference.module.css";
import { ProfileContext } from "../context/profile-modal.context";
import AdvancedSettings from "./AdvancedSettings";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Preferences = () => {
  const { sideBar } = useContext(ProfileContext);
  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  // const lightLocal =
  //   (localStorage.getItem("light") && localStorage.getItem("light")) || ""
  // const darkLocal =
  //   (localStorage.getItem("dark") && localStorage.getItem("dark")) || ""

  // const [check, setCheck] = useState({
  //   light: lightLocal || "",
  //   dark: darkLocal || ""
  // })

  // const themeLocal =
  //   (localStorage.getItem("mode") && localStorage.getItem("mode")) || ""
  // const [mode, setMode] = useState(themeLocal)

  // useEffect(() => {
  //   if (mode === "dark") {
  //     localStorage.setItem("mode", "dark")
  //     localStorage.setItem("dark", "checked")
  //     localStorage.removeItem("light")
  //   } else {
  //     localStorage.setItem("mode", "light")
  //     localStorage.setItem("light", "checked")
  //     localStorage.removeItem("dark")
  //   }
  // }, [mode, check])

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

        <div
          className={styles.allPreferences}
          style={{ width: "100%" }}
          id="preferences-main-box"
        >
          {sideBar === 1 && <NotificationPreference />}
          {/* {sideBar === 3 && <Themes {...{ check, setCheck, setMode }} />} */}
          {sideBar === 4 && <MessagesMedia />}
          {sideBar === 5 && <LanguageAndRegion />}
          {/* {sideBar === 6 && <Accessibility />} */}
          {/* {sideBar === 7 && <MarkAsRead />} */}
          {sideBar === 9 && <AdvancedSettings />}
        </div>
      </div>
    </ProfileModal>
  );
};

export default Preferences;
