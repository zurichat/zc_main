import React from "react";
import contactStyle from "./ContactMain.module.css";
import ContactSideBar from "./ContactSideBar";
import ContactMainBoard from "./ContactMainBoard";

const contactTitle = () => {
  return (
    <div className={`${contactStyle.contactPageContainer}`}>
      <div className={`${contactStyle.contactHead}`}>
        <div className={contactStyle.boardContainer}>
          <ContactSideBar />
          <ContactMainBoard />
        </div>
      </div>
    </div>
  );
};

export default contactTitle;
