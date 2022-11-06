import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import ZuriChatLogoTitle from "../../assets/zuri-chat-logo/logo-title.svg";
import { useAuth } from "../../auth/use-auth";

export default function NewSignout() {
  const auth = useAuth();
  const { t } = useTranslation();

  const history = useHistory();
  const orgName = localStorage.getItem("orgName");
  const token = sessionStorage.getItem("token");

  localStorage.removeItem("currentWorkspace");

  // Switch Workspace
  const switchWorkspace = () => {
    history.replace("/login");
  };

  useEffect(() => {
    auth.signout(token);
  }, []);

  return (
    <>
      <div className="logo">
        <img src={ZuriChatLogoTitle} alt="zuri logo" />
      </div>
      <p>New Signout page</p>
      <div className="content-wrapper">
        <h6 className="org-name">
          {t("signout_preOrgText")} {orgName} {t("signout_workspace")}
        </h6>

        <>
          {t("signout_signoutMessage")} {orgName} {t("signout_workspace")}
        </>

        <button className="push" onClick={() => switchWorkspace()}>
          {t("signout_loginText")}
        </button>

        <p className="login">
          or
          <a onClick={() => switchWorkspace()} className="link">
            {t("signout_loginText")}
          </a>
          {t("signout_postLoginText")}
        </p>
      </div>
    </>
  );
}
