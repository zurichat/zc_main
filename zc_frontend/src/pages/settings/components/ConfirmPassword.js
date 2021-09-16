import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
// Component
import SettingsNav from './SettingsNav'
//Style
import styles from '../styles/confirmPassword.module.css'
import FormMessage from './FormMessage'

//Icons
import successIcon from '../../images/bx-success.svg'
import errorIcon from '../../images/bx-error.svg'

import {getToken} from '../Utils/Common'


const initialState = {
  password: ""
}

const ConfirmPassword = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState(initialState)
  const {password} = data
  const history = useHistory()
  const token = getToken()


   // The section of the handle change input
   const handleChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    setError(false)
}

  // FUNCTION TO CONFIRM THE PASSWORD
  const confirmPassword = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('https://api.zuri.chat/auth/confirm-password', { password }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setData({ ...data }, console.log(res))
      console.log(res)
      history.push('/deactivate-account')

    } catch (err) {
      setError(true)
      console.log(err)
    }
  }



  return (
    <div>
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
          <form onSubmit={confirmPassword}>
            <div className={`${styles.form_group}`}>
              <label htmlFor="password">
                Enter your &nbsp;
                <span>password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button className={`${styles.submit_btn}`} type="submit">
              Confirm password
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ConfirmPassword
