import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import addIcon from "../assets/add-icon.svg";
import { ACTIONS } from "../App";
import { AiOutlinePlus } from "react-icons/ai";

export default function Invite(props) {
  //Invite modal
  const openInviteModal = () => {
    props.dispatch({
      type: ACTIONS.INVITE_MODAL_TYPE,
      payload: "show-invite-modal"
    });
  };

  return (
    <div className={`row mt-2 ${styles.sb__item}`}>
      {(props.state.user && props.state.user.user.role === "owner") ||
      props.state.user.user.role === "admin" ? (
        <div
          className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
          onClick={openInviteModal}
        >
          <div className={styles.invite__icon}>
            <AiOutlinePlus />
          </div>
          <p
            role="button"
            onClick={openInviteModal}
            className={`mb-0 ${styles.item_p}`}
          >
            Invite people to workspace
          </p>
        </div>
      ) : null}
    </div>
  );
}
