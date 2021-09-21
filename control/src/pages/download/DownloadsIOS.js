import downloadStyles from './styles/DownloadsIOS.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import AppStorelogo from './assets/appstore.png'

import PhoneDM from './assets/PhoneDM.png'
import PhoneChannel from './assets/PhoneChannels.png'

// import Apk from './apk/appRelease.apk'

const DownloadsIOS = () => {
  return (
    <>
      <Header />
      <div className={downloadStyles.containermain}>
        <div className={downloadStyles.container}>
          <div className={downloadStyles.containerfluid}>
            <p className={downloadStyles.zuritext}>Zuri Chat for iOS</p>
            {/* <a href={Apk} download="release.apk">
              <div className={downloadStyles.appstorediv}>
                <img src={AppStorelogo} alt="" />
              </div>
            </a> */}
            <p className={downloadStyles.newtext}>What's new</p>
            <div className={downloadStyles.phonediv}>
              <img src={PhoneDM} alt="" className={downloadStyles.PhoneDM} />
              <img
                src={PhoneChannel}
                alt=""
                className={downloadStyles.PhoneChannel}
              />
            </div>
          </div>
        </div>
        <div className={downloadStyles.desktopdiv}>
          <p className={downloadStyles.desktopbigtext}>We’re on Mac, too</p>
          <p className={downloadStyles.desktopsmalltext}>
            Keep up with the conversation with our apps for Mac, Windows and
            Linux. We can email you a quick download link to get you started!
          </p>
          <input
            type="email"
            placeholder="name@example.com"
            className={downloadStyles.emailinput}
          />
          <button className={downloadStyles.btn}>GET LINK</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DownloadsIOS
