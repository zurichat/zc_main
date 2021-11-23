import React from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navigateToUrl } from "single-spa";

import styles from "./Login.module.css";
import {
  AuthInputBox,
  AuthFormWrapper,
  GeneralLoading
} from "../../components";

export default function Index() {
  const { t } = useTranslation();
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, seterror] = React.useState("");
  const [emailerror, setemailerror] = React.useState("");
  const [passworderror, setpassworderror] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  const [loggingIn, setLoggingIn] = React.useState(false);

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
    setLoggingIn(true);

    if (!email) {
      setemailerror(`Enter an email address`);
      setLoggingIn(false);
      return;
    }

    if (!password) {
      setpassworderror(`Enter a Password`);
      setLoggingIn(false);
      return;
    }

    await axios
      .post("https://api.zuri.chat/auth/login", {
        email,
        password
      })
      .then(response => {
        const { data, message } = response.data;

        setLoading(true);
        setLoggingIn(false);

        //Store token in localstorage
        sessionStorage.setItem("token", data.user.token);

        //Store token in localstorage
        sessionStorage.setItem("session_id", data.session_id);

        //Store user copy in localstorage
        sessionStorage.setItem("user", JSON.stringify(data.user));

        //Return the login data globally
        // $behaviorSubject.next(response.data)

        // Switch for redirects
        axios
          .get(`https://api.zuri.chat/users/${data.user.email}/organizations`, {
            headers: {
              Authorization: `Bearer ${data.user.token}`
            }
          })
          .then(res => {
            const orgs = res.data.data.length;
            // console.log(res.data.data)
            sessionStorage.setItem(
              "organisations",
              JSON.stringify(res.data.data)
            );
            // console.log('reg orgs', orgs)

            switch (true) {
              case orgs >= 1:
                // history.push("/choose-workspace");
                // console.log("here", orgs);
                // history.push("/channels");
                navigateToUrl("/channels");
                break;
              case orgs < 1:
                history.push("/create-workspace");
                break;
              default:
              // goToDefaultChannel();
            }
          })
          .catch(err => {
            throw err;
          });
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
        setLoggingIn(false);
      });
  };

  return (
    <main id={styles.authPageWrapper}>
      {Loading && <GeneralLoading text="Launching Zuri Chat" />}

      <section id={styles.authFormContainer}>
        <AuthFormWrapper
          header={t("header")}
          subHeader={t("sub_header")}
          googleHeader={t("google_header")}
          topLineText={t("topline_text")}
          submitButtonName={t("LoginsubmitButtonName")}
          disabled={email && password}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine={t("bottomLine")}
          bottomLink={t("bottomLink")}
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
              <Link to="/troubleshooting/onboarding-help">
                {" "}
                {""}
                {t("getHelp")}
              </Link>
            </div>
          </div>
        </AuthFormWrapper>
      </section>
    </main>
  );
}
