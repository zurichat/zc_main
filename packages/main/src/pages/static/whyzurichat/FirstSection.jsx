import React from "react";
import styles from "./why.module.css";
import transparency from "./images/transparency.svg";
import flexibility from "./images/flexibility.svg";
import collaboration from "./images/collaboration.svg";
import { useTranslation } from "react-i18next";

export default function FirstSection() {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className={styles.heading}>{t("Offer_FirstSession")}</h2>
      <p className={styles.text}>{t("Intro_FirstSession")}</p>

      <div className={styles.buttons}>
        <button> {t("Try_FirstSession")}</button>
        <button> {t("Sale_FirstSession")}</button>
      </div>
      <div className={styles.grid_2}>
        <div className={styles.benefit_boxes}>
          <article>
            <img src={transparency} alt="" />
            <h3>{t("Transparency_FirstSession")}</h3>
            <p>{t("Content_FirstSession")}</p>
          </article>
          <article>
            <img src={flexibility} alt="" />
            <h3>{t("Flex_FirstSession")}</h3>
            <p>{t("Popular_FirstSession")}</p>
          </article>
          <article>
            <img src={collaboration} alt="" />
            <h3> {t("collaborate_FirstSession")}</h3>
            <p>{t("words_FirstSession")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
