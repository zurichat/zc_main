// import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useRef, useState } from 'react'

import styles from '../styles/InputBox.module.css'

const InputBox = ({
  id,
  type,
  value,
  error,
  setValue,
  //className = '',
  placeholder,
  name,
  onFocus,
  required = true
}) => {
  const ref = useRef(null)
  const [passwordVisible, setpasswordVisible] = useState(
    type === 'password' ? true : false
  )

  const passwordToggle = e => {
    e.preventDefault()
    setpasswordVisible(!passwordVisible)

    ref.current.type = passwordVisible ? 'text' : 'password'
  }

  return (
    <>
      <div className={`${styles.InputContainer}`}>
        <label htmlFor={id} className={`${styles.InputLabel}`}>
          {name}
        </label>

        <div
          className={`${styles.InputWrapper} ${
            type === 'password' ? styles.InputWrapperWithPassword : ''
          } ${error ? styles.InputContainerError : ''}`}
        >
          <input
            id={id}
            ref={ref}
            className={`${styles.InputElement} ${error && styles.is_invalid}`}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={e => setValue(e.target.value)}
            onFocus={onFocus}
          />

          {/password/i.test(name) && (
            <div
              className={`${styles.ToggleVisibility}`}
              onClick={passwordToggle}
            >
              {/* <i className={`far ${passwordVisible ? 'eye-slash' : 'eye'}`}></i> */}
              {passwordVisible ? <FiEye /> : <FiEyeOff />}
            </div>
          )}
        </div>

        {error && (
          <span className={`${styles.InputError}`}>
            <RiErrorWarningLine />
            <div style={{ paddingLeft: '0.3rem' }}>{error}</div>
          </span>
        )}
      </div>
    </>
  )
}

export default InputBox
