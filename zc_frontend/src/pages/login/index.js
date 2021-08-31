import styles from '../../styles/Login.module.css';
import React, { useState } from 'react';

const Login = () => {

const [email, setEmail] = useState("");
const [pass, setPass] = useState("");

return (
<div className={`container`}>
  <div class={`row`}>
    <div class={`col-md-3`}></div>
    <div class={`col-md-6`}>
      <div className={`pt-4 mt-3 text-center`}>
        <span><img src="zurichatlogo.svg" alt="logo" />
          <p className={`d-inline p-2`}>Zuri chat</p>
        </span>
      </div>
      <div className={`pt-1 mt-3`}>
        
        <h2 className={`pt-3 `}>Login in</h2>
        <p className={styles.subtext}>Login with the data you entered during your</p>
        <div className={`d-flex ${styles.email_input}`}>
          <div className={`mb-3 col-12 col-md-6 w-100`}>
            <input type="email" className={`py-2 form-control`} value={email} onChange={(e)=> {
            console.log(e.target.value)
            setEmail(e.target.value)
            }} placeholder="codinggee@teameinstein.zuri.com" />
          </div>
        </div>
        <div className={`d-flex ${styles.email_input}`}>
          <div className={`mb-3 col-12 col-md-6 w-100`}>
            <input type="email" className={`py-2 form-control`} value={pass} onChange={(e)=> {
            console.log(e.target.value)
            setPass(e.target.value)
            }} placeholder="********" />
          </div>
        </div>
        <div class="mb-3 form-check d-flex justify-space-between">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
          <label className={'mx-4'}>Forgot Password? get help siging in</label>
        </div>
        <div>
          <button className={` ${styles.button} btn mb-3 col-12 col-md-6 px-5 px-md-5 py-2 btn-success`}>Sign
            In</button>
        </div>
        <div className={`my-3`}>
          <button className={`${styles.button_outline} m-0 col-12 col-md-6 btn px-2 px-md-5 py-2
            btn-outline-primary`}><img className={`text-align-center px-2`} src={`/googleicon.svg`}
              alt="google icon" />Log in with Google</button>
        </div>
        <div className={`my-3`}>
          <button className={`${styles.button_outline} m-0 col-12 col-md-6 px-2 px-md-5 py-2 btn btn-outline-dark`}><img
              className={`text-align-center px-2`}
              src={`https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png`}
              alt="Apple icon" />Log in with Apple</button>
        </div>
        <h3>New to Us?</h3>
        <div className={`my-3`}>
          <button className={`${styles.button_outline} m-0 col-12 col-md-6 btn px-2 px-md-5 py-2
            btn-outline-primary`}><img className={`text-align-center px-2`} alt="" />Create an Account</button>
        </div>
      </div>
      <div class={`d-inline-flex my-5 mx-5`}>
        <a href="#" class={`mx-md-4 text-secondary`}>Contact Us</a>
        <a href="#" class={`mx-md-4 text-secondary`}>Legal Policy</a>
        <a href="#" class={`mx-md-4 text-secondary`}>Change Region</a>
      </div>
    </div>
    <div class={`col-md-3`}></div>
  </div>
</div>
)
}

export default Login