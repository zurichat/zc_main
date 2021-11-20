import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";

import styles from "./Home.module.css";

import {
  TopNavigationBar,
  Footer,
  FeatureRow,
  SubscribeToNewsletter,
  CookiesNotification
} from "../../components";

import {
  HngLogo,
  I4gLogo,
  ArrowRight,
  CampHouseLogo,
  SignUpNowCTAImage,
  ZuriInternshipLogo,
  AdvancedSearchPreview,
  CustomWorkspacePreview,
  RemoteEducationPreview,
  SeamlessCommunicationPreview,
  MacBookAirWithZuriChatPreview
} from "./assets";

import { cookieStorage } from "../../utils";

export default function Index() {
  const [showCookies, setShowCookies] = React.useState(true);
  const { t } = useTranslation();

  const history = useHistory();

  const CreateWorkspaceRedirect = () => {
    React.useEffect(() => {
      const userInfo = sessionStorage.getItem(`user`);
      if (userInfo && userInfo !== null) {
        history.push("/create-workspace");
      } else {
        history.push("/signup");
      }
    }, [history]);
  };

  const allowCookie = cookieStorage.getItem("Zuri Chat Accept");
  const declineCookie = cookieStorage.getItem("Zuri Chat Decline");

  if (!allowCookie == true || declineCookie == true) {
    React.useEffect(() => {
      const timer = () => setTimeout(() => setShowCookies(false), 2000);
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    });
  }

  return (
    <div>
      <TopNavigationBar />

      <div className={`${styles.homepage}`}>
        {/* HERO */}
        <div className={`${styles.hero_wrap}`}>
          <div className={`hero ${styles.hero}`}>
            <div className={`${styles.hero_left}`}>
              <div className={`${styles.hero_left_texts}`}>
                <p className={`${styles.hero_text_one}`}>
                  {t("landing_hero_pre_headline")}
                </p>
                <h1 className={`${styles.hero_heading}`}>
                  {t("landing_hero_headline")}
                </h1>
                <p className={`${styles.hero_p}`}>
                  {t("landing_hero_post_headline")}
                </p>
              </div>
              <div className={styles.hero_btn}>
                <Link to="/signup">
                  <button className={`${styles.hero_left_btn}`}>
                    {t("landing_hero_call_to_action")}
                  </button>
                </Link>
              </div>
            </div>
            <div className={`${styles.hero_right}`}>
              <img
                src={MacBookAirWithZuriChatPreview}
                className={`${styles.hero_img}`}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* { COOKIES BANNER} */}
        <div>{showCookies ? "" : <CookiesNotification />}</div>

        {/* COMPANIES */}
        <div className={`${styles.company_banner_wrap}`}>
          <div className={`${styles.company_banner}`}>
            <p className={`${styles.cbp}`}>
              Trusted by top companies worldwide
            </p>
            <div className={`${styles.logos}`}>
              <img src={HngLogo} alt="" className={`${styles.logo}`} />
              <img src={I4gLogo} alt="" className={`${styles.logo}`} />
              <img src={CampHouseLogo} alt="" className={`${styles.logo}`} />
              <img
                src={ZuriInternshipLogo}
                alt=""
                className={`${styles.logo}`}
              />
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className={`${styles.features_wrap}`}>
          <div className={`${styles.features}`}>
            <FeatureRow
              src={SeamlessCommunicationPreview}
              arrow={ArrowRight}
              alt=""
              pContent1={t("landing_feature_row_one_title")}
              h2Content={t("landing_feature_row_one_headline")}
              pContent2={t("landing_feature_row_one_description ")}
              href="/create-workspace"
              aContent={t("landing_feature_row_one_link")}
              onClick={CreateWorkspaceRedirect}
            />
            <FeatureRow
              src={RemoteEducationPreview}
              arrow={ArrowRight}
              alt=""
              pContent1={t("landing_feature_row_two_title")}
              h2Content={t("landing_feature_row_two_headline")}
              pContent2={t("landing_feature_row_two_description")}
              href="#"
              aContent={t("landing_feature_row_two_link")}
              rowOrder={styles.ft_row_reverse}
            />
            <FeatureRow
              src={CustomWorkspacePreview}
              arrow={ArrowRight}
              alt=""
              pContent1={t("landing_feature_row_three_title")}
              h2Content={t("landing_feature_row_three_headline")}
              pContent2={t("landing_feature_row_three_description")}
              href="#"
              aContent={t("landing_feature_row_three_link")}
            />
            <FeatureRow
              src={AdvancedSearchPreview}
              arrow={ArrowRight}
              alt=""
              pContent1={t("landing_feature_row_four_title")}
              h2Content={t("landing_feature_row_four_headline")}
              pContent2={t("landing_feature_row_four_description")}
              href="#"
              aContent={t("landing_feature_row_four_link")}
              rowOrder={styles.ft_row_reverse}
            />
          </div>
        </div>

        {/* SIGN UP NOW CTA */}
        <div className={`${styles.sign_up_banner_wrap}`}>
          <div className={`${styles.sign_up_banner}`}>
            <div className={`${styles.sign_up_left}`}>
              <p className={`${styles.sign_up_left_p}`}>
                {t("landing_card_one_title")}
              </p>
              <Link to="/signup">
                <button className={`${styles.sign_up_btn}`}>
                  {t("landing_card_one_button")}
                </button>
              </Link>
            </div>
            <div className={`${styles.sign_up_right}`}>
              <img
                src={SignUpNowCTAImage}
                alt="img"
                className={`${styles.sign_up_right_img}`}
              />
            </div>
          </div>
        </div>
      </div>

      <SubscribeToNewsletter />

      <Footer />
    </div>
  );
}
