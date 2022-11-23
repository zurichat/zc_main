import React from "react";
import AdminSettings from ".";
import AdminTab from "./components/AdminTab";
import styles from "./styles/adminBilling.module.css";

const Billing = () => {
  return (
    <AdminSettings>
      <div className={styles.billingContainer}>
        <div className={styles.contentWrapper}>
          <h5 className={styles.contentHeading}>Billing</h5>
          <AdminTab />
        </div>
      </div>
    </AdminSettings>
  );
};

export default Billing;
