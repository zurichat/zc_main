import React from "react";
import styles from "../options-popup/OptionsPopUp.module.css";

const OptionsPopUp = props => {
  return (
    <div className={styles.popUpContent}>
      <ul className={styles.listWrap}>
        <li className={styles.listItem}>Activate account</li>
        <div className={styles.divider}></div>
        <li className={styles.listItem}>Change account type</li>
      </ul>
    </div>
  );
};

export default OptionsPopUp;
