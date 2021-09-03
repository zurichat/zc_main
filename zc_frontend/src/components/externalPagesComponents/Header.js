import { Link } from 'react-router-dom'
import headerStyles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${headerStyles.navbar}`}
    >
      <Link to="/" className={`navbar-brand ${headerStyles.navbarBrand}`}>
        <img
          src="/zurichatlogo.svg"
          alt="zuri-logo"
          width="20"
          height="20"
          className={`d-inline-block align-top ${headerStyles.image}`}
        />
        <span className={`${headerStyles.zuriChat}`}>Zuri Chat</span>
      </Link>

      <div className="nav-item">
        <img
          src="/search-2-line.svg"
          alt="zuri-logo"
          width="20"
          height="20"
          className={`${headerStyles.searchLogo1}`}
        />
      </div>

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
        className={`collapse navbar-collapse ${headerStyles.collapse}`}
        id="navbarSupportedContent"
      >
        <ul className={`navbar-nav ${headerStyles.navbarNav}`}>
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
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className={`${headerStyles.download}`}>Downloads</span>
            </Link>
          </li>
          <li className="nav-item">
            <img
              src="/search-2-line.svg"
              alt="search-logo"
              width="20"
              height="20"
              className={`${headerStyles.searchLogo}`}
            />
          </li>
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
              to="/signin"
              className={`btn ${headerStyles.signIn}`}
              role="button"
            >
              <span className="signin">Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
