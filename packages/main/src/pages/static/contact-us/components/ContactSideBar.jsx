import React from "react";
import contactStyle from "./ContactSideBar.module.css";
import { MdLocationOn } from "react-icons/md";
import { FiMail, FiPhone } from "react-icons/fi";

import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrLinkedinOption
} from "react-icons/gr";

const ContactSideBarData = [
  {
    icon: <FiMail size={15} />,
    title: "Chat to us",
    desc: "Our team is here to help",
    addDesc: "",
    attachment: "zuri.chat@gmail.com",
    id: "mail"
  },
  {
    icon: <MdLocationOn size={15} />,
    title: "Office",
    desc: "Come say hello at our office",
    addDesc: "Beavaton, Oregon",
    attachment: "Washington County, USA",
    id: "location"
  },
  {
    icon: <FiPhone size={15} />,
    title: "Phone",
    desc: "Mon-Fri 8am - 5pm",
    addDesc: "",
    attachment: "763-654-5423",
    id: "phone"
  }
];

const socialIcons = [
  {
    icon: <GrFacebookOption />,
    id: "facebook"
  },
  {
    icon: <GrTwitter />,
    id: "twitter"
  },
  {
    icon: <GrInstagram />,
    id: "instagram"
  },
  {
    icon: <GrLinkedinOption />,
    id: "linkedin"
  }
];

const ContactSideBar = () => {
  return (
    <div className={contactStyle.sidebarContainer}>
      <div className={contactStyle.topTitleContainer}>
        <h1>Get in Touch</h1>
        <p>Our friendly team is always here to chat.</p>
      </div>

      <div className={contactStyle.contactMenuDataContainer}>
        {ContactSideBarData.map(data => (
          <div key={data.id} className={contactStyle.contactDataGroup}>
            <span className={contactStyle.contactDataIcon}>{data.icon}</span>
            <div className={contactStyle.contactData}>
              <p className={contactStyle.contactDataTitle}>{data.title}</p>
              <p className={contactStyle.contactDataDesc}>{data.desc}</p>
              <p className={contactStyle.contactDataDesc}>{data.addDesc}</p>
              <p className={contactStyle.contactDataAttachment}>
                {data.attachment}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={contactStyle.socialGroup}>
        {socialIcons.map(item => (
          <div key={item.id}>
            <span>{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSideBar;
