import React, { useState } from 'react'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
// import axios from 'axios'
const Index = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
          header="Rest Password"
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
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Index)
