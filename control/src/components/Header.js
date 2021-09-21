import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import headerStyles from '../component-styles/Header.module.css'
import SearchSuggestionBar from '../components/SearchSuggestionBar'
import useMatchMedia from '../components/useMatchMedia'
import search from '../component-assets/search-2-line.svg'
import zurichatlogo from '../component-assets/zurichatlogo.svg'
const HeaderSearchSuggestion = () => {
  const [openSearchbar, setOpenSearchbar] = useState(false)
  const matchesMediumSize = useMatchMedia('(max-width: 992px)')

  const handleSearchBarClose = () => {
    setOpenSearchbar(false)
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${headerStyles.navbar}`}
      // onBlur={()=>{
      //   console.log('blur pressed')
      //   handleSearchBarClose()}}
    >
      <div className="container-xl">
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
        {openSearchbar && matchesMediumSize ? (
          <SearchSuggestionBar
            handleSearchBarClose={handleSearchBarClose}
            className={`${matchesMediumSize ? 'me-0 me-md-3 w-50' : 'w-75'}`}
          />
        ) : (
          <div className="nav-item ms-auto">
            <img
              src={search}
              alt="zuri-logo"
              width="20"
              height="20"
              onClick={() => {
                console.log('clicked')
                return setOpenSearchbar(true)
              }}
              className={`d-block d-lg-none ${headerStyles.searchLogo1}`}
            />
          </div>
        )}

        <button
          className={`navbar-toggler ${headerStyles.navButton}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse px-3 w-100 navbar-collapse ${headerStyles.collapse}`}
          id="navbarSupportedContent"
        >
          <ul
            className={`navbar-nav w-100 ${
              openSearchbar
                ? 'd-flex justify-content-between align-items-start align-items-lg-center'
                : 'd-flex justify-content-end  align-items-start align-items-lg-center'
            } ${headerStyles.navbarNav}`}
          >
            {openSearchbar && !matchesMediumSize ? (
              <SearchSuggestionBar
                handleSearchBarClose={handleSearchBarClose}
                className="w-75"
              />
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/features"
                    className={`nav-link ${headerStyles.navLinkFeatures}`}
                    aria-current="page"
                  >
                    <span className={`${headerStyles.features}`}>Features</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pricing"
                    className={`nav-link ${headerStyles.navLinkPricing}`}
                    role="button"
                    aria-expanded="false"
                  >
                    <span className={`${headerStyles.pricing}`}>Pricing</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/resources"
                    className={`nav-link ${headerStyles.navLinkComms}`}
                  >
                    <span className={`${headerStyles.comms}`}>Community</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/download-app"
                    className="nav-link"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className={`${headerStyles.download}`}>
                      Downloads
                    </span>
                  </Link>
                </li>
                <li className="nav-item d-flex justify-content-lg-start align-items-lg-center justify-content-start align-items-center">
                  <img
                    src={search}
                    alt="search-logo"
                    onClick={() => setOpenSearchbar(true)}
                    className={`d-none d-lg-block ms-0 me-0 ms-lg-5 me-lg-2 my-2 my-lg-0 ${headerStyles.searchLogo}`}
                  />
                </li>
              </>
            )}
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
                to="/login"
                className={`btn ${headerStyles.signIn}`}
                role="button"
              >
                <span className="signin">Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default HeaderSearchSuggestion
