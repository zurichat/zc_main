import React from "react";
import styles from "../styles/DiscoverMore.module.css";
import { useTranslation } from "react-i18next";

const DiscoverMore = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.dicover_wrapper}>
      <div className={styles.container}>
        <h3>{t("discoverMore")}</h3>
        <p className={styles.sub1}>{t("sub1")}</p>
        <p className={styles.sub2}>{t("helpCenter")}</p>
      </div>
    </section>
  );
};

export default DiscoverMore;
