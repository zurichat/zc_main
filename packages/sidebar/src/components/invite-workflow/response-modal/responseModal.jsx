import React, { useState } from "react"
import styles from "./styles/modal.module.css"
import successPng from "../../../assets/success.png"
import cancelPng from "../../../assets/cancel.png"
import { ACTIONS } from "../../../App"
const InviteResponseModal = props => {
  const isOpen = visibililty => {
    props.dispatch({
      type: ACTIONS.IS_OPEN,
      payload: visibililty
    })
  }
  const onClose = () => {
    isOpen(true)
  }

  if (props.state.isOpen) {
    return null
  }

  //Send more invites
  const openInviteModal = () => {
    isOpen(true)
    props.dispatch({
      type: ACTIONS.INVITE_MODAL_TYPE,
      payload: "show-invite-modal"
    })
  }

  return (
    props.state.isOpen === false && (
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.modalcontent} onClick={e => e.stopPropagation()}>
          <div className={styles.top}>
            <div className={styles.inviteclose}>
              <button onClick={onClose} className={styles.button}>
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
          <div className={styles.modalbody}>
            {props.state.modalToShow === "success" ? (
              <div className={styles.icon}>
                <img src={successPng} alt="Email sent successfully" />
                <h1>Sent!</h1>
                <p>
                  {props.state.showMessage
                    ? props.state.showMessage
                    : "Invites were successfully sent"}
                </p>
              </div>
            ) : (
              <div className={styles.icon}>
                <img src={cancelPng} alt="Sending Invites failed" />
                <h1 style={{ color: "red" }}>
                  {props.state.showMessage
                    ? props.state.showMessage
                    : "Unable to send invites"}
                </h1>
              </div>
            )}
          </div>
          <div className={styles.footer}>
            <div className={styles.done}>
              <button
                onClick={openInviteModal}
                style={{
                  color: "#00b87c",
                  backgroundColor: "white",
                  border: "1px solid #00b87c"
                }}
              >
                Send more invites
              </button>
            </div>
            <div className={styles.done}>
              <button onClick={onClose}>Done</button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default InviteResponseModal
