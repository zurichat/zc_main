import React from "react";
import { Link } from "react-router-dom";
import styles from "../account-deactivated/AccountDeactivated.module.css";
import zuri from "../account-deactivated/assets/zuri.svg";

const AccDeactivated = () => {
  return (
    <div className={styles.containers}>
      <nav className={styles.nav}>
        <img src={zuri} alt="Zuri logo" />
      </nav>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Account Deactivated</h2>
          <p>
            Your account has been deactivated. You can close this page or{" "}
            <Link to="/login" className={styles.login}>
              log in
            </Link>{" "}
            to another workspace
          </p>
          <p className={styles.greeting}>Thank you for using Zurichat!</p>
        </div>
      </div>
    </div>
  );
};

export default AccDeactivated;
