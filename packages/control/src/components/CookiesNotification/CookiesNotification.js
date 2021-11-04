import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cookieStorage from "../../utils/cookieStorage";

import styles from "./CookiesNotification.module.css";
import cookieIcon from "./assets/CookieIcon.svg";

const Cookies = () => {
  const { t } = useTranslation();

  const handleClickAllow = event => {
    cookieStorage.setItem("Zuri Chat Accept", "true", "2592000");
    event.target.parentNode.parentNode.parentNode.parentNode.style.opacity =
      "0";
  };

  const handleClickDecline = event => {
    cookieStorage.setItem("Zuri Chat Decline", "true");
    event.target.parentNode.parentNode.parentNode.parentNode.style.opacity =
      "0";
  };

  return (
    <div className={styles.bannerContainer}>
      <img src={cookieIcon} alt="cookies" title="cookies" />
      <div className={styles.cookie_body}>
        <span>
          {t("landing.cookies.textOne")}{" "}
          <Link to="/cookies-settings" className={styles.cookie}>
            {t("landing.cookies.textTwo")}
          </Link>{" "}
          {t("landing.cookies.textThree")}
        </span>
        <ul className={styles.buttons}>
          <li>
            <button onClick={handleClickAllow} className={styles.allow}>
              {t("landing.cookies.accept")}
            </button>
          </li>
          <li>
            <button onClick={handleClickDecline} className={styles.decline}>
              {t("landing.cookies.decline")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cookies;
