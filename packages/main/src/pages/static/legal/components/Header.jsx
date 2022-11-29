/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import headerStyles from "../styles/HeaderStyle.module.css";
import zurichatlogo from "../assets/zurilogo.svg";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";

import world from "../language/world.png";
import uk from "../language/uk.png";
import de from "../language/de.png";
import fr from "../language/fr.png";
import zh from "../language/zh.png";
import es from "../language/es.png";
import it from "../language/it.png";
import us from "../language/us.png";
import ar from "../language/ar.png";
import he from "../language/he.png";
import pt from "../language/pt.png";

const HeaderSearchSuggestion = () => {
  const { t } = useTranslation();

  const saveLang = lang => {
    localStorage.setItem("myLanguage", lang);
    location.reload();
  };

  const [lgShow, setLgShow] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const checkIfUserIsLogged = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let token = sessionStorage.getItem("token");
    setUserLoggedIn(user && token);
  };

  useEffect(() => {
    checkIfUserIsLogged();
  }, []);

  return (
    <header className={headerStyles.pageHeader}>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${headerStyles.navbar}`}
      >
        <Link
          to="/"
          className={`navbar-brand me-0 me-md-2 d-flex align-items-center ${headerStyles.navbarBrand}`}
        >
          <img
            src={zurichatlogo}
            alt="zuri-logo"
            className={`d-inline-block align-top ${headerStyles.image}`}
          />
          <span translate="no" className={`mb-2 ${headerStyles.zuriChat}`}>
            Zuri Chat
          </span>
        </Link>

        <div className={`d-lg-none ${headerStyles.language}`}>
          <button
            onClick={() => setLgShow(true)}
            className={headerStyles.world}
          >
            <img
              src={world}
              alt="Change Language"
              title="Choose your Language"
            />{" "}
          </button>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header
              className={headerStyles.modal_header}
              closeButton
              closeLabel
            >
              <Modal.Title id="example-modal-sizes-title-lg">
                Select your language
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={headerStyles.country}>
              <button
                value="en"
                onClick={() => saveLang("en")}
                className={`btn ${headerStyles.select}`}
              >
                <img
                  className={headerStyles.country_logo}
                  src={uk}
                  alt="English (UK)"
                  title="English (UK)"
                />{" "}
                <span>English (UK)</span>
              </button>
              <button
                value="en-us"
                onClick={() => saveLang("en-us")}
                className={`btn ${headerStyles.select}`}
              >
                <img
                  className={headerStyles.country_logo}
                  src={us}
                  alt="English (US)"
                  title="English (US)"
                />{" "}
                <span>English (US)</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="fr"
                onClick={() => saveLang("fr")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={fr}
                  alt="French"
                  title="French"
                />{" "}
                <span>French</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="zh"
                onClick={() => saveLang("zh-CN")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={zh}
                  alt="Chinese"
                  title="Chinese"
                />{" "}
                <span>简体中文</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="ar"
                onClick={() => saveLang("ar")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={ar}
                  alt="Arabic"
                  title="Arabic"
                />{" "}
                <span>العربية</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="de"
                onClick={() => saveLang("de")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={de}
                  alt="Deutch"
                  title="Deutch"
                />{" "}
                <span>Deutch</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="es"
                onClick={() => saveLang("es")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={es}
                  alt="Español"
                  title="Español"
                />{" "}
                <span>Español</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="it"
                onClick={() => saveLang("it")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={it}
                  alt="Italiano"
                  title="Italiano"
                />{" "}
                <span>Italiano</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="he"
                onClick={() => saveLang("he")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={he}
                  alt="Hebrew"
                  title="Hebrew"
                />{" "}
                <span>עברית</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="pt"
                onClick={() => saveLang("pt")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={pt}
                  alt="Português (PT)"
                  title="Português (PT)"
                />{" "}
                <span>Português</span>
              </button>
            </Modal.Body>
          </Modal>
        </div>

        <button
          className={`navbar-toggler ${headerStyles.toggle}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={headerStyles.navbar_toggle_icon}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div
          className={`collapse px-3 justify-content-between navbar-collapse ${headerStyles.collapse}`}
          id="navbarText"
        >
          <ul
            className={`navbar-nav d-flex justify-content-between align-items-center mx-auto ${headerStyles.navbarNav}`}
          >
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={`nav-link ${headerStyles.navLinkFeatures}`}
                aria-current="page"
              >
                <span className={`${headerStyles.item}`}>
                  {t("nav_pricing")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={`nav-link ${headerStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${headerStyles.item}`}>{t("nav_about")}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/plugins"
                className={`nav-link ${headerStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${headerStyles.item}`}>
                  {t("nav_plugin")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/downloads"
                className={`nav-link ${headerStyles.navLinkComms}`}
              >
                <span className={`${headerStyles.item}`}>
                  {t("nav_downloads")}
                </span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className="nav-link"
                role="button"
                aria-expanded="false"
              >
                <span className={`${headerStyles.item}`}>
                  {t("nav_contact")}
                </span>
              </NavLink>
            </li>
          </ul>

          <ul className={`d-lg-none navbar-nav-scroll ${headerStyles.signs}`}>
            <li className="nav-item">
              <Link to="/signup" className={`btn nav-link`}>
                <span className={`${headerStyles.signU}`}>
                  {t("nav_signup")}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className={`btn nav-link`} role="button">
                <span className={`${headerStyles.signIn}`}>
                  {t("nav_login")}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll ${headerStyles.signs}`}
        >
          <button
            onClick={() => setLgShow(true)}
            className={headerStyles.world}
          >
            <img
              src={world}
              alt="Change Language"
              title="Choose your Language"
            />{" "}
          </button>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header
              className={headerStyles.modal_header}
              closeButton
              closeLabel
            >
              <Modal.Title id="example-modal-sizes-title-lg">
                Select your language
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={headerStyles.country}>
              <button
                value="en"
                onClick={() => saveLang("en")}
                className={`btn ${headerStyles.select}`}
              >
                <img
                  className={headerStyles.country_logo}
                  src={uk}
                  alt="English (UK)"
                  title="English (UK)"
                />{" "}
                <span>English (UK)</span>
              </button>
              <button
                value="en-us"
                onClick={() => saveLang("en-us")}
                className={`btn ${headerStyles.select}`}
              >
                <img
                  className={headerStyles.country_logo}
                  src={us}
                  alt="English (US)"
                  title="English (US)"
                />{" "}
                <span>English (US)</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="fr"
                onClick={() => saveLang("fr")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={fr}
                  alt="French"
                  title="French"
                />{" "}
                <span>French</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="zh"
                onClick={() => saveLang("zh-CN")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={zh}
                  alt="Chinese"
                  title="Chinese"
                />{" "}
                <span>简体中文</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="ar"
                onClick={() => saveLang("ar")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={ar}
                  alt="Arabic"
                  title="Arabic"
                />{" "}
                <span>العربية</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="de"
                onClick={() => saveLang("de")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={de}
                  alt="Deutch"
                  title="Deutch"
                />{" "}
                <span>Deutch</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="es"
                onClick={() => saveLang("es")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={es}
                  alt="Español"
                  title="Español"
                />{" "}
                <span>Español</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="it"
                onClick={() => saveLang("it")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={it}
                  alt="Italiano"
                  title="Italiano"
                />{" "}
                <span>Italiano</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="he"
                onClick={() => saveLang("he")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={he}
                  alt="Hebrew"
                  title="Hebrew"
                />{" "}
                <span>עברית</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="pt"
                onClick={() => saveLang("pt")}
              >
                <img
                  className={headerStyles.country_logo}
                  src={pt}
                  alt="Português (PT)"
                  title="Português (PT)"
                />{" "}
                <span>Português</span>
              </button>
            </Modal.Body>
          </Modal>
        </div>

        <ul
          className={`navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll ${headerStyles.signs}`}
        >
          {!isUserLoggedIn ? (
            <>
              <li>
                <Link to="/signup" className={`nav-link`}>
                  <span className={`${headerStyles.signU}`}>
                    {t("landing.nav.signup")}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/login" className={`nav-link`}>
                  <span className={`${headerStyles.signIn}`}>
                    {t("landing.nav.login")}
                  </span>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signout" className={`nav-link`}>
                <span className={`${headerStyles.signIn}`}>
                  {t("landing.nav.signout")}
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default HeaderSearchSuggestion;
