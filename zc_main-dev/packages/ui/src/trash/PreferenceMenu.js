import React, { useContext } from "react";
import styles from "../styles/PreferenceMenu.module.css";
import { ProfileContext } from "../context/ProfileModal";
import { AiOutlineBell, AiOutlineEye, AiOutlineSetting } from "react-icons/ai";
import { BsLayoutSidebar, BsCheckCircle } from "react-icons/bs";
import { FiMessageCircle, FiGlobe, FiVideo } from "react-icons/fi";
import { CgScreen } from "react-icons/cg";

const PreferenceMenu = () => {
  const { sideBar, setSideBar } = useContext(ProfileContext);

  return (
    <div className={styles.notifySidebar}>
      <div className={styles.itemsContainer}>
        <div
          onClick={() => setSideBar(1)}
          className={sideBar === 1 ? styles.active : styles.one}
        >
          <AiOutlineBell className={styles.icon} />
          <p>Notifications</p>
        </div>
        <div
          onClick={() => setSideBar(2)}
          className={sideBar === 2 ? styles.active : styles.one}
        >
          <BsLayoutSidebar className={styles.icon} />
          <p>Sidebar</p>
        </div>
        <div
          onClick={() => setSideBar(3)}
          className={sideBar === 3 ? styles.active : styles.one}
        >
          <AiOutlineEye className={styles.icon} />
          <p>Themes</p>
        </div>
        <div
          onClick={() => setSideBar(4)}
          className={sideBar === 4 ? styles.active : styles.one}
        >
          <FiMessageCircle className={styles.icon} />
          <p>Messages & Media</p>
        </div>
        <div
          onClick={() => setSideBar(5)}
          className={sideBar === 5 ? styles.active : styles.one}
        >
          <FiGlobe className={styles.icon} />
          <p>Languages & Region</p>
        </div>
        <div
          onClick={() => setSideBar(6)}
          className={sideBar === 6 ? styles.active : styles.one}
        >
          <CgScreen className={styles.icon} />
          <p>Accessibility</p>
        </div>
        <div
          onClick={() => setSideBar(7)}
          className={sideBar === 7 ? styles.active : styles.one}
        >
          <BsCheckCircle className={styles.icon} />
          <p>Mark as read</p>
        </div>
        <div
          onClick={() => setSideBar(8)}
          className={sideBar === 8 ? styles.active : styles.one}
        >
          <FiVideo className={styles.icon} />
          <p>Audio & Video</p>
        </div>
        <div
          onClick={() => setSideBar(9)}
          className={sideBar === 9 ? styles.active : styles.one}
        >
          <AiOutlineSetting className={styles.icon} />
          <p>Advanced</p>
        </div>
      </div>
    </div>
  );
};

export default PreferenceMenu;
