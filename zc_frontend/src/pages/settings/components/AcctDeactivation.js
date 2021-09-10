import styles from '../styles/AcctDeactivation.module.css'
import SettingsNav from './SettingsNav'

const AcctDeactivation = () => {
  return (
    <>
      <SettingsNav />
      <div className={styles.deactivationSection}>
        <div className={styles.deactivationTab}>
          <p>Deactivate Account</p>
          <div className={styles.deactivationCaution}>
            <img src="./alertTriangle.svg" alt="alert_triangle" />
            <span>Are you sure you want to deactivate your account?</span>
          </div>
        </div>

        <div className={styles.deactivationNote}>
          <p className={styles.firstP}>
            This change will take effect immediately. An administrator of your
            workspace will need to re-enable your accountif you would like to
            rejoin this workspace. Your messages and files will be kept safe if
            your account is ever reactivated. Any other Zurichat workspaces you
            belong to will not be affected.
          </p>

          <p className={styles.secondP}>
            <strong>Note:</strong> Don’t deactivate your account if you must
            want to change your
            <span className={styles.blue}> email address</span> or{' '}
            <span className={styles.blue}>username</span>.
          </p>

          <div>
            <button className={styles.deactivateButton}>
              Yes, deactivate my account
            </button>
            <button className={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AcctDeactivation
