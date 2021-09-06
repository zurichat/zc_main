
// import { ReactComponent as Rectangle} from '../images/downloadRectangle.svg';
import { ReactComponent as Googleplay} from '../images/googleplay.svg';
import { ReactComponent as Apple} from '../images/apple.svg';

import React from 'react'
// import Footer from '../../components/externalPagesComponents/Footer/Footer'
// import Header from '../../components/externalPagesComponents/Header'
// import styles from '../download/styles/download.module.css'


// import Googleplay from '../images/Google_Play-Icon-Logo.wine.png';
 import RectangleOverlay from '../images/rectangle.png';
 import Circle from '../images/circleimg.png';
 import Logo from '../images/ZuriLogo.png';
import Downarow from '../images/chevrondown.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import Linkedin from '../images/linkedin.png';
// import { ReactComponent as Facebook} from '../images/facebook.svg';
// import { ReactComponent as Instagram} from '../images/instagram.svg';
// import { ReactComponent as Twitter} from '../images/twitter.svg';
// import { ReactComponent as Linkedin} from '../images/linkedin.svg';
import styles from '../../styles/Download.module.css'
// import Header from '../../components/externalPagesComponents/Header';


const Download = () => {

  return (
    <div>
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
      <div className={styles.zurilogo}>
        <span><img src={Logo} alt="zurilogo" /><span className={styles.zuri_logo_text}>Zuri Chat</span></span>
      </div>
      <footer>
        <div className={styles.footertext}><p>WHY ZURI CHAT</p> <img src={Downarow} alt="down arrow" /></div>
        <div className={styles.footertext}><p>PRODUCTS</p><img src={Downarow} alt="down arrow" /></div>
        <div className={styles.footertext}><p>PRICING</p><img src={Downarow} alt="down arrow" /></div>
        <div className={styles.footertext}><p>RESOURCES</p><img src={Downarow} alt="down arrow" /></div>

        <div className={styles.footerlinks}>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Help Center</a>
          <a href="/">Contact US</a>
        </div>
            <div className={styles.socio}>
              <p><img src={Facebook} alt="facebook" /></p>
              <p><img src={Instagram} alt="instagram" /></p>
              <p><img src={Twitter} alt="twitter" /></p>
              <p><img src={Linkedin} alt="linkedin" /></p>
            </div>
      </footer>
      <p className={styles.copyright}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2021 zuri,Team Aristotle. All Rights Reserved.</p>
  </div>
  )
}

export default Download


    
  