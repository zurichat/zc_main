import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
// import axios from 'axios'
const Index = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [tos, setTos] = useState(false)

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
          header="Reset Password"
          subHeader="Create a new password for your account"
          submitButtonName="Continue"
          password={password}
          //   handleSubmit={handleSubmit}
        >
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
              <Link to="/">terms of services{''} </Link>&
              <Link to="/"> {''}privacy</Link>
            </span>
          </div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Index)
