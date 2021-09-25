import React, { useState } from 'react'
import Logo from '../../component-assets/zuri.svg'
import authBg from '../../component-assets/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import styles from '../../component-styles/ResetPassword.module.css'
import axios from 'axios'
import Button from '../../components/Button'

// eslint-disable-next-line react/prop-types
const NewPassword = ({ resetCode }) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const handleSubmit = async () => {
    const res = await axios.post('api.zuri.chat/account/update-password', {
      password
    })
    // + resetCode,
  }

  return (
    <main id={styles.authPageWrapper}>
      <section id={``}>
        {/* logo div  */}
        <div className={``}>
          <img className={styles.logo} src={Logo} alt="" />
        </div>
        {/* header text  */}
        <div className={``}>
          <h4 className={styles.headerText}>Recover Password</h4>
          <p>Create a new password for your account</p>
        </div>
        {/* form section  */}
        <form action="" className={`${styles.form}`}>
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
          <Button className={styles.button} onClick={handleSubmit}>
            Continue
          </Button>
        </form>
        <span className={`${styles.tosText}`}>
          <a href="/"> Contact Us {''}</a>&<a href="/">Privacy & Terms{''} </a>&
          <a href="/"> {''}About Zurichat</a>
        </span>
      </section>
    </main>
  )
}

export default withRouter(NewPassword)
