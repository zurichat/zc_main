import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { cookieStorage } from "../../utils";

import styles from "./CookiesNotification.module.css";
import cookieIcon from "./assets/cookie-icon.svg";

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
          {t("textOne")}{" "}
          <Link to="/cookies-settings" className={styles.cookie}>
            {t("textTwo")}
          </Link>{" "}
          {t("textThree")}
        </span>
        <ul className={styles.buttons}>
          <li>
            <button onClick={handleClickAllow} className={styles.allow}>
              {t("accept")}
            </button>
          </li>
          <li>
            <button onClick={handleClickDecline} className={styles.decline}>
              {t("decline")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cookies;
