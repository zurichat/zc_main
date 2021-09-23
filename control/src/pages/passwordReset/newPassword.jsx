import React, { useState } from 'react'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
import axios from 'axios'

import Button from '../../components/verified/Button'
import ResetModal from '../../components/verified/ResetModal'
import styles from '../../styles/ResetPassword.module.css'

export default function NewPassword({ resetCode }) {
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    const res = await axios.post('api.zuri.chat/account/update-password', {
      password
    })
    // + resetCode,
  }
  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const handleSubmit = e => {
    e.preventDefault()
    toggleModal()
  }

  return (
    <>
      <ResetModal show={modalShow} onHide={toggleModal} />
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
            <h4 className={styles.headerText}>New Password</h4>
            <p>
              To change and set a new password kindly enter your new password
              for update
            </p>
          </div>
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter your new password"
            value={password}
            setValue={setPassword}
            onFocus={displayImage}
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
        </section>
      </main>
    </>
  )
}
