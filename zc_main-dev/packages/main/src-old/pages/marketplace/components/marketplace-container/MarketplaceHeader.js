import { Link } from "react-router-dom";
import headerStyles from "../../styles/Header.module.css";
import styles from "../../styles/marketplace.module.css";
import ZuriChatLogo from "../../../../component-assets/zurichatlogo.png";

const MarketplaceHeader = () => {
  let currentWorkspace = localStorage.getItem("currentWorkspace");
  let user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(user?.first_name.slice(0, 2))
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <Link to="/" className={`navbar-brand`}>
        <img
          src={ZuriChatLogo}
          alt="zuri-logo"
          className={`d-inline-block align-top ${headerStyles.image}`}
        />
      </Link>
      <div className={styles.accountOwnerAvatar}>
        {!user?.id && !currentWorkspace && (
          <Link to="/login" className={styles.joinButton}>
            Login to An Account
          </Link>
        )}
        {user?.id && !currentWorkspace && (
          <Link to="/choose-workspace" className={styles.joinButton}>
            Join an Organization
          </Link>
        )}
        {user?.id && currentWorkspace && (
          <div className={styles.accountOwnerAvatarContainer}>
            {user?.first_name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
    </nav>
  );
};
export default MarketplaceHeader;
