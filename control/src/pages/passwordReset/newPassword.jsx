import React, { useState } from 'react'
import Logo from '../../component-assets/zuri.svg'
import authBg from '../../component-assets/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import styles from '../../component-styles/ResetPassword.module.css'
import axios from 'axios'
import Button from '../../components/Button'

const NewPassword = ({ resetCode }) => {
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
      <section id={``}>
        {/* logo div  */}
        <div className={``}>
          <img className={styles.logo} src={Logo} alt="" />
        </div>
        {/* header text  */}
        <div className={``}>
          <h4 className={styles.headerText}>Change Password</h4>
          <p>
            Enter the email address you registered with, a reset link will be
            sent to your email!
          </p>
        </div>
        {/* form section  */}
        <form action="">
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter your new password"
            value={password}
            setValue={setPassword}
            // onFocus={displayImage}
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
          <Button className={styles.button} onClick={handleSubmit}>
            Continue
          </Button>
        </form>
      </section>
    </main>
  )
}

export default withRouter(NewPassword)
