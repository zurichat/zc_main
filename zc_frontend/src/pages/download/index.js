import React from 'react'
import styles from '../../styles/Download.module.css'
import Link from 'react-router-dom';

const Download = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <div className={`${styles.container} container`}>
          <h1 className={styles.h1}>Zuri Chat Download</h1>
          <Link to="/news" className={styles.link}>
            What's New
          </Link>
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
            <Link className={styles.imgLink} to="#">
              <img src="/Play_Store_badge.svg" alt="Google Play Store"></img>
            </Link>

            <Link className={styles.imgLink} to="#">
              <img src="/App_Store_badge.svg" alt="Apple App Store"></img>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Download
