import styles from './styles/CookiesSettings.module.css'
import lockButton from '../../component-assets/lock.svg'
import ToggleButton from './ToggleButton'


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
              <ToggleButton className={styles.toggle_button}/>
          </div>
          <div className={styles.learn_more_link}>
            <a href=".">Learn more</a>
          </div>
          <div className={styles.action_links}>
            <button className={`${styles.firstButton} ${styles.button}`}
            onClick={handleButtonClick}>
              Accept all cookies
            </button>
            <button className={`${styles.secondButton} ${styles.button}`}
            onClick={handleButtonClick}>
              Save settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const handleButtonClick = () => {
  sessionStorage.setItem('cookies-allow', 'true');
  window.history.back()
}

export default CookiesSettings
