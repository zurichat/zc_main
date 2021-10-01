import React, { useState } from 'react'
import downloadStyles from './styles/DownloadsMobile.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import icon from './assets/icon.svg'
import laptop from './assets/laptop.svg'
import infolaptop from './assets/infolaptop.svg'
import herolaptop from './assets/herolaptop.svg'
import apple from './assets/apple.svg'
import windows from './assets/windows.svg'
import playstore from './assets/playstoreIcon.svg'
import { isIOS } from 'react-device-detect'

const DownloadsMobile = () => {
  const [exe, setexe] = useState({ link: '', name: '' })
  React.useEffect(() => {
    if (isIOS) return setexe({ name: 'DOWNLOAD FOR IOS' })
    return setexe({ name: 'DOWNLOAD FOR ANDROID' })
  }, [])
  return (
    <>
      <Header />
      <div className={downloadStyles.containermain}>
        <section className={downloadStyles.hero}>
          <div className={downloadStyles.herotext}>
            <p className={downloadStyles.herotextHeader}>
              Experience the Zuri Chat’s desktop and mobile apps
            </p>
            <p className="mb-4">
              Connecting with your team has never been easier with Zuri Chat.
            </p>
            <a
              href={exe.link}
              download={exe.name}
              className={downloadStyles.button1}
            >
              <img className={`px-2`} src={icon} alt="download icon"></img>
              DOWNLOAD
            </a>
          </div>
          <img
            className={`${downloadStyles.screenshot}`}
            src={herolaptop}
            alt="app screenshot"
          />
        </section>
        <section className={`${downloadStyles.info}`}>
          <p className={`h2 text-center font-weight-bold text-white mb-4`}>
            Download and enjoy the Zuri Chat experience on any these devices
          </p>
          <div className={`${downloadStyles.downloadButtonContainer}`}>
            <a
              href={exe.link}
              download={exe.name}
              className={downloadStyles.downloadButton}
            >
              Windows
              <img className={`px-2`} src={windows} alt="download icon" />
            </a>
            <a
              href={exe.link}
              download={exe.name}
              className={downloadStyles.downloadButton}
            >
              macOS
              <img className={`px-2`} src={apple} alt="download icon" />
            </a>
          </div>
          <div className={`${downloadStyles.downloadButtonContainer}`}>
            <a
              href={exe.link}
              download={exe.name}
              className={downloadStyles.downloadButton}
            >
              Android
              <img className={`px-2`} src={playstore} alt="download icon" />
            </a>
            <a
              href={exe.link}
              download={exe.name}
              className={downloadStyles.downloadButton}
            >
              iOS
              <img className={`px-2`} src={apple} alt="download icon" />
            </a>
          </div>
          <div className={`d-flex justify-content-center`}>
            <img
              className={`${downloadStyles.screen}`}
              src={infolaptop}
              alt="app screenshot"
            ></img>
          </div>
        </section>
        <section>
          <div className={`d-flex flex-column justify-content-center`}>
            <h1 className={`${downloadStyles.ctaText}`}>
              Same feel, same team on Zuri App!
            </h1>
            <a
              href={exe.link}
              download={exe.name}
              className={`${downloadStyles.button2} text-center`}
            >
              <img className={`px-2`} src={icon} alt="download icon"></img>
              {exe.name}
            </a>
          </div>
          <div className={`d-flex justify-content-center `}>
            <img
              className={`${downloadStyles.screenshot}`}
              src={laptop}
              alt="app screenshot"
            ></img>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default DownloadsMobile
