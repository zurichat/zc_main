import React from "react";
import { BiInfoCircle } from "react-icons/bi";

import styles from "../assets/css/sidebar.css";

export default function Privacy() {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.sidebarPage}`}>
        <b>Contact Sharing</b>
        <div className="my-4">
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">All your conversations</label>
          </div>
          <p>
            Includes people from Mechanic Prybar and everyone you’re using Zuri
            CHat Connect to work with
          </p>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">Unread conversations only</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">Custom, depending on the section</label>
          </div>
        </div>
      </div>
      <hr />
      <div className={`${styles.sidebarPage}`}>
        <b>Invitations you’ve blocked</b>
        <p>
          You’ve stopped receiving Zuri Chat connect invitation from these
          people
        </p>
        <p className={`${styles.stopped}`}>
          <BiInfoCircle className="me-2" />
          You haven’t blocked any invitations from anyone yet.
        </p>
      </div>
      <hr />
    </div>
  );
}
