import React from "react";
import styles from "../help/styles/Help.module.css";
import invalid from "./assets/undraw_Mobile_app_re_catg.svg";
import tech from "./assets/undraw_online_payments_luau.svg";
import mono from "./assets/undraw_pay_online_b1hk.svg";
import mylogo from "./assets/Captures.JPG";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={`${styles.help}`}>
        <img src={mylogo} alt={"ylogo"} srcSet="" />
        <br />
        <br />
        <h1>{t("help_signing")}</h1>
      </div>
      <div className={`${styles.firstlayer}`}>
        <div className={`col-lg-6 ${styles.invalid}`}>
          <img src={invalid} alt={"invalid"} srcSet="" />
        </div>
        <div className={`${styles.firstcontent}`}>
          <h5>{t("help_wrongUserName")}</h5>
          <br />

          <p>{t("help_fullEmail")}</p>
        </div>
      </div>
      <div className={`${styles.secondlayer}`}>
        <div className={`col-lg-6 ${styles.tech}`}>
          <img src={tech} alt={"tech"} srcSet="" />
        </div>
        <div className={`${styles.secondcontent}`}>
          <h5>{t("help_forgotEmail")}</h5>
          <br />

          <p>{t("help_otherPhoneNumber")}</p>
        </div>
      </div>
      <div className={`${styles.thirdlayer}`}>
        <div className={`col-lg-6 ${styles.mono}`}>
          <img src={mono} alt={"mono"} srcSet="" />
        </div>
        <div className={`${styles.thirdcontent}`}>
          <h5>{t("help_resetP")}</h5>
          <br />

          <p>{t("help_resetPassword")}</p>
        </div>
      </div>
    </div>
  );
};
export default Help;
