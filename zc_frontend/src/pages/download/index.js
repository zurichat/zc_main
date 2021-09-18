import React from 'react'
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import styles from './styles/download.module.css'
import SearchSuggestion from '../searchSuggestion'
import Apk from './apk/appRelease.apk'
import ellipseA from '../../assets/Ellipse159.svg'
import ellipseB from '../../assets/Ellipse160.svg'
import screenSHot from '../../assets/rectangle.svg'
import playStore from '../../assets/Play_Store_badge.svg'
import appleStore from '../../assets/App_Store_Badge.svg'

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
          <img className={styles.circle} src={ellipseA} alt="circle"></img>
          <img
            className={`${styles.screenshot}`}
            src={screenSHot}
            alt="app screenshot"
          ></img>
          <img className={styles.circle2} src={ellipseB} alt="circle2"></img>
        </div>
        <div className={styles.buttondiv}>
          <a href={Apk} download="release.apk" className={styles.button1}>
            Download for Windows (64bits)
          </a>
          <a href={Apk} download="release.apk" className={styles.button2}>
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
                src={playStore}
                alt="Google Play Store"
              ></img>
            </a>

            <a
              className={styles.imgLink}
              href="https://www.apple.com/app-store/"
            >
              <img
                className={`${styles.badge}`}
                src={appleStore}
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
