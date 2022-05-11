import React from "react";
import eventsStyles from "../styles/events.module.css";
import EventsBlock from "./EventsBlock.js";
const EventsUpcomingMeetsSection = () => {
  return (
    <div className={eventsStyles.eventsUpcomingMeetsSection}>
      <div className={eventsStyles.eventsUpcomingMeetsHeaderBox}>
        <h2>Upcoming Meets</h2>
        <p>
          Virtual and in-person. Local and global. Small groups and large
          parties. Register to meet up, however you’d like to meet.
        </p>
      </div>
      <div>
        <EventsBlock
          eventsTitle="IDG CIO.com OnDemand Webinar"
          eventsDuration="August 24, 2021 - November 30, 2021"
          eventsType="Virtual"
        />
        <EventsBlock
          eventsTitle="IDG CIO.com OnDemand Webinar"
          eventsDuration="August 24, 2021 - November 30, 2021"
          eventsType="Virtual"
        />
        <EventsBlock
          eventsTitle="IDG CIO.com OnDemand Webinar"
          eventsDuration="August 24, 2021 - November 30, 2021"
          eventsType="Virtual"
        />
        <EventsBlock
          eventsTitle="IDG CIO.com OnDemand Webinar"
          eventsDuration="August 24, 2021 - November 30, 2021"
          eventsType="Virtual"
        />
        <EventsBlock
          eventsTitle="IDG CIO.com OnDemand Webinar"
          eventsDuration="August 24, 2021 - November 30, 2021"
          eventsType="Virtual"
        />
      </div>
    </div>
  );
};

export default EventsUpcomingMeetsSection;
