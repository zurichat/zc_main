import styles from '../../styles/CookiesSettings.module.css'
import toggleButton from '../../assets/toggle.svg'
import lockButton from '../../assets/lock.svg'


function Cookies() {
    return (
        <div className={styles.cookie_content}>
            <div className={styles.cookie_header}>
                <div className={styles.cookie_header_title}>
                    Cookie Settings
                </div>
                <div className={styles.cookie_header_body}>
                    These cookies help our website safe, give you a better exprience and show more relevant ads
                </div>
            </div>
            <div className={styles.cookie_body}>
                <div className={styles.cookie_body_half}>
                    <div>
                        <div className={styles.cookie_body_title}>
                            Essential cookies
                        </div>

                        <div className={styles.cookie_body_text}>
                            Essential cookies helps access the website and each of its web pages and subdomains, by enabling functions like cookies consent. They cannot be disabled
                        </div>
                    </div>
                    <div className={styles.cookie_body_first_button}>
                    {/* <i class="fas fa-lock"></i> */}
                    <img src={lockButton} alt="lock" />
                    </div>
                </div>
                <div className={styles.cookie_body_half}>
                    <div>
                        <div className={styles.cookie_body_title}>
                            Essential cookies
                        </div>

                        <div className={styles.cookie_body_text}>
                            Essential cookies helps access the website and each of its web pages and subdomains, by enabling functions like cookies consent. They cannot be disabled
                        </div>
                    </div>
                    <div className={styles.cookie_body_second_button} >
                    {/* <i class="fas fa-toggle-on fa-2x"></i> */}
                    <img src={toggleButton} alt="toggle button" />
                    </div>
                </div>
                <div className={styles.learn_more_link}>
                    <a href=".">Learn more</a>
                </div>
                <div className={styles.action_links}>
                    <button className={styles.firstButton}>Accept all cookies</button>
                    <button className={styles.secondButton}>Save settings</button>
                </div>
            </div>
        </div>
    )
}

export default Cookies
