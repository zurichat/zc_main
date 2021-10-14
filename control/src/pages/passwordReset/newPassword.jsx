import React, { useState } from 'react'
import Logo from '../../component-assets/zuri.svg'
import authBg from '../../component-assets/backg.svg'
import { withRouter, useLocation } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import styles from '../../component-styles/ResetPassword.module.css'
import axios from 'axios'
import Button from '../../components/Button'
import PasswordSuccesful from './passwordSuccesful'

const NewPassword = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  let query = useQuery()
  const resetCode = query.get('code')

  const [password, setPassword] = useState('')
  const [confirm_password, setcPassword] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)

  const handleSubmit = e => {
    e.preventDefault()
    updatepass()
  }

  const updatepass = async () => {
    try {
      const res = await axios.post(
        `https://api.zuri.chat/account/update-password/${resetCode}`,
        {
          password,
          confirm_password
        }
      )
    
      // console.log(res.data)
      // alert('password reset!', res.data)
      open()
    } catch (err) {
      alert(err)
      console.error(err)
    }
  }


  return (
    <main id={styles.authPageWrapper}>
      {showDialog && <PasswordSuccesful/>}
     
      <section id={``}>
        {/* logo div  */}
        <div className={``}>
          <img className={styles.logo} src={Logo} alt="" />
        </div>
        {/* header text  */}
        <div className={``}>
          <h4 className={styles.headerText}>Recover Password</h4>
          <p>
            Create a new password for your account
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
            // error={error}
          />

            <AuthInputBox
            className={`${styles.inputElement}`}
            id="confirm_password"
            name="confirm Password"
            type="password"
            placeholder="confirm your new password"
            value={ confirm_password}
            setValue={setcPassword}
            // error={error}
          />
          {/* <div style={{fontSize:"14px"}}>
            {(password != confirm_password)? <div>sorry password dont match</div>:null}
          </div> */}

          <Button className={styles.button} onClick={ handleSubmit}  >
            Continue
          </Button>
        </form>
      </section>
    </main>
  )
}

export default withRouter(NewPassword)
