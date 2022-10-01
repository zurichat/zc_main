import React, { useEffect } from "react";
import styles from "../styles/retention.module.css";
import { Link } from "react-router-dom";
import { FiAlertTriangle, FiAlertCircle } from "react-icons/fi";

const RetentionAndExports = () => {
  return (
    <div className={styles.retention}>
      <h3 className={styles.h3}>How long is conversation history kept?</h3>
      <div className={`${styles.upgrade} ${styles.upgradeDisplay}`}>
        <FiAlertTriangle className={styles.triangle} />
        <p className={styles.upgradeText}>
          Your team is not on a paid tier and therefore cannot customize
          retention policies.{" "}
          <Link
            to="/pricing"
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            Upgrade Today
          </Link>
        </p>
      </div>
      <div className={`${styles.faq} ${styles.faqDisplay}`}>
        <FiAlertCircle className={styles.circle} />
        <p className={styles.faqText}>
          By default, Zuri Chat will save your message data for the lifetime of
          your workspace. With this setting, Zuri Chat will not keep logs of
          users’ message edits and deletions. Please{" "}
          <Link
            to="/pricing"
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            see our FAQ
          </Link>{" "}
          for questions about the specific retention policy types.
        </p>
      </div>
      <div className={styles.borderBottom}></div>
      <h3 className={styles.h3}>What data can my admins access?</h3>
      <div className={styles.adminAccessContent}>
        <h4 className={styles.h4}>Public data can be exported</h4>
        <p className={styles.adminAccessContentText}>
          Workspace Owners and Admins can export messages and files from public
          channels.
        </p>
      </div>
    </div>
  );
};

export default RetentionAndExports;
