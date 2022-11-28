import React, { useState, useEffect } from "react";
import styles from "../styles/Drop.module.css";
import axios from "axios";

const ToggleSwitch = ({ label, value, onChange }) => {
  return (
    <div className={`${styles.container}`}>
      {label}{" "}
      <div className={`${styles.toggle__switch}`}>
        <input
          type="checkbox"
          className={`${styles.checkbox}`}
          name={label}
          id={label}
          checked={value}
          onChange={onChange}
        />
        <label className={`${styles.label}`} htmlFor={label}>
          <span className={`${styles.inner}`} />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
