import React, { useEffect, useState } from "react";
import downloadStyles from "./DownloadsIos.module.css";
import { TopNavigationBar, Footer } from "../../../../components";
import { AppStorelogo, PhoneDM, PhoneChannel } from "../assets";
import fetchInstall from "../utils/index";
import { useTranslation } from "react-i18next";

// import Apk from './apk/appRelease.apk'

const DownloadsIos = () => {
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
      <TopNavigationBar />
      <div className={downloadStyles.containermain}>
        <div className={downloadStyles.container}>
          <div className={downloadStyles.containerfluid}>
            <p className={downloadStyles.zuritext}>
              {t("download_ios.section_one.headline")}
            </p>
            <a href={exe.link} download={exe.name}>
              <div className={downloadStyles.appstorediv}>
                <img src={AppStorelogo} alt="" />
              </div>
            </a>

            <p className={downloadStyles.newtext}>
              {t("download_ios.section_one.post_headline")}
            </p>
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
          <p className={downloadStyles.desktopbigtext}>
            {t("download_ios.section_one.mac_line")}
          </p>
          <p className={downloadStyles.desktopsmalltext}>
            {t("download_ios.section_one.mac_description")}
          </p>
          <input
            type="email"
            placeholder="name@example.com"
            className={downloadStyles.emailinput}
          />
          <button className={downloadStyles.btn}>
            {t("download_ios.section_one.button")}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DownloadsIos;
