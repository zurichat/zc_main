import React, { Fragment } from "react";
import style from "./styles/whyzurichat.module.css";
import texting from "./assets/undraw_Texting_re_l11n.svg";
import stat from "./assets/undraw_Site_stats_re_ejgy.svg";
import organize from "./assets/undraw_Organize_resume_re_k45b.svg";
import message from "./assets/undraw_Messages_re_qy9x.svg";
import storage from "./assets/undraw_Memory_storage_reh0.svg";
import support from "./assets/undraw_Active_support_re_b7sj.svg";
import team from "./assets/undraw_good_team_m7uu.svg";
import hero_img from "../LandingPage/assets/MacBookAir.svg";
import HeaderSearchSuggestion from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

function Whyzurichat() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <HeaderSearchSuggestion />
      <div className={style.blog_container}>
        <section className={`${style.hero_blog}`}>
          <div className={style.hero_section}>
            <div className={style.hero_writeup}>
              <h1 className={style.hero_title}>{t("title")}</h1>
              <p className={style.hero_paragraph}>
                {t("hero_paragraph1")}
                <br />
                {t("hero_paragraph2")}
              </p>
            </div>
            <div className={style.hero_img}>
              <img src={hero_img} alt="" />
            </div>
          </div>
        </section>

        <div className={`${style.blog__content__header} ${style.max_width}`}>
          <h2>{t("blog_content_header")}</h2>
        </div>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>{t("text_wrap1")}</h2>
                <p>{t("text_wrap1_p")}</p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={organize} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__right} ${style.max_width}`}>
            <div className={style.card__right__image}>
              <div className={style.blog_img}>
                <img src={stat} alt="" />
              </div>
            </div>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>{t("text_wrap2")}</h2>
                <p>{t("text_wrap2_p")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>{t("text_wrap3")}</h2>
                <p>{t("text_wrap3_p")}</p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={texting} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__right} ${style.max_width}`}>
            <div className={style.card__right__image}>
              <div className={style.blog_img}>
                <img src={team} alt="" />
              </div>
            </div>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>{t("text_wrap4")}</h2>
                <p>{t("text_wrap4_p")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>{t("text_wrap5")}</h2>
                <p>{t("text_wrap5_p")}</p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={storage} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__right} ${style.max_width}`}>
            <div className={style.card__right__image}>
              <div className={style.blog_img}>
                <img src={message} alt="" />
              </div>
            </div>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>{t("text_wrap6")}</h2>
                <p>{t("text_wrap6_p")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>{t("text_wrap7")}</h2>
                <p>{t("text_wrap7_p")}</p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={support} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.bottom_container}>
          <div className={style.max_width}>
            <div className={style.bottom_card}>
              <p>
                {t("bottom_card")} <strong>Zuri Chat</strong>{" "}
              </p>
              <Link to="/signup" className={style.bottom_link}>
                {t("bottom_link")}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Whyzurichat;
