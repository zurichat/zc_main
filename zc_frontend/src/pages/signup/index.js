import styles from '../../styles/Signup.module.css'

const Login = () => {
  /**
   * @param password {string} - password to test
   * @param okay_length {number} - minimum length of password (defaults to 0)
   *
   * @return {{valid: boolean, msg: string, short: `length` | `special` | `number` | `lower` | `upper` | `okay`}}
   */
  const passwordCheck = (password, okay_length = 0) => {
    /** Check if password meets required length */
    if (password.length < okay_length)
      return { valid: false, msg: `password is too short`, short: `length` }

    /** Special Character regex */
    const special_characters = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
    /** Check if password contains a special character */
    if (!special_characters.test(password))
      return {
        valid: false,
        msg: `password must contain a special character`,
        short: `special`
      }

    /** Check if password contains a special character */
    const number_regex = /[0-9]/
    if (!number_regex.test(password))
      return {
        valid: false,
        msg: `password must contain a number`,
        short: `number`
      }

    /** Check if password contains a lowercase character */
    const lowercase_regex = /[a-z]/
    if (!lowercase_regex.test(password))
      return {
        valid: false,
        msg: `password must contain a lowercase letter`,
        short: `lower`
      }

    /** Check if password contains an uppercase character */
    const uppercase_regex = /[A-Z]/
    if (!uppercase_regex.test(password))
      return {
        valid: false,
        msg: `password must contain an uppercase letter`,
        short: `upper`
      }

    return { valid: true, msg: `password is okay`, short: `okay` }
  }

  return (
    <>
      <div>This is signup page</div>
      <button type="submit" className={styles.signup_btn}>
        Sign up
      </button>
    </>
  )
}

export default Login
