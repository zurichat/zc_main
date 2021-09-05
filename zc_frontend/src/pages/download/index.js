<<<<<<< HEAD
import { ReactComponent as GreenCircle} from '../images/circle.svg';
import { ReactComponent as Rectangle} from '../images/downloadRectangle.svg';
import { ReactComponent as Googleplay} from '../images/googleplay.svg';
import { ReactComponent as Apple} from '../images/apple.svg';
// import Googleplay from '../images/Google_Play-Icon-Logo.wine.png';
import { ReactComponent as Downarow} from '../images/downarow.svg';
import { ReactComponent as Logo} from '../images/zurilogo.svg';
import { ReactComponent as Facebook} from '../images/facebook.svg';
import { ReactComponent as Instagram} from '../images/instagram.svg';
import { ReactComponent as Twitter} from '../images/twitter.svg';
import { ReactComponent as Linkedin} from '../images/linkedin.svg';
import styles from '../../styles/Download.module.css'
import { Topbar } from '../../components/Topbar'

const Download = () => {
  
  return (
  <div  className={styles.downloadWrapper}>
    <Topbar/> 
<div className={styles.downloadTitle}>
    <h1>Zuri Chat Download</h1> 
    <p>What's New</p>
</div>
<div  className={styles.rectangleContainer}>
  <GreenCircle  className={styles.circle}/>
  <Rectangle className={styles.rectangle}/>
  </div>

<div className={styles.downloadPc}>
    <h2>Available on Windows 8 and higher</h2>
     <a href="/">Downlod for Windows (64 bits)</a>
     <h3>Download for Mac 0s X 10.10 and higher</h3>
</div>

  <div className={styles.devicetype}>
        <h2>Zuri Chat for Mobile</h2>
        <h3>Keep up with your team and hold meetings from your device</h3>


        <div className={styles.google_apple_Box}>
              <div  className={styles.appleBox}>
          <Googleplay className={styles.googleplay}/>
          <div className={styles.appleBox_text}>
          <span className={styles.appleText1}>GET IT ON</span>
          <br/>
         <span className={styles.appleText}>Google Play</span>
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
        
    </div>


<div className={styles.footer}>
  
     <div className={styles.zurilogo}>
          <div><Logo className={styles.zclogoBottom}/><span>Zuri Chat</span></div>
    </div>

    <div className={styles.zcdescription}>
      <p>WHY ZURI CHAT  <Downarow/> </p>
      <p>PRODUCT <Downarow/></p>
      <p>PRICING <Downarow/></p>
      <p>RESOURCES <Downarow/></p>
    </div>

    <div  className={styles.zc_footer_nav}>
      <p>Privacy</p>
      <p>Terms</p>
      <p>Help center</p>
      <p>Contact Us</p>
    </div>

    <div className={styles.socialMedia}>
      <Facebook className={styles.facebook}/>
      <Instagram className={styles.instagram}/>
      <Twitter/>
      <Linkedin/>
    </div>
</div>
    <p className={styles.copyright}>copy 2021 zuri,Team Aristotle. All Rights Reserved.</p>
    
  </div>
  )
}
export default Download
