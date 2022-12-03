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

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  IMessage
} from "@novu/notification-center";

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
  const [user, setUser] = React.useState("");

  const checkIfUserIsLogged = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let token = sessionStorage.getItem("token");
    setUserLoggedIn(user && token);
    setUser(user);
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
          className={`navbar-brand me-0 me-md-2 d-flex ${TopNavigationBarStyles.navbarBrand}`}
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
            className={`navbar-nav d-flex mx-auto ${TopNavigationBarStyles.navbarNav}`}
          >
            <li className="nav-item">
              <NavLink
                to="/downloads"
                className={`nav-link ${TopNavigationBarStyles.navLinkFeatures}`}
                aria-current="page"
              >
                <span className={`px-2 ${TopNavigationBarStyles.item}`}>
                  {t("nav_downloads")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/documentation"
                className={`nav-link ${TopNavigationBarStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`px-2${TopNavigationBarStyles.item}`}>
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
                <span className={`px-2 ${TopNavigationBarStyles.item}`}>
                  {t("nav_contact")}
                </span>
              </NavLink>
            </li>
          </ul>
          {isUserLoggedIn && (
            <div className={TopNavigationBarStyles.notification}>
              <NovuProvider
                backendUrl={"http://139.144.17.179:3000"}
                socketUrl={"http://139.144.17.179:3002"}
                subscriberId={user.id}
                applicationIdentifier={"JJef8vc6vtAj"}
              >
                <PopoverNotificationCenter>
                  {({ unseenCount }) => (
                    <NotificationBell unseenCount={unseenCount} />
                  )}
                </PopoverNotificationCenter>
              </NovuProvider>
            </div>
          )}
          <ul
            className={`d-lg-none navbar-nav-scroll ${TopNavigationBarStyles.signs}`}
          >
            <li className="nav-item" data-cy="top_navigation_bar_signup_button">
              <Link to="/login" className={`btn nav-link`}>
                <span className={`${TopNavigationBarStyles.signU}`}>
                  {t("nav_login")}
                </span>
              </Link>
            </li>
            <li className="nav-item" data-cy="top_navigation_bar_login_button">
              <Link to="/signup" className={`btn nav-link`} role="button">
                <span className={`${TopNavigationBarStyles.signIn}`}>
                  {t("nav_signup")}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <ul
          className={`navbar-nav d-none d-lg-flex justify-content-center me-auto my-2 my-lg-0 navbar-nav-scroll ${TopNavigationBarStyles.signs}`}
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
        </ul>
      </nav>
    </header>
  );
}
