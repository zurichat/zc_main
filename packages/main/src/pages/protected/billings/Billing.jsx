import React from "react";
import AdminSettings from "../admin-settings/AdminSettings";
import AdminTab from "../../../components/admin-tab/AdminTab";
import styles from "../billings/adminBilling.module.css";

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
