import React from "react";
import style from "./styles/plugin.css";
import hero_img from "./assets/MacBookAir.svg";
import logo_hng from "./assets/logo_hng.svg";
import logo_i4g from "./assets/logo_i4g.svg";
import logo_camphouse from "./assets/logo_camphouse.svg";
import logo_zuri from "./assets/logo_zuri.svg";
import ft_img1 from "./assets/ft_img1.svg";
import ft_img2 from "./assets/ft_img2.svg";
import ft_img3 from "./assets/ft_img3.svg";
import ft_img4 from "./assets/ft_img4.svg";
import duty from "./assets/compduty.png";
import compShift from "./assets/compshiftman.png";
import deadline from "./assets/deadline.png";
import dm from "./assets/dm.png";
import expenses from "./assets/expenses.png";
import game from "./assets/game.png";
import goal from "./assets/goal.png";
import holiday from "./assets/holiday.png";
import music from "./assets/music.png";
import sales from "./assets/sales.png";
import todo from "./assets/todo.png";
import tools from "./assets/tools.png";
import sign_up_img from "./assets/sign_up_img.svg";
import arrow_right from "./assets/ArrowRight.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Cookies from "../cookies";
import Subscribe from "./components/Subscribe1";
import "../../i18n";
import { useTranslation } from "react-i18next";

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
      <Header />
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
            />
            {/* contribution tracker */}
            <FeatureRow
              src={ft_img2}
              alt=""
              pContent1={t("plugin.tracker.title")}
              h2Content={t("plugin.tracker.headline")}
              pContent2={t("plugin.tracker.description")}
              href="/signup"
              aContent={t("plugin.tracker.link")}
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
            {/* company goal */}
            <FeatureRow
              src={goal}
              alt=""
              pContent1={t("plugin.goal.title")}
              h2Content={t("plugin.goal.headline")}
              pContent2={t("plugin.goal.description")}
              href="/signup"
              aContent={t("plugin.goal.link")}
            />
            {/* todo plugins */}
            <FeatureRow
              src={todo}
              alt=""
              pContent1={t("plugin.todo.title")}
              h2Content={t("plugin.todo.headline")}
              pContent2={t("plugin.todo.description")}
              href="/signup"
              aContent={t("plugin.todo.link")}
              rowOrder={style.ft_row_reverse}
            />
            {/* channels plugin */}
            <FeatureRow
              src={ft_img1}
              alt=""
              pContent1={t("plugin.channels.title")}
              h2Content={t("plugin.channels.headline")}
              pContent2={t("plugin.channels.description")}
              href="/signup"
              aContent={t("plugin.channels.link")}
            />
            {/* noticeboard plugin */}
            <FeatureRow
              src={ft_img3}
              alt=""
              pContent1={t("plugin.noticeboard.title")}
              h2Content={t("plugin.noticeboard.headline")}
              pContent2={t("plugin.noticeboard.description")}
              href="/signup"
              aContent={t("plugin.noticeboard.link")}
              rowOrder={style.ft_row_reverse}
            />
            {/* company file plugin */}
            <FeatureRow
              src={ft_img4}
              alt=""
              pContent1={t("plugin.company_files.title")}
              h2Content={t("plugin.company_files.headline")}
              pContent2={t("plugin.company_files.description")}
              href="/signup"
              aContent={t("plugin.company_files.link")}
            />
            {/* company sales plugin */}
            <FeatureRow
              src={sales}
              alt=""
              pContent1={t("plugin.company_sales.title")}
              h2Content={t("plugin.company_sales.headline")}
              pContent2={t("plugin.company_sales.description")}
              href="/signup"
              aContent={t("plugin.company_sales.link")}
              rowOrder={style.ft_row_reverse}
            />
            {/* deadline plugin */}
            <FeatureRow
              src={deadline}
              alt=""
              pContent1={t("plugin.deadline.title")}
              h2Content={t("plugin.deadline.headline")}
              pContent2={t("plugin.deadline.description")}
              href="/signup"
              aContent={t("plugin.deadline.link")}
            />
            {/* expenses plugin */}
            <FeatureRow
              src={expenses}
              alt=""
              pContent1={t("plugin.expenses.title")}
              h2Content={t("plugin.expenses.headline")}
              pContent2={t("plugin.expenses.description")}
              href="/signup"
              aContent={t("plugin.expenses.link")}
              rowOrder={style.ft_row_reverse}
            />
            {/* duty shift plugin */}
            <FeatureRow
              src={duty}
              alt=""
              pContent1={t("plugin.duty_shift.title")}
              h2Content={t("plugin.duty_shift.headline")}
              pContent2={t("plugin.duty_shift.description")}
              href="/signup"
              aContent={t("plugin.duty_shift.link")}
            />
            {/* external tools plugin */}
            <FeatureRow
              src={tools}
              alt=""
              pContent1={t("plugin.external_tools.title")}
              h2Content={t("plugin.external_tools.headline")}
              pContent2={t("plugin.external_tools.description")}
              href="/signup"
              aContent={t("plugin.external_tools.link")}
              rowOrder={style.ft_row_reverse}
            />
            {/* whiteboard plugin */}
            <FeatureRow
              src={ft_img2}
              alt=""
              pContent1={t("plugin.whiteboard.title")}
              h2Content={t("plugin.whiteboard.headline")}
              pContent2={t("plugin.whiteboard.description")}
              href="/signup"
              aContent={t("plugin.whiteboard.link")}
            />
            {/* holiday calender plugin */}
            <FeatureRow
              src={holiday}
              alt=""
              pContent1={t("plugin.holiday.title")}
              h2Content={t("plugin.holiday.headline")}
              pContent2={t("plugin.holiday.description")}
              href="/signup"
              aContent={t("plugin.holiday.link")}
              rowOrder={style.ft_row_reverse}
            />
            {/* company shift */}
            <FeatureRow
              src={compShift}
              alt=""
              pContent1={t("plugin.company_shift.link")}
              h2Content={t("plugin.company_shift.headline")}
              pContent2={t("plugin.company_shift.description")}
              href="/signup"
              aContent={t("plugin.company_shift.link")}
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
