import React from "react";
import styles from "../styles/ChangeAccountModal.module.css";

const ChangeAccountModal = props => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <h1>
          Change {props.last_name} {props.first_name}'s account type'{" "}
        </h1>
        <div>X</div>
      </div>

      <ul style={{ listStyle: "none", padding: "0" }}>
        <li></li>
      </ul>
    </div>
  );
};

export default ChangeAccountModal;
