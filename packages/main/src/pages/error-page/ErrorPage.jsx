import React from "react";
import { TopNavigationBar, Footer } from "../../components";
import plug from "./assets/errorpic.svg";
import oops_error from "./assets/OOPS.svg";
import style from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={style.wrapper}>
      <TopNavigationBar />
      <div className={style.error_page_container}>
        <div className={style.left_content}>
          <img src={oops_error} alt="" className={style.left_image} />
          <p>
            This page you are looking for might be removed or is temporary
            unavailable. The requested url was not found on this server. Check
            with your ISP or reload again.
          </p>
          <div className={style.btn_section}>
            <Link to="">
              <button className={style.back_home_button}>Go back home</button>
            </Link>
            <span className={style.details}>
              <p>Details</p>
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
