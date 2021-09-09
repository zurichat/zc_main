import { useState } from 'react'
import { withRouter } from 'react-router-dom'
//import GoogleLogin from 'react-google-login'

import style from '../../styles/AuthPage.module.css'

import AuthInputBox from '../../components/AuthInputBox'
import {
  AuthFooter,
  AuthFormWrapper,
  AuthHeader,
  AuthLoginText,
  AuthSideBar
} from '../../components/AuthFormElements'

const Login = () => {
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')

  const submitLogin = () => {}

  return (
    <div className={style.authPageWrapper}>
      <AuthSideBar />
      <section className={style.authFormContainer}>
        <AuthHeader />
        <AuthLoginText />
        <button
          className={`btn btn-outline-primary ${style.GoogleloginButton}`}
        >
          {/* <img src="zc_frontend/src/pages/images/google.svg" alt="" />  */}
          Log in with Google
        </button>
        <AuthFormWrapper submitHandler={submitLogin}>
          <AuthInputBox
            id="email"
            name="Email Address"
            type="email"
            placeholder="Enter your email address"
            value={name}
            setValue={setname}
          />
          <AuthInputBox
            id="password"
            name="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            setValue={setpassword}
          />
        </AuthFormWrapper>

        <AuthFooter />
      </section>
    </div>
  )
}

export default withRouter(Login)
