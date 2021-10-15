import React, { useState, useEffect } from "react"
import { withRouter, useHistory, Link } from "react-router-dom"
// import { BehaviorSubject } from 'rxjs'
import AuthInputBox from "../../components/AuthInputBox"
import FormWrapper from "../../components/AuthFormWrapper"
import LoginLoading from "../../components/LoginLoading"
import styles from "../../component-styles/AuthFormElements.module.css"
import axios from "axios"
import { GetUserInfo } from "@zuri/control"
import $behaviorSubject from "../../../../globalState"
import { Helmet } from "react-helmet"
import { goToDefaultChannel } from "../../api/channels"
import "../../i18n";
import { useTranslation} from "react-i18next";
// import { Link } from 'react-router-dom'
// import authBg1 from './assets/auth_bg1.svg'
// import authBg2 from './assets/auth_bg2.svg'
// import authBg3 from './assets/auth_bg3.svg'
// import authBg4 from './assets/auth_bg4.svg'
// import authBg5 from './assets/auth_bg5.svg'
//import GoogleLogin from 'react-google-login'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, seterror] = useState("")
  const [emailerror, setemailerror] = useState("")
  const [passworderror, setpassworderror] = useState("")
  const [rememberMe, setRememberMe] = useState("")
  const [Loading, setLoading] = useState(false)

  let history = useHistory()

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    const userInfo = sessionStorage.getItem(`user`)
    const redirect = sessionStorage.getItem(`workSpaceInviteRedirect`)

    if (userInfo && userInfo !== null && redirect !== null)
      history.push(redirect)
  }, [history])

  const handleSubmit = async e => {
    e.preventDefault()
    setemailerror("")
    setpassworderror("")

    if (!email) {
      setemailerror(`Enter an email address`)
      return
    }

    if (!password) {
      setpassworderror(`Enter a Password`)
      return
    }

    await axios
      .post("https://api.zuri.chat/auth/login", {
        email,
        password
      })
      .then(response => {
        const { data, message } = response.data

        setLoading(true)

        //Store token in localstorage
        sessionStorage.setItem("token", data.user.token)

        //Store token in localstorage
        sessionStorage.setItem("session_id", data.session_id)

        //Store user copy in localstorage
        sessionStorage.setItem("user", JSON.stringify(data.user))

        //Return the login data globally
        $behaviorSubject.next(response.data)

        // Switch for redirects
        axios
          .get(`https://api.zuri.chat/users/${data.user.email}/organizations`, {
            headers: {
              Authorization: `Bearer ${data.user.token}`
            }
          })
          .then(res => {
            const orgs = res.data.data.length
            // console.log(res.data.data)
            sessionStorage.setItem(
              "organisations",
              JSON.stringify(res.data.data)
            )
            // console.log('reg orgs', orgs)

            switch (true) {
              case orgs > 1:
                history.push("/choose-workspace")
                break
              case orgs < 1:
                history.push("/createworkspace")
                break
              default:
                goToDefaultChannel()
            }
          })
          .catch(err => {
            throw err
          })
      })
      .catch(error => {
        const { data } = error.response
        console.error(data)

        RegExp("not found").test(data.message) &&
          setemailerror(
            "Sorry, this email is not registered, try again or click Create an Account."
          )
        RegExp(/Invalid login/).test(data.message) &&
          setpassworderror(
            "Sorry, you have entered the wrong password. Try again or click Get help signing in."
          )

        //Render error message to the user
        seterror(data.message) //Change this when there is a design
      })
  }

  const { t } = useTranslation();

  return (
    <main id={styles.authPageWrapper}>
      <Helmet>
        <title>{t("login.title")}</title>
      </Helmet>
      {Loading && <LoginLoading />}
      <section id={styles.authFormContainer}>
        <FormWrapper
          header={t("login.form.header")}
          subHeader={t("login.form.sub_header")}
          googleHeader={t("login.form.google_header")}
          topLineText={t("login.form.topline_text")}
          submitButtonName={t("login.form.submitButtonName")}
          disabled={email && password}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine={t("login.form.bottomLine")}
          bottomLink={t("login.form.bottomLink")}
          bottomLinkHref={t("login.form.signUp")}
          setLoading={setLoading}
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name="Email address"
            type="email"
            placeholder="Johndoe@example.com"
            value={email}
            setValue={setEmail}
            error={emailerror}
            // onFocus={displayImage}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder={t("login.form.authInputBox.passwordInputPlaceHolder")}
            value={password}
            setValue={setPassword}
            error={passworderror}
            // onFocus={displayImage}
          />

          <div className={`${styles.rememberMe}`}>
            <div className={`${styles.left}`}>
              <input
                className={`${styles.checkBox}`}
                name="RememberMe"
                type="checkbox"
                value={rememberMe}
                onClick={() => {
                  setRememberMe(!rememberMe)
                }}
                // onFocus={displayImage}
              />
                {t("login.form.authInputBox.rememberMe")}
            </div>
            <div className={`${styles.right}`}>
              <Link
                to="/reset-password"
                className={`${styles.resetPasswordLink}`}
              >
                {t("login.form.authInputBox.forgotPassword")}
              </Link>
              <Link to="/troubleshooting/onboarding-help"> {""}{t("login.form.authInputBox.getHelp")}</Link>

            </div>
          </div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Login)
