import React, { useState } from "react";
import Style from "../styles/content.module.css";
import Link from "../../../components/Link";
// import CustomLinks from "./contentData"
import UserTerms from "../assets/user-grid.png";
import Security from "../assets/security1.png";
import Overview from "../assets/hg.png";
import Policy from "../assets/acceptable-use-policy.png";
import Arrow from "../assets/arrow-right.svg";

const Content = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Selected = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <main className={Style.privacyAndTerms}>
      <section className={Style.legalHero}>
        <div className={Style.legalHeroContent}>
          <header className={Style.legalHeader}>
            <h1 className={Style.legalHeadingOne}>Terms & Policies</h1>
          </header>
        </div>
      </section>
      <div className={Style.legalContentMain}>
        <div className={Style.legalContentContainer}>
          <div className={Style.legalContentGrid}>
            <div className={Style.legalSideItem}>
              <nav className={Style.legalNavGuide}>
                <button
                  className={`${
                    openMenu ? Style.active : Style.sideItemButton
                  }`}
                  onClick={Selected}
                >
                  <span
                    className={`${
                      openMenu ? Style.dontShow : Style.entryPointItem
                    }`}
                  >
                    Getting Started
                  </span>
                  <span
                    className={`${
                      openMenu ? Style.closeNavigation : Style.dontShow
                    }`}
                  >
                    Close Legal Navigation
                  </span>
                </button>
                <div
                  className={`${
                    openMenu
                      ? Style.legalSideMenuSelected
                      : Style.legalSideItemMenu
                  }`}
                >
                  <h4 className={Style.sideItemHeader}>Getting started</h4>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title="Overview" />
                    </li>
                  </ul>
                  <h4 className={Style.sideItemHeader}>Terms</h4>
                  <button className={Style.sideItemButton}>Terms</button>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title="ZuriChat Terms of Service" />
                    </li>
                    <li>
                      <Link title="User Terms of Service" />
                    </li>
                    <li>
                      <Link title="API Terms of Service" />
                    </li>
                    <li>
                      <Link title="Service Level Agreement" />
                    </li>
                  </ul>
                  <h4 className={Style.sideItemHeader}>Security</h4>
                  <button className={Style.sideItemButton}>Security</button>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title="Security Practices" />
                    </li>
                    <li>
                      <Link title="Report a Vulnerability" />
                    </li>
                  </ul>
                  <h4 className={Style.sideItemHeader}>Zuri Community</h4>
                  <button className={Style.sideItemButton}>
                    Zuri Community
                  </button>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title="ZuriChat Community Forum" />
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <section className={Style.legalContentArea}>
              <div className={Style.legalContentAreaGrid}>
                <a href="#" className={Style.legalGridLink}>
                  <header className={Style.legalCardTitle}>
                    <h3 className={Style.legalCardHeading}>
                      User Terms of Service
                    </h3>
                    <p className={Style.legalCardSub}>
                      Agreement with a user that joins an existing team.
                    </p>
                  </header>
                  <figure
                    className={Style.legalCardImage}
                    id={Style.legalCard1}
                  >
                    <img src={UserTerms} alt="ZuriChat" />
                  </figure>
                  <div className={Style.legalCardFooter}>
                    <span className={Style.legalCardFooterText}>
                      Read More
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>
                </a>
                <a href="#" className={Style.legalGridLink}>
                  <header className={Style.legalCardTitle}>
                    <h3 className={Style.legalCardHeading}>Privacy Policy</h3>
                    <p className={Style.legalCardSub}>
                      Our policy regarding what information we collect at
                      Zurichat, how we use it, and what choices you have.
                    </p>
                  </header>
                  <figure
                    className={Style.legalCardImage}
                    id={Style.legalCard2}
                  >
                    <img src={Security} alt="ZuriChat" />
                  </figure>
                  <div className={Style.legalCardFooter}>
                    <span className={Style.legalCardFooterText}>
                      Read More
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>
                </a>
                <a href="#" className={Style.legalGridLink}>
                  <header className={Style.legalCardTitle}>
                    <h3 className={Style.legalCardHeading}>
                      Security Overview
                    </h3>
                    <p className={Style.legalCardSub}>
                      We take security seriously and we are proud here at
                      Zurichat to exceed industry when it comes to your
                      organization.{" "}
                    </p>
                  </header>
                  <figure
                    className={Style.legalCardImage}
                    id={Style.legalCard3}
                  >
                    <img src={Overview} alt="ZuriChat" />
                  </figure>
                  <div className={Style.legalCardFooter}>
                    <span className={Style.legalCardFooterText}>
                      Read More
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>
                </a>
                <a href="#" className={Style.legalGridLink}>
                  <header className={Style.legalCardTitle}>
                    <h3 className={Style.legalCardHeading}>
                      Acceptable Use Policy
                    </h3>
                    <p className={Style.legalCardSub}>
                      List of acceptable and unacceptable conduct of our
                      services
                    </p>
                  </header>
                  <figure
                    className={Style.legalCardImage}
                    id={Style.legalCard4}
                  >
                    <img src={Policy} alt="ZuriChat" />
                  </figure>
                  <div className={Style.legalCardFooter}>
                    <span className={Style.legalCardFooterText}>
                      Read More
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
