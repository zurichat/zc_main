import React, { useState } from "react"
import downloadStyles from "./styles/DownloadsMobile.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import icon from "./assets/icon.svg"
import laptop from "./assets/laptop.svg"
import device from "./assets/device.svg"
import apple from "./assets/apple.svg"
import windows from "./assets/windows.svg"
import android from "./assets/android.svg"
import { isIOS } from "react-device-detect"

const DownloadsMobile = () => {
  const [exe, setexe] = useState({ link: "", name: "", link2: "", name2: "" })
  React.useEffect(() => {
    if (isIOS) return setexe({ name: "DOWNLOAD FOR IOS" })
    return setexe({
      name: "DOWNLOAD ZURI CHAT",
      link: "https://drive.google.com/file/d/1dbQS1rQOVUI87AzdeljF6LM5iRNnaMzZ/view",
      name2: "DOWNLOAD DM AND CHANNELS",
      link2:
        "https://drive.google.com/file/d/1LRrWXjBFdns0RUD7zQapBuof8ole5XHI/view?usp=drivesdk"
    })
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
            {exe.link2 && (
              <a href={exe.link2} className={`${downloadStyles.button1} mb-3`}>
                <img className={`px-2`} src={icon} alt="download icon"></img>
                {exe.name2}
              </a>
            )}
            <a href={exe.link} className={downloadStyles.button1}>
              <img className={`px-2`} src={icon} alt="download icon"></img>
              {exe.name}
            </a>
          </div>
          <div
            className={`${downloadStyles.heroImageDiv} d-flex justify-content-center`}
          >
            <img
              className={`${downloadStyles.heroImage}`}
              src={device}
              alt="app screenshot"
            />
          </div>
        </section>
        <section className={`${downloadStyles.info}`}>
          <p className={`h2 text-center font-weight-bold text-white mb-4`}>
            Download and enjoy the Zuri Chat experience on any these devices
          </p>
          <div className={`${downloadStyles.downloadButtonContainer}`}>
            <a
              href="https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing"
              className={downloadStyles.downloadButton}
            >
              Windows
              <img className={`px-2`} src={windows} alt="download icon" />
            </a>
            <a href="/download-app" className={downloadStyles.downloadButton}>
              macOS
              <img className={`px-2`} src={apple} alt="download icon" />
            </a>
          </div>
          <div className={`${downloadStyles.downloadButtonContainer} mb-4`}>
            <a href={exe.link} className={downloadStyles.downloadButton}>
              Android
              <img className={`px-2`} src={android} alt="download icon" />
            </a>
            <a href="/download-app" className={downloadStyles.downloadButton}>
              iOS
              <img className={`px-2`} src={apple} alt="download icon" />
            </a>
          </div>
          <div
            className={`d-flex justify-content-center mt-4 ${downloadStyles.infolaptopContainer}`}
          >
            <img
              className={`${downloadStyles.infolaptop}`}
              src={device}
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
              className={`${downloadStyles.button2} text-center`}
            >
              <img className={`px-2`} src={icon} alt="download icon"></img>
              {exe.name}
            </a>

            {exe.link2 && (
              <a
                href={exe.link2}
                className={`${downloadStyles.button2} text-center`}
              >
                <img className={`px-2`} src={icon} alt="download icon"></img>
                {exe.name2}
              </a>
            )}
          </div>
          <div className={`d-flex justify-content-center `}>
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

export default DownloadsMobile
