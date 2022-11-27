import React from "react";
import styles from "../styles/SettingsTab.module.css";

const SavePassword = () => {
  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5">
          <label htmlFor="firstname" className="form-label">
            Current password
          </label>
          <input type="password" className="form-control" required />
        </div>
        <div className="col-md-5">
          <label htmlFor="lastname" className="form-label">
            New password
          </label>
          <input type="password" className="form-control" required />
        </div>
        <div className="col-md-4 mb-3 mt-3" id={styles.p_section}>
          <button className="btn" id="submit">
            Save password
          </button>
          <br />
          <p>
            Can’t remember your current password?{" "}
            <span>Reset your password by email</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SavePassword;
