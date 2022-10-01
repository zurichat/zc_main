import React from "react";
import styles from "../styles/demo-signup.module.css";

const DemoSignUp = () => {
  return (
    <>
      <form className={`${styles.demoSignUpForm}`}>
        <div
          className={`container d-lg-flex justify-content-between align-items-center flex-wrap`}
        >
          <h2 className={`${styles.demoSignUpLeft}`}>
            Your team will love <strong> Zuri</strong>
          </h2>

          <div className={`${styles.demoSignUpRight}`}>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className={`${styles.InputElement}`}
            />
            <div className={`${styles.btnContainer}`}>
              <button className={`${styles.btn}`} value="submit" type="submit">
                Sign Up For Free
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DemoSignUp;
