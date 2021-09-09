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
  return (
    <>
      <div className={`${styles.InputWrapper} ${className}`}>
        <label htmlFor={id} className={`${styles.InputLabel}`}>
          {name}
        </label>

        <input
          id={id}
          className={`${styles.InputElement} ${error && styles.is_invalid}`}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={e => setValue(e.target.value)}
        />

        <span className={`${styles.InputError}`}>{error}</span>
      </div>
    </>
  )
}

export default InputBox
