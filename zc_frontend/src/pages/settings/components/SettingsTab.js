import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/SettingsTab.module.css'
import TimeZone from '../../../components/TimeZone'
import { Link } from 'react-router-dom'
import PreferenceWrapper from './PreferenceWrapper'
import { AnimateSharedLayout } from 'framer-motion'

const SettingsTab = () => {
  const [show, setShow] = useState(false)

  const showTime = show ? <TimeZone /> : null

  return (
    <>
      <AnimateSharedLayout>
        <PreferenceWrapper title="Password" text="" btnText="Expand">
          {/* Password input goes uunder here */}
          <p>Replace this tag with something password bla</p>
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Two-Factor Authentication"
          text="Two factor authentication is active for your account"
          btnText="Expand"
          timeZone=""
        >
          {/* Two factor authentication input field goes under here */}
          <p>Authentication</p>
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Email Address"
          text="Your email address is layobright@gmail.com"
          btnText="Expand"
          timeZone=""
        >
          {/* Email address input field goes under here */}
          <p>Remove this tag and replace with Email input bla</p>
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Time zone"
          text="Zurichat uses your time zone to send summary and notification emails, for times in your activity feeds and for  reminders. Your time zone is currently set to: (UTC+01:00) West Central Africa."
          btnText="Expand"
          timeZone={showTime}
        >
          {/* TimeZone input field goes under here */}
          <p>Remove this tag and replace with timezone bla</p>
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Language"
          text="Choose the language you’d like to use with Zurichat. Your language is currently set to: English (Nigeria)."
          btnText="Expand"
          timeZone=""
        >
          {/* Language input field goes under here */}
          <p>Remove this tag and replace with language input bla</p>
        </PreferenceWrapper>
      </AnimateSharedLayout>

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
            If you no longer need your account for the Zurichat, you can
            deactivate your account. Any other Slack workspaces you belong to
            will not be affected.
          </span>
          <br />
          <span>
            Note: Don’t deactivate your account if you just want to{' '}
            <NavLink to="/" className={styles.emailLink}>
              change your email address.
            </NavLink>
          </span>
        </div>
        <div className={styles.settingsright}>
          <Link to="/deactivate-account">
            <button className={styles.delete}>Deactivate your account</button>
          </Link>
        </div>
      </div>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title="Username"
          text=""
          btnText="Expand"
          timeZone=""
        >
          {/* Username input field goes under here */}
          <p>Remove this tag and replace with Username input bla</p>
        </PreferenceWrapper>
      </AnimateSharedLayout>
    </>
  )
}

export default SettingsTab
