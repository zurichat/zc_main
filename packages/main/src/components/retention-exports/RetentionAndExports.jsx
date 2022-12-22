import React, { useEffect } from "react";
import styles from "../retention-exports/Retention.module.css";
import { Link } from "react-router-dom";
import { FiAlertTriangle, FiAlertCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const RetentionAndExports = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.retention}>
      <h3 className={styles.h3}>{t("convo_r&e")}</h3>
      <div className={`${styles.upgrade} ${styles.upgradeDisplay}`}>
        <FiAlertTriangle className={styles.triangle} />
        <p className={styles.upgradeText}>
          {t("team_r&e")}{" "}
          <Link
            to="/pricing"
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            {t("upgrade_r&e")}
          </Link>
        </p>
      </div>
      <div className={`${styles.faq} ${styles.faqDisplay}`}>
        <FiAlertCircle className={styles.circle} />
        <p className={styles.faqText}>
          {t("default_r&e")}{" "}
          <Link
            to="/pricing"
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            {t("faq_r&e")}
          </Link>{" "}
          {t("quest_r&e")}
        </p>
      </div>
      <div className={styles.borderBottom}></div>
      <h3 className={styles.h3}> {t("data_r&e")}</h3>
      <div className={styles.adminAccessContent}>
        <h4 className={styles.h4}>{t("public_r&e")}</h4>
        <p className={styles.adminAccessContentText}>{t("workspace_r&e")}</p>
      </div>
    </div>
  );
};

export default RetentionAndExports;
