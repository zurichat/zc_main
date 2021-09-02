import styles from '../../styles/Signup.module.css';
import logo from '../../assets/zurichatlogo.svg';
// import line from '../../assets/Line.svg';
import googlesignup from '../../assets/icons8-google-48.png';
import facebooksignup from '../../assets/icons8-facebook-48.png';

const SignUp = () => {
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
    <div className={styles.container}>
        <div className={styles.Account_having}>
          <p>Already have an account? <br/><a href="../../login/index.js">Login to your Zuri Account</a></p>
        </div>
        <div className={styles.login_container} >
          <div className={styles.logo}>
            <img src={ logo } className={styles.logoImage} />
            <b className={styles.logoText}>Zuri Chat</b>
          </div>
          <div className={styles.head_text}>
            <h1>Create new Account</h1>
            <p>Enter your mail to create new Account</p>
          </div>
          <div className={styles.signing_by_buttons}>
              <button className={styles.google_email}>
                <img src={ googlesignup } className="logoImage px-2" />
                SignUp with Google
              </button><br/>
              <button className={styles.facebook_email}>
                <img src={ facebooksignup } className="logoImage" />
                SignUp with Facebook
              </button>
          </div>

          <div className={styles.seperator}>
            <div className={styles.line}></div>
            <p>Or</p>
            <div className={styles.line}></div>
          </div>

          <div className={styles.signing_by_Email}>
              <label>Email</label><br/>
              <input type="text" placeholder="aristotle@gmail.com" required></input>

          </div>

          <div className={styles.signup_button}>
            <button type="submit" className={styles.signup_btn} onClick={passwordCheck}>Sign up</button>
          </div>
        
          

          <div className={styles.checkbox}>
            <input type="checkbox" id="mail_receive" color="teal"/>
            <span>It's okay to receive Emails from Zuri Chat</span>
          </div>

          <div className={styles.agreement}>
            <p>By continuing you're agreeing to our Customer Terms of <br/> Service, Privacy Policy, and Cookie Policy</p>
          </div>

          <div className={styles.footer_menu}>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
