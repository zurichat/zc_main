import React, { useEffect, useState } from 'react'
import downloadStyles from './styles/DownloadsIOS.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import AppStorelogo from './assets/appstore.png'

import PhoneDM from './assets/PhoneDM.png'
import PhoneChannel from './assets/PhoneChannels.png'
import fetchInstall from './utils/index'

// import Apk from './apk/appRelease.apk'

const DownloadsIOS = () => {
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
      <div className={downloadStyles.containermain}>
        <div className={downloadStyles.container}>
          <div className={downloadStyles.containerfluid}>
            <p className={downloadStyles.zuritext}>
              Download Zuri Chat beta for iOS.
            </p>
            <a href={exe.link} download={exe.name}>
              <div className={downloadStyles.appstorediv}>
                <img src={AppStorelogo} alt="" />
              </div>
            </a>

            <p className={downloadStyles.newtext}>Get Zuri Chat DM & Channel</p>
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
          <button className={downloadStyles.btn}>GET DOWNLOAD LINK</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DownloadsIOS
