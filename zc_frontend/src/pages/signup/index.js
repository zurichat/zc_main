import styles from '../../styles/Signup.module.css'
import React, { useState } from 'react'
import apple from '../images/apple.svg'
import bg from '../images/bg.svg'
import google from '../images/google.svg'
import zuri from '../images/zuri.svg'
import globe from '../images/globe.svg'
import chevron from '../images/chevron.svg'

/**
 * @param password {string} - password to test
 * @param okay_length {number} - minimum length of password (defaults to 0)
 *
 * @return {{valid: boolean, msg: string, short: `length` | `special` | `number` | `lower` | `upper` | `okay`}}
 */
const passwordCheck = (password, okay_length = 0) => {
  if (!password) return { valid: false, msg: `Enter password`, short: `null` }

  /** Check if password meets required length */
  if (password.length < okay_length)
    return { valid: false, msg: `Password is too short`, short: `length` }

  /** Special Character regex */
  const special_characters = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
  /** Check if password contains a special character */
  if (!special_characters.test(password))
    return {
      valid: false,
      msg: `Password must contain a special character`,
      short: `special`
    }

  /** Check if password contains a special character */
  const number_regex = /[0-9]/
  if (!number_regex.test(password))
    return {
      valid: false,
      msg: `Password must contain a number`,
      short: `number`
    }

  /** Check if password contains a lowercase character */
  const lowercase_regex = /[a-z]/
  if (!lowercase_regex.test(password))
    return {
      valid: false,
      msg: `Password must contain a lowercase letter`,
      short: `lower`
    }

  /** Check if password contains an uppercase character */
  const uppercase_regex = /[A-Z]/
  if (!uppercase_regex.test(password))
    return {
      valid: false,
      msg: `Password must contain an uppercase letter`,
      short: `upper`
    }

  return { valid: true, msg: `Password is okay`, short: `okay` }
}

const SignUp = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [TOSConfirm, setTOSConfirm] = useState(false)

  const [nameERR, setnameERR] = useState('')
  const [emailERR, setemailERR] = useState('')
  const [passwordERR, setpasswordERR] = useState('')
  const [confirmPasswordERR, setconfirmPasswordERR] = useState('')
  const [TOSConfirmERR, setTOSConfirmERR] = useState('')

  const formValidate = () => {
    setnameERR(
      name && name.length > 3 ? `` : `Name must be at least 3 characters long`
    )

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

    return !nameERR &&
      !emailERR &&
      !passwordERR &&
      !confirmPasswordERR &&
      !TOSConfirmERR
      ? true
      : false
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formValidate()) {
      // submit request here
    } else {
      console.log(
        nameERR,
        emailERR,
        passwordERR,
        confirmPasswordERR,
        TOSConfirmERR
      )
    }
  }

  return (
    <>
      <section
        className={`${styles.section}`}
        style={{
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: `'Lato', sans-serif`,
          backgroundColor: '#ffffff'
        }}
      >
        <div className={`${styles.imgBx}`}>
          <img src={bg} alt="img" className={`${styles.imgBx_img}`} />
        </div>
        <div className={`${styles.contentBx}`}>
          <img src={zuri} className={`${styles.formLogo}`} alt="zuri"></img>
          <div className={`${styles.formBx}`}>
            <form
              className={`${styles.formInline}`}
              method="POST"
              onSubmit={handleSubmit}
            >
              <h2 className={`${styles.formInline_h2}`}>Create Account</h2>
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
              <div>
                <span className={`${styles.lineSpan}`}>or sign up with</span>
              </div>

              <div className={`${styles.inputBx}`}>
                <span className={`${styles.inputBx_span}`}>
                  <span>Full name</span>
                  <span className={`${styles.inputErrorMsg}`}>{nameERR}</span>
                </span>
                <input
                  className={`${styles.inputBx_input}`}
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  id="name"
                  value={name}
                  onChange={e => setname(e.target.value)}
                />
              </div>
              <div className={`${styles.inputBx}`}>
                <span className={`${styles.inputBx_span}`}>
                  <span>Email</span>
                  <span className={`${styles.inputErrorMsg}`}>{emailERR}</span>
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
                  <span className={`${styles.inputErrorMsg}`}>
                    {passwordERR}
                  </span>
                </span>

                <input
                  className={`${styles.inputBx_input}`}
                  type="password"
                  placeholder="Enter a password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                />
              </div>
              <div className={`${styles.inputBx}`}>
                <span className={`${styles.inputBx_span}`}>
                  <span>Confirm password</span>
                  <span className={`${styles.inputErrorMsg}`}>
                    {confirmPasswordERR}
                  </span>
                </span>

                <input
                  className={`${styles.inputBx_input}`}
                  type="password"
                  placeholder="Enter the password"
                  name="confirm_password"
                  id="confirm_password"
                  value={confirmPassword}
                  onChange={e => setconfirmPassword(e.target.value)}
                />
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
                <label>
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
                <button type="submit" className={`btn ${styles.btn}`}>
                  Sign up
                </button>
              </div>
              <div className={`${styles.bottomline}`}>
                <span>
                  Already have an account?
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
                  change Region
                  <img src={chevron} alt="arrow" />
                </a>
              </footer>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
