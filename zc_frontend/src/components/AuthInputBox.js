import { useRef, useState } from 'react'

import styles from '../styles/InputBox.module.css'

const InputBox = ({
  id,
  type,
  value,
  error,
  setValue,
  className = '',
  placeholder,
  name,
  required = 'required'
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
      <div className={`${styles.InputContainer} ${className}`}>
        <label htmlFor={id} className={`${styles.InputLabel}`}>
          {name}
        </label>

        <div
          className={`${styles.InputWrapper} ${
            type === 'password' ? styles.InputWrapperWithPassword : ''
          }`}
        >
          <input
            id={id}
            ref={ref}
            className={`${styles.InputElement} ${error && styles.is_invalid}`}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          {/password/.test(name) && (
            <div
              className={`${styles.ToggleVisibility}`}
              onClick={passwordToggle}
            >
              <i className={`far ${passwordVisible ? 'eye-slash' : 'eye'}`}></i>
            </div>
          )}
        </div>

        <span className={`${styles.InputError}`}>{error}</span>
      </div>
    </>
  )
}

export default InputBox
