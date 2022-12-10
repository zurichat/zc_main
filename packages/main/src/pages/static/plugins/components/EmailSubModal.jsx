import React from "react";

import Group2 from "../assets/Group59317.svg";
import "./EmailModal.css";
import { useTranslation } from "react-i18next";

function EmailSucessModal() {
  const { t } = useTranslation();
  return (
    <div className="emsucess Wrapper">
      <div className="emsucess-content">
        <div className="emailSubSucess-header">
          <img src={Group2} className="emailSucess-container-logo" alt="logo" />
          <h1 className="emailSubSucess-Title">{t("thank_you")}</h1>
        </div>
        <div className="emsucess-body">
          <p>
            {t("modal_text1")}
            <br></br>
            {t("modal_text2")}
            <br></br>
            {t("modal_text3")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailSucessModal;
