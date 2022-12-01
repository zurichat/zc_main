/* eslint-disable react/no-unknown-property */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FaBars } from "react-icons/fa";

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

  const lang = [
    { id: 1, value: "en", src: uk, title: "English (UK)"},
    { id: 2, value: "en-us", src: us, title: "English (US)"},
    { id: 3, value: "fr", src: fr, title: "French"},
    { id: 4, value: "de", src: de, title: "Deutch"},
    { id: 5, value: "ar", src: ar, title: "Arabic"},
    { id: 6, value: "iw", src: he, title: "Hebrew"},
    { id: 7, value: "es", src: es, title: "Spanish"},
    { id: 8, value: "it", src: it, title: "Italian"},
    { id: 9, value: "zh", src: zh, title: "Chinese"},
    { id: 10, value: "pt", src: pt, title: "Portugese"},
    { id: 11, value: "nl", src: nl, title: "Dutch"}
  ]

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

        <div className="d-flex align-items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className={TopNavigationBarStyles.world_mobile}
          >
            <img
              src={world}
              alt="Change Language"
              title="Choose your Language"
            />{" "}
          </button>

          <button
            className={`navbar-toggler ms-4 ${TopNavigationBarStyles.toggle}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={TopNavigationBarStyles.navbar_toggle_icon}>
              <FaBars />
            </span>
          </button>
        </div>

        <div
          className={`collapse px-3 justify-content-between navbar-collapse ${TopNavigationBarStyles.collapse}`}
          id="navbarText"
        >
          <ul
            className={`navbar-nav d-flex mx-auto ${TopNavigationBarStyles.navbarNav}`}
          >
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={`nav-link ${TopNavigationBarStyles.navLinkFeatures}`}
                aria-current="page"
              >
                <span className={`${TopNavigationBarStyles.item}`}>
                  {t("nav_pricing")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={`nav-link ${TopNavigationBarStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${TopNavigationBarStyles.item}`}>
                  {t("nav_about")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/downloads"
                className={`nav-link ${TopNavigationBarStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${TopNavigationBarStyles.item}`}>
                  Downloads
                </span>
              </NavLink>
            </li>
          </ul>

          <ul
            className={`d-flex me-auto mb-0 ${TopNavigationBarStyles.signs}`}
          >

          <button
            onClick={() => setIsModalOpen(true)}
            className={TopNavigationBarStyles.world_desktop}
          >
            <img
              src={world}
              alt="Change Language"
              title="Choose your Language"
            />{" "}
          </button>

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
        </div>

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

              {
                lang.map(element => {
                  return (
                    <button
                    key={element.id}
                      value={element.value}
                      onClick={() => saveLang(element.value)}
                      className={`btn ${TopNavigationBarStyles.select}`}
                    >
                      <img
                        className={TopNavigationBarStyles.country_logo}
                        src={element.src}
                        alt={element.title}
                        title={element.title}
                      />{" "}
                      <span>{element.title}</span>
                    </button>
                  )
                })
              }
            </Modal.Body>
          </Modal>
   

      </nav>
      
    </header>
  );
}
