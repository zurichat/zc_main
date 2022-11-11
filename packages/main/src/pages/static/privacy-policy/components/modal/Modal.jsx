import React from "react";
import styles from "./Modal.module.css";

const Modal = ({
  setShowModal,
  textHeader,
  textBody,
  children,
  open,
  handleToUpdate
}) => {
  return (
    <div
      open={open}
      onClose={() => handleToUpdate(true)}
      className={styles.modal_outer_container}
    >
      <div className={styles.centered}>
        <div className={styles.modal_container}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
