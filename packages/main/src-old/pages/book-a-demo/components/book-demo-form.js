import React from "react";
import styles from "../styles/book-demo-form.module.css";

const DemoForm = () => {
  return (
    <>
      <form className={`${styles.demoFormMain}`}>
        <h2 className={`${styles.demoFormHeading}`}> Book A Free Demo</h2>
        <label className={`${styles.InputLabel}`}> Who is booking</label>
        <div className={`${styles.InputWrapper}`}>
          <input
            type="text"
            id="name"
            placeholder="Write your name"
            className={`${styles.InputElement}`}
          />
        </div>

        <label className={`${styles.InputLabel}`}>
          How can we contact you?
        </label>
        <div className={`${styles.InputWrapper}`}>
          <input
            type="text"
            id="email"
            placeholder="Write your email address"
            className={`${styles.InputElement}`}
          />
        </div>

        <label className={`${styles.InputLabel}`}>
          What is your phone number? <em>(optional)</em>
        </label>
        <div className={`${styles.InputWrapper}`}>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Write your phone number"
            className={`${styles.InputElement}`}
          />
        </div>

        <label className={`${styles.InputLabel}`}>
          What is your company name?
        </label>
        <div className={`${styles.InputWrapper}`}>
          <input
            type="text"
            id="companyName"
            placeholder="Write your company name"
            className={`${styles.InputElement}`}
          />
        </div>
        <div className={`${styles.btnContainer}`}>
          <button className={`${styles.btn}`} value="submit" type="submit">
            Request A Demo
          </button>
        </div>
      </form>
    </>
  );
};

export default DemoForm;
