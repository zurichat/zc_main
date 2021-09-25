import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import styles from './styles/download.module.css'
import Header from '../../components/Header'
import Ellipse159 from './assets/Ellipse159.svg'
import laptop from './assets/laptop.svg'
import screen from './assets/screen.svg'
import icon from './assets/icon.svg'
import fetchInstall from './utils/index'
import { Link } from 'react-router-dom'

// const Apk = '../../apk/appRelease.apk'
// import Apk from '../../apk/appRelease.apk'

const DownloadsMac = () => {
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
      <section className={``}>
        <div className={`${styles.container} `}>
          <div className={`text-center p-lg-4`}>
            <h1 className={`${styles.h1}`}>Experience Zuri Chat on MacOS</h1>
            <p className={styles.p}>
              Connecting with your team has never been easier with Zuri Chat.
            </p>
          </div>
          <div className={`${styles.images} text-center p-lg-4 pb-lg-0`}>
            <img className={styles.circle} src={Ellipse159} alt="circle"></img>
            <img
              className={`${styles.screenshot}`}
              src={laptop}
              alt="app screenshot"
            ></img>
            <div
              className={`${styles.buttondiv} p-lg-5 m-lg-5 mb-lg-0 p-md-3 m-md-3`}
            >
              <a href={exe.link} download={exe.name} className={styles.button1}>
                <img className={`px-2`} src={icon} alt="download icon"></img>
                DOWNLOAD
              </a>
              <Link
                className={`${styles.plink} mt-lg-4 d-inline`}
                to="./download-app"
              >
                Download for Windows?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.bg}`}>
        <div className={`row p-5 m-5 mt-0`}>
          <div className={` ${styles.zuri} col`}>
            <h6 className={`${styles.h6zuri}`}>Why Zuri Chat App?</h6>
            <p className={`${styles.p1}`}>
              Never miss the seamless collaboration experience even on the go
              with the zuri chat pc,{' '}
              <a href="#" className={`${styles.mobile}`}>
                Android
              </a>{' '}
              and{' '}
              <a href="#" className={`${styles.mobile}`}>
                iOS
              </a>{' '}
              apps.
            </p>
          </div>
          <div className={`col`}>
            <img
              className={`${styles.screen}`}
              src={screen}
              alt="app screenshot"
            ></img>
          </div>
        </div>
      </section>

      <section className={`row m-5 p-5`}>
        <div className={` ${styles.zuri} col container`}>
          <h1 className={`${styles.h1} py-3`}>
            Same feel, same team on Zuri App!
          </h1>
          <a href={exe.link} download={exe.name} className={styles.buttonW}>
            <img className={`px-2`} src={icon} alt="download icon"></img>
            DOWNLOAD FOR MAC
          </a>
          <Link
            className={`${styles.plink} mt-lg-4 d-inline`}
            to="./download-app"
          >
            Download for Windows?
          </Link>
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
export default DownloadsMac
