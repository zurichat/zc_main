import React, { useState } from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import styles from "./styles/adminSettings.module.css";

const AdminSettings = ({ children }) => {
  const [openModal, setModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <AdminHeader openModal={openModal} setModal={setModal} />
      <div className={styles.adminContainer}>
        <AdminSidebar openModal={openModal} setModal={setModal} />
        <div className={styles.settingsContent}>{children}</div>
      </div>
    </div>
  );
};

export default AdminSettings;
