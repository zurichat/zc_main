import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

import ZuriChatLogo from "../../assets/zuri-chat-logo/logo.svg";
import facebook from "../../assets/social-icons/facebook.svg";
import twitter from "../../assets/social-icons/twitter.svg";
import linkedin from "../../assets/social-icons/linkedin.svg";
import instagram from "../../assets/social-icons/instagram.png";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const getYear = () => {
    return new Date().getFullYear();
  };

  const textAlign = () => {
    if (
      window.localStorage.myLanguage === "ar" ||
      window.localStorage.myLanguage === "iw"
    ) {
      return {
        textAlign: "right"
      };
    }
  };

  return (
    <div className={styles.footer} style={textAlign()}>
      <div className={styles.top_footer}>
        <div className={styles.logo}>
          <Link to="/" className={`me-0 me-md-2 ${styles.link}`}>
            <img
              className={`d-inline-block align-top ${styles.logo_img}`}
              src={ZuriChatLogo}
              alt="zuri-logo"
              width={40}
            />
            <span translate="no" className={styles.logo_name}>
              Zuri Chat
            </span>
          </Link>
        </div>

        <div className={styles.menu}>
          <div>
            <h5>{t("footer_know_us")}</h5>
            <ul>
              <li>
                <Link to="/contact-us">{t("footer_contact")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>{t("footer_info")}</h5>
            <ul>
              <li>
                <Link to="/privacy">{t("footer_privacy")}</Link>{" "}
              </li>
              <li>
                <a href="https://docs.zuri.chat/">
                  {t("footer_documentation")}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <h5>{t("footer_social_media")}</h5>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Zuri-Chat-101278805666628"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    width={24}
                    title="Connect with us on Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/zurichathq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    width={21}
                    title="Connect with us on Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/zurichat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter"
                    width={24}
                    title="Connect with us on Twitter"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/zuri-chat/">
                  <img
                    src={linkedin}
                    alt="Linkedin"
                    width={24}
                    title="Connect with us on Linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom_footer}>
        <p>
          &copy; {getYear()} Zuri Chat. {t("footer_rights")}
        </p>
        <p>Version - {process.env.REACT_APP_VERSION}</p>
      </div>
    </div>
  );
}
