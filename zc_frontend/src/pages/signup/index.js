import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
import axios from 'axios'
// import styles from './styles/SignUp.module.css'
//import GoogleLogin from 'react-google-login'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  const [tos, setTos] = useState(false)
  // const { error, setError } = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    //Seperate user fullname
    const seperateName = name.split(' ')
    let first_name = '',
      other_name = ''

    seperateName.map((name, index) => {
      if (index === 0) {
        return (first_name += name)
      }
      return (other_name += `${name} `)
    })

    await axios
      .post('https://api.zuri.chat/users', {
        first_name,
        last_name: other_name,
        email,
        password
      })
      .then(response => {
        const { data, message } = response.data
        console.log(response.data)

        //Store token in localstorage
        sessionStorage.setItem('user_id', data.InsertedId)

        //Display message
        alert(message) //Change this when there is a design

        setTimeout(() => {
          //Redirect to some other page
        }, 2000)
      })
      .catch(error => {
        const { data } = error.response

        //Render error message to the user
        alert(data.message) //Change this when there is a design
      })
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
          bottomLinkHref="login"
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="name"
            name="Full name"
            type="text"
            placeholder="Enter your Name"
            value={name}
            setValue={setName}
            // error={error}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name="Email address"
            type="email"
            placeholder="Enter you email address"
            value={email}
            setValue={setEmail}
            // error={error}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter a password"
            value={password}
            setValue={setPassword}
            // error={error}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="cpassword"
            name="Confirm password"
            type="password"
            placeholder="Confirm password"
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
