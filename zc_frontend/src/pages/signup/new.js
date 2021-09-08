import { useState } from 'react'
import styles from '../../styles/Signup.module.css'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'


const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [tos, setTos] = useState(false)


  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>

    <FormWrapper
    header="Create Account"
    googleHeader="Sign up with Google"
    topLineText="or"
    submitButtonName="sign up"
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
        placeholder="Enter your name"
        value={name}
        setValue={setName}
        error="Sorry, this email does not exist. Try again or click Create an account to sign up with us."
      />
      <AuthInputBox
        className={`${styles.inputElement}`}
        id="email"
        name="Email"
        type="email"
        placeholder="Enter your email address"
        value={email}
        setValue={setEmail}
        error="Sorry, this email does not exist. Try again or click Create an account to sign up with us."
      />
      <AuthInputBox
        className={`${styles.inputElement}`}
        id="password"
        name="Password"
        type="password"
        placeholder="Enter your Password"
        value={password}
        setValue={setPassword}
        error="Sorry, this email does not exist. Try again or click Create an account to sign up with us."
      />
      <AuthInputBox
        className={`${styles.inputElement}`}
        id="cpassword"
        name="confirmPassword"
        type="password"
        placeholder="Enter your password"
        value={cpassword}
        setValue={setCPassword}
        error="Sorry, this email does not exist. Try again or click Create an account to sign up with us."
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
      I agree to Zurichat's{''}
        <a href="">terms of services{''}</a>
         and
        <a href="">{''}privacy</a>
        </span>
      </div>
    </FormWrapper>
    
    </>
  )
}

export default SignUp
