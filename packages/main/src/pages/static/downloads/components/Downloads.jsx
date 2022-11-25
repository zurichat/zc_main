import React, { useState } from "react";
import styles from "./downloads.module.css";
import { zuri, chat, brush, people, copy } from "../assets";
import { isMacOs, isIOS } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { TopNavigationBar, Footer } from "../../../../components";

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

const Downloads = () => {
  return (
    <>
      <TopNavigationBar />
      <section className={styles.section}>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <h2>Zuri Download</h2>
            <p>Communicate and collaborate from wherever you are</p>
            <span>
              Invite your team to your workspace. Stay connected ,stay in sync,
              and explore ideas together from anywhere
            </span>
            <button type="button">Download</button>
          </div>
          <div className={styles.introImg}>
            <img src={zuri} alt="Zuri chat img" />
          </div>
        </div>
        <ul className={styles.downloads}>
          <li className={styles.downloadList}>
            <h2>Desktop App(MacOS)</h2>
            <a href="/download-app">Desktop app for masOS</a>
            <a href="/download-app">Desktop app for masOS</a>
          </li>
          <li className={styles.downloadList}>
            <h2>Mobile App</h2>
            <a href="/download-app">Zuri app for i0S</a>
            <a
              href="https://play.google.com/store/apps/details?id=com.zurichat.app"
              download={exe.name}
            >
              Zuri app for Android
            </a>
          </li>
          <li className={styles.downloadList}>
            <h2>Desktop App(Windows)</h2>
            <a
              href={`https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing`}
            >
              Desktop app windows
            </a>
            <a
              href={`https://drive.google.com/file/d/1bqotCEGC99fs8Ip3jF-5z2KUQqgeB111/view?usp=sharing`}
            >
              Desktop app windows
            </a>
          </li>
        </ul>
        <div className={styles.advert}>
          <div className={styles.introImg}>
            <img src={chat} alt="zuri chat img" />
          </div>
          <div className={styles.advertText}>
            <h2>Collaborate from wherever you are</h2>
            <span>
              Invite your team to your workspace. Stay connected,stay in sync,
              and explore ideas together from anywhere.
            </span>
            <button type="button">Download</button>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <img src={brush} alt="" />
            </div>
            <h3>Create</h3>
            <p>
              Zuri is a communication tool that offers several creative benefits
              and skills.
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src={people} alt="" />
            </div>
            <h3>Collaborate</h3>
            <p>
              Zuri is a platform that in collaboration, team work and great
              communication
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src={copy} alt="" />
            </div>
            <h3>Connect</h3>
            <p>
              Zuri chat helps you connect and work with different people from
              different part of the world.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Downloads;
