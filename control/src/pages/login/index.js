import React, { useState, useEffect } from "react"
import { withRouter, useHistory } from "react-router-dom"
// import { BehaviorSubject } from 'rxjs'
import AuthInputBox from "../../components/AuthInputBox"
import FormWrapper from "../../components/AuthFormWrapper"
import LoginLoading from "../../components/LoginLoading"
import styles from "../../component-styles/AuthFormElements.module.css"
import axios from "axios"
// import { GetUserInfo } from "@zuri/control"
import $behaviorSubject from "../../../../globalState"
import { Helmet } from "react-helmet"
import { goToDefaultChannel } from "../../api/channels"
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

        //Store token in localstorage
        sessionStorage.setItem("token", data.user.token)

        //Store token in localstorage
        sessionStorage.setItem("session_id", data.session_id)

        //Store user copy in localstorage
        sessionStorage.setItem("user", JSON.stringify(data.user))

        //Return the login data globally
        $behaviorSubject.next(response.data)

        setLoading(true)

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

  // Switch to appropraite screen
  const getOrganizations = async user => {
    try {
      const res = await axios.get(
        `https://api.zuri.chat/users/${user.email}/organizations`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      )

      if (res.status !== 200) {
        throw new Error(
          `Unable to fetch list of wokspaces, status code: ${res.status}`
        )
      }

      const orgs = await res.data.data.length

      switch (true) {
        case orgs === 1:
          goToDefaultChannel()
          // setLoading(false)
          break
        case orgs > 1:
          history.push("/choose-workspace")
          // setLoading(false)
          break
        case orgs < 1:
          history.push("/createworkspace")
          // setLoading(false)
          break
        // default:
        //   goToDefaultChannel()
        //   break
      }
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
 return(
    <main id={styles.authPageWrapper}>
      <Helmet>
        <title>Login - Zuri Chat</title>
      </Helmet>
      {Loading && <LoginLoading />}
      <section id={styles.authFormContainer}>
        <FormWrapper
          header="Login"
          subHeader="Login with the data you entered during your registration"
          googleHeader="Login with Google"
          topLineText="OR"
          submitButtonName="Log in"
          disabled={email && password}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine="New to us?"
          bottomLink="Create an Account"
          bottomLinkHref="Signup"
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
            placeholder="Enter a password"
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
              Remember me
            </div>
            <div className={`${styles.right}`}>
              Forgot password?<a href="/help"> {""}Get help signing in</a>
            </div>
          </div>
        </FormWrapper>
      </section>
    </main>
  )
}
}
export default withRouter(Login);
