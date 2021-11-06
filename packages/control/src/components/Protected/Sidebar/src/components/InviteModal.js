import React from "react";
import styles from "../styles/InviteModal.module.css";
// import InviteSuccess from './InvitationAcceptance'
// import InviteFailed from './Modal'
// import InviteLoading from './SendingInvite'

const Modal = props => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.modal} onClick={props.onClose}>
        <div className={styles.modalcontent} onClick={e => e.stopPropagation()}>
          <div className={styles.top}>
            <div className={styles.modalheader}>
              <h4 className={styles.modaltitle}>Invite People to the Team</h4>
            </div>
            <div className={styles.inviteclose}>
              <button onClick={props.onClose} className={styles.button}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.99997 16.4999C13.1421 16.4999 16.5 13.1421 16.5 8.99992C16.5 4.85779 13.1421 1.49992 8.99997 1.49992C4.85783 1.49992 1.49997 4.85779 1.49997 8.99992C1.49997 13.1421 4.85783 16.4999 8.99997 16.4999Z"
                    stroke="#333333"
                    strokeWidth="1.22693"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2499 6.74994L6.74995 11.2499"
                    stroke="#333333"
                    strokeWidth="1.22693"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.74995 6.74994L11.2499 11.2499"
                    stroke="#333333"
                    strokeWidth="1.22693"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <form>
            <div className={styles.modalbody}>To:</div>
            <div className={styles.invitebox}>
              <input />
            </div>
            <div className={styles.bottominvite}>
              <div className={styles.copy}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33319 10.8333C9.05732 11.8014 10.1662 12.4072 11.3721 12.4936C12.5779 12.5799 13.7618 12.1383 14.6165 11.2833L17.1165 8.78328C18.6956 7.14837 18.673 4.54959 17.0658 2.94237C15.4585 1.33514 12.8598 1.31256 11.2249 2.89161L9.79152 4.31661"
                    stroke="#008B5E"
                    strokeWidth="1.22693"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6667 9.16664C10.9426 8.19856 9.83369 7.59272 8.62784 7.50636C7.42198 7.42 6.23807 7.86163 5.38338 8.71664L2.88338 11.2166C1.30433 12.8515 1.32691 15.4503 2.93413 17.0575C4.54136 18.6648 7.14013 18.6874 8.77504 17.1083L10.2 15.6833"
                    stroke="#008B5E"
                    strokeWidth="1.22693"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="/">Copy invite link </a>
                <a className={styles.p} href="/">
                  - Edit link settings
                </a>
              </div>
              <div className={styles.send}>
                <button>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
