import React, { useState } from 'react'
import Footer from '../../components/Footer'
import styles from './styles/download.module.css'
import Header from '../../components/Header'
import Ellipse159 from './assets/Ellipse159.svg'
import laptop from './assets/laptop.svg'
import screen from './assets/screen.svg'
import icon from './assets/icon.svg'
import { isMacOs } from 'react-device-detect'
import { Link } from 'react-router-dom'

const DownloadsDesktop = () => {
  const [exe, setexe] = useState({ link: 'Yes', name: '' })
  React.useEffect(() => {
    if (isMacOs) return setexe({ link: 'no' })
    return setexe({ link: 'got here' })
  }, [])
  return (
    <>
      <Header />
      <section className={`${styles.hero} `}>
        <div className={`${styles.heroText} `}>
          <p className={`${styles.heroheading}`}>
            Experience the Zuri Chat’s desktop and mobile apps
          </p>
          <p className={styles.p}>
            Connecting with your team has never been easier with Zuri Chat.
          </p>
          <a href={exe.link} download={exe.name} className={styles.button1}>
            <img className={`px-2`} src={icon} alt="download icon"></img>
            DOWNLOAD
          </a>
        </div>
        <img
          className={`${styles.screenshot}`}
          src={laptop}
          alt="app screenshot"
        />
      </section>

      <section className={`${styles.info}`}>
        <p className={`${styles.p1} text-center`}>
          Download and enjoy the Zuri Chat experience on any these devices
        </p>
        <div>
          <button>Windows</button>
          <button>macOS</button>
          <button>iOs</button>
          <button>Android</button>
        </div>
        <div className={`d-flex justify-content-center`}>
          <img
            className={`${styles.screen}`}
            src={screen}
            alt="app screenshot"
          ></img>
        </div>
      </section>

      <section className={`row m-5 p-5`}>
        <div className={` ${styles.zuri} col container`}>
          <h1 className={`${styles.heroheading} py-3`}>
            Same feel, same team on Zuri App!
          </h1>
          <a href={exe.link} download={exe.name} className={styles.button1}>
            <img className={`px-2`} src={icon} alt="download icon"></img>
            DOWNLOAD FOR WINDOWS
          </a>
        </div>
        <div className={`col px-0`}>
          <img
            className={`${styles.laptop}`}
            src={laptop}
            alt="app screenshot"
          ></img>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default DownloadsDesktop
