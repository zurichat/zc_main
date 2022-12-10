import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BASE_API_URL } from "@zuri/utilities";
import Group from "../assets/Group.svg";
import "./App.css";
import EmailSucessModal from "../src/EmailModal";
import axios from "axios";
import { useTranslation } from "react-i18next";

const [modal, setModal] = useState();
setModal("true");

const history = useHistory();
history.push();

function subscribe() {
  axios
    .post(`${BASE_API_URL}/external/send-mail?custom_mail=0`, {
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
  const { t } = useTranslation();
  return (
    <div className="EmailSub-Container-Wrapper">
      <div className="EmailSub-Container-logo">
        <img src={Group} className="EmailSub-Container-logo" alt="logo" />
      </div>

      <div className="Description-emailsub-container">
        <h1 className="emailsub-title-text">
          {t("plugin.subscribe.headline")}
          <br></br> {t("plugin.subscribe.headline_br")}
        </h1>
        <p>
          {" "}
          {t("plugin.subscribe.description")}
          <br></br>
          {t("plugin.subscribe.description_br")}
          <br></br>
          {t("plugin.subscribe.description_brr")}{" "}
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
              placeholder={t("plugin.subscribe.button")}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailSub;
