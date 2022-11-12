import React, { useState } from "react";
import downloadStyles from "./DownloadsMobile.module.css";
import { TopNavigationBar, Footer } from "../../../../components";
import { icon, laptop, device, apple, windows, android } from "../assets";
import { isIOS } from "react-device-detect";
import { useTranslation } from "react-i18next";

const DownloadsMobile = () => {
  const { t } = useTranslation();

  const [exe, setexe] = useState({ link: "", name: "", link2: "", name2: "" });
  React.useEffect(() => {
    if (isIOS) return setexe({ name: "DOWNLOAD FOR IOS" });
    return setexe({
      name: "DOWNLOAD ZURI CHAT",
      link: "https://play.google.com/store/apps/details?id=com.zurichat.app",
      name2: "DOWNLOAD DM AND CHANNELS",
      link2:
        "https://drive.google.com/file/d/1LRrWXjBFdns0RUD7zQapBuof8ole5XHI/view?usp=drivesdk"
    });
  }, []);
  return (
    <>
      <TopNavigationBar />
      <div className={downloadStyles.containermain}>
        <section className={downloadStyles.hero}>
          <div className={downloadStyles.herotext}>
            <p className={downloadStyles.herotextHeader}>
              {t("download_mobile.section_one.headline")}
            </p>
            <p className="mb-4">
              {t("download_mobile.section_one.post_headline")}
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
            {t("download_mobile.section_two.headline")}
          </p>
          <div className={`${downloadStyles.downloadButtonContainer}`}>
            <a
              href="https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing"
              className={downloadStyles.downloadButton}
            >
              {t("download.desktopBtn.windows")}
              <img className={`px-2`} src={windows} alt="download icon" />
            </a>
            <a href="/download-app" className={downloadStyles.downloadButton}>
              {t("download.desktopBtn.mac")}
              <img className={`px-2`} src={apple} alt="download icon" />
            </a>
          </div>
          <div className={`${downloadStyles.downloadButtonContainer} mb-4`}>
            <a href={exe.link} className={downloadStyles.downloadButton}>
              {t("download.mobileBtn.android")}
              <img className={`px-2`} src={android} alt="download icon" />
            </a>
            <a href="/download-app" className={downloadStyles.downloadButton}>
              {t("download.mobileBtn.apple")}
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
              {t("download_mobile.section_three.headline")}
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
  );
};

export default DownloadsMobile;
