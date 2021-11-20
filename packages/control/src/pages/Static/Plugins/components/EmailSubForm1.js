import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Group from "../assets/Group.svg";
import "./App.css";
import EmailSucessModal from "../src/EmailModal";
import axios from "axios";

const [modal, setModal] = useState();
setModal("true");

const history = useHistory();
history.push();

function subscribe() {
  axios
    .post("https://api.zuri.chat/external/send-mail?custom_mail=0", {
      email: "mailto:email@gmail.com",
      subject: "Hello World",
      mail_type: 3,
      data: {}
    })
    .then(response => {
      setModal("true");

      setTimeout(EmailSucessModal, 3000);
    })
    .catch(error => console.error(error));
}

function EmailSub() {
  return (
    <div className="EmailSub-Container-Wrapper">
      <div className="EmailSub-Container-logo">
        <img src={Group} className="EmailSub-Container-logo" alt="logo" />
      </div>

      <div className="Description-emailsub-container">
        <h1 className="emailsub-title-text">
          Be the First to get updates<br></br> on latest plugins from Zuri Chat
        </h1>
        <p>
          {" "}
          Enrich your Zuri Chat experience by subscribing<br></br>
          here to get the latest plugins via Emails<br></br>
          on Zuri Chat!{" "}
        </p>

        <div className="emailsubform-container">
          <form className="emailsubform">
            <input
              className="subForm"
              type="text"
              placeholder="jazeelandfriends@yes.com"
              name="email"
              required
            />

            <button
              className="subButton"
              typeName="subscribebutton"
              onClick={subscribe}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailSub;
