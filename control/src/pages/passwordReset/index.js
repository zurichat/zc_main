import { useState } from 'react'
import authBg from '../../component-assets/backg.svg'
import Logo from '../../component-assets/zuri.svg'
// import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import Button from '../../components/Button'
// import styles from '../../components-styles/AuthFormElements.module.css'
import styles from '../../component-styles/ResetPassword.module.css'
import ResetModal from '../../components/ResetModal'
import axios from 'axios'
const ResetDefault = () => {
  const [email, setEmail] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  // const toggleModal = () => {
  //   setModalShow(!modalShow)
  // }

  const handleSubmit = e => {
    e.preventDefault()
    open()
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

        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <>
      {/* <ResetModal /> */}
      <main id={styles.authPageWrapper}>
        <section id={``}>
          {/* logo div  */}
          <div className={``}>
            <img className={styles.logo} src={Logo} alt="" />
          </div>
          {/* header text  */}
          <div className={``}>
            <h4 className={styles.headerText}>Recover Password</h4>
            <p>
              Enter the email address you registered with, a reset link will be
              sent to your email!
            </p>
          </div>
          {/* form section  */}
          <form action="">
            <AuthInputBox
              className={`${styles.resetInput}`}
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
          <span className={`${styles.tosText}`}>
            <a href="/"> Contact Us {''}</a>&
            <a href="/">Privacy & Terms{''} </a>&
            <a href="/"> {''}About Zurichat</a>
          </span>
        </section>
      </main>
    </>
  )
}

export default ResetDefault
