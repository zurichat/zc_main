import React, { useState } from "react";
import styles from "./downloads.module.css";
import { chat } from "../assets";
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
          <div className={styles.introImg}>
            <img src={chat} alt="zuri chat img" />
          </div>
          <div className={styles.introText}>
            <h2>{t("downloads_chat")}</h2>
            <div className={styles.buttons}>
              <button type="button" className={styles.mobile}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.zurichat.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("downloads_mobile")}
                </a>
              </button>
              <button type="button" className={styles.desktop}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {t("downloads_desktop")}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Downloads;
