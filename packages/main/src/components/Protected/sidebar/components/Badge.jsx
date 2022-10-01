import React from "react";
import styles from "../styles/Badge.module.css";

const badge = ({ number }) => {
  return (
    <span className={`badge bg-danger rounded-pill ${styles.badge}`}>
      {number}
    </span>
  );
};

export default badge;
