import React from 'react'
import { Link } from 'react-router-dom'
import { RiErrorWarningLine } from 'react-icons/ri'
import styles from '../component-styles/AuthFormWrapper.module.css'
import logo from '../component-assets/logo.svg'
import google from '../component-assets/google.svg'
import GoogleAuth from './GoogleAuth'

const FormWrapper = ({
  children,
  header,
  subHeader,
  googleHeader,
  topLineText,
  submitButtonName,
  error,
  disabled,
  handleSubmit,
  bottomLine,
  bottomLink,
  bottomLinkHref,
  setLoading
}) => {
  return (
    <section className={`${styles.container}`}>
      <a href="/">
        <div className={`${styles.logo}`}>
          <img src={logo} alt="zuri" />
        </div>
      </a>
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
          <GoogleAuth
            className={`${styles.googleBtn}`}
            googleHeader={googleHeader}
            google={google}
            setLoading={setLoading}
          />
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
              disabled={!disabled}
              className={`${styles.btn}`}
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
        <Link to="/contact-us" className={`${styles.footer_a}`}>
          Contact Us
        </Link>
        <Link to="/legal" className={`${styles.footer_a}`}>
          Legal Policy
        </Link>
        <Link to="/about" className={`${styles.footer_a}`}>
          About Zurichat
        </Link>
      </div>
    </section>
  )
}

export default FormWrapper
