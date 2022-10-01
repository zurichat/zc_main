import React from "react";
import styles from "../styles/AllSessionSignOut.module.css";

const SignOutActionList = ({ text }) => {
  return (
    <li className={`${styles.action_item}`}>
      <div>
        <div className={`${styles.dot}`}></div>
      </div>
      <p>{text}</p>
    </li>
  );
};

export default SignOutActionList;
