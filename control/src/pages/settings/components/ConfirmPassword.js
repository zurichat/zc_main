import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// Component
import SettingsNav from './SettingsNav'
//Style
import styles from '../styles/confirmPassword.module.css'
import FormMessage from './FormMessage'

//Icons
import successIcon from '../../../component-assets/bx-success.svg'
import errorIcon from '../../../component-assets/bx-error.svg'

const ConfirmPassword = () => {
  const [error, setError] = useState(false)
  const [password, setPassword] = useState('')

  const history = useHistory()

  const handleInputChange = e => {
    setPassword(e.target.value)
    setError(false)
  }

  // Form submit
  const handleSubmit = e => {
    e.preventDefault()

    if (password.length > 5) {
      history.push('/deactivate-account')
    } else {
      setError(true)
    }
  }

  return (
    <>
      <SettingsNav />
      <section className={`${styles.password_wrapper}`}>
        <FormMessage
          message="Confirm you password to continue"
          color="#00B87C"
          icon={successIcon}
        />

        {error ? (
          <FormMessage
            message="That password is incorrect. Please try again"
            icon={errorIcon}
            color="#ED2222"
          />
        ) : (
          ''
        )}

        <div className={`${styles.form_wrapper}`}>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.form_group}`}>
              <label htmlFor="password">
                Enter your &nbsp;
                <span>password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <button className={`${styles.submit_btn}`} type="submit">
              Confirm password
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ConfirmPassword
