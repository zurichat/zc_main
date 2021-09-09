import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'

//import GoogleLogin from 'react-google-login'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState('')

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
          header="Login"
          subHeader="Login with the data you entered during your registration"
          googleHeader="Login with Google"
          topLineText="OR"
          submitButtonName="Log in"
          email={email}
          password={password}
          check={rememberMe}
          handleSubmit={handleSubmit}
          bottomLine="New to us? Create an Account"
          bottomLink="Log in"
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name="Email address"
            type="email"
            placeholder="Johndoe@example.com"
            value={email}
            setValue={setEmail}
            error=""
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter a password"
            value={password}
            setValue={setPassword}
            error=""
          />

          <div className={`${styles.rememberMe}`}>
            <span className={`${styles.left}`}>
              <input
                className={`${styles.checkBox}`}
                name="RememeberMe"
                type="checkbox"
                value={rememberMe}
                onClick={() => {
                  setRememberMe(!rememberMe)
                }}
              />
              remember me
            </span>
            <span className={`${styles.right}`}>
              Forgot password?<a href="/"> {''}Get help signing in</a>
            </span>
          </div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Login)
