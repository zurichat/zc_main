import React, { useState } from 'react'
import Logo from '../../component-assets/zuri.svg'
import authBg from '../../component-assets/backg.svg'
import { withRouter, useLocation } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import styles from '../../component-styles/ResetPassword.module.css'
import axios from 'axios'
import Button from '../../components/Button'

const NewPassword = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  let query = useQuery()
  const resetCode = query.get('code')

  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `https://api.zuri.chat/account/update-password/${resetCode}`,
        {
          password
        }
      )
      alert('password reset!', res.data)
    } catch (err) {
      alert(err)
      console.error(err)
    }
  }

  return (
    <main id={styles.authPageWrapper}>
      <aside id={styles.authAsideContainer} className={styles.display_none}>
        <div id={styles.authImageWrapper}>
          <img src={authBg} alt="backgroundImage" />
          <div id={styles.asideText}></div>
        </div>
      </aside>
      <section id={``}>
        {/* logo div  */}
        <div className={``}>
          <img className={styles.logo} src={Logo} alt="" />
        </div>
        {/* header text  */}
        <div className={``}>
          <h4 className={styles.headerText}>Set New Password</h4>
          <p>Enter youe new password</p>
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
            // error={error}
          />

          <Button className={styles.button} onClick={handleSubmit}>
            Continue
          </Button>
        </form>
      </section>
    </main>
  )
}

export default withRouter(NewPassword)
