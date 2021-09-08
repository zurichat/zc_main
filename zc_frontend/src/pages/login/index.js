/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/jsx-no-duplicate-props */
import styles from '../../styles/Login.module.css'
import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import LoginLoading from '../../components/LoginLoading'
import axios from 'axios'
import Illustration from '../../components/Illustration'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    alert(`Your state values: \n
            emal: ${email} \n
            password: ${password} \n
            You can replace this alert with your proces`)
  }
  let history = useHistory()
  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const successResponseGoogle = response => {
    history.push('/')
  }
  const failureResponseGoogle = response => {
    console.log(response)
  }

  //Handle login Auth
  const handleLogin = async () => {
    await axios
      .post('/api/login', {
        email,
        password
      })
      .then(response => {
        const { token, userCopy } = response.data

        //store token in localStorage
        localStorage.setItem('token', token)

        //store user data in localStorage
        localStorage.setItem('user', userCopy)

        //Redirect to loading page
        setShowLoader(true)
      })
      .catch(() => {
        //Remove this when there is an error design
        alert('Invalid username or password')
      })
  }

  return (
    <div className={styles.login__container}>
      {showLoader && <LoginLoading />}
      <Illustration />
      <div class={`col-12 ${styles.login}`}>
        <div className={`pt-2 mt-3 text-center`}>
          <span>
            <img src="logo.svg" alt="logo" />
          </span>
        </div>
        <div className={`pt-1 mt-3`}>
          <h2 className={`pt-2 ${styles.loginheader} text-dark`}>Log in</h2>
          <p className={styles.subtext}>
            Login with the data you entered during your registration
          </p>
          <div className={`my-lg-3 my-sm-3 text-center`}>
            <GoogleLogin
              clientId="78755437309-27q9m2toval9c439d2r7q5gj28h0pqcc.apps.googleusercontent.com"
              render={renderProps => (
                <img
                  onClick={renderProps.onClick}
                  className={`mx-3 ${styles.icon}`}
                  src={`/google.png`}
                  alt="google icon"
                />
              )}
              buttonText=""
              onSuccess={successResponseGoogle}
              onFailure={failureResponseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            <img
              className={`mx-lg-3 mx-sm-3 ${styles.icon}`}
              src={`/apple.png`}
              alt="apple icon"
            />
          </div>
          <div className={` d-flex justify-content-between`}>
            <img className={`${styles.line}`} src="Line.svg" alt="line" />
            <p className={`${styles.or}`}>Or log in with</p>
            <img
              className={`${styles.line}`}
              src="Line.svg"
              alt="line"
              srcset=""
            />
          </div>
          <form className={`mb-lg-1 mb-sm-3`} onSubmit={handleSubmit}>
            <div className={` ${styles.email_input}`}>
              <div
                className={`mb-lg-2 mb-md-2 mb-sm-2 col-sm-12 col-md-6 w-100`}>
                <label for="Email1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`py-lg-2 py-md-2 py-sm-3 form-control`}
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className={`d-flex ${styles.email_input}`}>
              <div
                className={`mb-lg-2 mb-md-2 mb-sm-2  col-sm-12 col-md-6 w-100`}
              >
                <label for="Password" class="form-label">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`py-lg-2 py-md-2 py-sm-2 form-control`}
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  placeholder="Enter a password"
                />
              </div>
              <i
                className={`cursor-pointer far fa-eye${
                  showPassword ? '' : '-slash'
                } ${styles.far}`}
                onClick={handleClickShowPassword}
              ></i>
            </div>
            <div class="mb-lg-2 mb-md-2 mb-sm-3 my-sm-3 form-check">
              <input type="checkbox" class="form-check-input" id="Check" />
              <label
                className={`form-check-label text-secondary ${styles.check}`}
                for="Check"
              >
                Remember me
              </label>
              <label
                className={`float-md-end text-secondary  ${styles.checktext}`}
              >
                Forgot password?{' '}
                <a href="/" className={`${styles.checklink}`}>
                  Get help signing in
                </a>
              </label>
            </div>
          </form>
          <div>
            <Button
              className={`${styles.button} mb-lg-2 col-12 col-md-6 px-lg-2 px-md-2 py-lg-2 py-md-2`}
              type="submit"
              disabled={!email || !password}
              onClick={() => handleLogin()}
            >
              Log in
            </Button>
          </div>
          <div className={`my-2`}>
            <p
              className={`text-center py-1 text-secondary ${styles.checktextlink}`}
            >
              New to us?{' '}
              <a href="/" className={`${styles.checklink}`}>
                Create an Account
              </a>
            </p>
          </div>
        </div>
        <div class={`d-flex justify-content-around ${styles.footer}`}>
          <a href="/" class={`mx-md-4 text-secondary`}>
            Contact Us
          </a>
          <a href="/" class={`mx-md-4 text-secondary`}>
            Legal Policy
          </a>
          <a href="/" class={`mx-md-4 text-secondary`}>
            <i class="fas fa-globe"></i> Change Region{' '}
            <i class="fas fa-caret-down"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
