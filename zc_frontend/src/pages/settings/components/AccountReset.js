import React from 'react'
import FormMessage from './FormMessage'
import SettingsNav from './SettingsNav'

import styles from '../styles/AllSessionSignOut.module.css'
//Icons
import successIcon from '../../images/bx-success.svg'

const AccountReset = () => {
  return (
    <>
      <SettingsNav />
      <section className={`${styles.account_reset_container}`}>
        <header className={`${styles.account_reset_header}`}>
          <h3>Account reset</h3>
        </header>
        <FormMessage
          message="Confirm your password to continue"
          icon={successIcon}
          color="#00B87C"
        />
        <article className={`${styles.account_reset_content}`}>
          <header>
            <h4>Fed up typing passwords?</h4>
          </header>
          <div className={`${styles.account_reset_info}`}>
            <p>
              Get a magic link by email to automatically sign in on our mobile
              or desktop apps.
            </p>
            <br />
            <p>
              If you’ve just reset your password (hopefully to something
              stronger and more secure), you can easily sign in on mobile using
              a magic link. Open the magic link email on your mobile device,
              click the link and your new password will now work!
            </p>
            <br />
            <button className={`${styles.account_reset_btn}`}>
              Send magic link
            </button>
          </div>
        </article>
      </section>
    </>
  )
}

export default AccountReset
