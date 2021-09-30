import React, { useEffect, useState } from 'react'
import downloadStyles from './styles/DownloadsAndroid.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import icon from './assets/icon.svg'
import laptop from './assets/laptop.svg'

import PlayStorelogo from './assets/playstore.png'

import PhoneDM from './assets/PhoneDM.png'
import PhoneChannel from './assets/PhoneChannels.png'

// import Apk from './apk/appRelease.apk'

const DownloadsAndroid = () => {
  const [exe, setexe] = useState({ link: '', name: '' })
  // const [msi, setmsi] = useState({ link: '', name: '' })
  // const [dmg, setdmg] = useState({ link: '', name: '' })

  return (
    <>
      <Header />
      <div className={downloadStyles.containermain}>
        <div className={downloadStyles.container}>
          <p className={downloadStyles.herotext}>
            Experience the Zuri Chat’s desktop and mobile apps
          </p>
          <p>Connecting with your team has never been easier with Zuri Chat.</p>
          <a
            href={exe.link}
            download={exe.name}
            className={downloadStyles.button1}
          >
            <img className={`px-2`} src={icon} alt="download icon"></img>
            DOWNLOAD
          </a>
        </div>
        <section className={`${downloadStyles.info}`}>
          <p className={`${downloadStyles.p1} text-center`}>
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
              className={`${downloadStyles.screen}`}
              src={screen}
              alt="app screenshot"
            ></img>
          </div>
        </section>
        <section>
          <div className={` ${downloadStyles.zuri} col container`}>
            <h1 className={`${downloadStyles.heroheading} py-3`}>
              Same feel, same team on Zuri App!
            </h1>
            <a
              href={exe.link}
              download={exe.name}
              className={downloadStyles.button1}
            >
              <img className={`px-2`} src={icon} alt="download icon"></img>
              DOWNLOAD FOR WINDOWS
            </a>
          </div>
          <div className={`col px-0`}>
            <img
              className={`${downloadStyles.laptop}`}
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

export default DownloadsAndroid
