/* eslint-disable react/no-unknown-property */
import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import headerStyles from "../component-styles/HeaderStyle.module.css"
import zurichatlogo from "../component-assets/zurilogo.svg"
// import searchIcon from "../component-assets/searchIcon.svg"
//import { Button } from '../pages/createworkspace/components/WorkspaceHome'
import { useTranslation } from "react-i18next"
import Modal from "react-bootstrap/Modal"

import world from "../component-assets/language/world.png"
import uk from "../component-assets/language/uk.png"
import ar from "../component-assets/language/ar.png"
import de from "../component-assets/language/de.png"
import fr from "../component-assets/language/fr.png"
import us from "../component-assets/language/us.png"
import zh from "../component-assets/language/zh.png"

const HeaderSearchSuggestion = () => {
  const { t } = useTranslation()

  const saveLang = lang => {
    localStorage.setItem("myLanguage", lang)
    //console.log(localStorage.getItem('myLanguage'))
    location.reload()
  }

  const [lgShow, setLgShow] = useState(false)
  //const ref = useRef()
  //const toggleBgOverlay = () => {
  //  document
  //    .querySelector(`.${headerStyles.navContainer}`)
  //    .classList.toggle(headerStyles.bg_overlay)
  //}
  //
  //useEffect(() => {
  //  const checkIfClickedOutside = e => {
  //    const element = document.getElementById("navbarText")
  //
  //    if (
  //      ref.current &&
  //      !ref.current.contains(e.target) &&
  //      element.classList.contains("show")
  //    ) {
  //      element.classList.remove("show")
  //      toggleBgOverlay()
  //    }
  //  }
  //
  //  document.addEventListener("mousedown", checkIfClickedOutside)
  //
  //  return () => {
  //    // Cleanup the event listener
  //    document.removeEventListener("mousedown", checkIfClickedOutside)
  //  }
  //}, [])

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
          <span className={`mb-2 ${headerStyles.zuriChat}`}>Zuri Chat</span>
        </Link>

        {/* <select
          className={`btn btn-transparent  ${headerStyles.select}`}
          type="button"
          onChange={() => saveLang(event.target.value)}
        >
          <option>Change Language</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="zh">Chinese</option>
          <option value="de">German</option>
          <option value="ar">Arabic</option>
        </select> */}

        <div className={`d-lg-none navbar-nav-scroll ${headerStyles.language}`}>
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
                onClick={() => saveLang(event.target.value)}
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
                className={`btn ${headerStyles.select}`}
                value="fr"
                onClick={() => saveLang(event.target.value)}
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
                onClick={() => saveLang(event.target.value)}
              >
                <img
                  className={headerStyles.country_logo}
                  src={zh}
                  alt="Chinese"
                  title="Chinese"
                />{" "}
                <span>Chinese</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="ar"
                onClick={() => saveLang(event.target.value)}
              >
                <img
                  className={headerStyles.country_logo}
                  src={ar}
                  alt="Arabic"
                  title="Arabic"
                />{" "}
                <span>Arabic</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="de"
                onClick={() => saveLang(event.target.value)}
              >
                <img
                  className={headerStyles.country_logo}
                  src={de}
                  alt="Dutch"
                  title="Dutch"
                />{" "}
                <span>Dutch</span>
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
          className={`collapse px-3 justify-content-center navbar-collapse ${headerStyles.collapse}`}
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
                  {t("landing.nav.pricing")}
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
                <span className={`${headerStyles.item}`}>
                  {t("landing.nav.about")}
                </span>
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
                {t("landing.nav.plugin")}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/downloads"
                className={`nav-link ${headerStyles.navLinkComms}`}
              >
                <span className={`${headerStyles.item}`}>
                  {t("landing.nav.downloads")}
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
                  {t("landing.nav.contact")}
                </span>
              </NavLink>
            </li>
          </ul>

          <ul className={`d-lg-none navbar-nav-scroll ${headerStyles.signs}`}>
            <li className="nav-item">
              <Link
                to="/signup"
                className={`btn ${headerStyles.signU} nav-link`}
              >
                <span>{t("landing.nav.signup")}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={`btn ${headerStyles.signIn} nav-link`}
                role="button"
              >
                <span className="signin">{t("landing.nav.login")}</span>
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
                onClick={() => saveLang(event.target.value)}
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
                className={`btn ${headerStyles.select}`}
                value="fr"
                onClick={() => saveLang(event.target.value)}
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
                onClick={() => saveLang(event.target.value)}
              >
                <img
                  className={headerStyles.country_logo}
                  src={zh}
                  alt="Chinese"
                  title="Chinese"
                />{" "}
                <span>Chinese</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="ar"
                onClick={() => saveLang(event.target.value)}
              >
                <img
                  className={headerStyles.country_logo}
                  src={ar}
                  alt="Arabic"
                  title="Arabic"
                />{" "}
                <span>Arabic</span>
              </button>
              <button
                className={`btn ${headerStyles.select}`}
                value="de"
                onClick={() => saveLang(event.target.value)}
              >
                <img
                  className={headerStyles.country_logo}
                  src={de}
                  alt="Dutch"
                  title="Dutch"
                />{" "}
                <span>Dutch</span>
              </button>
            </Modal.Body>
          </Modal>
        </div>

        <ul
          className={`navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll ${headerStyles.signs}`}
        >
          <li className="nav-item">
            <Link to="/signup">
              <span className={`${headerStyles.signU}`}>
                {t("landing.nav.signup")}
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <span className={`${headerStyles.signIn}`}>
                {t("landing.nav.login")}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default HeaderSearchSuggestion