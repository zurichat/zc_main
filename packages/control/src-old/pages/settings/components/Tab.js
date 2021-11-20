import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/Tab.module.css";
import SettingsTab from "./SettingsTab";
import ProfileTab from "./ProfileTab";
import NotificationTab from "./NotificationTab";
import { FaBars } from "react-icons/fa";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [menu, setMenu] = useState(true);
  const history = useHistory();
  useEffect(() => {
    setMenu(!menu);
  }, []);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div className={styles.tabcontainer}>
      <h3>Account</h3>
      <div className={styles.tabcenter}>
        <div className={styles.mobiletab} onClick={() => setMenu(!menu)}>
          <FaBars />
        </div>
        {/* THE SECTIO OF THE TABS */}
        <div
          className={styles.bloctabs}
          id={menu ? styles.bloctabs : styles.none}
          onClick={() => setMenu(!menu)}
        >
          <button
            className={
              toggleState === 1
                ? `${styles.tabs} ${styles.activetabs}`
                : styles.tabs
            }
            onClick={() => toggleTab(1)}
          >
            Settings
          </button>

          <button
            className={
              toggleState === 2
                ? `${styles.tabs} ${styles.activetabs}`
                : styles.tabs
            }
            onClick={() => toggleTab(2)}
          >
            Notification
          </button>

          <button
            className={
              toggleState === 3
                ? `${styles.tabs} ${styles.activetabs}`
                : styles.tabs
            }
            // onClick={() => toggleTab(3)}
            onClick={() => {
              history.push("/home");
            }}
          >
            Profile
          </button>

          <button
            className={
              toggleState === 4
                ? `${styles.tabs} ${styles.activetabs}`
                : styles.tabs
            }
            //   onClick={() => toggleTab(4)}
          >
            Access Log
          </button>
          {/* </div> */}
        </div>

        {/* THE SECTION OF THE CONTENT */}
        <div className={styles.contenttabs}>
          <div
            className={
              toggleState === 1
                ? `${styles.content} ${styles.activecontent}`
                : styles.content
            }
          >
            <SettingsTab />
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.content} ${styles.activecontent}`
                : styles.content
            }
          >
            <NotificationTab />
          </div>

          <div
            className={
              toggleState === 3
                ? `${styles.content} ${styles.activecontent}`
                : styles.content
            }
          >
            <ProfileTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
