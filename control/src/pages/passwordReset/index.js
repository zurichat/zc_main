import { useState } from "react"
import authBg from "../../component-assets/backg.svg"
import Logo from "../../component-assets/zuri.svg"
import AuthInputBox from "../../components/AuthInputBox"
import Button from "../../components/Button"
import styles from "../../component-styles/ResetPassword.module.css"
import axios from "axios"
import VerifyResetCode from "./verifyCode"
import { Helmet } from "react-helmet"
import Footer from "../../components/Footer"

const ResetDefault = () => {
  const [email, setEmail] = useState("")
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
          "https://api.zuri.chat/account/request-password-reset-code",
          {
            email
          }
        )
        open()
        // console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <>
      <div>
        <main id={styles.authPageWrapper}>
          <Helmet>
            <title>Reset Password - Zuri Chat</title>
          </Helmet>
          {showDialog && <VerifyResetCode />}

          {/* <aside id={styles.authAsideContainer} className={styles.display_none}>
            <div id={styles.authImageWrapper}>
              <img src={authBg} alt="backgroundImage" />
              <div id={styles.asideText}></div>
            </div>
          </aside> */}
          <section className={`${styles.getHelpSigninForm}`}>
            {/* logo div  */}
            <div className={`${styles.logoFormContainer}`}>
              <img className={styles.logo} src={Logo} alt="" />
            </div>
            {/* header text  */}
            <div className={``}>
              <h4 className={styles.headerText}>Get a new password</h4>
              <p className={`${styles.headerTextTitle}`}>
                Enter the email address you registered with and a reset code
                will be sent to your email.
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
        <Footer />
      </div>
    </>
  )
}

export default ResetDefault
