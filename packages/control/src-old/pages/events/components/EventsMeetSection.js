import React from "react";
import eventsStyles from "../styles/events.module.css";
import events_meet from "../assets/events-meet-display-img.jpg";
import zurilogo from "../assets/zuri-logo.png";
import arrow from "../assets/arrow-right.png";

const EventsMeetSection = () => {
  return (
    <div className={eventsStyles.eventsMeetSection}>
      <div className={eventsStyles.eventsMeetDisplayBlock}>
        <img src={events_meet} alt="" />
      </div>
      <div className={eventsStyles.eventsMeetTextWrapper}>
        <div className={eventsStyles.eventsMeetLogoBlock}>
          <img src={zurilogo} alt="" />
          <h3 className={eventsStyles.boldText}>Zuri</h3>
          <h3 className={eventsStyles.logoText}>Meet</h3>
        </div>
        <h2>Get ready for Zuri Meet</h2>
        <p>
          Discover, learn, connect and prepare to be inspired at Slack Frontiers
          this November.
        </p>
        <div className={eventsStyles.checkoutLinkBlock}>
          <a href="/">Check out more info</a>
          <img src={arrow} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default EventsMeetSection;
