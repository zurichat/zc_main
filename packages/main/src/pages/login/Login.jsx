import React from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//import { navigateToUrl } from "single-spa";

import styles from "./Login.module.css";
import {
  AuthInputBox,
  AuthFormWrapper,
  GeneralLoading
} from "../../components";
import { useAuth } from "../../auth/use-auth";

export default function Index() {
  const auth = useAuth();
  const { t } = useTranslation();
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, seterror] = React.useState("");
  const [emailerror, setemailerror] = React.useState("");
  const [passworderror, setpassworderror] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState("");
  const [Loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const userInfo = sessionStorage.getItem(`user`);
    const redirect = sessionStorage.getItem(`workSpaceInviteRedirect`);

    if (userInfo && userInfo !== null && redirect !== null)
      history.push(redirect);
  }, [history]);

  const handleSubmit = async e => {
    e.preventDefault();
    setemailerror("");
    setpassworderror("");

    if (!email) {
      setemailerror(`Enter an email address`);
      return;
    }

    if (!password) {
      setpassworderror(`Enter a Password`);
      return;
    }
    auth
      .signin(email, password)
      .then(userData => {
        //Store token in localstorage
        sessionStorage.setItem("token", userData.user.token);

        //Store token in localstorage
        sessionStorage.setItem("session_id", userData.session_id);

        //Store user copy in localstorage
        sessionStorage.setItem("user", JSON.stringify(userData.user));

        sessionStorage.setItem(
          "organisations",
          JSON.stringify(userData.userWorkspaces)
        );

        if (userData.userWorkspaces.length) {
          const lastLocation = window.localStorage.getItem("lastLocation");
          const redirectPath = lastLocation
            ? lastLocation
            : "/choose-workspace";
          history.push(redirectPath);
        } else {
          history.push("/create-workspace");
        }
      })
      .catch(error => {
        const { data } = error.response;
        console.error(data);

        RegExp("not found").test(data.message) &&
          setemailerror(
            "Sorry, this email is not registered, try again or click Create an Account."
          );
        // RegExp(/Invalid login/).test(data.message) &&
        RegExp("login credentials").test(data.message) &&
          setpassworderror(
            "Sorry, you have entered the wrong password. Try again or click Get help signing in."
          );

        //Render error message to the user
        seterror(data.message); //Change this when there is a design
      });
  };

  return (
    <main id={styles.authPageWrapper}>
      {Loading && <GeneralLoading text="Launching Zuri Chat" />}

      <section id={styles.authFormContainer}>
        <AuthFormWrapper
          header={t("LogInheader")}
          subHeader={t(
            "Login with the data you entered during your registration."
          )}
          googleHeader={t("Login with Google")}
          topLineText={t("topline_text")}
          submitButtonName={t("LoginsubmitButtonName")}
          disabled={!(email && password)}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine={t("logInbottomLine")}
          bottomLink={t("logInbottomLink")}
          bottomLinkHref="Signup"
          setLoading={setLoading}
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name={t("emailInputName")}
            type="email"
            placeholder="Johndoe@example.com"
            value={email}
            setValue={setEmail}
            error={emailerror}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name={t("passwordInputName")}
            type="password"
            placeholder={t("passwordInputPlaceHolder")}
            value={password}
            setValue={setPassword}
            error={passworderror}
          />

          <div className={`${styles.rememberMe}`}>
            <div className={`${styles.left}`}>
              <input
                className={`${styles.checkBox}`}
                name="RememberMe"
                type="checkbox"
                value={rememberMe}
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
              />
              {t("rememberMe")}
            </div>
            <div className={`${styles.right}`}>
              <Link
                to="/reset-password"
                className={`${styles.resetPasswordLink}`}
              >
                {t("forgotPassword")}
              </Link>
              <span>Get help siging in</span>
            </div>
          </div>
        </AuthFormWrapper>
      </section>
    </main>
  );
}
