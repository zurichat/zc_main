import React, { useState } from 'react'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
// import axios from 'axios'

const Index = ({ resetCode }) => {
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    const res = await axios.post('api.zuri.chat/account/update-password', {
      password
    })
    // + resetCode,
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
          header="Enter your new password"
          email={email}
          // handleSubmit={handleSubmit}
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter your new password"
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

          <div style={{ margin: '20px' }}></div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Index)
