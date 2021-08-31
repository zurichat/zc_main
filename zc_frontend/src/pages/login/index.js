/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/jsx-no-duplicate-props */
import styles from '../../styles/Login.module.css';
import React, { useState } from 'react';

const Login = () => {

const [email, setEmail] = useState("");
const [pass, setPass] = useState({
  password: "",
  showPassword: false,
});
const handleClickShowPassword = () => {
  setPass({ ...pass, showPassword: !pass.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
  setPass({ ...pass, [prop]: event.target.value });
};

return (
<div className={`container ${styles.body}`}>
  <div class={`row`}>
    <div class={`col-md-3`}></div>
    <div class={`col-md-6`}>
      <div className={`pt-4 mt-3 text-center`}>
        <span><img src="zurichatlogo.svg" alt="logo" />
          <p className={`d-inline p-2`}>Zuri chat</p>
        </span>
      </div>
      <div className={`pt-1 mt-3`}>
        
        <h2 className={`pt-3 `}>Log in</h2>
        <p className={styles.subtext}>Login with the data you entered during your</p>
        <div className={`d-flex ${styles.email_input}`}>
          <div className={`mb-3 col-12 col-md-6 w-100`}>
            <input type="email" className={`py-2 form-control`} value={email} onChange={(e)=> {
            console.log(e.target.value)
            setEmail(e.target.value)
            }} placeholder="Enter an email" />
          </div>
        </div>
        <div className={`d-flex ${styles.email_input}`}>
          <div className={`mb-3 col-12 col-md-6 w-100 d-flex`}>
            <input 
              type={pass.showPassword ? "text" : "password"} 
              onChange={handlePasswordChange("password")}
              className={`py-2 form-control`} 
              value={pass.password} 
              onChange={(e)=> {
              console.log(e.target.value)
              setPass(e.target.value)
            }} placeholder="Enter a password" 
            id="id_password"
            />
          </div>
          <i className={`far fa-eye ${styles.far}`} 
            id="togglePassword"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}></i>
            {pass.password ? <i className={`far far-eye ${styles.far}`}></i>: <i className={`fa-eye-slash ${styles.far}`}></i>}
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className={`form-check-label text-secondary ${styles.checktext}`} for="exampleCheck1">Remember me</label>
          <label className={`float-end text-secondary  ${styles.checktext}`}>Forgot password? <a href="/" className={`${styles.checklink}`}>Get help signing in</a></label>
        </div>
        <div>
          <button className={` ${styles.button} btn mb-3 col-12 col-md-6 px-5 px-md-5 py-2 btn-success`}>Log
            In</button>
        </div>
        <div className={`my-2 d-flex justify-content-around`}>
            <img className={`w-50 p-3`} src="Line.svg" alt="line" />
            <p className={`${styles.or}`}>OR</p>
            <img className={`w-50 p-3`} src="Line.svg" alt="line" srcset="" />
        </div>
        <div className={`my-3`}>
          <button className={`${styles.button_outline} m-0 col-12 col-md-6 btn px-2 px-md-5 py-2
            btn-outline-primary`}><img className={`text-align-center px-2`} src={`/googleicon.svg`}
              alt="google icon" />Log in with Google</button>
        </div>
        <div className={`my-3`}>
          <button className={`${styles.button_outline} m-0 col-12 col-md-6 px-2 px-md-5 py-2 btn btn-outline-dark`}>
             <i class="fab fa-apple"></i> Log in with Apple</button>
        </div>
        <h3>New to Us?</h3>
        <div className={`my-3`}>
          <button className={`${styles.button_outline} m-0 col-12 col-md-6 btn px-2 px-md-5 py-2
            btn-outline-primary`}><img className={`text-align-center px-2`} alt="" />Create an Account</button>
        </div>
      </div>
      <div class={`d-flex justify-content-around my-5  ${styles.footer}`}>
        <a href="/" class={`mx-md-4 text-secondary`}>Contact Us</a>
        <a href="/" class={`mx-md-4 text-secondary`}>Legal Policy</a>
        <a href="/" class={`mx-md-4 text-secondary`}><i class="fas fa-globe"></i> Change Region <i class="fas fa-caret-down"></i></a>
      </div>
    </div>
    <div class={`col-md-3`}></div>
  </div>
</div>
)
}

export default Login