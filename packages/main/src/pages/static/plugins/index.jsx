import React from "react";
import style from "./index.css";
import {
  ft_img1,
  ft_img2,
  ft_img3,
  ft_img4,
  duty,
  compShift,
  deadline,
  dm,
  expenses,
  game,
  goal,
  holiday,
  music,
  sales,
  todo,
  tools,
  arrow_right
} from "./assets";
import Cookies from "../../../components/cookies-notification/CookiesNotification";
import Subscribe from "./components/Subscribe";
import { useTranslation } from "react-i18next";
import { TopNavigationBar, Footer } from "../../../components";

export default function Homepage() {
  const { useState, useEffect } = React;

  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

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
      <TopNavigationBar />
      <div className={`${style.homepage}`}>
        {/* { COOKIES BANNER} */}
        <div>{loading ? "" : <Cookies />}</div>
        {/* FEATURES */}
        <div className={`${style.features_wrap}`}>
          <div className={`${style.features}`}>
            {/* dm plugin */}
            <FeatureRow
              src={dm}
              alt=""
              pContent1={t("plugin.dm.title")}
              h2Content={t("plugin.dm.headline")}
              pContent2={t("plugin.dm.description")}
              href="/signup"
              aContent={t("plugin.dm.link")}
              rowOrder={style.ft_row_reverse}
            />
            {/* music plugin */}
            <FeatureRow
              src={music}
              alt=""
              pContent1={t("plugin.music.title")}
              h2Content={t("plugin.music.headline")}
              pContent2={t("plugin.music.description")}
              href="/signup"
              aContent={t("plugin.music.link")}
            />
            {/* games plugin */}
            <FeatureRow
              src={game}
              alt=""
              pContent1={t("plugin.games.title")}
              h2Content={t("plugin.games.headline")}
              pContent2={t("plugin.games.description")}
              href="/signup"
              aContent={t("plugin.games.link")}
              rowOrder={style.ft_row_reverse}
            />
          </div>
        </div>
        {/* learn more */}
        <div className={`${style.sign_up_banner_wrap}`}>
          <div className={`${style.sign_up_banner}`}>
            <div className={`${style.sign_up_left}`}>
              <p className={`${style.sign_up_left_p}`}>
                {t("plugin.signup.headline")}
              </p>
              <p className={`${style.sign_up_right_p}`}>
                {t("plugin.signup.description")}
              </p>
              <a href="/signup">
                <button className={`${style.sign_up_btn}`}>
                  {t("plugin.signup.link")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}
