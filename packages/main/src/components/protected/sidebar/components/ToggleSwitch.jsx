import React from "react";
import styles from "../styles/Drop.module.css";

const ToggleSwitch = ({ label }) => {
  return (
    <div className={`${styles.container}`}>
      {label}{" "}
      <div className={`${styles.toggle__switch}`}>
        <input
          type="checkbox"
          className={`${styles.checkbox}`}
          name={label}
          id={label}
        />
        <label className={`${styles.label}`} htmlFor={label}>
          <span className={`${styles.inner}`} />
          {/* <span className={`${styles.switch}`} /> */}
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
