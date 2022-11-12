import React from "react";

import Group2 from "../assets/Group59317.svg";
import "./EmailModal.css";

function EmailSucessModal() {
  return (
    <div className="emsucess Wrapper">
      <div className="emsucess-content">
        <div className="emailSubSucess-header">
          <img src={Group2} className="emailSucess-container-logo" alt="logo" />
          <h1 className="emailSubSucess-Title">Thank you for subscribing!</h1>
        </div>
        <div className="emsucess-body">
          <p>
            Now you'll be the first to receive updates<br></br> and unique
            offers from the<br></br> Zuri Chat Team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailSucessModal;
