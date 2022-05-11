import React from "react";
import styles from "../styles/AuthenticationTab.module.css";

const TwoFactor = () => {
  return (
    <div className={styles.twoFactor}>
      <p>
        Would you like to enable two-factor authentication for your whole
        workspace?
      </p>

      <div className="col-md-6 mb-1 mt-3">
        <button className="btn py-2">
          Allow two-factor authentication to my workspace
        </button>
      </div>
    </div>
  );
};

export default TwoFactor;
