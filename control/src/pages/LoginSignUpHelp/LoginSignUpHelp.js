import React from "react"
import styles from "./LoginSignUpHelp.module.css"
import { useTranslation} from "react-i18next"; 


const LoginSignUpHelp = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.LoginSignUpHelpCard} container`}>
      <div className="row">
        <div className="col-11">
          {/* Back to Home */}
          <div className={styles.firstRow}>
            <a href="/" className={styles.helpLink}>
              <img src="https://img.icons8.com/ios/40/00b87c/left.png" /> { t("auth.onboardingHelp.backToHome") }
            </a>
          </div>

          {/* Login help */}
          <div className={`${styles.loginHelp} mt-2`} id="loginHelp">
            <h3 className={styles.CSupport}>
              {t("auth.onboardingHelp.loginHelp.headline")}
            </h3>
            <p>
              {t("auth.onboardingHelp.loginHelp.post_headline")}
            </p>

            <ul className={styles.helpList}>
              <li>
                {t("auth.onboardingHelp.loginHelp.list.textOne")},{" "}
                <a href="/reset-password" className={styles.helpLink}>
                  {t("auth.onboardingHelp.loginHelp.list.linkOne")}
                </a>{" "}
                ASAP
              </li>
              <li>
                {t("auth.onboardingHelp.loginHelp.list.textTwo")}{" "}
                <a href="/downloads" className={styles.helpLink}>
                  {t("auth.onboardingHelp.loginHelp.list.linkTwo")}
                </a>
              </li>
              <li>
                {t("auth.onboardingHelp.loginHelp.list.textThree")}
              </li>
              <li>
                {t("auth.onboardingHelp.loginHelp.list.textFour")}
              </li>
              <li>
                {t("auth.onboardingHelp.loginHelp.list.textFive")}
              </li>
              <li>
                {t("auth.onboardingHelp.loginHelp.list.textSix")}{" "}
                <a href="/signup" className={styles.helpLink}>
                  https://zuri.chat/signup
                </a>{" "}
                {t("auth.onboardingHelp.loginHelp.list.linkSix")}
              </li>
            </ul>
          </div>

          {/* Sign-in help */}
          <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
            <h3 className={styles.CSupport}>{t("auth.onboardingHelp.signUpHelp.headline")}</h3>
            <p>
              {t("auth.onboardingHelp.signUpHelp.post_headline")}{" "}
            </p>

            <ul className={styles.helpList}>
              <li>
                {t("auth.onboardingHelp.signUpHelp.list.preTextOne")} <strong>{t("auth.onboardingHelp.signUpHelp.list.strongText")}</strong> {t("auth.onboardingHelp.signUpHelp.list.postTextOne")}
              </li>
              <li>
                {t("auth.onboardingHelp.signUpHelp.list.textTwo")}
              </li>
              <li>
                {t("auth.onboardingHelp.signUpHelp.list.textThree")}
              </li>
              <li>
                {t("auth.onboardingHelp.signUpHelp.list.textFour")}
              </li>
              <li>
                {t("auth.onboardingHelp.signUpHelp.list.textFive")}{" "}
                <a href="/downloads" className={styles.helpLink}>
                  {t("auth.onboardingHelp.signUpHelp.list.linkFive")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support  */}
          <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
            <hr />
            <h3 className={styles.CSupport}>{t("auth.onboardingHelp.support.headline")}</h3>
            <p>
              {t("auth.onboardingHelp.support.preLinkText")}{" "}
              <a href="/contact-us" className={styles.ChelpLink}>
                {t("auth.onboardingHelp.support.linkText")}</a> {t("auth.onboardingHelp.support.postLinkText")}
            </p>
            <hr />
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  )
}

export default LoginSignUpHelp
