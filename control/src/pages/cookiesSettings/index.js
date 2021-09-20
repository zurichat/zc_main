import styles from './styles/CookiesSettings.module.css'
import toggleButton from '../../component-assets/toggle.svg'
import lockButton from '../../component-assets/lock.svg'

function CookiesSettings() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cookie_content}>
        <div className={styles.cookie_header}>
          <div className={styles.cookie_header_title}>Cookie Settings</div>
          <div className={styles.cookie_header_body}>
            These cookies help our website safe, give you a better exprience and
            show more relevant ads
          </div>
        </div>
        <div className={styles.cookie_body}>
          <div className={styles.cookie_body_half}>
            <div>
              <div className={styles.cookie_body_title}>Essential cookies</div>

              <div className={styles.cookie_body_text}>
                Essential cookies helps access the website and each of its web
                pages and subdomains, by enabling functions like cookies
                consent. They cannot be disabled
              </div>
            </div>
            <div className={styles.cookie_body_first_button}>
              <img src={lockButton} alt="lock" />
            </div>
          </div>
          <div className={styles.cookie_body_half}>
            <div>
              <div className={styles.cookie_body_title}>
                Analytics and advertising cookies
              </div>

              <div className={styles.cookie_body_text}>
                These allow us to recognise and count the numbers of visitors to
                our website and see how many visitors browse our website, so we
                can improve it where necessary.
              </div>
            </div>
            <div className={styles.cookie_body_second_button}>
              <img src={toggleButton} alt="toggle button" />
            </div>
          </div>
          <div className={styles.learn_more_link}>
            <a href=".">Learn more</a>
          </div>
          <div className={styles.action_links}>
            <button className={`${styles.firstButton} ${styles.button}`}>
              Accept all cookies
            </button>
            <button className={`${styles.secondButton} ${styles.button}`}>
              Save settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookiesSettings
