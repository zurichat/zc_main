import React from "react";
import styles from "./why.module.css";
import organize from "./images/organize.svg";
import productive from "./images/productive.svg";
import align from "./images/align.svg";

import { useTranslation } from "react-i18next";

export default function SecondSection() {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className={styles.heading}>{t("WhyZuri_SecondSession")}</h2>
      <div className={styles.why_cards}>
        <div className={styles.why_card}>
          <article>
            <h3>{t("Organize_SecondSession")}</h3>
            <p>{t("Content_SecondSession")}</p>
          </article>

          <img src={organize} alt="" />
        </div>
        <div className={styles.why_card}>
          <article>
            <h3>{t("Create_SecondSession")}</h3>
            <p>{t("Offers_SecondSession")}</p>
          </article>

          <img src={align} alt="" />
        </div>
        <div className={styles.why_card}>
          <article>
            <h3>{t("Product_SecondSession")}</h3>
            <p>{t("Hub_SecondSession")}</p>
          </article>

          <img src={productive} alt="" />
        </div>
      </div>
    </section>
  );
}
