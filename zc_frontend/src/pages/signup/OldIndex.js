import styles from '../../styles/Signup.module.css'
import React, { useState, useRef } from 'react'
import apple from '../images/apple.svg'
// import bg from '../images/bg.svg'
import google from '../images/google.svg'
import zuri from '../images/zuri.svg'
import globe from '../images/globe.svg'
import chevron from '../images/chevron.svg'
import axios from 'axios'
// import useHistory from 'react-router-dom';
import usePasswordVisibilityReducer from '../../components/usePasswordVisibilityReducer'

/**
 * @param password {string} - password to test
 * @param okay_length {number} - minimum length of password (defaults to 0)
 *
 * @return {{valid: boolean, msg: string, short: `length` | `special` | `number` | `lower` | `upper` | `okay`}}
 */
const passwordCheck = (password, okay_length = 0) => {
  if (!password) return { valid: false, msg: `Enter password`, short: `null` }

  /** Check if password meets required length */
  if (password.length < okay_length || 6)
    return { valid: false, msg: `Password is too short`, short: `length` }

  /** Special Character regex */
  // const special_characters = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
  /** Check if password contains a special character */
  // if (!special_characters.test(password))
  //   return {
  //     valid: false,
  //     msg: `Password must contain a special character`,
  //     short: `special`
  //   }

  /** Check if password contains a special character */
  // const number_regex = /[0-9]/
  // if (!number_regex.test(password))
  //   return {
  //     valid: false,
  //     msg: `Password must contain a number`,
  //     short: `number`
  //   }

  /** Check if password contains a lowercase character */
  // const lowercase_regex = /[a-z]/
  // if (!lowercase_regex.test(password))
  //   return {
  //     valid: false,
  //     msg: `Password must contain a lowercase letter`,
  //     short: `lower`
  //   }

  /** Check if password contains an uppercase character */
  // const uppercase_regex = /[A-Z]/
  // if (!uppercase_regex.test(password))
  //   return {
  //     valid: false,
  //     msg: `Password must contain an uppercase letter`,
  //     short: `upper`
  //   }

  return { valid: true, msg: `Password is okay`, short: `okay` }
}

const SignUp = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [displayName, setdisplayName] = useState('')
  const [phone, setphone] = useState('')
  const [success, setsuccess] = useState('')
  const [failed, setfailed] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [TOSConfirm, setTOSConfirm] = useState(false)

  // const [nameERR, setnameERR] = useState('')
  const [emailERR, setemailERR] = useState('')
  const [passwordERR, setpasswordERR] = useState('')
  const [confirmPasswordERR, setconfirmPasswordERR] = useState('')
  const [TOSConfirmERR, setTOSConfirmERR] = useState('')
  // state for toggling password visibilty
  const [toggleVisibilityOne, dispatchOne] = usePasswordVisibilityReducer()
  const [toggleVisibilityTwo, dispatchTwo] = usePasswordVisibilityReducer()
  const [showVisibleIconOne, setShowVisibilityIconOne] = useState(false)
  const [showVisibleIconTwo, setShowVisibilityIconTwo] = useState(false)

  // input reference
  const containerOneRef = useRef(null)
  const containerTwoRef = useRef(null)

  const formValidate = () => {
    // setnameERR(
    //   name && name.length > 3 ? `` : `Name must be at least 3 characters long`
    // )

    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setemailERR(email && emailReg.test(email) ? `` : `Invalid Email`)

    const passwordResult = passwordCheck(password)
    setpasswordERR(
      password && passwordResult.valid ? `` : `${passwordResult.msg}`
    )

    const confirmPasswordResult = passwordCheck(confirmPassword)
    setconfirmPasswordERR(
      confirmPassword && confirmPasswordResult.valid
        ? ``
        : `${confirmPasswordResult.msg}`
    )

    setTOSConfirmERR(TOSConfirm ? `` : `You must accept the Terms of Service`)

    return !emailERR && !passwordERR && !confirmPasswordERR && !TOSConfirmERR
      ? true
      : false
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formValidate()) {
      axios({
        url: `https://api.zuri.chat/users`,
        method: 'POST',
        data: {
          first_name: firstName,
          last_name: lastName,
          display_name: displayName,
          email: email,
          password: password,
          phone: phone
        }
      })
        .then(res => {
          console.log(res)

          console.log(res.data.message)

          if (res.data.message === 'user created') {
            setsuccess('Successfully created user')
          } else {
            setfailed('User already exists')
          }
        })
        .catch(err => console.log(err))
    } else {
      console.log(emailERR, passwordERR, confirmPasswordERR, TOSConfirmERR)
    }
  }

  const handlePassword = e => {
    setpassword(e.target.value)
    console.log(containerOneRef)
    if (e.target.value.length > 0) {
      containerOneRef.current.style.borderColor = 'rgba(0, 184, 124, 0.6)'
      setShowVisibilityIconOne(true)
    } else {
      setShowVisibilityIconOne(false)
      containerOneRef.current.style.borderColor = 'rgb(239, 239, 239)'
    }
  }

  const handleConfirmPassword = e => {
    setconfirmPassword(e.target.value)
    if (e.target.value.length > 0) {
      setShowVisibilityIconTwo(true)
      containerTwoRef.current.style.borderColor = 'rgba(0, 184, 124, 0.6)'
    } else {
      setShowVisibilityIconTwo(false)
      containerTwoRef.current.style.borderColor = 'rgb(239, 239, 239)'
    }
  }

  const displayPasswordOne = toggleVisibilityOne ? (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
      className={`${styles.visibility}`}
      onClick={() => dispatchOne('hide')}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.4 6A2.6 2.6 0 007 8.58c1.43 0 2.6-1.16 2.6-2.58a2.6 2.6 0 00-5.2 0zm6.42-3.97a9.45 9.45 0 012.8 3.78c.06.12.06.26 0 .38C12.25 9.4 9.77 11.33 7 11.33c-2.76 0-5.24-1.92-6.63-5.14a.49.49 0 010-.38C1.77 2.59 4.24.67 7 .67H7c1.38 0 2.69.48 3.82 1.36zM7 7.61c.9 0 1.62-.73 1.62-1.61a1.62 1.62 0 00-1.85-1.6 1.33 1.33 0 01-1.33 1.28h-.03c-.02.1-.04.2-.04.32 0 .88.73 1.6 1.63 1.6z"
        fill="#323232"
      />
    </svg>
  ) : (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
      className={`${styles.visibility}`}
      onClick={() => dispatchOne('show')}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54 8.17a2.61 2.61 0 003.61-3.64l-.71.71A1.64 1.64 0 017 7.64a1.6 1.6 0 01-.76-.19l-.7.72zm5.75-5.8a9.9 9.9 0 012.34 3.44.5.5 0 010 .38c-1.4 3.27-3.87 5.23-6.63 5.23a6.04 6.04 0 01-3.53-1.17l-1.26 1.27a.47.47 0 01-.69 0 .5.5 0 01-.06-.61l.02-.03 9.62-9.7.04-.05.03-.04.61-.61c.2-.2.5-.2.69 0 .2.19.2.5 0 .7l-1.18 1.19zM4.39 6c0 .17.03.34.05.5l-2.4 2.42A10.55 10.55 0 01.37 6.2a.5.5 0 010-.4C1.77 2.55 4.24.6 7 .6H7c.93 0 1.84.22 2.67.64L7.5 3.43A2.61 2.61 0 004.4 6z"
        fill="#323232"
      />
    </svg>
  )

  const displayVisibilityTwo = toggleVisibilityTwo ? (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
      className={`${styles.visibility}`}
      onClick={() => dispatchTwo('hide')}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.4 6A2.6 2.6 0 007 8.58c1.43 0 2.6-1.16 2.6-2.58a2.6 2.6 0 00-5.2 0zm6.42-3.97a9.45 9.45 0 012.8 3.78c.06.12.06.26 0 .38C12.25 9.4 9.77 11.33 7 11.33c-2.76 0-5.24-1.92-6.63-5.14a.49.49 0 010-.38C1.77 2.59 4.24.67 7 .67H7c1.38 0 2.69.48 3.82 1.36zM7 7.61c.9 0 1.62-.73 1.62-1.61a1.62 1.62 0 00-1.85-1.6 1.33 1.33 0 01-1.33 1.28h-.03c-.02.1-.04.2-.04.32 0 .88.73 1.6 1.63 1.6z"
        fill="#323232"
      />
    </svg>
  ) : (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
      className={`${styles.visibility}`}
      onClick={() => dispatchTwo('show')}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54 8.17a2.61 2.61 0 003.61-3.64l-.71.71A1.64 1.64 0 017 7.64a1.6 1.6 0 01-.76-.19l-.7.72zm5.75-5.8a9.9 9.9 0 012.34 3.44.5.5 0 010 .38c-1.4 3.27-3.87 5.23-6.63 5.23a6.04 6.04 0 01-3.53-1.17l-1.26 1.27a.47.47 0 01-.69 0 .5.5 0 01-.06-.61l.02-.03 9.62-9.7.04-.05.03-.04.61-.61c.2-.2.5-.2.69 0 .2.19.2.5 0 .7l-1.18 1.19zM4.39 6c0 .17.03.34.05.5l-2.4 2.42A10.55 10.55 0 01.37 6.2a.5.5 0 010-.4C1.77 2.55 4.24.6 7 .6H7c.93 0 1.84.22 2.67.64L7.5 3.43A2.61 2.61 0 004.4 6z"
        fill="#323232"
      />
    </svg>
  )

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login_container}></div>
      </div>
      <section
        className={`${styles.section_signup}`}
        style={{
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: `'Lato', sans-serif`,
          backgroundColor: '#ffffff'
        }}
      >
        <section className={`${styles.section_signup}`}>
          <div className={`${styles.imgBx}`}>
            {/* <img src={bg} alt="img" className={`${styles.imgBx_img}`} /> */}
          </div>

          <div className={`${styles.contentBx}`}>
            <img src={zuri} className={`${styles.formLogo}`} alt="zuri"></img>
            <div className={`${styles.formBx}`}>
              {<p style={{ color: 'green' }}>{success}</p>}
              {<p style={{ color: 'red' }}>{failed}</p>}
              <form
                className={`${styles.formInline}`}
                method="POST"
                onSubmit={handleSubmit}
              >
                <h2 className={`text-center ${styles.formInline_h2}`}>
                  Create Account
                </h2>
                <div className={`${styles.social}`}>
                  <a href="/">
                    <img
                      src={google}
                      alt="google"
                      className={`${styles.social_img}`}
                    />
                  </a>
                  <a href="/">
                    <img
                      src={apple}
                      alt="apple"
                      className={`${styles.social_img}`}
                    />
                  </a>
                </div>

                <div className={`${styles.line_container}`}>
                  <span className={`${styles.lineSpan}`}>Or sign up with</span>
                </div>

                <div className={`${styles.inputBx}`}>
                  <span className={`${styles.inputBx_span}`}>
                    <span>First name</span>
                    {/* <span className={`${styles.inputErrorMsg}`}>{nameERR}</span> */}
                  </span>
                  <input
                    className={`${styles.inputBx_input}`}
                    type="text"
                    placeholder="John"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={e => setfirstName(e.target.value)}
                  />
                </div>
                <div className={`${styles.inputBx}`}>
                  <span className={`${styles.inputBx_span}`}>
                    <span>Last name</span>
                    {/* <span className={`${styles.inputErrorMsg}`}>{nameERR}</span> */}
                  </span>
                  <input
                    className={`${styles.inputBx_input}`}
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={e => setlastName(e.target.value)}
                  />
                </div>
                <div className={`${styles.inputBx}`}>
                  <span className={`${styles.inputBx_span}`}>
                    <span>Username</span>
                    {/* <span className={`${styles.inputErrorMsg}`}>{nameERR}</span> */}
                  </span>
                  <input
                    className={`${styles.inputBx_input}`}
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={displayName}
                    onChange={e => setdisplayName(e.target.value)}
                  />
                </div>
                <div className={`${styles.inputBx}`}>
                  <span className={`${styles.inputBx_span}`}>
                    <span>Phone</span>
                    {/* <span className={`${styles.inputErrorMsg}`}>{nameERR}</span>  */}
                  </span>
                  <input
                    className={`${styles.inputBx_input}`}
                    type="number"
                    placeholder="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={e => setphone(e.target.value)}
                  />
                </div>
                <div className={`${styles.inputBx}`}>
                  <span className={`${styles.inputBx_span}`}>
                    <span>Email</span>
                    <span className={`${styles.inputErrorMsg}`}>
                      {emailERR}
                    </span>
                  </span>
                  <input
                    className={`${styles.inputBx_input}`}
                    type="email"
                    placeholder="johndoe@example.com"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e => setemail(e.target.value)}
                  />
                </div>
                <div className={`${styles.inputBx}`}>
                  <span className={`${styles.inputBx_span}`}>
                    <span>Password</span>
                    {/* <span className={`${styles.inputErrorMsg}`}>
                      {passwordERR}
                    </span> */}
                  </span>

                  {/* Password input with visibility toggle */}
                  <div
                    className={`${styles.cust_input_grp}`}
                    ref={containerOneRef}
                  >
                    <input
                      className={`${styles.inputBx_input}`}
                      type={toggleVisibilityOne ? 'text' : 'password'}
                      placeholder="Enter a password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePassword}
                    />
                    {showVisibleIconOne && displayPasswordOne}
                  </div>
                </div>
                <div className={`${styles.inputBx}`}>
                  <span className={`${styles.inputBx_span}`}>
                    <span>Confirm password</span>
                    {/* <span className={`${styles.inputErrorMsg}`}>
                      {confirmPasswordERR}
                    </span> */}
                  </span>
                  <div
                    className={`${styles.cust_input_grp}`}
                    ref={containerTwoRef}
                  >
                    <input
                      className={`${styles.inputBx_input}`}
                      type={`${toggleVisibilityTwo ? 'text' : 'password'}`}
                      placeholder="Enter the password"
                      name="confirm_password"
                      id="confirm_password"
                      value={confirmPassword}
                      onChange={handleConfirmPassword}
                    />
                    {showVisibleIconTwo && displayVisibilityTwo}
                  </div>
                </div>

                <div className={`${styles.toc}`}>
                  <input
                    className={`${styles.toc_input}`}
                    type="checkbox"
                    name="toc"
                    id="toc"
                    checked={TOSConfirm}
                    onChange={() => setTOSConfirm(!TOSConfirm)}
                  />
                  <label className="term_label">
                    I agree with Zurichat's{' '}
                    <a href="/" className={`${styles.tocText}`}>
                      Terms of service
                    </a>{' '}
                    and{' '}
                    <a href="/" className={`${styles.tocText}`}>
                      {' '}
                      privacy{' '}
                    </a>
                  </label>
                </div>
                <div className={`${styles.inputErrorMsg}`}>{TOSConfirmERR}</div>
                <div className={`${styles.inputBx}`}>
                  <button
                    type="submit"
                    className={`btn ${styles.custom_form_btn}`}
                  >
                    Sign up
                  </button>
                </div>
                <div className={`${styles.bottomline}`}>
                  <span>
                    Already have an account? &nbsp;
                    <a href="/login" className={`${styles.bottomline_a}`}>
                      {' '}
                      Log in{' '}
                    </a>
                  </span>
                </div>
                <footer className={`${styles.footer}`}>
                  <a href="/" className={`${styles.footer_a}`}>
                    contact Us
                  </a>
                  <a href="/" className={`${styles.footer_a}`}>
                    Legal Policy
                  </a>
                  <a href="/" className={`${styles.footer_a}`}>
                    <img src={globe} alt="globe" />
                    &nbsp; change Region
                    <img src={chevron} alt="arrow" />
                  </a>
                </footer>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

//export default SignUp
