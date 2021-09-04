import { Link } from 'react-router-dom'
import headerStyles from '../../../styles/Header.module.css'
import styles from '../../../styles/marketplace.module.css'

const MarketplaceHeader = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${headerStyles.navbar} ${styles.navbar}`}
    >
      <Link to="/" className={`navbar-brand`}>
        <img
          src="/zurichatlogo.svg"
          alt="zuri-logo"
          width="20"
          height="20"
          className={`d-inline-block align-top ${headerStyles.image}`}
        />
        <span className={`${headerStyles.zuriChat}`}>Zuri Chat</span>
      </Link>

      <div className={styles.marketplaceSearchBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
            fill="rgba(190,190,190,1)"
          />
        </svg>
        <input type="text" placeholder="Search Plugins" />
      </div>
      <div className={styles.accountOwnerAvatar}>
        <div className={styles.accountOwnerAvatarContainer}></div>
      </div>
    </nav>
  )
}
export default MarketplaceHeader
