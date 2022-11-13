import React from "react";
import styles from "../../component-styles/Help.module.css";
import invalid from "./assets/undraw_Mobile_app_re_catg.svg";
import tech from "./assets/undraw_online_payments_luau.svg";
import mono from "./assets/undraw_pay_online_b1hk.svg";
import mylogo from "./assets/Captures.JPG";

const Help = () => {
  return (
    <div>
      <div className={`${styles.help}`}>
        <img src={mylogo} alt={"ylogo"} srcSet="" />
        <br />
        <br />
        <h1>Get help signing in to ZuriChat</h1>
      </div>
      <div className={`${styles.firstlayer}`}>
        <div className={`col-lg-6 ${styles.invalid}`}>
          <img src={invalid} alt={"invalid"} srcSet="" />
        </div>
        <div className={`${styles.firstcontent}`}>
          <h5>Username or password is wrong, invalid, or unrecognized</h5>
          <br />

          <p>
            There isn't a typo in your username or password. You've entered your
            full email address. For example, "username@gmail.com" instead of
            "username@gmail." Caps lock is turned off. Your keyboard is in the
            right language.
          </p>
        </div>
      </div>
      <div className={`${styles.secondlayer}`}>
        <div className={`col-lg-6 ${styles.tech}`}>
          <img src={tech} alt={"tech"} srcSet="" />
        </div>
        <div className={`${styles.secondcontent}`}>
          <h5>You forgot the email address you use to sign in.</h5>
          <br />

          <p>
            Try other phone numbers or recovery email addresses you might have
            used, there might have been a typo in your username when you created
            your account.
          </p>
        </div>
      </div>
      <div className={`${styles.thirdlayer}`}>
        <div className={`col-lg-6 ${styles.mono}`}>
          <img src={mono} alt={"mono"} srcSet="" />
        </div>
        <div className={`${styles.thirdcontent}`}>
          <h5>To reset your password:</h5>
          <br />

          <p>
            To reset your password: Follow the steps to recover your Google
            Account or Gmail. You'll be asked some questions to confirm it's
            your account. Answer as best you can. If you have trouble, try the
            tips to complete account recovery steps. Reset your password when
            prompted. Choose a strong password that you haven't already used
            with this account.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Help;
