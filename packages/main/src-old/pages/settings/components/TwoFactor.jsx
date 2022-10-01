import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SettingsTab.module.css";

const TwoFactor = () => {
  return (
    <div className={styles.two_factor}>
      <p>
        Protect your Zurichat account with an extra layer of security by
        requiring access to your phone. Once configured, you’ll be required to
        enter both your password and an authentication code from your mobile
        phone in order to sign into your Zuri Chat account.
      </p>
      <p>
        Learn more at our
        <Link to=""> two-factor authentication help page</Link>
      </p>

      <div className="col-md-6 mb-1 mt-3">
        <button className="btn py-2">
          Set up two-factor authentication page
        </button>
      </div>
      <span>
        Note: Activating two-factor authentication will sign you out of all
        other rooms.
      </span>
    </div>
  );
};

export default TwoFactor;
