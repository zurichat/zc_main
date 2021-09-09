import ReactCodeInput from 'react-verification-code-input'
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
      <p>
        Enter the 6-digit code sent to your email address. This code expires
        shortly so be quick
      </p>
      <div className={styles.input}>
        <ReactCodeInput
          type="number"
          fields={6}
          autoFocus={true}
          // onComplete={sendCode}
        />
      </div>

      <p>Code expired?</p>
      <Link to="/home" className={styles.request}>
        Click here to request a new code!
      </Link>
    </div>
  )
}
