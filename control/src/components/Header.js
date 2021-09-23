import React from 'react'
import { Link } from 'react-router-dom'
import headerStyles from '../component-styles/HeaderStyle.module.css'
import zurichatlogo from '../component-assets/zurichatlogo.svg'
import { Button } from '../pages/createworkspace/components/WorkspaceHome'

const HeaderSearchSuggestion = () => {
  return (
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
          width="20"
          height="20"
          className={`d-inline-block align-top ${headerStyles.image}`}
        />
        <span className={`mb-2 ${headerStyles.zuriChat}`}>Zuri Chat</span>
      </Link>

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
          className={`navbar-nav d-flex justify-content-between align-items-start align-items-lg-center ${headerStyles.navbarNav}`}
        >
          <li className="nav-item">
            <Link
              to="/features"
              className={`nav-link ${headerStyles.navLinkFeatures}`}
              aria-current="page"
            >
              <span className={`${headerStyles.item}`}>Features</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pricing"
              className={`nav-link ${headerStyles.navLinkPricing}`}
              role="button"
              aria-expanded="false"
            >
              <span className={`${headerStyles.item}`}>Pricing</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/careers"
              className={`nav-link ${headerStyles.navLinkComms}`}
            >
              <span className={`${headerStyles.item}`}>Careers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/download-app"
              className="nav-link"
              role="button"
              aria-expanded="false"
            >
              <span className={`${headerStyles.item}`}>Downloads</span>
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-none me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <Link
              to="/signup"
              className={`nav-link ${headerStyles.navLinkSignUp}`}
            >
              <span className={`signup ${headerStyles.signU}`}>Sign Up</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
              className={`btn ${headerStyles.signIn}`}
              role="button"
            >
              <span className="signin">Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <Link
            to="/signup"
            className={`nav-link btn ${headerStyles.navLinkSignUp}`}
          >
            <span className={` ${headerStyles.signU}`}>Sign Up</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={``}
            to="/login"
            className={`btn nav-link ${headerStyles.signIn}`}
            role="button"
          >
            <span>Sign In</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default HeaderSearchSuggestion
