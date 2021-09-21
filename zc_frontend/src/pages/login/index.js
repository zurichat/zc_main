import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import authBg1 from '../../assets/auth_images/auth_bg1.svg'
import authBg2 from '../../assets/auth_images/auth_bg2.svg'
import authBg3 from '../../assets/auth_images/auth_bg3.svg'
import authBg4 from '../../assets/auth_images/auth_bg4.svg'
import authBg5 from '../../assets/auth_images/auth_bg5.svg'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
import axios from 'axios'

//import GoogleLogin from 'react-google-login'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, seterror] = useState('')
  const [emailerror, setemailerror] = useState('')
  const [passworderror, setpassworderror] = useState('')
  const [rememberMe, setRememberMe] = useState('')

  // Background Images
  const images = [authBg1, authBg2, authBg3, authBg4, authBg5]
  const [currentImage, setcurrentImage] = useState(
    Math.floor(Math.random() * 4)
  )

  // To Display Random Aside Background Image
  const displayImage = () => {
    let i = currentImage
    i >= images.length - 1 ? (i = 0) : i++
    setcurrentImage(i)
    console.log(images[i], i)
  }

  const handleSubmit = async e => {
    setemailerror('')
    setpassworderror('')
    e.preventDefault()
    await axios
      .post('https://api.zuri.chat/auth/login', {
        email,
        password
      })
      .then(response => {
        const { data, message } = response.data

        //Store token in localstorage
        sessionStorage.setItem('session_id', data.session_id)

        //Store user copy in localstorage
        sessionStorage.setItem('user', JSON.stringify(data.user))

        //Display message
        alert(message) //Change this when there is a design

        setTimeout(() => {
          //Redirect to some other page
        }, 2000)
      })
      .catch(error => {
        const { data } = error.response
        console.log(data)

        RegExp('not found').test(data.message) &&
          setemailerror(
            'Sorry, this email is not registered, try again or click Create an Account.'
          )
        RegExp(/Invalid login/).test(data.message) &&
          setpassworderror(
            'Sorry, you have entered the wrong password. Try again or click Get help signing in.'
          )

        //Render error message to the user
        seterror(data.message) //Change this when there is a design
      })
  }

  return (
    <main id={styles.authPageWrapper}>
      <aside id={styles.authAsideContainer} className={styles.display_none}>
        <div id={styles.authImageWrapper}>
          <img src={images[currentImage]} alt="backgroundImage" />
          {/* <div id={styles.aside_txt}></div> */}
        </div>
      </aside>
      <section id={styles.authFormContainer}>
        <FormWrapper
          header="Login"
          subHeader="Login with the data you entered during your registration"
          googleHeader="Login with Google"
          topLineText="OR"
          submitButtonName="Log in"
          email={email}
          password={password}
          check={rememberMe}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine="New to us?"
          bottomLink="Create an Account"
          bottomLinkHref="signup"
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
            onFocus={displayImage}
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
            onFocus={displayImage}
          />

          <div className={`${styles.rememberMe}`}>
            <span className={`${styles.left}`}>
              <input
                className={`${styles.checkBox}`}
                name="RememberMe"
                type="checkbox"
                value={rememberMe}
                onClick={() => {
                  setRememberMe(!rememberMe)
                }}
                onFocus={displayImage}
              />
              Remember me
            </span>
            <span className={`${styles.right}`}>
              Forgot password?<a href="/"> {''}Get help signing in</a>
            </span>
          </div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Login)
