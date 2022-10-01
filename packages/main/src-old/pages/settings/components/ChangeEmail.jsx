import React from "react";
import styles from "../styles/SettingsTab.module.css";

const ChangeEmail = () => {
  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5">
          <label htmlFor="firstname" className="form-label">
            Current Email
          </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="col-md-5">
          <label htmlFor="lastname" className="form-label">
            New email address
          </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="col-md-4 mb-3 mt-3">
          <button className="btn" id="submit">
            Update email address
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
