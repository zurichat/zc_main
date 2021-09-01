import React from 'react'
import styles from '../../styles/Download.module.css'
//import Header from 'C:UsersDellDesktopzc_mainzc_frontendsrccomponentsexternalPagesComponentsHeader.js'

const Download = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <div className={`${styles.container} container`}>
          <h1 className={styles.h1}>Zuri Chat Download</h1>
          <a className={styles.link} href="#">
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
          <button className={styles.button1} type="submit">
            Download for Windows (64bits)
          </button>
          <button className={styles.button2} type="submit">
            Download for Mac OS X 10.10 and higher
          </button>
          <p className={styles.windows}>Available on windows 8 and higher</p>
        </div>
      </section>
      <section className={`container`}>
        <div className={styles.store}>
          <div className="{}">
            <h1 className={styles.h1}>Zuri Chat for Mobile</h1>
            <p className={styles.storep}>
              Keep up with your team and hold meetings from your device
            </p>
          </div>
          <div className={styles.storelink}>
            <a className={styles.imgLink} href="">
              <img src="/Play_Store_badge.svg" alt="Google Play Store"></img>
            </a>

            <a className={styles.imgLink} href="">
              <img src="/App_Store_badge.svg" alt="Apple App Store"></img>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Download
