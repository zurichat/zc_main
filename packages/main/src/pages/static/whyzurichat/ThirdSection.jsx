import React from "react";
import styles from "./why.module.css";
import globe from "./images/globe.svg";

import { useTranslation } from "react-i18next";

export default function ThirdSection() {
  const { t } = useTranslation();

  return (
    <section>
      <div className={styles.why_head}>
        <article>
          <h3 style={{ lineHeight: "1.1em" }}>{t("Zuri_ThirdSession")}</h3>
          <p>{t("Teams_ThirdSession")}</p>
        </article>
        <img src={globe} alt="" />
      </div>
      <div className={styles.percentages}>
        <div className={styles.second_flex}>
          <div>
            <h3>85%</h3>
            <h4> {t("Feel_ThirdSession")}</h4>
          </div>
          <div>
            <h3>65%</h3>
            <h4> {t("Unhappy_ThirdSession")}</h4>
          </div>
        </div>
        <div className={styles.second_flex}>
          <div>
            <h3>90%</h3>
            <h4>{t("Connect_ThirdSession")}</h4>
          </div>
          <div>
            <h3>81%</h3>
            <h4>{t("Improve_ThirdSession")}</h4>
          </div>
          <div>
            <h3>60%</h3>
            <h4>{t("Depend_ThirdSession")}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
