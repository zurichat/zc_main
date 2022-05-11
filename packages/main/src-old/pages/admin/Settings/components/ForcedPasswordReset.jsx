import React from "react";
import styles from "../styles/AuthenticationTab.module.css";

const ForcedPasswordReset = () => {
  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="mt-2">
          <p>
            You can also (optionally) force every user session to terminate at
            the same time. That means that every member will be instantly signed
            out of all Slack apps, and they will not be able to sign in again
            until they have changed their password.
          </p>
          <select className="form-select mb-3 " required>
            <option defaultValue>-- Please choose --</option>
            <option value="">Sign everyone out of all apps (1 member) </option>
            <option value="">Do NOT sign everyone out of all apps</option>
          </select>
          <p>
            In order to create a new password,each member must be able to
            receive the email we send with the reset link (
            <a href="#">Manage your own mail servers?</a>)
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <button className={`btn ${styles.forcedPasswordBtn}`}>
            Reset Password for All Workspace Members
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForcedPasswordReset;
