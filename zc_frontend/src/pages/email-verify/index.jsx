// import ReactCodeInput from 'react-verification-code-input'
import CodeInput from './codeInput'
import styles from './styles/EmailVerification.module.css'
import logo from '../../assets/auth_images/logo.svg'
import { Link } from 'react-router-dom'

export default function EmailVerification() {
  // const sendCode = (code) => {
  //send to backend
  //  }

  return (
    <div className={styles.main}>
      <img src={logo} alt="zurichat logo" className={styles.img} />
      <p className={styles.enterCode}>
        Enter the 6-digit code sent to your
        <span className={styles.email}>johndoe@gmail.com</span>. This code
        expires shortly so be quick
      </p>
      <div>
        <CodeInput
          length={6}
          onComplete={code => {
            // sendCode(code)
            console.log(code)
          }}
        />
      </div>
      <p>Code expired?</p>
      <Link to="/home" className={styles.request}>
        Click here to request a new code!
      </Link>
    </div>
  )
}
