import React from "react";
import { TopNavigationBar, Footer } from "../../components";
import plug from "./assets/errorpic.svg";
import oops_error from "./assets/OOPS.svg";
import style from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.wrapper}>
      <TopNavigationBar />
      <div className={style.error_page_container}>
        <div className={style.left_content}>
          <img src={oops_error} alt="" className={style.left_image} />
          <p>{t("content_errorpage")}</p>
          <div className={style.btn_section}>
            <Link to="">
              <button className={style.back_home_button}>
                {t("goback_errorpage")}
              </button>
            </Link>
            <span className={style.details}>
              <p>{t("details_errorpage")}</p>
            </span>
          </div>
        </div>
        <div className={style.right_content}>
          <img src={plug} alt=""></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
