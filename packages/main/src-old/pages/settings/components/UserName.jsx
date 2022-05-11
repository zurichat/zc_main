import React from "react";
import styles from "../styles/SettingsTab.module.css";

const UserName = () => {
  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5 mt-2">
          <input type="text" className="form-control" required />
        </div>
        <div className="col-md-4 mb-3 mt-3">
          <button className="btn">Save</button>
        </div>
        <p>
          Usernames are not part of your profile and are only required by
          Zurichat for technical reasons. Your username is mostly invisible to
          others but you can change it if you want to.
        </p>
      </form>
    </div>
  );
};

export default UserName;
