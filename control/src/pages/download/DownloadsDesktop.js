import React, { useState } from 'react'
import Footer from '../../components/Footer'
import styles from './styles/download.module.css'
import Header from '../../components/Header'
import laptop from './assets/laptop.svg'
import device from './assets/device.svg'
import icon from './assets/icon.svg'
import apple from './assets/apple.svg'
import android from './assets/android.svg'
import windows from './assets/windows.svg'
import { isMacOs } from 'react-device-detect'

const DownloadsDesktop = () => {
  const [exe, setexe] = useState({ link: '', name: '' })
  React.useEffect(() => {
    if (isMacOs) return setexe({ name: 'DOWNLOAD FOR MAC' })
    return setexe({ name: 'DOWNLOAD FOR WINDOWS' })
  }, [])
  return (
    <>
      <Header />
      <section className={`${styles.hero} `}>
        <div className={`${styles.heroText} `}>
          <p className={`${styles.heroheading}`}>
            Experience the Zuri Chat’s desktop and mobile apps
          </p>
          <p className={`${styles.p} mb-4`}>
            Connecting with your team has never been easier with Zuri Chat.
          </p>
          <a href={exe.link} download={exe.name} className={styles.button1}>
            <img className={`px-2`} src={icon} alt="download icon"></img>
            {exe.name}
          </a>
        </div>
        <img
          className={`${styles.screenshot}`}
          src={device}
          alt="app screenshot"
        />
      </section>

      <section className={`${styles.info}`}>
        <p className="h2 text-center font-weight-normal text-white w-50 mb-4">
          Download and enjoy the Zuri Chat experience on any these devices
        </p>
        <div className={`${styles.downloadButtonContainer}`}>
          <a
            href={exe.link}
            download={exe.name}
            className={styles.downloadButton}
          >
            Windows
            <img className={`px-2`} src={windows} alt="download icon" />
          </a>
          <a
            href={exe.link}
            download={exe.name}
            className={styles.downloadButton}
          >
            macOS
            <img className={`px-2`} src={apple} alt="download icon" />
          </a>
          <a
            href={exe.link}
            download={exe.name}
            className={styles.downloadButton}
          >
            iOS
            <img className={`px-2`} src={apple} alt="download icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/1C5s3Hm44shxtIJ6XElV3lqBk1XLAbrMm/view?usp=drivesdk"
            download={exe.name}
            className={styles.downloadButton}
          >
            Android
            <img className={`px-2`} src={android} alt="download icon" />
          </a>
        </div>
        <div
          className={`d-flex justify-content-center ${styles.infoImageContainer}`}
        >
          <img
            className={`${styles.screen}`}
            src={device}
            alt="app screenshot"
          ></img>
        </div>
      </section>

      <section className={` ${styles.ctaContainer}`}>
        <div>
          <h1 className={`${styles.heroheading} py-3 mb-4`}>
            Same feel, same team on Zuri App!
          </h1>
          <a href={exe.link} download={exe.name} className={styles.button1}>
            <img className={`px-2`} src={icon} alt="download icon"></img>
            {exe.name}
          </a>
        </div>
        <img
          className={`${styles.laptop}`}
          src={laptop}
          alt="app screenshot"
        ></img>
      </section>
      <Footer />
    </>
  )
}
export default DownloadsDesktop
