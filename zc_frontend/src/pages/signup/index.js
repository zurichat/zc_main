//import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './styles/SignUp.module.css'
import authBg from './images/auth_img.png'
import logo from './images/logo.svg'
//import GoogleLogin from 'react-google-login'
import { withRouter } from 'react-router-dom'

//import AuthInputBox from '../../components/AuthInputBox'
import AuthFormWrapper from '../../components/AuthFormWrapper'

const AuthHeader = () => {
  return (
    <header className={style.header}>
      <Link className={style.logo} to="/home" replace={true}>
        <img src={logo} alt="zuri logo" />
      </Link>
    </header>
  )
}

const AuthFooter = () => {
  return (
    <footer className={style.footer}>
      <Link className={style.contact} to="/contact-us" replace={true}>
        <small>Contact Us</small>
      </Link>
      <Link className={style.policy} to="/" replace={true}>
        <small>Legal Policy</small>
      </Link>
    </footer>
  )
}

const Signup = () => {
  return (
    <main id={style.authPageWrapper}>
      <aside id={style.authAsideContainer} className={style.display_none}>
        <div id={style.authImageWrapper}>
          <img src={authBg} alt="backgroundImage" />
          <di id={style.aside_txt}>
            <h4>Have fun while working</h4>
            <h4>as a team</h4>
            <p>Unlimited team collaboration platform</p>
          </di>
        </div>
      </aside>
      <section id={style.authFormContainer}>
        <AuthHeader />

        <AuthFormWrapper>ADD FORM HERE</AuthFormWrapper>

        <AuthFooter />
      </section>
    </main>
  )
}

export default withRouter(Signup)
