import { Link, withRouter } from 'react-router-dom'
import headerStyles from '../../styles/Header.module.css'
import navlogo from '../../assets/images/hngLogo.png'
import searchlogo from '../../assets/images/search.png'

const Header = () => {
  return (
    <nav className={`${headerStyles.navbar} navbar-expand-lg navbar-light`}>
      <div className="container-fluid">
        <Link to="/" className={`${headerStyles.navbarBrand}`}>
          <img
            src={navlogo}
            alt="zuri-logo"
            width="20"
            height="20"
            className={`d-inline-block align-text-top ${headerStyles.image}`}
          />
          <span className={`${headerStyles.zuriChat}`}>Zuri Chat</span>
        </Link>

        <div className="nav-item search">
          <img
            src={searchlogo}
            alt="zuri-logo"
            width="20"
            height="20"
            className={`d-inline-block align-text-top ${headerStyles.searchLogo1}`}
          />
        </div>

        <button
          className={`navbar-toggler ${headerStyles.navButton}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${headerStyles.collapse} navbar-collapse`}
          id="navbarNavDropdown"
        >
          <ul className={`navbar-nav ${headerStyles.navbarNav}`}>
            <li className="nav-item">
              <Link
                to="/features"
                className={`nav-link active ${headerStyles.navLinkFeatures}`}
                aria-current="page"
              >
                <span className={`${headerStyles.features}`}>Features</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className={`nav-link dropdown-toggle ${headerStyles.navLinkPricing}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className={`${headerStyles.pricing}`}>Pricing</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/community"
                className={`nav-link ${headerStyles.navLinkComms}`}
              >
                <span className={`${headerStyles.comms}`}>Community</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/downloads"
                className={`nav-link dropdown-toggle ${headerStyles.navLinkDownloads}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className={`${headerStyles.download}`}>Downloads</span>
              </Link>
            </li>
            <li className="nav-item">
              <img
                src={searchlogo}
                alt="search-logo"
                width="20"
                height="20"
                className={`d-inline-block align-text-top ${headerStyles.searchLogo}`}
              />
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className={`nav-link ${headerStyles.navLinkSignUp}`}
              >
                <span className={`${headerStyles.signU}`}>Sign Up</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className={`btn ${headerStyles.signIn}`}
                role="button"
              >
                <span className={`${headerStyles.signI}`}>Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
