import React from "react";
import styles from "../styles/Message.module.css";
import { useTranslation } from "react-i18next";

const Message = ({ type }) => {
  const { t } = useTranslation();

  if (type === "contact") {
    return (
      <div className={styles.message_box}>
        <p className={styles.p}>Discover More.</p>
        <span className={styles.span}>
          From channels to chat,learn how zuri chat works from top to bottom
        </span>
        <div className={styles.buttonSection}>
          <button className={`${styles.button} ${styles.buttonOutline}`}>
            <a className={styles.a} href="/help-center">
              Visit Help Center
            </a>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.message_box}>
      <div className={styles.message}>
        <p className={styles.p}>{t("pricing.sectionFour.headline")}</p>
        <div className={styles.buttonSection}>
          <button className={styles.buttonFilled}>
            <a className={styles.a} href="/contact-us">
              {t("pricing.sectionFour.button_one")}
            </a>
          </button>
          <button className={styles.buttonOutline}>
            <a className={styles.a} href="/login">
              {t("pricing.sectionFour.button_two")}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Message;
