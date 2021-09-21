import React, { useState } from 'react'
import authBg from '../../component-assets/backg.svg'
import Logo from '../../component-assets/zuri.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'

// import FormWrapper from '../../components/AuthFormWrapper'
import Button from '../../components/Button'
// import styles from '../../styles/AuthFormElements.module.css'
<<<<<<< HEAD:zc_frontend/src/pages/passwordReset/Index.js
import styles from '../../styles/ResetPassword.module.css'
import ResetModal from '../../components/verified/ResetModal'
import axios from 'axios'
=======
import styles from '../../component-styles/ResetPassword.module.css'
// import ResetModal from '../../components/verified/ResetModal'
// import axios from 'axios'
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/passwordReset/index.js
const Index = () => {
  const [email, setEmail] = useState('')
  const [modalShow, setModalShow] = useState(false)

  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const handleSubmit = e => {
    e.preventDefault()
    toggleModal()
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
            {/* <ResetModal 
            show={modalShow}
            onHide={setModalShow(false)}
          /> */}
          </form>
        </section>
      </main>
    </>
  )
}

export default withRouter(Index)
