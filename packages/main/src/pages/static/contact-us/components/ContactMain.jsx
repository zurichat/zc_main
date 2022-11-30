import React from "react";
import contactStyle from "./ContactMain.module.css";
import { ContactUs } from "../assets";
import FAQselected from "./FaqSelected";
import DiscoverMore from "./DiscoverMore";
import { useTranslation } from "react-i18next";
import ContactSideBar from "./ContactSideBar";
import ContactMainBoard from "./ContactMainBoard";

const contactTitle = () => {
  const { t } = useTranslation();
  return (
    <div>
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
