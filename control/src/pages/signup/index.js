import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import authBg1 from './assets/auth_bg1.svg'
import authBg2 from './assets/auth_bg2.svg'
import authBg3 from './assets/auth_bg3.svg'
import authBg4 from './assets/auth_bg4.svg'
import authBg5 from './assets/auth_bg5.svg'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../component-styles/AuthFormElements.module.css'
import axios from 'axios'

import EmailVerification from './email-verify'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tos, setTos] = useState(false)
  const [error, seterror] = useState('')
  const [emailerror, setemailerror] = useState('')
  const [showDialog, setShowDialog] = useState(false)

  // Background Images
  const images = [authBg1, authBg2, authBg3, authBg4, authBg5]
  const [currentImage, setcurrentImage] = useState(
    Math.floor(Math.random() * 4)
  )

  // To Display Random Aside Background Image
  const displayImage = () => {
    let i = currentImage
    i >= images.length - 1 ? (i = 0) : i++
    setcurrentImage(i)
    console.log(images[i], i)
  }

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
        setShowDialog(true)

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
        setShowDialog(false)

        RegExp(/Users with email/).test(data.message) &&
          setemailerror('This email is already in use')

        !RegExp('Users with email').test(data.message) && seterror(data.message)
      })
  }

  return (
    <main id={styles.authPageWrapper}>
      {showDialog && <EmailVerification />}
      <aside id={styles.authAsideContainer} className={styles.display_none}>
        <div id={styles.authImageWrapper}>
          <img src={images[currentImage]} alt="backgroundImage" />
          {/* <div id={styles.aside_txt}></div> */}
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
          error={error}
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
            onFocus={displayImage}
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
            onFocus={displayImage}
            error={emailerror}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter a password"
            value={password}
            setValue={setPassword}
            onFocus={displayImage}
            // error={error}
          />
          {/* <AuthInputBox
            className={`${styles.inputElement}`}
            id="cpassword"
            name="Confirm password"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            // error={error}
          /> */}
          <div className={`${styles.tos}`}>
            <input
              className={`${styles.checkBox}`}
              name="tos"
              type="checkbox"
              value={tos}
              onClick={() => {
                setTos(!tos)
              }}
              onFocus={displayImage}
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
