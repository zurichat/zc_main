import React from "react";
import Footer from "../../components/externalPagesComponents/Footer/Footer";
import styles from "./styles/download.module.css";
import SearchSuggestion from "../searchSuggestion";
// import Apk from './apk/appRelease.apk'

const Download = () => {
  return (
    <>
      <SearchSuggestion />
      <section className={`row`}>
        <div
          className={`${styles.container} col container p-lg-5 p-md-5 m-lg-5 m-md-4`}
        >
          <div>
            <h1 className={styles.h1}>
              Zuri Chat <br /> for Windows
            </h1>
            <p className={styles.p}>
              With the Zuri Chat app, you will always be in touch with your
              team.
            </p>
            <a href="#" className={styles.button1}>
              DOWNLOAD (64-BIT)
            </a>
          </div>
          <p className={`${styles.plink} mt-lg-4 d-inline`}>Looking for Mac?</p>
          <a href="#download-mac">
            <img
              className={`d-inline mx-1`}
              src="/DP-arrow_down.svg"
              alt="arrow-down"
            />
          </a>
        </div>
        <div className={`col-8`}>
          <div className={styles.images}>
            <img
              className={styles.circle}
              src="/Ellipse159.svg"
              alt="circle"
            ></img>
            <img
              className={`${styles.screenshot}`}
              src="/screenshot.svg"
              alt="app screenshot"
            ></img>
            <img
              className={styles.circle2}
              src="/half-circle.svg"
              alt="circle2"
            ></img>
          </div>
          <div className={`${styles.version} `}>
            <p className={`${styles.versionp} d-inline`}>VERSION 4.4.4 -</p>
            <a className={styles.versionlink} href="#">
              What's New
            </a>
            <p className={`d-inline`}>/</p>
            {/* <a className={styles.versionlink} href={Apk} download="release.apk">
              Get the Beta
            </a> */}
            <p className={`d-inline`}>/</p>
            <a className={styles.versionlink} href="#">
              Enterprise Deployments
            </a>
            <p className={`${styles.mobilelink} d-inline`}>
              Looking for Mobile?
            </p>
            <a href="#download-mobile">
              <img
                className={`mx-1`}
                src="/DP-arrow_down.svg"
                alt="arrow-down"
              />
            </a>
            <a className={`${styles.bit}`} href="#">
              Download 32-bit app
            </a>
          </div>
        </div>
      </section>

      <a id="download-mac">
        <section className={`row`}>
          <div
            className={`${styles.container} col container p-lg-5 p-md-5 m-md-4 m-lg-5`}
          >
            <div>
              <h1 className={styles.h1}>
                Zuri Chat <br /> for Mac
              </h1>
              <p className={styles.p}>
                With the Zuri Chat app, you will always be in touch with your
                team.
              </p>
              <a href="#" className={styles.button1}>
                DOWNLOAD
              </a>
            </div>
            <p className={`${styles.plink} mt-lg-4 d-inline`}>
              Looking for Mobile?
            </p>
            <a href="#download-mobile">
              <img
                className={`d-inline mx-lg-1`}
                src="/DP-arrow_down.svg"
                alt="arrow-down"
              />
            </a>
          </div>
          <div className={`col-8`}>
            <div className={styles.images}>
              <img
                className={styles.circle1}
                src="/Ellipse159.svg"
                alt="circle"
              ></img>
              <img
                className={`${styles.screenshot}`}
                src="/screenshot.svg"
                alt="app screenshot"
              ></img>
              <img
                className={styles.half}
                src="/half-circle.svg"
                alt="circle2"
              ></img>
            </div>
            <div className={`${styles.version} `}>
              <p className={`${styles.versionp} d-inline`}>VERSION 4.4.4 -</p>
              <a className={styles.versionlink} href="#">
                What's New
              </a>
              <p className={`d-inline`}>/</p>
              {/* <a
                className={styles.versionlink}
                href={Apk}
                download="release.apk"
              >
                Get the Beta
              </a> */}
              <p className={`d-inline`}>/</p>
              <a className={styles.versionlink} href="#">
                Enterprise Deployments
              </a>
              <p className={`${styles.mobilelink} d-inline`}>
                Looking for Mobile?
              </p>
              <a href="#download-mobile">
                <img
                  className={`mx-lg-1`}
                  src="/DP-arrow_down.svg"
                  alt="arrow-down"
                />
              </a>
              <a className={`${styles.bit}`} href="#">
                Download 32-bit app
              </a>
            </div>
          </div>
        </section>
      </a>
      <a id="download-mobile">
        <section className={`row`}>
          <div className={` col container p-lg-5 p-md-5 m-md-4 m-lg-5`}>
            <div>
              <h1 className={styles.h1}>
                Dive into a new realm of productivity
              </h1>
              <p className={styles.p}>
                Innovate in your workspace with the Zurichat apps on
                <a className={`${styles.versionlink} px-lg-1 fw-bold`} href="#">
                  Android
                </a>{" "}
                and
                <a className={`${styles.versionlink} px-lg-1 fw-bold`} href="#">
                  IOS
                </a>
              </p>
            </div>
          </div>
          <div className={`col-8`}>
            <div className={styles.images}>
              <img
                className={styles.rec}
                src="/DP-Rect-2.svg"
                alt="vector"
              ></img>
              <img
                className={`${styles.android}`}
                src="/Home-Android.svg"
                alt="mobile screenshot"
              ></img>
              <img className={styles.dm} src="/DM.svg" alt="DM"></img>
            </div>
          </div>
        </section>
      </a>
      <section className={`${styles.foot} mt-lg-5`}>
        <div>
          <img
            className={`${styles.rec1} mt-lg-5`}
            src="/DP-Rec-1.svg"
            alt="vector"
          ></img>
        </div>
        <div className={`${styles.button}`}>
          <h1 className={`${styles.work}`}>
            Looking for a better work environment?
          </h1>
          <div className={`mt-lg-5`}>
            <a href="#" className={`${styles.button2} d-inline`}>
              DOWNLOAD FOR WINDOWS
            </a>
            {/* <a
              href={Apk}
              download="release.apk"
              className={`${styles.button3} d-inline`}
            >
              DOWNLOAD FOR MOBILE
            </a> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Download;
