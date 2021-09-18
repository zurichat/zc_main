import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import SignOutActionList from './SignOutActionList'
import SettingsNav from './SettingsNav'
import FormMessage from './FormMessage'
// Styles
import styles from '../styles/AllSessionSignOut.module.css'
// Icons
import boxArrow from '../../images/box-arrow-right.svg'
import errorIcon from '../../images/bx-error.svg'
// HTTP request library
import axios from 'axios'

function AllSessionSignOut() {
  const [error, setError] = useState('')
  //const [userSession, setUserSession] = useState({})
  const [user, setUser] = useState({})
  const [currentPassword, setCurrentPassword] = useState('')

  const history = useHistory()

  useEffect(() => {
    let timerId
    if (error) {
      timerId = setTimeout(() => {
        setError('')
      }, 3000)
    }

    return () => clearTimeout(timerId)
  })

  const comparePassword = async () => {
    const userPassword = {
      password: currentPassword
    }

    try {
      const response = await axios.post(
        'https://api.zuri.chat/auth/logout/othersessions',
        {
          body: JSON.stringify(userPassword)
        }
      )

      if (response.status !== 200) {
        throw new Error(`Failed to fetch data, status: ${response.status} `)
      }

      const { data } = await response.data
      setUser(data)
      console.log(data)
    } catch (error) {
      console.log(error)
      setError('That password is incorrect. Please try again')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    comparePassword()
  }

  return (
    <>
      <SettingsNav />
      <main className={`${styles.signout_wrapper}`}>
        <article className={`${styles.session_container}`}>
          <header className={`${styles.signout_header}`}>
            <img src={boxArrow} alt="" />
            <h3>Sign out all other sessions</h3>
          </header>
          {error && (
            <FormMessage message={error} icon={errorIcon} color="#F40101" />
          )}
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
            <form className={`${styles.signout_form}`} onSubmit={handleSubmit}>
              <div className={`${styles.form_group}`}>
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className={`${styles.form_input}`}
                  onChange={e => setCurrentPassword(e.target.value)}
                />

                <button type="submit" className={`${styles.submit_btn}`}>
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
