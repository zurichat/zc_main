import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import styles from "./styles/download.module.css";
import Header from "../../components/Header";
import Ellipse159 from "./assets/Ellipse159.svg";
import laptop from "./assets/laptop.svg";
import screen from "./assets/screen.svg";
import icon from "./assets/icon.svg";
import fetchInstall from "./utils/index";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// const Apk = '../../apk/appRelease.apk'
// import Apk from '../../apk/appRelease.apk'

const DownloadsWindows = () => {
  const { t } = useTranslation();

  const [exe, setexe] = useState({ link: "", name: "" });
  // const [msi, setmsi] = useState({ link: '', name: '' })
  // const [dmg, setdmg] = useState({ link: '', name: '' })

  useEffect(() => {
    fetchInstall("exe").then(res => {
      setexe(res);
    });
    // fetchInstall('msi').then(res => {setmsi(res)})
    // fetchInstall('dmg').then(res => {setdmg(res)})
  }, []);

  return (
    <>
      <Header />
      <section className={``}>
        <div className={`${styles.container} `}>
          <Helmet>
            <title> {t("download_windows.title.download")}</title>
          </Helmet>
          <div className={`text-center p-lg-4`}>
            <h1 className={`${styles.h1}`}>
              {t("download_windows.section_one.headline")}
            </h1>
            <p className={styles.p}>
              {t("download_windows.section_one.post_headline")}
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
              <a
                href={`https://play.google.com/store/apps/details?id=com.zurichat.app`}
                download={`zurichat`}
                className={styles.button1}
              >
                <img className={`px-2`} src={icon} alt="download icon"></img>
                {t("download_windows.section_one.download")}
              </a>
              <Link
                className={`${styles.plink} mt-lg-4 d-inline`}
                to="./downloadsMac"
              >
                {t("download_windows.section_one.download_mac")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.bg}`}>
        <div className={`row p-5 m-5 mt-0`}>
          <div className={` ${styles.zuri} col`}>
            <h6 className={`${styles.h6zuri}`}>
              {t("download_windows.section_two.headline")}
            </h6>
            <p className={`${styles.p1}`}>
              {t("download_windows.section_two.post_headline")},{" "}
              <a href="#" className={`${styles.mobile}`}>
                {t("download_windows.section_two.android")}
              </a>{" "}
              {t("download_windows.section_two.and_break")}{" "}
              <a href="#" className={`${styles.mobile}`}>
                {t("download_windows.section_two.ios")}
              </a>{" "}
              {t("download_windows.section_two.apps_break")}
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
            {t("download_windows.section_three.headline")}
          </h1>
          <a href={exe.link} download={exe.name} className={styles.buttonW}>
            <img className={`px-2`} src={icon} alt="download icon"></img>
            {t("download_windows.section_three.download")}
          </a>
          <Link
            className={`${styles.plink} mt-lg-4 d-inline`}
            to="./downloadsMac"
          >
            {t("download_windows.section_three.download_ios")}
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
  );
};
export default DownloadsWindows;
