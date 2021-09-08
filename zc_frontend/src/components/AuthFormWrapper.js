import React, { Children } from 'react'
import AuthInputBox from './AuthInputBox'
import styles from '../styles/AuthFormWrapper.module.css'
import {Button} from 'react-bootstrap'
import logo from '../pages/images/logo.svg'
import google from '../pages/images/google.svg'
import chevron from '../pages/images/chevron.svg'
import globe from '../pages/images/globe.svg'


const FormWrapper = ({
  children,
  header,
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
    <img 
    src={logo} 
    alt="zuri"/>
    </div>
    <h1 className={`${styles.header}`}>{header}</h1>
    <div className={`${styles.googleBtn}`}>
     <a href="" className="google"><img src={google} alt="google"/>{googleHeader}</a>
    </div>
    <div className={`${styles.topLine}`}>
    {topLineText}
    </div>
    <form
      className={`${styles.form}`}
      onSubmit={handleSubmit}
       method = "post"
    >
      {children}

      <div className={`${styles.btnContainer}`}>
       <button
        className={`${styles.btn}`}
        type="submit"
        disabled={!name || !email || !password || !check}
       >
      {submitButtonName}   
      </button>
      </div>
    </form>
    <div className={`${styles.bottomLine}`}>
      <span>{bottomLine}
        <a className={`${styles.bottomLink}`} href="">{bottomLink}</a>
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
      <img src={globe} alt="globe" />
      &nbsp; change Region
      <img src={chevron} alt="arrow" />
    </a>
    </div>
    </section>

  )
}

export default FormWrapper
