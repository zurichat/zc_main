import React, { useState, useEffect } from "react";

// components
import Header from "./components/Header";
import Accessibility from "./components/Accessibility";
import Appearance from "./components/Appearance";
import LangRegion from "./components/LangRegion";
import Notifications from "./components/Notifications";
import Privacy from "./components/Privacy";
import Sidebar from "./components/Sidebar";

// images
import colorfilter from "./assets/images/colorfilter.png";
import global from "./assets/images/global.png";
import notification from "./assets/images/notification.png";
import security from "./assets/images/security.png";
import slider from "./assets/images/slider.png";
import monitor from "./assets/images/monitor.png";

import styles from "./assets/css/main.css";

export default function index() {
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [showAppearance, setShowAppearance] = useState(false);
  const [showLangRegion, setShowLangRegion] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [preference, setPreference] = useState("notifications");

  const accessibility = () => {
    setShowAccessibility(true);
    setShowAppearance(false);
    setShowLangRegion(false);
    setShowNotifications(false);
    setShowPrivacy(false);
    setShowSidebar(false);
  };

  const appearance = () => {
    setShowAccessibility(false);
    setShowAppearance(true);
    setShowLangRegion(false);
    setShowNotifications(false);
    setShowPrivacy(false);
    setShowSidebar(false);
  };

  const langRegion = () => {
    setShowAccessibility(false);
    setShowAppearance(false);
    setShowLangRegion(true);
    setShowNotifications(false);
    setShowPrivacy(false);
    setShowSidebar(false);
  };

  const notifications = () => {
    setShowAccessibility(false);
    setShowAppearance(false);
    setShowLangRegion(false);
    setShowNotifications(true);
    setShowPrivacy(false);
    setShowSidebar(false);
  };

  const privacy = () => {
    setShowAccessibility(false);
    setShowAppearance(false);
    setShowLangRegion(false);
    setShowNotifications(false);
    setShowPrivacy(true);
    setShowSidebar(false);
  };

  const sidebar = () => {
    setShowAccessibility(false);
    setShowAppearance(false);
    setShowLangRegion(false);
    setShowNotifications(false);
    setShowPrivacy(false);
    setShowSidebar(true);
  };

  useEffect(() => {
    preference === "notifications"
      ? setShowNotifications(true)
      : setShowNotifications(false);
    preference === "sidebar" ? setShowSidebar(true) : setShowSidebar(false);
    preference === "appearance"
      ? setShowAppearance(true)
      : setShowAppearance(false);
    preference === "privacy" ? setShowPrivacy(true) : setShowPrivacy(false);
    preference === "accessibility"
      ? setShowAccessibility(true)
      : setShowAccessibility(false);
    preference === "language"
      ? setShowLangRegion(true)
      : setShowLangRegion(false);
  }, [preference]);

  const handleChange = e => {
    setPreference(e.target.value);
    console.log(preference);
  };

  return (
    <>
      <Header />
      <div className={`${styles.preferenceCon} border-top`}>
        <div className={`${styles.body} mx-auto d-flex`}>
          <select
            value={preference}
            onChange={handleChange}
            className={`${styles.dropdownCon}`}
          >
            <option value="notifications">Notifications</option>
            <option value="sidebar">Sidebar</option>
            <option value="appearance">Appearance</option>
            <option value="privacy">Privacy</option>
            <option value="accessibility">Accessibility</option>
            <option value="language">Language & Region</option>
          </select>

          <div
            className={`${styles.sidebar} ${styles.btnCon} w-25 border-end pt-5`}
          >
            <button
              onClick={notifications}
              className={`${styles.preference} 
                  d-flex border rounded w-75 align-items-center py-2 mb-3`}
              role="button"
            >
              <img src={notification} className="me-3 ms-1" alt="" />
              <p className="mb-0">Notifications</p>
            </button>
            <button
              onClick={sidebar}
              className={`${styles.preference} 
                  d-flex border rounded w-75 align-items-center py-2 mb-3`}
              role="button"
            >
              <img src={slider} className="me-3 ms-1" alt="" />
              <p className="mb-0">Sidebar</p>
            </button>
            <button
              onClick={appearance}
              className={`${styles.preference} 
                  d-flex border rounded w-75 align-items-center py-2 mb-3`}
              role="button"
            >
              <img src={colorfilter} className="me-3" alt="" />
              <p className="mb-0">Appearance</p>
            </button>
            <button
              onClick={privacy}
              className={`${styles.preference} 
                d-flex border rounded w-75 align-items-center py-2 mb-3`}
              role="button"
            >
              <img src={security} className="me-3" alt="" />
              <p className="mb-0">Privacy</p>
            </button>
            <button
              onClick={accessibility}
              className={`${styles.preference} 
                  d-flex border rounded w-75 align-items-center py-2 mb-3`}
              role="button"
            >
              <img src={monitor} className="me-3" alt="" />
              <p className="mb-0">Accessibility</p>
            </button>
            <button
              onClick={langRegion}
              className={`${styles.preference} 
                  d-flex border rounded w-75 align-items-center py-2 mb-3`}
              role="button"
            >
              <img src={global} className="me-3" alt="" />
              <p className="mb-0">Language & Region</p>
            </button>
          </div>

          <div className={`${styles.mainbar} w-75`}>
            {showAccessibility && <Accessibility />}
            {showAppearance && <Appearance />}
            {showLangRegion && <LangRegion />}
            {showNotifications && <Notifications />}
            {showPrivacy && <Privacy />}
            {showSidebar && <Sidebar />}
          </div>
        </div>
      </div>
    </>
  );
}
