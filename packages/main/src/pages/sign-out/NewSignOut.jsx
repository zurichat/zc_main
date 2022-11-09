import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ZuriChatLogoTitle from "../../assets/zuri-chat-logo/logo.svg";
import TreeLogImg from "../../assets/images/tree_log.svg";
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

  //   Return to home page
  const returnHome = () => history.replace("/");

  useEffect(() => {
    auth.signout(token);
  }, []);

  return (
    <SignoutStyleWrapper>
      <div className="logo">
        <img src={ZuriChatLogoTitle} alt="zuri logo" />
      </div>
      <div className="content-wrapper">
        <h6 className="org-name">
          {t("signout_preOrgText")} {orgName} {t("signout_workspace")}
        </h6>

        <>
          {t("signout_newSignoutMessage")} {orgName} {t("signout_workspace")}
        </>
        <div className="tree-img">
          <img src={TreeLogImg} alt="zuri logo" />
        </div>
        <button className="push" onClick={() => switchWorkspace()}>
          {t("signout_loginText")}
        </button>

        <p className="login">
          <a onClick={() => returnHome()} className="link">
            or {t("signout_homeText")}
          </a>
        </p>
      </div>
    </SignoutStyleWrapper>
  );
}

const SignoutStyleWrapper = styled.section`
  background: #fff;
  width: 94%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 10px;

  .logo {
    margin: 3rem auto;
    width: max-content;
    img {
      height: 80px;
    }
  }

  .content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 120px 30px;
    text-align: center;

    background: rgba(35, 35, 35, 0.04);
    border: 1px solid rgba(35, 35, 35, 0.2);
    border-radius: 8px;

    .tree-img {
      margin: 1rem 0;
      width: 90%;
      max-width: 334px;
      min-height: 190px;
      padding: 10px;

      img {
        max-width: 100%;
      }
    }

    .login a {
      color: #232323;
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: ;
      }
    }

    button.push {
      margin: 1rem 0;
      background: #00b87c;
      border-radius: 4px;
      padding: 12px 18px;
      text-align: center;
      outline: none;
      border: none;
      color: #fff;
      &:hover {
        background: #156349;
      }
    }
  }

  @media (max-width: 700px) {
    .content-wrapper {
      padding: 20px 10px;
    }
    .logo {
      img {
        height: 40px;
      }
    }
  }
`;
