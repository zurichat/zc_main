import react from 'react'
import styles from './CookiesBanner.module.css'
// import { Modal } from 'react-bootstrap';



const CookiesBanner = () => {

	return(
		<>
      <div className={styles.Bannercontainer}>
          <div className={styles.BannerBox}>
            <div className={styles.BannerLogo}>
            {/* <h1>OUR COOKIE POLICY</h1>  */}
            </div>
            <div className={styles.BannerTitle}>
              <h1>OUR COOKIE POLICY</h1> 
            </div>
            <div className={styles.BannerText}>
              <p>We use cookies to ensure that that we give the best experience on or website. We also use cookies to ensure we show<br/> you advertisiing that si relevant to you <a href="#">manage cookie settings</a> at anytime.</p>
            </div>
            <div className={styles.BannerButtons}>
              <button
              className={styles.AllowButtons}
              >Allow all cookies</button>
              <button
              className={styles.DeclineButtons}
              >Decline</button>
            </div>
          </div>
      </div>
		</>
	)
}

export default CookiesBanner