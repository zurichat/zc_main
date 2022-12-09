import React, { useEffect } from "react";
import styles from "../retention-exports/Retention.module.css";
import { Link } from "react-router-dom";
import { FiAlertTriangle, FiAlertCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const RetentionAndExports = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.retention}>
      <h3 className={styles.h3}>{t("convo_R&E")}</h3>
      <div className={`${styles.upgrade} ${styles.upgradeDisplay}`}>
        <FiAlertTriangle className={styles.triangle} />
        <p className={styles.upgradeText}>
          {t("team_R&E")}{" "}
          <Link
            to="/pricing"
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            {t("upgrade_R&E")}
          </Link>
        </p>
      </div>
      <div className={`${styles.faq} ${styles.faqDisplay}`}>
        <FiAlertCircle className={styles.circle} />
        <p className={styles.faqText}>
          {t("default_R&E")}{" "}
          <Link
            to="/pricing"
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            {t("faq_R&E")}
          </Link>{" "}
          {t("quest_R&E")}
        </p>
      </div>
      <div className={styles.borderBottom}></div>
      <h3 className={styles.h3}> {t("data_R&E")}</h3>
      <div className={styles.adminAccessContent}>
        <h4 className={styles.h4}>{t("public_R&E")}</h4>
        <p className={styles.adminAccessContentText}>{t("workspace_R&E")}</p>
      </div>
    </div>
  );
};

export default RetentionAndExports;
