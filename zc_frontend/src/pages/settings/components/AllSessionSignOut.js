import React from 'react'
import styles from '../styles/AllSessionSignOut.module.css'
import SignOutActionList from './SignOutActionList'
import SettingsNav from './SettingsNav'
import boxArrow from './../box-arrow-right.svg'

function AllSessionSignOut() {
  return (
    <>
      <SettingsNav />
      <main className={`${styles.signout_wrapper}`}>
        <article>
          <header className={`${styles.signout_header}`}>
            <img src={boxArrow} alt="" />
            <h3>Sign out all other sessions</h3>
          </header>
          <section className={`${styles.session_content}`}>
            <h4>Click the button below to sign out of all other sessions.</h4>
            <div className={`${styles.signout_content}`}>
              <p>This will:</p>
              <ul>
                <SignOutActionList text="Reset all cookies used for Zurichat sign-in (except in your current browser)" />
                <SignOutActionList text="Reset all API tokens associated with your account (so you will need to sign in again on your phone)" />
                <SignOutActionList text="Reset all outstanding magic links associated with your account" />
                <SignOutActionList text="Remove push notifications configured for your mobile device" />
                <SignOutActionList text="Remove push notifications configured for your mobile device" />
              </ul>
              <p>This will not reset your password.</p>
            </div>

            <div className={`${styles.line}`}></div>
            <form className={`${styles.signout_form}`}>
              <header>
                <h4>Confirm your password to proceed.</h4>
              </header>
              <div className={`${styles.form_group}`}>
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className={`${styles.form_input}`}
                />

                <button type="submit" className={`${styles.Submit}`}>
                  Sign out all other sessions
                </button>
              </div>
            </form>
          </section>
        </article>
      </main>
    </>
  )
}

export default AllSessionSignOut
