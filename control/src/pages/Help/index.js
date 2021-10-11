import React from "react"
import styles from "../../component-styles/Help.module.css"
import invalid from "./assets/undraw_Mobile_app_re_catg.svg"

const Help = () => {
    return(
        <div>
            <div className={`${styles.help}`}>
                <h1>
            Get help signing in to ZuriChat
            </h1>
            </div>
            <div className={`${styles.firstlayer}`}>
            <div className={`col-lg-6 ${styles.invalid}`}>
            <img src={invalid} alt={"invalid"} srcSet="" />
          </div>
          <div className={`${styles.firstcontent}`}>
             <h3>
             Username or password is wrong, invalid, or unrecognized
             </h3>
             <p>
             Make sure that:<br />
      There isn't a typo in your username or password.<br />
      You've entered your full email address. For example, "username@gmail.com" instead of "username@gmail." <br />
       Caps lock is turned off.<br />
       Your keyboard is in the right language.<br />
       Refresh your browser and try signing in again.<br />
       If you're still getting the error message, follow the steps to recover your account. <br />
       You'll be asked some questions to confirm it's your account. Answer as best you can. <br />
       If you're having trouble, try the tips to complete account recovery steps. <br />
      Reset your password when prompted. Choose a strong password that you haven't already used with this account. <br />
             </p>
             </div>
            </div>
          <div className={`${styles.secondcontent}`}>
                <h3>
                You forgot the email address you use to sign in.
                </h3>
                <p>
                Try other phone numbers or recovery email addresses you might have used. <br />
             There might have been a typo in your username when you created your account.<br />
                </p>
                </div>
          <div className={`${styles.thirdcontent}`}>
                <h3>
                To reset your password:
                </h3>
                <p>
                To reset your password:
      Follow the steps to recover your Google Account or Gmail.<br />
     You'll be asked some questions to confirm it's your account. Answer as best you can.<br />
      If you have trouble, try the tips to complete account recovery steps.<br />
     Reset your password when prompted. Choose a strong password that you haven't already used with this account.<br />
                </p>
            </div>
            </div>
    )
  }
 export default Help
