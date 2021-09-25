import { useState } from 'react'
import authBg from '../../component-assets/backg.svg'
import Logo from '../../component-assets/zuri.svg'
import AuthInputBox from '../../components/AuthInputBox'
import Button from '../../components/Button'
import styles from '../../component-styles/ResetPassword.module.css'
import VerifyResetCode from './verifyCode'
import axios from 'axios'


const ResetDefault = () => {
  const [email, setEmail] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  // const close = () => setShowDialog(false)

  const handleSubmit = e => {
    e.preventDefault()
    sendEmail()
  }
  const sendEmail = async () => {
    if (email) {
      try {
        const res = await axios.post(
          'https://api.zuri.chat/account/request-password-reset-code',
          {
            email
          }
        )
        open()
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <>
      <main id={styles.authPageWrapper}>
        {showDialog && <VerifyResetCode />}

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
            <h4 className={styles.headerText}>Get a new password</h4>
            <p>
              Enter the email address you registered with and a reset code will
              be sent to your email.
            </p>
          </div>
          {/* form section  */}
          <form action="">
            <AuthInputBox
              className={`${styles.inputElement}`}
              id="email"
              name="Email address"
              type="email"
              placeholder="Johndoe@example.com"
              value={email}
              setValue={setEmail}
              error=""
            />
            <Button className={styles.button} onClick={handleSubmit}>
              Continue
            </Button>
          </form>
        </section>
      </main>
    </>
  )
}

export default ResetDefault
