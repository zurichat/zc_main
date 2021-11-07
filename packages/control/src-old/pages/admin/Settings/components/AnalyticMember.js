import React, { useState } from "react";

import styles from "../styles/AdminSettingsTab.module.css";
import MembersTab from "../../components/MembersTab";

// icon
import { FiMenu } from "react-icons/fi";

const AdminSettingsTab = () => {
  const [openTab, setOpenTab] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div className={`${styles.tabWrapper} mt-4`}>
      <div onClick={() => setOpenTab(!openTab)} className={styles.mobileToggle}>
        <FiMenu className={styles.menuIcon} />
      </div>
      <div className={openTab ? styles.tabHeaderActive : styles.tabHeader}>
        <div
          onClick={() => {
            setActive(1);
            setOpenTab(!openTab);
          }}
          className={
            active === 1 ? styles.tabHeaderItemActive : styles.tabHeaderItem
          }
        >
          Members
        </div>
      </div>
      <div className={styles.tabContent}>{active === 1 && <MembersTab />}</div>
    </div>
  );
};

export default AdminSettingsTab;
