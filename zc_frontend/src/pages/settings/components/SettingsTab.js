import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../styles/SettingsTab.module.css'


const SettingsTab = () => {
  return (
    <>
      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>Password</div>
        <div className={styles.settingsright}>
          <button>Expand</button>
        </div>
      </div>

      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>
          Two-Factor Authentication <br />
          <span>Two factor authentication is active for your account</span>
        </div>
        <div className={styles.settingsright}>
          <button>Expand</button>
        </div>
      </div>

      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>
          Email Address
          <br />
          <span>Your email address is layobright@gmail.com</span>
        </div>
        <div className={styles.settingsright}>
          <button>Expand</button>
        </div>
      </div>

      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>
          Time Zone
          <br />
          <span>
            Zurichat uses your time zone to send summary and notification emails,
            for times in your activity feeds and for reminders. Your time zone
            is currently set to: (UTC+01:00) West Central Africa.
          </span>
        </div>
        <div className={styles.settingsright}>
          <button>Expand</button>
        </div>
      </div>

      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>
          Language <br />
          <span>
            Choose the language you’d like to use with Zurichat. Your language is
            currently set to: English (Nigeria).
          </span>
        </div>
        <div className={styles.settingsright}>
          <button>Expand</button>
        </div>
      </div>

      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>
          Sign out all other sessions <br />
          <span>
            Lost your phone? Left yourself logged in on a public computer? Need
            a way to sign out from everywhere except your current browser? Then
            this is for you
          </span>
        </div>
        <div className={styles.settingsright}>
          <button className={styles.signout}>
            Sign out of all othe sessions
          </button>
        </div>
      </div>

      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>
          Deactivate Account <br />
          <span>
            If you no longer need your account for the Zurichat, you can deactivate
            your account. Any other Slack workspaces you belong to will not be
            affected.
          </span>
          <br />
          <span>
            Note: Don’t deactivate your account if you just want to <NavLink to="/" className={styles.emailLink}>change your email address.</NavLink>
          </span>
        </div>
        <div className={styles.settingsright}>
          <button className={styles.delete}>Deactivate your account</button>
        </div>
      </div>
    
      <div className={styles.settingsTab}>
        <div className={styles.settingleft}>Username</div>
        <div className={styles.settingsright}>
          <button>Expand</button>
        </div>
      </div>
    </>
  )
}

export default SettingsTab
