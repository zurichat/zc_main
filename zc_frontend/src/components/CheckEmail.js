import styles from './../styles/CheckEmail.module.css'
import plane from './../assets/plane.png'
import bottom from './../assets/bottom.png'
import { Link } from 'react-router-dom'

export default function CheckEmail() {
  return (
    <div className={styles.body}>
      <img src={plane} alt="paper aeroplane" className={styles.img} />
      <h2 className={styles.checkMail}>Check your mail for your code!</h2>
      <div className={styles.confirm}>
        <p>We sent a code to your email address. </p>
        <p>The code expires shortly so enter it quickly.</p>
      </div>

      <button className={styles.btn}>Open Email App</button>
      <div className={styles.footer}>
        <p>Already have an account?</p>
        <Link to="/login">Use password to sign in</Link>
      </div>

      <img src={bottom} alt="bottompane" />
    </div>
  )
}
