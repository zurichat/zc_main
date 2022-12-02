import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../../static/legal/styles/FooterStyle.module.css";
import logo from "../assets/zurilogo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  // googleTranslateElementInit();
  const { t } = useTranslation();

  const getYear = () => {
    return new Date().getFullYear();
  };

  const [show, setShow] = useState(false);
  const Show = () => {
    show ? setShow(false) : setShow(true);
  };
  const [show2, setShow2] = useState(false);
  const Show2 = () => {
    show2 ? setShow2(false) : setShow2(true);
  };
  const [show3, setShow3] = useState(false);
  const Show3 = () => {
    show3 ? setShow3(false) : setShow3(true);
  };
  const [show4, setShow4] = useState(false);
  const Show4 = () => {
    show4 ? setShow4(false) : setShow4(true);
  };

  return (
    /* laptop view*/
    <div className={styles.footer}>
      <div className={styles.top_footer}>
        <div className={styles.logo}>
          <Link to="/" className={`me-0 me-md-2 ${styles.link}`}>
            <img
              className={`d-inline-block align-top ${styles.logo_img}`}
              src={logo}
              alt="zuri-logo"
            />
            <span translate="no" className={styles.logo_name}>
              Zuri Chat
            </span>
          </Link>
        </div>

        <div className={styles.menu}>
          <div>
            <h5>{t("footer_company")}</h5>
            <ul>
              <li>
                <Link to="/careers">{t("footer_careers")}</Link>{" "}
              </li>
              <li>
                <Link to="/about">{t("footer_about")}</Link>{" "}
              </li>
              <li>
                <Link to="/whyzurichat">{t("footer_why_zuri_chat")}</Link>{" "}
              </li>
              <li>
                <Link to="/ZurichatBlog">{t("footer_blog")}</Link>{" "}
              </li>
            </ul>
          </div>

          <div>
            <h5>{t("footer_info")}</h5>
            <ul>
              <li>
                <Link to="/privacy">{t("footer_privacy")}</Link>
              </li>
              <li>
                <Link to="/legal">{t("footer_legal")}</Link>
              </li>
              <li>
                <Link to="/open-marketplace">{t("footer_market")}</Link>{" "}
              </li>
              <li>
                <Link to="/security">{t("footer_security")}</Link>{" "}
              </li>
              <li>
                <a href="https://zuri.chat/dao-features">{t("footer_web3")}</a>{" "}
              </li>
            </ul>
          </div>

          <div>
            <h5>{t("footer_know_us")}</h5>
            <ul>
              <li>
                <Link to="/downloads">{t("footer_downloads")}</Link>{" "}
              </li>
              <li>
                <Link to="/contact-us">{t("footer_contact")}</Link>{" "}
              </li>
              <li>
                <a href="https://docs.zuri.chat/">
                  {t("footer_documentation")}
                </a>{" "}
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
                    title="Connect with us on Twitter"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/zuri-chat/">
                  <img
                    src={linkedin}
                    alt="Linkedin"
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
          {" "}
          &copy; {getYear()} Zuri Chat. {t("footer_rights")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
