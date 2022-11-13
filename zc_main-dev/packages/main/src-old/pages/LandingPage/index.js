/* eslint-disable react/prop-types */
import React from "react";
import style from "./styles/LandingPage.module.css";
import hero_img from "./assets/MacBookAir.svg";
import logo_hng from "./assets/logo_hng.svg";
import logo_i4g from "./assets/logo_i4g.svg";
import logo_camphouse from "./assets/logo_camphouse.svg";
import logo_zuri from "./assets/logo_zuri.svg";
import ft_img1 from "./assets/ft_img1.svg";
import ft_img2 from "./assets/ft_img2.svg";
import ft_img3 from "./assets/ft_img3.svg";
import ft_img4 from "./assets/ft_img4.svg";
import sign_up_img from "./assets/sign_up_img.svg";
import arrow_right from "./assets/ArrowRight.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Link, useHistory } from "react-router-dom";
import Cookies from "../cookies";
import Subscribe from "./components/Subscribe";
import { Helmet } from "react-helmet";
// import i18n (needs to be bundled ;))
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function Homepage() {
  const { useState, useEffect } = React;

  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  // For create workspace redirect start

  let history = useHistory();

  const CreateWorkspaceRedirect = () => {
    useEffect(() => {
      const userInfo = sessionStorage.getItem(`user`);

      if (userInfo && userInfo !== null) {
        history.push("/create-workspace");
      } else {
        history.push("/signup");
      }
    }, [history]);
  };

  // create workspace redirect end

  const cookieStorage = {
    getItem: key => {
      const cookies = document.cookie
        .split(";")
        .map(cookie => cookie.split("="))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`;
    }
  };

  const allowCookie = cookieStorage.getItem("Zuri Chat Accept");
  const declineCookie = cookieStorage.getItem("Zuri Chat Decline");

  if (!allowCookie == true || declineCookie == true) {
    useEffect(() => {
      const timer = () => setTimeout(() => setLoading(false), 2000);
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    });
  }

  const FeatureRow = props => {
    return (
      <div className={`${style.ft_row} ${props.rowOrder}`}>
        {/*  <Helmet>
          <title>Zuri Chat - {t("landing.title.landing")}</title>
        </Helmet> */}
        <title>
          Zuri Chat - Communicate and Collaborate from wherever you are
        </title>
        <div className={`${style.ft_col}`}>
          <img src={props.src} alt={props.alt} className={`${style.ft_img}`} />
        </div>
        <div className={`${style.ft_col}`}>
          <div className={`${style.ft_texts}`}>
            <p className={`${style.ft_text_one}`}>{props.pContent1}</p>
            <h2 className={`${style.ft_heading}`}>{props.h2Content}</h2>
            <p className={`${style.ft_p}`}>{props.pContent2}</p>
          </div>
          <div className={`${style.ft_link_wrap}`}>
            <a className={`${style.ft_link}`} href={props.href}>
              <div className={`${style.ft_link_div}`}>
                <p className={`${style.ft_link_p}`}>{props.aContent}</p>
                <img
                  src={arrow_right}
                  alt="arrow right icon"
                  className={`${style.arrow_right}`}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <div className={`${style.homepage}`}>
        {/* HERO */}
        <div className={`${style.hero_wrap}`}>
          <div className={`hero ${style.hero}`}>
            <div className={`${style.hero_left}`}>
              <div className={`${style.hero_left_texts}`}>
                <p className={`${style.hero_text_one}`}>
                  {t("landing_hero_pre_headline")}
                </p>
                <h1 className={`${style.hero_heading}`}>
                  {t("landing_hero_headline")}
                </h1>
                <p className={`${style.hero_p}`}>
                  {t("landing_hero_post_headline")}
                </p>
              </div>
              <div className={style.hero_btn}>
                <Link to="/signup">
                  <button className={`${style.hero_left_btn}`}>
                    {t("landing_hero_call_to_action")}
                  </button>
                </Link>
              </div>
            </div>
            <div className={`${style.hero_right}`}>
              <img src={hero_img} className={`${style.hero_img}`} alt="" />
            </div>
          </div>
        </div>
        {/* { COOKIES BANNER} */}
        <div>{loading ? "" : <Cookies />}</div>
        {/* COMPANIES */}
        {/*<div className={`${style.company_banner_wrap}`}>
          <div className={`${style.company_banner}`}>
            <p className={`${style.cbp}`}>Trusted by top companies worldwide</p>
            <div className={`${style.logos}`}>
              <img src={logo_hng} alt="" className={`${style.logo}`} />
              <img src={logo_i4g} alt="" className={`${style.logo}`} />
              <img src={logo_camphouse} alt="" className={`${style.logo}`} />
              <img src={logo_zuri} alt="" className={`${style.logo}`} />
            </div>
          </div>
  </div>*/}
        {/* FEATURES */}
        <div className={`${style.features_wrap}`}>
          <div className={`${style.features}`}>
            <FeatureRow
              src={ft_img1}
              alt=""
              pContent1={t("landing_feature_row_one_title")}
              h2Content={t("landing_feature_row_one_headline")}
              pContent2={t("landing_feature_row_one_description ")}
              href="/create-workspace"
              aContent={t("landing_feature_row_one_link")}
              onClick={CreateWorkspaceRedirect}
            />
            <FeatureRow
              src={ft_img2}
              alt=""
              pContent1={t("landing_feature_row_two_title")}
              h2Content={t("landing_feature_row_two_headline")}
              pContent2={t("landing_feature_row_two_description")}
              href="#"
              aContent={t("landing_feature_row_two_link")}
              rowOrder={style.ft_row_reverse}
            />
            <FeatureRow
              src={ft_img3}
              alt=""
              pContent1={t("landing_feature_row_three_title")}
              h2Content={t("landing_feature_row_three_headline")}
              pContent2={t("landing_feature_row_three_description")}
              href="#"
              aContent={t("landing_feature_row_three_link")}
            />
            <FeatureRow
              src={ft_img4}
              alt=""
              pContent1={t("landing_feature_row_four_title")}
              h2Content={t("landing_feature_row_four_headline")}
              pContent2={t("landing_feature_row_four_description")}
              href="#"
              aContent={t("landing_feature_row_four_link")}
              rowOrder={style.ft_row_reverse}
            />
          </div>
        </div>
        {/* SIGN UP */}
        <div className={`${style.sign_up_banner_wrap}`}>
          <div className={`${style.sign_up_banner}`}>
            <div className={`${style.sign_up_left}`}>
              <p className={`${style.sign_up_left_p}`}>
                {t("landing_card_one_title")}
              </p>
              <a href="/signup">
                <button className={`${style.sign_up_btn}`}>
                  {t("landing_card_one_button")}
                </button>
              </a>
            </div>
            <div className={`${style.sign_up_right}`}>
              <img
                src={sign_up_img}
                alt="img"
                className={`${style.sign_up_right_img}`}
              />
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}
