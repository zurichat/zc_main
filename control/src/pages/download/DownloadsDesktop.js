<<<<<<< HEAD:zc_frontend/src/pages/download/index.js
/*import React from 'react'
import DownloadsDesktop from './DownloadsDesktop'
import DownloadsAndroid from './DownloadsAndroid'
import DownloadsIOS from './DownloadsIOS'

//import isIOs from 'react-device-detect'

const Download = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 768

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
=======
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import styles from './styles/download.module.css'
import Header from '../../components/Header'
import arrowDown from './assets/DP-arrow_down.svg'
import Ellipse159 from './assets/Ellipse159.svg'
import screenshot from './assets/screenshot.svg'
import halfCircle from './assets/half-circle.svg'
import Rect2 from './assets/DP-Rect-2.svg'
import Rect1 from './assets/DP-Rec-1.svg'
import homeAndroid from './assets/Home-Android.svg'
import dm from './assets/DM.svg'
import fetchInstall from './utils/index'

// const Apk = '../../apk/appRelease.apk'
// import Apk from '../../apk/appRelease.apk'

const DownloadsDesktop = () => {
  const [exe, setexe] = useState({ link: '', name: '' })
  // const [msi, setmsi] = useState({ link: '', name: '' })
  // const [dmg, setdmg] = useState({ link: '', name: '' })

  useEffect(() => {
    fetchInstall('exe').then(res => {
      setexe(res)
    })
    // fetchInstall('msi').then(res => {setmsi(res)})
    // fetchInstall('dmg').then(res => {setdmg(res)})
  }, [])

  return (
    <>
      <Header />
      <section className={`row`}>
        <div
          className={`${styles.container} col container p-lg-5 p-md-5 m-lg-5 m-md-4`}
        >
          <div>
            <h1 className={styles.h1}>
              Zuri Chat <br /> for Windows
            </h1>
            <p className={styles.p}>
              With the Zuri Chat app, you will always be in touch with your
              team.
            </p>
            <a href={exe.link} className={styles.button1}>
              DOWNLOAD (64-BIT)
            </a>
          </div>
          <p className={`${styles.plink} mt-lg-4 d-inline`}>Looking for Mac?</p>
          <a href="#download-mac">
            <img className={`d-inline mx-1`} src={arrowDown} alt="arrow-down" />
          </a>
        </div>
        <div className={`col-8`}>
          <div className={styles.images}>
            <img className={styles.circle} src={Ellipse159} alt="circle"></img>
            <img
              className={`${styles.screenshot}`}
              src={screenshot}
              alt="app screenshot"
            ></img>
            <img
              className={styles.circle2}
              src={halfCircle}
              alt="circle2"
            ></img>
          </div>
          <div className={`${styles.version} `}>
            <p className={`${styles.versionp} d-inline`}>VERSION 4.4.4 -</p>
            <a className={styles.versionlink} href="/news">
              What's New
            </a>
            <p className={`d-inline`}>/</p>
            <a
              className={styles.versionlink}
              href={exe.link}
              download={exe.name}
            >
              Get the Beta
            </a>
            <p className={`d-inline`}>/</p>
            <a className={styles.versionlink} href="/">
              Enterprise Deployments
            </a>
            <p className={`${styles.mobilelink} d-inline`}>
              Looking for Mobile?
            </p>
            <a href="#download-mobile">
              <img className={`mx-1`} src={arrowDown} alt="arrow-down" />
            </a>
            <a className={`${styles.bit}`} href={exe.link} download={exe.name}>
              Download 32-bit app
            </a>
          </div>
        </div>
      </section>

      <a href="/" id="download-mac">
        <section className={`row`}>
          <div
            className={`${styles.container} col container p-lg-5 p-md-5 m-md-4 m-lg-5`}
          >
            <div>
              <h1 className={styles.h1}>
                Zuri Chat <br /> for Mac
              </h1>
              <p className={styles.p}>
                With the Zuri Chat app, you will always be in touch with your
                team.
              </p>
              <a href={exe.link} download={exe.name} className={styles.button1}>
                DOWNLOAD
              </a>
            </div>
            <p className={`${styles.plink} mt-lg-4 d-inline`}>
              Looking for Mobile?
            </p>
            <a href="#download-mobile">
              <img
                className={`d-inline mx-lg-1`}
                src={arrowDown}
                alt="arrow-down"
              />
            </a>
          </div>
          <div className={`col-8`}>
            <div className={styles.images}>
              <img
                className={styles.circle1}
                src={Ellipse159}
                alt="circle"
              ></img>
              <img
                className={`${styles.screenshot}`}
                src={screenshot}
                alt="app screenshot"
              ></img>
              <img className={styles.half} src={halfCircle} alt="circle2"></img>
            </div>
            <div className={`${styles.version} `}>
              <p className={`${styles.versionp} d-inline`}>VERSION 4.4.4 -</p>
              <a className={styles.versionlink} href="/">
                What's New
              </a>
              <p className={`d-inline`}>/</p>
              <a
                className={styles.versionlink}
                href={exe.link}
                download={exe.name}
              >
                Get the Beta
              </a>
              <p className={`d-inline`}>/</p>
              <a className={styles.versionlink} href="/">
                Enterprise Deployments
              </a>
              <p className={`${styles.mobilelink} d-inline`}>
                Looking for Mobile?
              </p>
              <a href="#download-mobile">
                <img className={`mx-lg-1`} src={arrowDown} alt="arrow-down" />
              </a>
              <a className={`${styles.bit}`} href="/">
                Download 32-bit app
              </a>
            </div>
          </div>
        </section>
      </a>
      <a href="/" id="download-mobile">
        <section className={`row`}>
          <div className={` col container p-lg-5 p-md-5 m-md-4 m-lg-5`}>
            <div>
              <h1 className={styles.h1}>
                Dive into a new realm of productivity
              </h1>
              <p className={styles.p}>
                Innovate in your workspace with the Zurichat apps on
                <a
                  className={`${styles.versionlink} px-lg-1 fw-bold`}
                  href={exe.link}
                  download={exe.name}
                >
                  Android
                </a>{' '}
                and
                <a
                  className={`${styles.versionlink} px-lg-1 fw-bold`}
                  href={exe.link}
                  download={exe.name}
                >
                  IOS
                </a>
              </p>
            </div>
          </div>
          <div className={`col-8`}>
            <div className={styles.images}>
              <img className={styles.rec} src={Rect2} alt="vector"></img>
              <img
                className={`${styles.android}`}
                src={homeAndroid}
                alt="mobile screenshot"
              ></img>
              <img className={styles.dm} src={dm} alt="DM"></img>
            </div>
          </div>
        </section>
      </a>
      <section className={`${styles.foot} mt-lg-5`}>
        <div>
          <img
            className={`${styles.rec1} mt-lg-5`}
            src={Rect1}
            alt="vector"
          ></img>
        </div>
        <div className={`${styles.button}`}>
          <h1 className={`${styles.work}`}>
            Looking for a better work environment?
          </h1>
          <div className={`mt-lg-5`}>
            <a href="/" className={`${styles.button2} d-inline`}>
              DOWNLOAD FOR WINDOWS
            </a>
            <a
              href={exe.link}
              download={exe.name}
              className={`${styles.button3} d-inline`}
            >
              DOWNLOAD FOR MOBILE
            </a>
          </div>
        </div>
      </section>
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/download/DownloadsDesktop.js

  /*return width > breakpoint ? (
    <DownloadsDesktop />
  //) : isIOs ? (
    <DownloadsIOS />
  ) : (
    <DownloadsAndroid />
  )
}
<<<<<<< HEAD:zc_frontend/src/pages/download/index.js

export default Download*/
=======
export default DownloadsDesktop
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/download/DownloadsDesktop.js
