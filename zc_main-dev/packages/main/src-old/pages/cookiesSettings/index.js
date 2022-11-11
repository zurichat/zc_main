import styles from "./styles/CookiesSettings.module.css";
import lockButton from "../../component-assets/lock.svg";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CookiesSettings() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Helmet>
          <title>Cookie Settings - Zuri Chat</title>
        </Helmet>
        <div className={styles.content}>
          <div className={styles.cookie_header}>
            <span className={styles.cookie_header_title}>Cookie settings</span>
            <p className={styles.cookie_header_body}>
              These cookies help our website safe, give you a better exprience
              and show more relevant ads
            </p>
          </div>

          <div className={styles.cookie_body}>
            <div className={styles.essential}>
              <div>
                <span>Essential cookies</span>
                <p>
                  Essential cookies helps access the website and each of its web
                  pages and subdomains, by enabling functions like cookies
                  consent. They cannot be disabled.
                </p>
              </div>
              <div className={styles.essential_img}>
                <img src={lockButton} alt="lock" />
              </div>
            </div>

            <div className={styles.analytics}>
              <div>
                <span>Analytics and advertising cookies</span>
                <p>
                  These allow us to recognise and count the numbers of visitors
                  to our website, and see how many visitors browse our website,
                  so we can improve it where necessary
                </p>
                <Link to="/privacy" className={styles.link}>
                  Learn more
                </Link>
              </div>
              <div className={styles.analytics_img}>
                <ToggleButton />
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={styles.accept} onClick={handleButtonClick}>
                Accept all cookies
              </button>
              <a className={styles.save} onClick={handleButtonClick}>
                Save settings
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const cookieStorage = {
  getItem: key => {
    const cookies = document.cookie
      .split(";")
      .map(cookie => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value, age) => {
    document.cookie = `${key}=${value}; max-age=${age}`;
  }
};
const handleButtonClick = () => {
  cookieStorage.setItem("Zuri Chat Accept", "true", "2592000");
  window.history.back();
};

export default CookiesSettings;
