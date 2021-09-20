import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/SettingsTab.module.css'
import TimeZone from './TimeZone'
import { Link } from 'react-router-dom'
import PreferenceWrapper from './PreferenceWrapper'
import { AnimateSharedLayout } from 'framer-motion'
import SavePassword from './SavePassword'
import TwoFactor from './TwoFactor'
import ChangeEmail from './ChangeEmail'
import Language from './Language'
import UserName from './UserName'

const SettingsTab = () => {
  // const showTime = show ? <TimeZone /> : null

  return (
    <>
      <AnimateSharedLayout>
        <PreferenceWrapper title="Password" text="" btnText="expand">
          {/* Password input goes uunder here */}
          <SavePassword />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Two-Factor Authentication"
          text="Two factor authentication is active for your account"
          btnText="expand"
          timeZone=""
        >
          {/* Two factor authentication input field goes under here */}
          <TwoFactor />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Email Address"
          text="Your email address is layobright@gmail.com"
          btnText="expand"
          timeZone=""
        >
          {/* Email address input field goes under here */}
          <ChangeEmail />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Time zone"
          text="Zurichat uses your time zone to send summary and notification emails, for times in your activity feeds and for  reminders. Your time zone is currently set to: (UTC+01:00) West Central Africa."
          btnText="expand"
          // timeZone={showTime}
        >
          {/* TimeZone input field goes under here */}
          <TimeZone />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Language"
          text="Choose the language you’d like to use with Zurichat. Your language is currently set to: English (Nigeria)."
          btnText="expand"
          timeZone=""
        >
          {/* Language input field goes under here */}
          <Language />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <div className={styles.settingsTab} id={styles.settingtab}>
        <div className={styles.settingleft} id={styles.settingleft}>
          Sign out all other sessions <br />
          <span>
            Lost your phone? Left yourself logged in on a public computer? Need
            a way to sign out from everywhere except your current browser? Then
            this is for you
          </span>
        </div>
        <div className={styles.settingsright}>
          <Link to="/session-signout">
            <button className={styles.signout}>
              Sign out of all othe sessions
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.settingsTab} id={styles.settingtab}>
        <div className={styles.settingleft} id={styles.settingleft}>
          Deactivate Account <br />
          <span>
            If you no longer need your account for the Zurichat, you can
            deactivate your account. Any other Zurichat workspaces you belong to
            will not be affected.
          </span>
          <br />
          <span>
            <strong> Note:</strong> Don’t deactivate your account if you just
            want to{' '}
            <NavLink to="/" className={styles.emailLink}>
              change your email address.
            </NavLink>
          </span>
        </div>
        <div className={styles.settingsright}>
          <Link to="/settings/confirm-password">
            <button className={styles.delete}>Deactivate your account</button>
          </Link>
        </div>
      </div>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Username"
          text=""
          btnText="expand"
          timeZone=""
        >
          {/* Username input field goes under here */}
          <UserName />
        </PreferenceWrapper>
      </AnimateSharedLayout>
    </>
  )
}

export default SettingsTab
