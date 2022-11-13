import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginSignUpHelp.module.css";
import { useTranslation } from "react-i18next";

const LoginSignUpHelp = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.LoginSignUpHelpCard} container`}>
      <div className="row">
        <div className="col-12 col-md-10 col-xl-8 col-lg-8">
          <div className={styles.LoginHelpMain}>
            {/* Back to Home  */}
            <div className={styles.firstRow}>
              <Link to="/" className={styles.helpLink}>
                <img src="https://img.icons8.com/ios/40/00b87c/left.png" />{" "}
                {t("auth.onboardingHelp.backToHome")}
              </Link>
            </div>

            {/* Login help */}
            <div className={`${styles.loginHelp} mt-2`} id="loginHelp">
              <h3 className={styles.CSupport}>
                {t("auth.onboardingHelp.loginHelp.headline")}
              </h3>

              <p>{t("auth.onboardingHelp.loginHelp.post_headline")}</p>

              <span className={styles.ListItemsPara}>
                <p>
                  {t("auth.onboardingHelp.loginHelp.list.textOne")},{" "}
                  <Link to="/reset-password" className={styles.helpLink}>
                    {t("auth.onboardingHelp.loginHelp.list.linkOne")}
                  </Link>{" "}
                  ASAP
                </p>
                <p>
                  {t("auth.onboardingHelp.loginHelp.list.textTwo")}{" "}
                  <Link to="/downloads" className={styles.helpLink}>
                    {t("auth.onboardingHelp.loginHelp.list.linkTwo")}
                  </Link>
                </p>
                <p>{t("auth.onboardingHelp.loginHelp.list.textThree")}</p>
                <p>{t("auth.onboardingHelp.loginHelp.list.textFour")}</p>
                <p>{t("auth.onboardingHelp.loginHelp.list.textFive")}</p>
                <p>
                  {t("auth.onboardingHelp.loginHelp.list.textSix")}{" "}
                  <Link to="/signup" className={styles.helpLink}>
                    https://zuri.chat/signup
                  </Link>{" "}
                  {t("auth.onboardingHelp.loginHelp.list.linkSix")}
                </p>
              </span>
            </div>

            {/* Sign-in help */}
            <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
              <h3 className={styles.CSupport}>
                {t("auth.onboardingHelp.signUpHelp.headline")}
              </h3>

              <p>{t("auth.onboardingHelp.signUpHelp.post_headline")} </p>

              <span className={styles.ListItemsPara}>
                <p>
                  {t("auth.onboardingHelp.signUpHelp.list.preTextOne")}{" "}
                  <strong>
                    {t("auth.onboardingHelp.signUpHelp.list.strongText")}
                  </strong>{" "}
                  {t("auth.onboardingHelp.signUpHelp.list.postTextOne")}
                </p>
                <p>{t("auth.onboardingHelp.signUpHelp.list.textTwo")}</p>
                <p>{t("auth.onboardingHelp.signUpHelp.list.textThree")}</p>
                <p>{t("auth.onboardingHelp.signUpHelp.list.textFour")}</p>
                <p>
                  {t("auth.onboardingHelp.signUpHelp.list.textFive")}{" "}
                  <Link to="/downloads" className={styles.helpLink}>
                    {t("auth.onboardingHelp.signUpHelp.list.linkFive")}
                  </Link>
                </p>
              </span>
            </div>

            {/* Support  */}
            <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
              <hr />
              <h3 className={styles.CSupport}>
                {t("auth.onboardingHelp.support.headline")}
              </h3>
              <p>
                {t("auth.onboardingHelp.support.preLinkText")}{" "}
                <Link to="/contact-us" className={styles.ChelpLink}>
                  {t("auth.onboardingHelp.support.linkText")}
                </Link>{" "}
                {t("auth.onboardingHelp.support.postLinkText")}
              </p>
            </div>
          </div>

          {/* end */}
        </div>

        <div className="col-12 col-xl-4 col-lg-4 text-left">
          <div className={styles.LoginHelpSideBar}>
            <h3 className={styles.CSupport}>Related Articles</h3>

            <p>How to Access Workspace</p>
            <p>How to Install a Plugin</p>
            <p>How to set 2FA for Your Account</p>
          </div>

          <div className={`${styles.LoginHelpSideBar} mt-3`}>
            <h3 className={styles.CSupport}>Popular Articles</h3>

            <p>How to Setup Company files Plugin</p>
            <p>How to Use Music Plugin</p>
            <p>How to set Goals for Team </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpHelp;
