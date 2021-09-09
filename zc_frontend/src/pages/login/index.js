import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Login.module.css'
import authBg from '../../pages/images/backg.svg'
import logo from './images/logo.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
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
          <div id={styles.aside_txt}>
          
          </div>  
        </div>
      </aside>
      <section id={styles.authFormContainer}>
      <FormWrapper
            header="Login"
            googleHeader="Login with Google"
            topLineText="OR"
            submitButtonName="Log in"
            email={email}
            password={password}
            check={rememberMe}
            handleSubmit={handleSubmit}
            bottomLine="New to us? Create an Account"
            bottomLink= "Log in"
            >
            <AuthInputBox
                className={`${styles.inputElement}`}
                id="email"
                name="Email adress"
                type="eemail"
                placeholder="Johndoe@example.com"
                value={email}
                setValue={setEmail}
                error=''
              />
              <AuthInputBox
                className={`${styles.inputElement}`}
                id="password"
                name="Password"
                type="password"
                placeholder="Enter a password"
                value={email}
                setValue={setEmail}
                error=''
              />

              <div className={`${styles.rememberMe}`}>
              <input
              className={`${styles.checkBox}`}
              name="RememeberMe"
              type="checkbox"
              value={rememberMe}
              onClick={()=>{setRememberMe(!rememberMe)}}
              /> 
              {/* <span 
              className={`${styles.rememberMe}`}> 
              
                
                </span> */}
              </div>
            </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Login)
