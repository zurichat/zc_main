import React from 'react'
//import { Link } from 'react-router-dom'
import { RiErrorWarningLine } from 'react-icons/ri'
import styles from '../component-styles/AuthFormWrapper.module.css'
import logo from '../component-assets/logo.svg'
import google from '../component-assets/google.svg'

const FormWrapper = ({
  children,
  header,
  subHeader,
  googleHeader,
  topLineText,
  submitButtonName,
  error,
  name,
  email,
  password,
  check,
  handleSubmit,
  bottomLine,
  bottomLink,
  bottomLinkHref
}) => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.logo}`}>
        <img src={logo} alt="zuri" />
      </div>
      <div className={styles.FormWrapper}>
        <div className={`${styles.headers}`}>
          <h1 className={`${styles.header}`}>{header}</h1>
          <p className={`${styles.subHeader}`}>{subHeader}</p>
        </div>
        {/* <div className="googleBtn_div">
          <Link className={styles.google__btn} to="/" replace={true}>
            <img src={google} alt="google" />
            {googleHeader}
          </Link>
        </div> */}
        <div className={`${styles.googleAuthDiv}`}>
          <div className={`${styles.googleBtn}`}>
            <a href="/" className="google">
              <img src={google} alt="google" />
              {googleHeader}
            </a>
          </div>
          <span className={`${styles.hrWrapper}`}>
            {/* <span className={`${styles.topLine}`}>{topLineText}</span> */}
            <hr className={`${styles.hrLeft}`} />
            <div>{topLineText}</div>
            <hr className={`${styles.hrRight}`} />
          </span>
          {error && (
            <div className={`${styles.errWrapper}`}>
              <RiErrorWarningLine />
              <div>{error}</div>
            </div>
          )}
        </div>
        <form
          className={`${styles.form}`}
          onSubmit={handleSubmit}
          method="post"
          action=""
        >
          <div className={`${styles.inputSection}`}>{children}</div>

          <div className={`${styles.btnContainer}`}>
            <input
              className={`${
                name || email || password || check
                  ? styles.btn
                  : styles.btnDisabled
              }`}
              value={submitButtonName}
              type="submit"
            />
          </div>

          <div
            className={`${styles.bottomLine}`}
            style={{ paddingTop: '20px' }}
          >
            <span>
              {bottomLine}
              {''}
              <a className={`${styles.bottomLink}`} href={`/${bottomLinkHref}`}>
                {''} {bottomLink}
              </a>
            </span>
          </div>
        </form>

        {/* <div className={`${styles.bottomLine}`}>
          <span>
            {bottomLine}
            {''}
            <a className={`${styles.bottomLink}`} href="/">
              {''} {bottomLink}
            </a>
          </span>
        </div> */}
      </div>

      <div className={`${styles.footer}`}>
        <a href="/contact-us" className={`${styles.footer_a}`}>
          Contact Us
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
