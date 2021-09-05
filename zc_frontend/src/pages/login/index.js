/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/jsx-no-duplicate-props */
import styles from '../../styles/Login.module.css'
import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import LoginLoading from '../../components/LoginLoading'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
 review
=======
import axios from 'axios'
import Illustration from '../../components/Illustration'
>>>>>>> f01da7467b46bba8645ad955cbebfb55571e7e0a

const Login = () => {
  const [email, setEmail] = useState('')
=======
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234


const Login = () => {
  const [email, setEmail] = useState('');
<<<<<<< HEAD
=======

const Login = () => {
  const [email, setEmail] = useState('')
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 review
=======


 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleSubmit = e => {
<<<<<<< HEAD
<<<<<<< HEAD
    e.preventDefault();
=======
    e.preventDefault()
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 review
    e.preventDefault()
=======
    e.preventDefault();
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
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
<<<<<<< HEAD
    <div className={`container-fluid ${styles.body}`}>
        {showLoader && <LoginLoading />}
      <div class={`row`}>
        <div class={`col-lg-5 col-md-12 ${styles.side}`}>
          <div className={`row`}>
            <img src="/Group3155.png" alt="" />
            <div className={`col-md-12 mb-5`}>
              <img
                className={`float-end mt-4 ${styles.headimg}`}
                src="/Group3150.svg"
                alt=""
              />
            </div>
          </div>
          <div className={`col-md-12 text-center text-white ${styles.header}`}>
            <h3 className={` ${styles.headertext}`}>
              Have fun while working <br /> as a team
            </h3>
            <p className={`${styles.text}`}>
              Unlimited team collaboration platform
            </p>
            <img src="/Group3149.svg" alt="" />
          </div>
          <div class={`col-md-6 col-md-6 d-flex ${styles.person}`}>
            <img class={`${styles.flower}`} src="/Group3151.png" alt="" />
            <img class={`${styles.person1}`} src="person1.svg" alt="" />
            <img class={`${styles.person2}`} src="person2.svg" alt="" />
          </div>
=======
    <div className={styles.login__container}>
      {showLoader && <LoginLoading />}
      <Illustration />
      <div class={`col-12 ${styles.login}`}>
        <div className={`pt-4 mt-3 text-center`}>
          <span>
            <img src="logo.svg" alt="logo" />
          </span>
>>>>>>> f01da7467b46bba8645ad955cbebfb55571e7e0a
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
              <img className={`${styles.line}`} src="Line.svg" alt="line" srcset="" />
            </div>
            <form className={`mb-sm-3`} onSubmit={handleSubmit}>
              <div className={` ${styles.email_input}`}>
                <div className={`mb-lg-3 mb-md-3 mb-sm-3 col-sm-12 col-md-6 w-100`}>
=======
=======
 review
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
              <img
                className={`${styles.line}`}
                src="Line.svg"
                alt="line"
                srcset=""
              />
            </div>
            <form className={`mb-sm-3`} onSubmit={handleSubmit}>
              <div className={` ${styles.email_input}`}>
                <div
                  className={`mb-lg-3 mb-md-3 mb-sm-3 col-sm-12 col-md-6 w-100`}
                >
<<<<<<< HEAD
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
=======
              <img className={`${styles.line}`} src="Line.svg" alt="line" srcset="" />
            </div>
            <form className={`mb-sm-3`} onSubmit={handleSubmit}>
              <div className={` ${styles.email_input}`}>
                <div className={`mb-lg-3 mb-md-3 mb-sm-3 col-sm-12 col-md-6 w-100`}>
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
                  <label for="Email1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`py-lg-3 py-md-3 py-sm-3 form-control`}
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
<<<<<<< HEAD
<<<<<<< HEAD
                   
=======
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 review
=======
                   
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
                  />
                </div>
              </div>
              <div className={`d-flex ${styles.email_input}`}>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className={`mb-lg-3 mb-md-3 mb-sm-3  col-sm-12 col-md-6 w-100`}>
=======
                <div
                  className={`mb-lg-3 mb-md-3 mb-sm-3  col-sm-12 col-md-6 w-100`}
                >
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 review
                <div
                  className={`mb-lg-3 mb-md-3 mb-sm-3  col-sm-12 col-md-6 w-100`}
                >
=======
                <div className={`mb-lg-3 mb-md-3 mb-sm-3  col-sm-12 col-md-6 w-100`}>
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
                  <label for="Password" class="form-label">
                    Password
                  </label>
                  <input
<<<<<<< HEAD
<<<<<<< HEAD
                     type={showPassword ? 'text' : 'password'}
=======
                    type={showPassword ? 'text' : 'password'}
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 review
                    type={showPassword ? 'text' : 'password'}
=======
                     type={showPassword ? 'text' : 'password'}
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
                    className={`py-lg-3 py-md-3 py-sm-3 form-control`}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                    placeholder="Enter a password"
                  />
                </div>
                <i
<<<<<<< HEAD
<<<<<<< HEAD
=======
 review
                  className={`cursor-pointer far fa-eye${
                    showPassword ? '' : '-slash'
                  } ${styles.far}`}
                  onClick={handleClickShowPassword}
                ></i>
=======
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
                className={`cursor-pointer far fa-eye${
                  showPassword ? '' : '-slash'
                } ${styles.far}`}
                onClick={handleClickShowPassword}
              ></i>
<<<<<<< HEAD
=======
                  className={`cursor-pointer far fa-eye${
                    showPassword ? '' : '-slash'
                  } ${styles.far}`}
                  onClick={handleClickShowPassword}
                ></i>
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
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
=======
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
          <form className={`mb-sm-3`} onSubmit={handleSubmit}>
            <div className={` ${styles.email_input}`}>
              <div
                className={`mb-lg-3 mb-md-3 mb-sm-3 col-sm-12 col-md-6 w-100`}
              >
                <label for="Email1" class="form-label">
                  Email address
>>>>>>> f01da7467b46bba8645ad955cbebfb55571e7e0a
                </label>
                <input
                  type="email"
                  className={`py-lg-3 py-md-3 py-sm-3 form-control`}
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                />
              </div>
<<<<<<< HEAD
            </form>
            <div>
              <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
 review
                className={`${styles.button} btn mb-3 col-12 col-md-6 px-lg-5 px-md-5 py-lg-3 py-md-3`}
                type="submit"
                disabled={!email || !password}
                onClick={() => setShowLoader(true)}
              >
                Log in
=======
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
                 className={`${styles.button} btn mb-3 col-12 col-md-6 px-lg-5 px-md-5 py-lg-3 py-md-3`}
                 type="submit"
                 disabled={!email || !password}
                 onClick={() => setShowLoader(true)}
               >
                 Log in
<<<<<<< HEAD
=======
                className={`${styles.button} btn mb-3 col-12 col-md-6 px-lg-5 px-md-5 py-lg-3 py-md-3`}
                type="submit"
                disabled={!email || !password}
                onClick={() => setShowLoader(true)}
              >
                Log in
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
              </Button>
=======
            </div>
            <div className={`d-flex ${styles.email_input}`}>
              <div
                className={`mb-lg-3 mb-md-3 mb-sm-3  col-sm-12 col-md-6 w-100`}
              >
                <label for="Password" class="form-label">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`py-lg-3 py-md-3 py-sm-3 form-control`}
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
>>>>>>> f01da7467b46bba8645ad955cbebfb55571e7e0a
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
              className={`${styles.button} btn mb-3 col-12 col-md-6 px-lg-5 px-md-5 py-lg-3 py-md-3`}
              type="submit"
              disabled={!email || !password}
              onClick={() => handleLogin()}
            >
              Log in
            </Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div
            class={`d-flex justify-content-around ${styles.footer}`}
          >
=======
          <div class={`d-flex justify-content-around ${styles.footer}`}>
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 review
          <div class={`d-flex justify-content-around ${styles.footer}`}>
=======
          <div
            class={`d-flex justify-content-around ${styles.footer}`}
          >
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
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
=======
          <div className={`my-2`}>
            <p
              className={`text-center py-1 text-secondary ${styles.checktextlink}`}
            >
              New to us?{' '}
              <a href="/" className={`${styles.checklink}`}>
                Create an Account
              </a>
            </p>
>>>>>>> f01da7467b46bba8645ad955cbebfb55571e7e0a
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
