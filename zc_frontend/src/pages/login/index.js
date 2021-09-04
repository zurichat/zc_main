/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/jsx-no-duplicate-props */
import styles from './styles/Login.module.css'
import React, { useState } from 'react'
// import LoginLoading from '../../components/LoginLoading'
import GoogleLogin from 'react-google-login'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState({
    password: '',
    showPassword: false
  })
  let history = useHistory()
  // const handleClickShowPassword = () => {
  //   setPass({ ...pass, showPassword: !pass.showPassword })
  // }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handlePasswordChange = prop => event => {
    setPass({ ...pass, [prop]: event.target.value })
  }
  const successResponseGoogle = response => {
    history.push('/')
  }
  const failureResponseGoogle = response => {
    console.log(response)
  }
  return (
    <div className={`container-fluid ${styles.body}`}>
      <div class={`row`}>
        <div class={`col-md-5 ${styles.side}`}>
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
          <div class={` col-md-6 d-flex ${styles.person}`}>
            <img class={`${styles.flower}`} src="/Group3151.png" alt="" />
            <img class={`${styles.person1}`} src="person1.svg" alt="" />
            <img class={`${styles.person2}`} src="person2.svg" alt="" />
          </div>
        </div>
        <div class={`col-md-7 ${styles.login}`}>
          <div className={`pt-4 mt-3 text-center`}>
            <span>
              <img src="zurichatlogo.svg" alt="logo" />
              <p className={`d-inline p-2`}>Zuri chat</p>
            </span>
          </div>
          <div className={`pt-1 mt-3`}>
            <h2 className={`pt-2 `}>
              <Link title="Log in" color="#00B87C" />
            </h2>
            <p className={styles.subtext}>
              Login with the data you entered during your
            </p>
            <div className={`d-flex ${styles.email_input}`}>
              <div className={`mb-3 col-12 col-md-6 w-100`}>
                <input
                  type="email"
                  className={`py-2 form-control`}
                  value={email}
                  onChange={e => {
                    console.log(e.target.value)
                    setEmail(e.target.value)
                  }}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className={`d-flex ${styles.email_input}`}>
              <div className={`mb-3 col-12 col-md-6 w-100 d-flex`}>
                <input
                  type={pass.showPassword ? 'text' : 'password'}
                  onChange={handlePasswordChange('password')}
                  className={`py-2 form-control`}
                  value={pass.password}
                  onChange={e => {
                    console.log(e.target.value)
                    setPass(e.target.value)
                  }}
                  placeholder="Enter a password"
                  id="id_password"
                />
              </div>
              <i
                className={`far fa-eye-slash ${styles.far}`}
                // onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              ></i>
              {/* {pass.password ? <i className={`far far-eye ${styles.far}`}></i>: <i className={`far fa-eye-slash ${styles.far}`}></i>} */}
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label
                className={`form-check-label text-secondary ${styles.checktext}`}
                for="exampleCheck1"
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
            <div>
              <button
                className={`${styles.button} btn mb-3 col-12 col-md-6 px-5 px-md-5 py-2`}
              >
                Log In
              </button>
            </div>
            <div className={`my-2 d-flex justify-content-around`}>
              <img className={`w-50 p-3`} src="Line.svg" alt="line" />
              <p className={`${styles.or}`}>OR</p>
              <img className={`w-50 p-3`} src="Line.svg" alt="line" srcset="" />
            </div>
            <div className={`my-3 text-center`}>
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
                className={`mx-3 ${styles.icon}`}
                src={`/apple.png`}
                alt="apple icon"
              />
            </div>
            <div className={`my-3`}>
              <p
                className={`text-center py-2 text-secondary ${styles.checktext}`}
              >
                New to us?{' '}
                <a href="/" className={`${styles.checklink}`}>
                  Create an Account
                </a>
              </p>
            </div>
          </div>
          <div class={`d-flex justify-content-around my-5  ${styles.footer}`}>
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
    </div>
  )
}

export default Login
