import { useState } from 'react'
import { withRouter } from 'react-router-dom'
//import GoogleLogin from 'react-google-login'

//import AuthInputBox from '../../components/AuthInputBox'
import AuthFormWrapper from '../../components/AuthFormWrapper'
import CheckEmail from '../../components/CheckEmail'
// import Modal from 'react-modal'

import AuthInputBox from '../../components/AuthInputBox'
import {
  AuthFormWrapper,
  AuthHeader,
  AuthFooter,
  AuthSideBar
} from '../../components/AuthFormElements'

const Signup = () => {
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [phone, setphone] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const submitSignUp = () => {}

  return (
    <div className={style.authPageWrapper}>
      <AuthSideBar />
      <section className={style.authFormContainer}>
        <AuthHeader />

        <AuthFormWrapper handleSubmit={submitSignUp}>
          <AuthInputBox
            id="fName"
            name="First Name"
            type="text"
            placeholder="Enter your first Name"
            value={fName}
            setValue={setfName}
          />
          <AuthInputBox
            id="lName"
            name="Last Name"
            type="text"
            placeholder="Enter your last Name"
            value={lName}
            setValue={setlName}
          />
          <AuthInputBox
            id="telephone"
            name="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            setValue={setphone}
          />
          <AuthInputBox
            id="email"
            name="Email Address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            setValue={setemail}
          />
          <AuthInputBox
            id="password"
            name="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            setValue={setpassword}
          />
          <AuthInputBox
            id="confirmPassword"
            name="Confirm Password"
            type="password"
            placeholder="Enter the same password"
            value={confirmPassword}
            setValue={setconfirmPassword}
          />
        </AuthFormWrapper>

        <AuthFooter />
      </section>
    </div>
  )
}

export default withRouter(Signup)
