import React from 'react'
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import styles from '../download/styles/download.module.css'
import SearchSuggestion from '../searchSuggestion'

const Download = () => {
  return (
    <>
      <SearchSuggestion />
      <section>
        <div className={`${styles.container} container p-3 mb-4`}>
          <h1 className={styles.h1}>Zuri Chat Download</h1>
          <a href="/news" className={styles.link}>
            What's New
          </a>
        </div>
        <div className={styles.images}>
          <img
            className={styles.circle}
            src="/Ellipse159.svg"
            alt="circle"
          ></img>
          <img
            className={`${styles.screenshot}`}
            src="/Rectangle.svg"
            alt="app screenshot"
          ></img>
          <img
            className={styles.circle2}
            src="/Ellipse160.svg"
            alt="circle2"
          ></img>
        </div>
        <div className={styles.buttondiv}>
          <a
            href="https://drive.google.com/file/d/1C5s3Hm44shxtIJ6XElV3lqBk1XLAbrMm/view?usp=drivesdk"
            className={styles.button1}
            type="submit"
          >
            Download for Windows (64bits)
          </a>
          <a
            href="https://drive.google.com/file/d/1C5s3Hm44shxtIJ6XElV3lqBk1XLAbrMm/view?usp=drivesdk"
            className={styles.button2}
            type="submit"
          >
            Download for Mac OS X 10.10 and higher
          </a>
          <p className={styles.windows}>Available on windows 8 and higher</p>
        </div>
      </section>
      <section className={`container mb-5 `}>
        <div className={`${styles.store}`}>
          <div>
            <h1 className={styles.h1}>Zuri Chat for Mobile</h1>
            <p className={styles.storep}>
              Keep up with your team and hold meetings from your device
            </p>
          </div>
          <div className={`${styles.storelink} m-lg-5`}>
            <a className={`${styles.imgLink}`} href="https://play.google.com/">
              <img
                className={`${styles.badge}`}
                src="/Play_Store_badge.svg"
                alt="Google Play Store"
              ></img>
            </a>

            <a
              className={styles.imgLink}
              href="https://www.apple.com/app-store/"
            >
              <img
                className={`${styles.badge}`}
                src="/App_Store_badge.svg"
                alt="Apple App Store"
              ></img>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Download
