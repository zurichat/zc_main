import React from "react";
import contactStyle from "./ContactMain.module.css";
import ContactMainBoard from "./ContactMainBoard";

const ContactMain = () => {
  return (
    <div className={`${contactStyle.contactPageContainer}`}>
      <div className={`${contactStyle.contactHead}`}>
        <div className={contactStyle.boardContainer}>
          <ContactMainBoard />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
