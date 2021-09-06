
import { ReactComponent as Googleplay} from '../images/googleplay.svg';
import { ReactComponent as Apple} from '../images/apple.svg';

import React from 'react'

 import Header from '../../components/externalPagesComponents/Header'
// import styles from '../download/styles/download.module.css'
 import RectangleOverlay from '../images/rectangle.png';
 import Circle from '../images/circleimg.png';

import styles from '../../styles/Download.module.css'
// import Header from '../../components/externalPagesComponents/Header';

import Footer from '../../components/externalPagesComponents/Footer/Footer'
import styles from '../download/styles/download.module.css'
import SearchSuggestion from '../searchSuggestion'

const Download = () => {

  return (
    <>
      <SearchSuggestion />
      <section>
        <div className={`${styles.container} container`}>
          <h1 className={styles.h1}>Zuri Chat Download</h1>
          <a href="/news" className={styles.link}>
            What's New
          </a>
        </div>
        <div className={styles.images}>
          <img
            className={styles.circle}
            src={Circle}
            alt="circle"
          ></img>
          <img
            className={`${styles.screenshot}`}
            src={RectangleOverlay}
            alt="app screenshot"
          ></img>
          
          <img
            className={styles.circle2}
            src={Circle}
            alt="circle2"
          ></img>
        </div>
        <div className={styles.buttondiv}>
          <p className={styles.windows}>Available on windows 8 and higher</p>
          <button className={styles.button1} type="submit">
            Download for Windows (64 bits)
          </button>
          <button className={styles.button2} type="submit">
            Download for Mac OS X 10.10 and higher
          </button>
          
        </div>
      </section>
      <section className={styles.store}>


        <div className={styles.google_apple_Box}>
          <h1 className={styles.h1}>Zuri Chat for Mobile</h1>
            <p className={styles.storep}>
              Keep up with your team and hold meetings from your device
            </p>
              <div  className={styles.googleBox}>
          <Googleplay className={styles.googleplay}/>
          <div className={styles.googleBox_text}>
          <small className={styles.googleText1}>GET IT ON</small>
          <br/>
         <span className={styles.googleText}>Google Play</span>
         </div>
         </div>
       
        <div  className={styles.appleBox}>
        <Apple />
          <div className={styles.appleBox_text}>
          <small className={styles.appleText1}>Download on the</small>
          <br/>
         <span className={styles.appleText}>Apple Store</span>
         </div>
         </div>
        </div>
      </section>
      <Footer/>
      </>
  )
}

export default Download


    
  