/* eslint-disable react/no-unknown-property */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import TopNavigationBarStyles from "./TopNavigationBar.module.css";
import ZuriChatLogo from "../../assets/zuri-chat-logo/logo.svg";

import uk from "./assets/language/uk.png";
import de from "./assets/language/de.png";
import fr from "./assets/language/fr.png";
import us from "./assets/language/us.png";
import ar from "./assets/language/ar.png";
import es from "./assets/language/es.png";
import it from "./assets/language/it.png";
import zh from "./assets/language/zh.png";
import he from "./assets/language/he.png";
import nl from "./assets/language/nl.png";
import pt from "./assets/language/pt.png";
import world from "./assets/language/world.png";

export default function TopNavigationBar() {
  const { t } = useTranslation();

  const saveLang = lang => {
    localStorage.setItem("myLanguage", lang);
    location.reload();
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = React.useState(false);

  const checkIfUserIsLogged = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let token = sessionStorage.getItem("token");
    setUserLoggedIn(user && token);
  };

  React.useEffect(() => {
    checkIfUserIsLogged();
  }, []);

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
    <header className={TopNavigationBarStyles.pageHeader} style={textAlign()}>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${TopNavigationBarStyles.navbar}`}
      >
        <Link
          to="/"
          className={`navbar-brand me-0 me-md-2 d-flex align-items-center ${TopNavigationBarStyles.navbarBrand}`}
        >
          <img
            src={ZuriChatLogo}
            alt="zuri-logo"
            className={`d-inline-block align-top ${TopNavigationBarStyles.image}`}
            width={40}
          />
          <span translate="no" className={`${TopNavigationBarStyles.zuriChat}`}>
            Zuri Chat
          </span>
        </Link>

        <div className={`d-lg-none ${TopNavigationBarStyles.language}`}>
          <button
            onClick={() => setIsModalOpen(true)}
            className={TopNavigationBarStyles.world}
          >
            <img
              src={world}
              alt="Change Language"
              title="Choose your Language"
            />{" "}
          </button>
          <Modal
            size="lg"
            show={isModalOpen}
            onHide={() => setIsModalOpen(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header
              className={TopNavigationBarStyles.modal_header}
              closeButton
              closeLabel
            >
              <Modal.Title id="example-modal-sizes-title-lg">
                Select your language
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={TopNavigationBarStyles.country}>
              <button
                value="en"
                onClick={() => saveLang("en")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={uk}
                  alt="English (UK)"
                  title="English (UK)"
                />{" "}
                <span>English (UK)</span>
              </button>
              <button
                value="en-us"
                onClick={() => saveLang("en-us")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={us}
                  alt="English (US)"
                  title="English (US)"
                />{" "}
                <span>English (US)</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="fr"
                onClick={() => saveLang("fr")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={fr}
                  alt="Dutch"
                  title="French"
                />{" "}
                <span>French</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="zh"
                onClick={() => saveLang("zh")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={zh}
                  alt="Chinese"
                  title="Chinese"
                />{" "}
                <span>Chinese</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="de"
                onClick={() => saveLang("de")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={de}
                  alt="Deutch"
                  title="Deutch"
                />{" "}
                <span>Deutch</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="ar"
                onClick={() => saveLang("ar")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={ar}
                  alt="Arabic"
                  title="Arabic"
                />{" "}
                <span>Arabic</span>
              </button>
              <button
                value="en"
                onClick={() => saveLang("en")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={uk}
                  alt="English (UK)"
                  title="English (UK)"
                />{" "}
                <span>English (UK)</span>
              </button>
              <button
                value="en-us"
                onClick={() => saveLang("en-us")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={us}
                  alt="English (US)"
                  title="English (US)"
                />{" "}
                <span>English (US)</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="fr"
                onClick={() => saveLang("fr")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={fr}
                  alt="French"
                  title="French"
                />{" "}
                <span>French</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="de"
                onClick={() => saveLang("de")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={de}
                  alt="Deutch"
                  title="Deutch"
                />{" "}
                <span>Deutch</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="ar"
                onClick={() => saveLang("ar")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={ar}
                  alt="Arabic"
                  title="Arabic"
                />{" "}
                <span>Arabic</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="iw"
                onClick={() => saveLang("iw")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={he}
                  alt="Hebrew"
                  title="Hebrew"
                />{" "}
                <span>Hebrew</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="es"
                onClick={() => saveLang("es")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={es}
                  alt="Spanish"
                  title="Spanish"
                />{" "}
                <span>Spanish</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="it"
                onClick={() => saveLang("it")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={it}
                  alt="Italian"
                  title="Italian"
                />{" "}
                <span>Italian</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="zh"
                onClick={() => saveLang("zh")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={zh}
                  alt="Chinese"
                  title="Chinese"
                />{" "}
                <span>Chinese</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="pt"
                onClick={() => saveLang("pt")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={pt}
                  alt="Portuguese"
                  title="Portguese"
                />{" "}
                <span>Portuguese</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="nl"
                onClick={() => saveLang("nl")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={nl}
                  alt="Dutch"
                  title="Dutch"
                />{" "}
                <span>Dutch</span>
              </button>
            </Modal.Body>
          </Modal>
        </div>

        <button
          className={`navbar-toggler ${TopNavigationBarStyles.toggle}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={TopNavigationBarStyles.navbar_toggle_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </span>
        </button>
        <div
          className={`collapse px-3 justify-content-between navbar-collapse ${TopNavigationBarStyles.collapse}`}
          id="navbarText"
        >
          <ul
            className={`navbar-nav d-flex justify-content-center align-items-center mx-auto ${TopNavigationBarStyles.navbarNav}`}
          >
            <li className="nav-item">
              <NavLink
                to="/downloads"
                className={`nav-link ${TopNavigationBarStyles.navLinkFeatures}`}
                aria-current="page"
              >
                <span className={`${TopNavigationBarStyles.item}`}>
                  {t("nav_downloads")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={{ pathname: "https://docs.zuri.chat/" }}
                target="_blank"
                className={`nav-link ${TopNavigationBarStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${TopNavigationBarStyles.item}`}>
                  {t("nav_documentation")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className={`nav-link ${TopNavigationBarStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${TopNavigationBarStyles.item}`}>
                  {t("nav_contact")}
                </span>
              </NavLink>
            </li>
          </ul>
          <ul
            className={`d-lg-none navbar-nav-scroll ${TopNavigationBarStyles.signs}`}
          >
            <li className="nav-item" data-cy="top_navigation_bar_signup_button">
              <Link to="/signup" className={`btn nav-link`}>
                <span className={`${TopNavigationBarStyles.signU}`}>
                  {t("nav_signup")}
                </span>
              </Link>
            </li>
            <li className="nav-item" data-cy="top_navigation_bar_login_button">
              <Link to="/login" className={`btn nav-link`} role="button">
                <span className={`${TopNavigationBarStyles.signIn}`}>
                  {t("nav_login")}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll ${TopNavigationBarStyles.signs}`}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className={TopNavigationBarStyles.world}
          >
            <img
              src={world}
              alt="Change Language"
              title="Choose your Language"
            />{" "}
          </button>
          <Modal
            size="lg"
            show={isModalOpen}
            onHide={() => setIsModalOpen(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header
              className={TopNavigationBarStyles.modal_header}
              closeButton
              closeLabel
            >
              <Modal.Title id="example-modal-sizes-title-lg">
                Select your language
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={TopNavigationBarStyles.country}>
              <button
                value="en"
                onClick={() => saveLang("en")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={uk}
                  alt="English (UK)"
                  title="English (UK)"
                />{" "}
                <span>English (UK)</span>
              </button>
              <button
                value="en-us"
                onClick={() => saveLang("en-us")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={us}
                  alt="English (US)"
                  title="English (US)"
                />{" "}
                <span>English (US)</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="fr"
                onClick={() => saveLang("fr")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={fr}
                  alt="French"
                  title="French"
                />{" "}
                <span>French</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="de"
                onClick={() => saveLang("de")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={de}
                  alt="Deutch"
                  title="Deutch"
                />{" "}
                <span>Deutch</span>
              </button>
            </Modal.Body>

            <Modal.Body className={TopNavigationBarStyles.country}>
              <button
                value="ar"
                onClick={() => saveLang("ar")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={ar}
                  alt="Arabic"
                  title="Arabic"
                />{" "}
                <span>Arabic</span>
              </button>
              <button
                value="iw"
                onClick={() => saveLang("iw")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={he}
                  alt="Hebrew"
                  title="Hebrew"
                />{" "}
                <span>Hebrew</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="es"
                onClick={() => saveLang("es")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={es}
                  alt="Spanish"
                  title="Spanish"
                />{" "}
                <span>Spanish</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="it"
                onClick={() => saveLang("it")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={it}
                  alt="Italian"
                  title="Italian"
                />{" "}
                <span>Italian</span>
              </button>
            </Modal.Body>

            <Modal.Body className={TopNavigationBarStyles.country}>
              <button
                value="zh"
                onClick={() => saveLang("zh")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={zh}
                  alt="Chinese"
                  title="Chinese"
                />{" "}
                <span>Chinese</span>
              </button>
              <button
                value="pt"
                onClick={() => saveLang("pt")}
                className={`btn ${TopNavigationBarStyles.select}`}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={pt}
                  alt="Portuguese"
                  title="Portuguese"
                />{" "}
                <span>Portuguese</span>
              </button>
              <button
                className={`btn ${TopNavigationBarStyles.select}`}
                value="nl"
                onClick={() => saveLang("nl")}
              >
                <img
                  className={TopNavigationBarStyles.country_logo}
                  src={nl}
                  alt="Dutch"
                  title="Dutch"
                />{" "}
                <span>Dutch</span>
              </button>
            </Modal.Body>
          </Modal>
        </div>

        <ul
          className={`navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll ${TopNavigationBarStyles.signs}`}
        >
          {!isUserLoggedIn ? (
            <>
              <li>
                <Link to="/signup" className={`nav-link`}>
                  <span className={`${TopNavigationBarStyles.signU}`}>
                    {t("nav_signup")}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/login" className={`nav-link`}>
                  <span className={`${TopNavigationBarStyles.signIn}`}>
                    {t("nav_login")}
                  </span>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signout" className={`nav-link`}>
                <span className={`${TopNavigationBarStyles.signOut}`}>
                  {t("nav_signout")}
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
