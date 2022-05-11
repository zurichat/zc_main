import React from "react";
import styles from "../styles/OptionsPopUp.module.css";

const OptionsPopUp = props => {
  return (
    // <div ref={props.ref}>
    // <div className={styles.popUp}>
    <div className={styles.popUpContent}>
      {/* <button onClick={props.toggleModal}>X</button> */}
      <ul className={styles.listWrap}>
        <li className={styles.listItem}>Activate account</li>
        <div className={styles.divider}></div>
        <li className={styles.listItem}>Change account type</li>
      </ul>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default OptionsPopUp;
