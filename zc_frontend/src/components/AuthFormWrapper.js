import React from 'react'
// import AuthInputBox from './AuthInputBox'
import styles from '../styles/AuthFormWrapper.module.css'
import logo from '../pages/images/logo.svg'
import google from '../pages/images/google.svg'
// import chevron from '../pages/images/chevron.svg'
// import globe from '../pages/images/globe.svg'

const FormWrapper = ({
  children,
  header,
  subHeader,
  googleHeader,
  topLineText,
  submitButtonName,
  name,
  email,
  password,
  check,
  handleSubmit,
  bottomLine,
  bottomLink
}) => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.logo}`}>
        <img src={logo} alt="zuri" />
      </div>
      <div className={`${styles.headers}`}>
        <h1 className={`${styles.header}`}>{header}</h1>
        <p className={`${styles.subHeader}`}>{subHeader}</p>
      </div>
      <div className={`${styles.googleBtn}`}>
        <a href="/" className="google">
          <img src={google} alt="google" />
          {googleHeader}
        </a>
      </div>
      <div>
        <span className={`${styles.topLine}`}>{topLineText}</span>
      </div>
      <form className={`${styles.form}`} onSubmit={handleSubmit} method="post">
        <div className={`${styles.inputSection}`}>{children}</div>

        <div className={`${styles.btnContainer}`}>
          <button
            className={`${
              name || email || password || check
                ? styles.btn
                : styles.btnDisabled
            }`}
            type="submit"
            disabled={!name || !email || !password || !check}
          >
            {submitButtonName}
          </button>
        </div>
      </form>
      <div className={`${styles.bottomLine}`}>
        <span>
          {bottomLine}
          {''}
          <a className={`${styles.bottomLink}`} href="/">
            {''} {bottomLink}
          </a>
        </span>
      </div>
      <div className={`${styles.footer}`}>
        <a href="/" className={`${styles.footer_a}`}>
          contact Us
        </a>
        <a href="/" className={`${styles.footer_a}`}>
          Legal Policy
        </a>
        <a href="/" className={`${styles.footer_a}`}>
          About Zurichat
        </a>
      </div>
    </section>
  )
}

export default FormWrapper
