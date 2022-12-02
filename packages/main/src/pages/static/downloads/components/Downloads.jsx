import React, { useState } from "react";
import styles from "./downloads.module.css";
import { zuri, chat, brush, people, copy } from "../assets";
import { isMacOs, isIOS } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { TopNavigationBar, Footer } from "../../../../components";

const Downloads = () => {
  const { t } = useTranslation();

  const [exe, setexe] = useState({
    link: "",
    name: "",
    link2: "",
    name2: "",
    link3: "",
    name3: ""
  });

  React.useEffect(() => {
    if (isMacOs) return setexe({ name: "DOWNLOAD FOR MAC" });
    if (isIOS) return setexe({ name: "DOWNLOAD FOR IOS" });
    return setexe({
      name: "DOWNLOAD FOR WINDOWS",
      link: "https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing",
      name2: "DOWNLOAD ZURI CHAT",
      link2: "https://play.google.com/store/apps/details?id=com.zurichat.app",
      name3: "DOWNLOAD DM AND CHANNELS",
      link3:
        "https://drive.google.com/file/d/1LRrWXjBFdns0RUD7zQapBuof8ole5XHI/view?usp=drivesdk"
    });
  }, []);

  return (
    <>
      <TopNavigationBar />
      <section className={styles.section}>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <h2>{t("downloads_zuri")}</h2>
            <p>{t("downloads_communicate")}</p>
            <span>{t("downloads_invite")}</span>
            <button type="button">{t("downloads.button")}</button>
          </div>
          <div className={styles.introImg}>
            <img src={zuri} alt="Zuri chat img" />
          </div>
        </div>
        <ul className={styles.downloads}>
          <li className={styles.downloadList}>
            <h2>{t("downloads_desktopapp.mac")}</h2>
            <a href="/download-app">{t("downloads_desktopapp.mac.text")}</a>
            <a href="/download-app">{t("downloads_desktopapp.mac.text")}</a>
          </li>
          <li className={styles.downloadList}>
            <h2>{t("downloads_mobileapp")}</h2>
            <a href="/download-app">{t("downloads_mobileapp.ios")}</a>
            <a
              href="https://play.google.com/store/apps/details?id=com.zurichat.app"
              download={exe.name}
            >
              {t("downloads_mobileapp.android")}
            </a>
          </li>
          <li className={styles.downloadList}>
            <h2>{t("downloads_desktopapp.windows")}</h2>
            <a
              href={`https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing`}
            >
              {t("downloads_desktopapp.windows.text")}
            </a>
            <a
              href={`https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing`}
            >
              {t("downloads_desktopapp.windows.text")}
            </a>
          </li>
        </ul>
        <div className={styles.advert}>
          <div className={styles.introImg}>
            <img src={chat} alt="zuri chat img" />
          </div>
          <div className={styles.advertText}>
            <h2>{t("downloads.collabo")}</h2>
            <span>{t("downloads_invite")}</span>
            <button type="button">{t("downloads.button")}</button>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <img src={brush} alt="" />
            </div>
            <h3>{t("downloads_create")}</h3>
            <p>{t("downloads_create.text")}</p>
          </div>
          <div className={styles.card}>
            <div>
              <img src={people} alt="" />
            </div>
            <h3>{t("downloads_collaborate")}</h3>
            <p>{t("downloads_collaborate.text")}</p>
          </div>
          <div className={styles.card}>
            <div>
              <img src={copy} alt="" />
            </div>
            <h3>{t("downloads_connect")}</h3>
            <p>{t("downloads_connect.text")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Downloads;
