import React from "react"
import { Link, NavLink } from "react-router-dom"
import headerStyles from "../component-styles/HeaderStyle.module.css"
import zurichatlogo from "../component-assets/zurilogo.svg"
// import searchIcon from "../component-assets/searchIcon.svg"
//import { Button } from '../pages/createworkspace/components/WorkspaceHome'

const HeaderSearchSuggestion = () => {
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
        {/*<Link to="/search" className={`d-block d-lg-none ${headerStyles.search_wrapper2}`}>
          <img
            src={searchIcon}
            alt="search-Icon"
            className={`align-top ${headerStyles.searchImage1}`}
          />
        </Link>*/}
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
                <span className={`${headerStyles.item}`}>Pricing</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={`nav-link ${headerStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${headerStyles.item}`}>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/plugins"
                className={`nav-link ${headerStyles.navLinkPricing}`}
                role="button"
                aria-expanded="false"
              >
                <span className={`${headerStyles.item}`}>Plugins</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/downloads"
                className={`nav-link ${headerStyles.navLinkComms}`}
              >
                <span className={`${headerStyles.item}`}>Downloads</span>
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className="nav-link"
                role="button"
                aria-expanded="false"
              >
                <span className={`${headerStyles.item}`}>Contact</span>
              </NavLink>
            </li>
          </ul>

          <ul className={`d-lg-none navbar-nav-scroll ${headerStyles.signs}`}>
            <li className="nav-item">
              <Link to="/signup" className={`btn ${headerStyles.signU} nav-link`}>
                <span>Sign Up</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={`btn ${headerStyles.signIn} nav-link`}
                role="button"
              >
                <span className="signin">Login</span>
              </Link>
            </li>
          </ul>
          {/*<Link to="/search" className={headerStyles.search_wrapper}>
            <img
              src={searchIcon}
              alt="search-Icon"
              className={`d-inline-block align-top ${headerStyles.searchImage}`}
            />
          </Link>*/}
        </div>

        <ul
          className={`navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll ${headerStyles.signs}`}
        >
          <li className="nav-item">
            <Link to="/signup">
              <span className={`${headerStyles.signU}`}>Sign Up</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <span className={`${headerStyles.signIn}`}>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default HeaderSearchSuggestion
