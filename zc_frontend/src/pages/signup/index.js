import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
// import styles from './styles/SignUp.module.css'
//import GoogleLogin from 'react-google-login'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [tos, setTos] = useState(false)
  // const { error, setError } = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <main id={styles.authPageWrapper}>
      <aside id={styles.authAsideContainer} className={styles.display_none}>
        <div id={styles.authImageWrapper}>
          <img src={authBg} alt="backgroundImage" />
          <div id={styles.aside_txt}></div>
        </div>
      </aside>
      <section id={styles.authFormContainer}>
        <FormWrapper
          header="Create Account"
          subHeader=""
          googleHeader="Sign up with Google"
          topLineText="OR"
          submitButtonName="Sign up"
          name={name}
          email={email}
          password={password}
          check={tos}
          handleSubmit={handleSubmit}
          bottomLine="Already have an account?"
          bottomLink="Log in"
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="name"
            name="Full name"
            type="text"
            placeholder="John Doe"
            value={name}
            setValue={setName}
            // error={error}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name="Email address"
            type="email"
            placeholder="johnDoe@example.com"
            value={email}
            setValue={setEmail}
            // error={error}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            setValue={setPassword}
            // error={error}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="cpassword"
            name="Confirm password"
            type="password"
            placeholder="Enter your password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            // error={error}
          />
          <div className={`${styles.tos}`}>
            <input
              className={`${styles.checkBox}`}
              name="tos"
              type="checkbox"
              value={tos}
              onClick={() => {
                setTos(!tos)
              }}
            />
            <span className={`${styles.tosText}`}>
              I agree to Zurichat's {''}
              <a href="/">terms of services{''} </a>&
              <a href="/"> {''}privacy</a>
            </span>
          </div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Signup)
