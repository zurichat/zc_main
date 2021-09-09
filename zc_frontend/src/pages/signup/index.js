import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import authBg from '../../pages/images/backg.svg'
import logo from './images/logo.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from './styles/SignUp.module.css'
//import GoogleLogin from 'react-google-login'

// const AuthHeader = () => {
//   return (
//     <header className={styles.header}>
//       <Link className={styles.logo} to="/home" replace={true}>
//         <img src={logo} alt="zuri logo" />
//       </Link>
//     </header>
//   )
// }

// const AuthFooter = () => {
//   return (
//     <footer className={styles.footer}>
//       <Link className={styles.contact} to="/contact-us" replace={true}>
//         <small>Contact Us</small>
//       </Link>
//       <Link className={styles.policy} to="/" replace={true}>
//         <small>Legal Policy</small>
//       </Link>
//     </footer>
//   )
// }

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [tos, setTos] = useState(false)


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
            header="Create Account"
            googleHeader="Sign up with Google"
            topLineText="or"
            submitButtonName="Sign up"
            name={name}
            email={email}
            password={password}
            check={tos}
            handleSubmit={handleSubmit}
            bottomLine="Already have an account?"
            bottomLink= "Log in"
            >
            <AuthInputBox
                className={`${styles.inputElement}`}
                id="name"
                name="Full Name"
                type="text"
                placeholder="John Doe"
                value={name}
                setValue={setName}
                error=''
              />
              <AuthInputBox
                className={`${styles.inputElement}`}
                id="email"
                name="Email"
                type="email"
                placeholder="johnDoe@example.com"
                value={email}
                setValue={setEmail}
                error=''
              />
              <AuthInputBox
                className={`${styles.inputElement}`}
                id="password"
                name="Password"
                type="password"
                placeholder="Enter your Password"
                value={password}
                setValue={setPassword}
                error=''
              />
              <AuthInputBox
                className={`${styles.inputElement}`}
                id="cpassword"
                name="confirmPassword"
                type="password"
                placeholder="Enter your password"
                value={cpassword}
                setValue={setCPassword}
                error={false}
            />
              <div className={`${styles.tos}`}>
              <input
              className={`${styles.checkBox}`}
              name="tos"
              type="checkbox"
              value={tos}
              onClick={()=>{setTos(!tos)}}
              /> 
              <span 
              className={`${styles.tosText}`}> 
              I agree to Zurichat's {''}
                <a href="">terms of services{''} </a>
                and
                <a href=""> {''}privacy</a>
                </span>
              </div>
            </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Signup)
