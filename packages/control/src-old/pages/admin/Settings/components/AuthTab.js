import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/AuthenticationTab.module.css";
// import { Link } from 'react-router-dom'
import { AnimateSharedLayout } from "framer-motion";
import googleIcon from "../../assets/google-outlinedgoogle.svg";
import samlIcon from "../../assets/regularsaml.svg";
import TwoFactor from "./TwoFactor";
import Session from "./Session";
import PreferenceWrapper from "../PreferenceWrapper";
import ForcedPasswordReset from "./ForcedPasswordReset";
import { getCurrentWorkspace } from "../../Utils/Common";
import toast, { Toaster } from "react-hot-toast";
import { authAxios } from "../../Utils/Api";

const test = (
  <div className={styles.configureTop}>
    <p className={`mb-2 mt-2 ${styles.configureHeader}`}>Session Duration</p>
    <span className={styles.feature}>PAID FEATURE</span>
  </div>
);

const AuthTab = () => {
  const currentWorkspaceId = getCurrentWorkspace();
  const [workspaceData, setWorkspaceData] = useState({});

  useEffect(() => {
    if (currentWorkspaceId) {
      authAxios
        .get(`/organizations/${currentWorkspaceId}`)
        .then(res => {
          setWorkspaceData(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [currentWorkspaceId]);

  const handleUpgradePlan = e => {
    e.preventDefault();

    authAxios
      .post(`/organizations/${currentWorkspaceId}/upgrade-to-pro`)
      .then(res => {
        // console.log(res.data)
        toast.success(res.data.message, {
          position: "top-center"
        });
        // setModal(false)
      })
      .catch(err => {
        console.error("error", err);
        toast.error("Oops, something went wrong check and try again", {
          position: "top-center"
        });
      });
  };

  return (
    <>
      <div className={`${styles.settingsTab} mt-2`} id={styles.settingtab}>
        <div className={styles.configureContainer}>
          <span className={styles.configureSpan}>
            Zuri supports a number of single sign-on (SSO) services. Get started
            with setting up your workspace’s SSO below, or{" "}
            <a href="#">learn about using single sign-on with Zurichat</a>
          </span>{" "}
          <br />
          <div className={styles.configureTop}>
            <p className={`mb-2 mt-2 ${styles.configureHeader}`}>
              Configure an authentication method
            </p>
            <span className={styles.feature}>PAID FEATURE</span>
          </div>
          <div>
            <div className={styles.configure}>
              <div className={styles.configureLeft}>
                <img src={googleIcon} alt="google icon" />
                <div className={styles.configureTextContainer}>
                  <p>Google Apps authentication</p>
                  <span>
                    Upgrade to enable signing in with a Google account
                  </span>
                </div>
              </div>
              <div className={styles.settingsright}>
                <button
                  disabled={workspaceData.version === "pro"}
                  className={styles.signout}
                  onClick={e => handleUpgradePlan(e)}
                >
                  Upgrade
                </button>
              </div>
            </div>

            <div className={styles.configure}>
              <div className={styles.configureLeft}>
                <img src={samlIcon} alt="saml icon" />
                <div className={styles.configureTextContainer}>
                  <p>SAML authentication</p>
                  <span>
                    Azure, Okta and Onelogin, or your custom SAML 2.0 soluition
                    is only available on the Business+ plan
                  </span>
                </div>
              </div>
              <div className={styles.settingsright}>
                <button
                  className={styles.signout}
                  disabled={workspaceData.version === "pro"}
                >
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Workspace-wide two-factor authentication"
          text="Require each user to configure and use two-factor authentication for signing in."
          btnText="expand"
        >
          {/* Two factor authentication input field goes under here */}
          <TwoFactor />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={test}
          text="Once logged in, users will remain signed in until they explicitly sign out. This setting allows you to force users to log in after a certain amount of time has elapsed since their last login."
          btnText="expand"
        >
          {/* Session input field goes under here */}
          <Session />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Forced Password Reset"
          text="You can force a reset of all passwords for all members in your workspace. Each member will receive a message from Slackbot telling them that you’ve triggered the reset, and will then receive a password reset link via email."
          btnText="expand"
        >
          {/* ForcedPasswordReset input field goes under here */}
          <ForcedPasswordReset />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <div className={`${styles.settingsTab} mt-2`} id={styles.settingtab}>
        <div className={`${styles.settingleft} `} id={styles.settingleft}>
          <p className="mb-2">Automatically Open This Workspace for Members</p>
          <span>
            Admins can configure Slack for Windows, Mac or Linux to
            automatically open a specific workspace for members and allow them
            to sign in without having to enter the workspace URL. Download the
            “slacktoken” file and place it in a user’s download directory.
          </span>
        </div>
        <div className={styles.settingsright}>
          <Link to="">
            <button className={styles.signout}>Download</button>
          </Link>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default AuthTab;
