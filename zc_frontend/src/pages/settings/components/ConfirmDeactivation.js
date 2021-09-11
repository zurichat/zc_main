import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styles from '../styles/ConfirmDeactivation.module.css'
import SettingsNav from './SettingsNav'

const ConfirmDeactivation = () => {
  const [wantToDeactivate, setWantToDeactivate] = useState(false)
  const history = useHistory()
  return (
    <>
      <SettingsNav />
      <div className={styles.deactivationSection}>
        <h2 className={styles.confirmationHeader}>Deactivate Account</h2>
        <div className={styles.confirmationBox}>
          <p>Are you really sure you want to deactivate your account ?</p>
          <div className={styles.confirmationQuestion}>
            {wantToDeactivate ? (
              <span
                className={styles.checkBoxActive}
                onClick={() => {
                  setWantToDeactivate(false)
                }}
              >
                <FaCheck />
              </span>
            ) : (
              <span
                className={styles.checkBoxInactive}
                onClick={() => {
                  setWantToDeactivate(true)
                }}
              ></span>
            )}
            <span>Yes, I want to deactivate my account</span>
          </div>
          <div className={styles.buttonContainer}>
            {wantToDeactivate ? (
              <button
                className={styles.danger1}
                onClick={() => {
                  history.push('/account-deactivated')
                }}
              >
                Deactivate my Account
              </button>
            ) : (
              <button className={styles.danger2}>Deactivate my Account</button>
            )}

            <Link to="/settings" className={styles.cancel}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default ConfirmDeactivation
