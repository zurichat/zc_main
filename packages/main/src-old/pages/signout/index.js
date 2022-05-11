import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
// import {GetUserInfo} from '@zuri/utilities'
import { SignoutStyleWrapper } from "../../component-styles/SignoutStyle";
import logo from "../../component-assets/zuri.svg";
import { Helmet } from "react-helmet";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Signout = ({ history }) => {
  const orgName = localStorage.getItem("orgName");

  let token = sessionStorage.getItem("token");

  useEffect(() => {
    axios({
      method: "post",
      url: `https://api.zuri.chat/auth/logout`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        // console.log(res)
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        window.sessionStorage.clear();
      });
  });

  const { t } = useTranslation();
  return (
    <>
      <SignoutStyleWrapper>
        <div className="logo">
          <Helmet>
            <title>{t("auth.signout.title")} - Zuri Chat</title>
          </Helmet>
          <img src={logo} alt="zuri logo" />
        </div>

        <div className="content-wrapper">
          <h6 className="org-name">
            {t("auth.signout.preOrgText")} {orgName}{" "}
            {t("auth.signout.workspace")}
          </h6>
          <signoutMessage>
            {t("auth.signout.signoutMessage.preOrgText")} {orgName}{" "}
            {t("auth.signout.workspace")}
          </signoutMessage>

          <button className="push" onClick={() => history.push("/login")}>
            {t("auth.signout.loginText")}
          </button>
          <p className="login">
            or
            <a href="/login" className="link">
              {t("auth.signout.loginText")}
            </a>
            {t("auth.signout.postLoginText")}
          </p>
        </div>
      </SignoutStyleWrapper>
    </>
  );
};

export default withRouter(Signout);
