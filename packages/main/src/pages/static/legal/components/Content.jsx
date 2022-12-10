import React, { useState } from "react";
import Style from "../styles/content.module.css";
import Link from "../component/Link";
import UserTerms from "../assets/user-grid.png";
import Security from "../assets/security1.png";
import Overview from "../assets/hg.png";
import Policy from "../assets/acceptable-use-policy.png";
import Arrow from "../assets/arrow-right.svg";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  const Selected = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <main className={Style.privacyAndTerms}>
      <section className={Style.legalHero}>
        <div className={Style.legalHeroContent}>
          <header className={Style.legalHeader}>
            <h1 className={Style.legalHeadingOne}>{t("legal_termsText")}</h1>
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
                    {t("legal_startedText")}
                  </span>
                  <span
                    className={`${
                      openMenu ? Style.closeNavigation : Style.dontShow
                    }`}
                  >
                    {t("legal_navtext")}
                  </span>
                </button>
                <div
                  className={`${
                    openMenu
                      ? Style.legalSideMenuSelected
                      : Style.legalSideItemMenu
                  }`}
                >
                  <h4 className={Style.sideItemHeader}>
                    {t("legal_startedText")}
                  </h4>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title={`${t("legal_overview")}`} />
                    </li>
                  </ul>
                  <h4 className={Style.sideItemHeader}>{t("legal_terms")}</h4>
                  <button className={Style.sideItemButton}>
                    {t("legal_terms")}
                  </button>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title={`${t("legal_zuriTerms")}`} />
                    </li>
                    <li>
                      <Link title={`${t("legal_UserTerms")}`} />
                    </li>
                    <li>
                      <Link title={`${t("legal_ApiTerms")}`} />
                    </li>
                    <li>
                      <Link title={`${t("legal_serviceLevel")}`} />
                    </li>
                  </ul>
                  <h4 className={Style.sideItemHeader}>
                    {t("legal_securityText")}
                  </h4>
                  <button className={Style.sideItemButton}>
                    {t("legal_securityText")}
                  </button>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title={`${t("legal_securitiesPractice")}`} />
                    </li>
                    <li>
                      <Link title={`${t("legal_report")}`} />
                    </li>
                  </ul>
                  <h4 className={Style.sideItemHeader}>
                    {t("legal_ZUriText")}
                  </h4>
                  <button className={Style.sideItemButton}>
                    {t("legal_ZUriText")}
                  </button>
                  <ul
                    className={`${Style.sideItemOrdered} ${Style.legalSideItemMenu}`}
                  >
                    <li>
                      <Link title={`${t("legal_ZuriForum")}`} />
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
                      {t("legal_user_text")}
                    </h3>
                    <p className={Style.legalCardSub}>{t("legal_userAgree")}</p>
                  </header>
                  <figure
                    className={Style.legalCardImage}
                    id={Style.legalCard1}
                  >
                    <img src={UserTerms} alt="ZuriChat" />
                  </figure>
                  <div className={Style.legalCardFooter}>
                    <span className={Style.legalCardFooterText}>
                      {t("legal_readmore")}
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>
                </a>
                <a href="#" className={Style.legalGridLink}>
                  <header className={Style.legalCardTitle}>
                    <h3 className={Style.legalCardHeading}>
                      {t("legal_termsText")}
                    </h3>
                    <p className={Style.legalCardSub}>
                      {t("legal_policyText")}
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
                      {t("legal_readmore")}
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>
                </a>
                <a href="#" className={Style.legalGridLink}>
                  <header className={Style.legalCardTitle}>
                    <h3 className={Style.legalCardHeading}>
                      {t("legal_securtyOverview")}
                    </h3>
                    <p className={Style.legalCardSub}>
                      {t("legal_takeSecurity")}
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
                      {t("legal_readmore")}
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>
                </a>
                <a href="#" className={Style.legalGridLink}>
                  <header className={Style.legalCardTitle}>
                    <h3 className={Style.legalCardHeading}>
                      {t("legal_acceptable")}
                    </h3>
                    <p className={Style.legalCardSub}>
                      {t("legal_list_ofAccept")}
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
                      {t("legal_readmore")}
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
