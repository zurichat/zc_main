import ReactCodeInput from 'react-code-input'
import styles from 'EmailVerification.module.css'

export default function EmailVerififcation() {
  return (
    <div className={styles.main}>
      <img src="" alt="zurichat logo" />
      <div className={styles.input}>
        <ReactCodeInput type="number" fields={6} />
      </div>
    </div>
  )
}
