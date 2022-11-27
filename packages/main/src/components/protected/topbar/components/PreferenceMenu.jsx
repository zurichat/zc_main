import React, { useContext } from "react";
import styles from "../styles/PreferenceMenu.module.css";
import { ProfileContext } from "../context/profile-modal.context";
import { AiOutlineBell, AiOutlineEye, AiOutlineSetting } from "react-icons/ai";
import { FiMessageCircle, FiGlobe } from "react-icons/fi";

import { useTranslation } from "react-i18next";

const PreferenceMenu = () => {
  const { t } = useTranslation();
  const { sideBar, setSideBar } = useContext(ProfileContext);

  return (
    <div className={styles.notifySidebar} id="preferences-menu-container">
      <div className={styles.itemsContainer}>
        <div
          onClick={() => setSideBar(1)}
          className={sideBar === 1 ? styles.active : styles.one}
        >
          <AiOutlineBell className={styles.icon} />
          <p style={{ marginBottom: 0 }}>{t("notifications")}</p>
        </div>

        {/* <div
          onClick={() => setSideBar(3)}
          className={sideBar === 3 ? styles.active : styles.one}
        >
          <AiOutlineEye className={styles.icon} />
          <p style={{ marginBottom: 0 }}>Themes</p>
        </div> */}
        <div
          onClick={() => setSideBar(4)}
          className={sideBar === 4 ? styles.active : styles.one}
        >
          <FiMessageCircle className={styles.icon} />
          <p style={{ marginBottom: 0 }}>{t("message_media")}</p>
        </div>
        <div
          onClick={() => setSideBar(5)}
          className={sideBar === 5 ? styles.active : styles.one}
        >
          <FiGlobe className={styles.icon} />
          <p style={{ marginBottom: 0 }}>{t("language_region")}</p>
        </div>
        {/* <div
          onClick={() => setSideBar(6)}
          className={sideBar === 6 ? styles.active : styles.one}
        >
          <CgScreen className={styles.icon} />
          <p>Accessibility</p>
        </div> */}
        {/* <div
          onClick={() => setSideBar(7)}
          className={sideBar === 7 ? styles.active : styles.one}
        >
          <BsCheckCircle className={styles.icon} />
          <p>
            Mark as read
          </p>
        </div> */}

        <div
          onClick={() => setSideBar(9)}
          className={sideBar === 9 ? styles.active : styles.one}
        >
          <AiOutlineSetting className={styles.icon} />
          <p style={{ marginBottom: 0 }}>{t("advanced")}</p>
        </div>
      </div>
    </div>
  );
};

export default PreferenceMenu;
