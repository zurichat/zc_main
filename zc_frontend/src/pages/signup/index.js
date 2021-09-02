import '../../styles/Signup.css';
import React from 'react';
import apple from '../../images/apple.svg';
import bg from '../../images/bg.svg';
import google from '../../images/google.svg';
import zuri from '../../images/zuri.svg';
import globe from '../../images/globe.svg'
import chevron from '../../images/chevron.svg'
// import styles from '../../styles/Signup.module.css'


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
      <section>
        <div className="imgBx">
            <img src={bg} alt="img" />
        </div>
        <div className="contentBx">
            <img src={zuri} className="formLogo" alt="zuri"></img> 
            <div className="formBx">
                <form className="formInline" action="">
                    <h2>Create Account</h2>
                    <div className="social">
                            <a href="/"><img src={google} alt="google" /></a>
                            <a href="/"><img src={apple} alt="apple" /></a>
                     </div>
                     <div><span  className="lineSpan">or sign up with</span></div>
                    
                    <div className="inputBx">
                        <span>Full name</span>
                        <input type="text" placeholder="Enter your name" name="Fname" id="Fname" />
                    </div>
                    <div className="inputBx">
                            <span>Email</span>
                            <input type="email" placeholder="Enter your email address" name="email" id="email" />
                    </div>
                    <div className="inputBx">
                            <span>Password</span>
                            <input type="password" placeholder="Enter a password" name="password" id="password" />
                    </div>
                    <div className="inputBx">
                            <span>Confirm password</span>
                            <input type="password" placeholder="Enter a password" name="password" id="password" />
                    </div>
                    <div className="toc">
                        <input type="checkbox" name="toc" id="toc" /><label for="">I agree with Zurichat's <a href="/" className="tocText">Terms of service</a> and <a href="/" className="tocText"> privacy </a></label>
                    </div>
                    <div className="inputBx">
                    <button
                        type="submit"
                        className="btn"
                        onClick={passwordCheck}
                    >
                        Sign up
                    </button>
                    </div>
                    
                     <div className="bottomline">
                            <span>Already have an account?<a href="/"> Log in </a></span>
                     </div>
                     <div className="footer">
                         <a href="/">contact Us</a>
                         <a href="/">Legal Policy</a>
                         <a href="/"><img src={globe} alt="globe"/>change Region<img src={chevron} alt="arrow"/></a>
                     </div>
                </form>
            </div>
            
        </div>
    </section>

    </>
    )
  }
  
  export default SignUp
  


// const Login = () => {
  
//   return (
//     <>
//       <div>This is signup page</div>
//       <button
//         type="submit"
//         className={styles.signup_btn}
//         onClick={passwordCheck}
//       >
//         Sign up
//       </button>
//     </>
//   )
// }

// export default Login
