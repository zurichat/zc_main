import React, { useState } from "react";
import Footer from "../../components/Footer";
import styles from "./styles/download.module.css";
import Header from "../../components/Header";
import laptop from "./assets/laptop.svg";
import device from "./assets/device.svg";
import icon from "./assets/icon.svg";
import apple from "./assets/apple.svg";
import apple1 from "./assets/Apple1.svg";
import microsoft from "./assets/icons8-microsoft.svg";
import googleplay from "./assets/googlePlay.svg";
import android from "./assets/android.svg";
import infolaptop from "./assets/infolaptop.svg";
import windows from "./assets/windows.svg";
import { isMacOs } from "react-device-detect";
import "../../i18n";
import { useTranslation } from "react-i18next";

const DownloadsDesktop = () => {
  const { t } = useTranslation();

  const [exe, setexe] = useState({ link: "", name: "" });
  React.useEffect(() => {
    if (isMacOs) return setexe({ name: "DOWNLOAD FOR MAC" });
    return setexe({
      name: "DOWNLOAD FOR WINDOWS",
      link: "https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing"
    });
  }, []);
  return (
    <>
      <Header />
      <section className={`${styles.hero} `}>
        <div className={`${styles.heroText} `}>
          <p className={`${styles.heroheading}`}>
            {t("download_desktop.section_one.headline")}
          </p>
          <p className={`${styles.p} mb-4`}>
            {t("download_desktop.section_one.post_headline")}
          </p>

          <div className={styles.heroImages}>
            <div className={styles.alignForDesktop}>
              <img
                className={`${styles.screenshot}`}
                src={device}
                alt="app screenshot"
              />
              <div>
                <h2>{t("download_desktop.section_one.desktop_line")}</h2>
                <a href="/download-app" className={styles.downloadButton}>
                  <img className={`px-1`} src={apple1} alt="download icon" />
                  <span> {t("download_desktop.section_one.desktop_app")}</span>
                </a>
                <a
                  href={`https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing`}
                  className={styles.downloadButton}
                >
                  <img className={`px-1`} src={microsoft} alt="download icon" />
                  <span>{t("download_desktop.section_one.desktop_soft")}</span>
                </a>
              </div>
            </div>

            <div className={styles.alignForMobile}>
              <div className={styles.mobileImage}>
                <img src={infolaptop} className={`${styles.mobile}`} alt="" />
              </div>
              <div>
                <h2>{t("download_desktop.section_one.mobile_line")}</h2>
                <a href="/download-app" className={styles.downloadButton}>
                  <img className={`px-1`} src={apple1} alt="download icon" />
                  <span>{t("download_desktop.section_one.mobile_app")}</span>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.zurichat.app"
                  download={exe.name}
                  className={styles.downloadButton}
                >
                  <img
                    className={`px-1`}
                    src={googleplay}
                    alt="download icon"
                  />
                  <span>{t("download_desktop.section_one.mobile_play")}</span>
                </a>
              </div>
            </div>
          </div>

          <div>{/*  */}</div>

          {/* <a href={exe.link} download={exe.name} className={styles.button1}>
            <img className={`px-2`} src={icon} alt="download icon"></img>
            {exe.name}
          </a> */}
        </div>
        {/*  */}
      </section>

      <section className={`${styles.info}`}>
        <p className="h2 text-center font-weight-normal text-white w-50 mb-4">
          {t("download_desktop.section_two.headline")}
        </p>
        <div className={`${styles.downloadButtonContainer}`}>
          <a
            href={`https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing`}
            className={styles.downloadButton1}
          >
            {t("download_desktop.section_two.windows")}
            <img className={`px-2`} src={windows} alt="download icon" />
          </a>
          <a href="/download-app" className={styles.downloadButton1}>
            {t("download_desktop.section_two.mac")}
            <img className={`px-2`} src={apple} alt="download icon" />
          </a>
          <a href="/download-app" className={styles.downloadButton1}>
            {t("download_desktop.section_two.ios")}
            <img className={`px-2`} src={apple} alt="download icon" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.zurichat.app"
            download={exe.name}
            className={styles.downloadButton1}
          >
            {t("download_desktop.section_two.android")}
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
            {t("download_desktop.section_three.headline")}
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
  );
};
export default DownloadsDesktop;
