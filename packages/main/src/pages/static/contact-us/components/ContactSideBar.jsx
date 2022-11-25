import React from "react";
import contactStyle from "./ContactSideBar.module.css";
import MessageIcon from "../assets/message-icon.svg";
import LocationIcon from "../assets/location-icon.svg";
import PhoneIcon from "../assets/phone-icon.svg";

import FacebookIcon from "../assets/facebook-icon.svg";
import TwitterIcon from "../assets/twitter-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";

const ContactSideBarData = [
  {
    icon: MessageIcon,
    title: "Chat to us",
    desc: "Our team is here to help",
    addDesc: "",
    attachment: "zuri.chat@gmail.com"
  },
  {
    icon: LocationIcon,
    title: "Office",
    desc: "Come say hello at our office",
    addDesc: "Beavaton, Oregon",
    attachment: "Washington County, USA"
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    desc: "Mon-Fri 8am - 5pm",
    addDesc: "",
    attachment: "763-654-5423"
  }
];

const socialIcons = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon];

const ContactSideBar = () => {
  return (
    <div className={contactStyle.sidebarContainer}>
      <div className={contactStyle.topTitleContainer}>
        <h1>Get in Touch</h1>
        <p>Our friendly team is always here to chat.</p>
      </div>

      <div className={contactStyle.contactMenuDataContainer}>
        {ContactSideBarData.map((data, index) => (
          <div key={index} className={contactStyle.contactDataGroup}>
            <div>
              <img
                src={data.icon}
                alt="MessageIcon"
                className={contactStyle.contactDataIcon}
              />
            </div>
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
        {socialIcons.map((item, index) => (
          <img src={item} key={index} alt="FacebookIcon" />
        ))}
      </div>
    </div>
  );
};

export default ContactSideBar;
