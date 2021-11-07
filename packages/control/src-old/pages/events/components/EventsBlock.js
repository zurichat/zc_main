import eventsStyles from "../styles/events.module.css";
import arrow_right from "../assets/arrow-right.png";
const EventsBlock = props => {
  const eventsTitle = props.eventsTitle;
  const eventsDuration = props.eventsDuration;
  const eventsType = props.eventsType;
  return (
    <div className={eventsStyles.eventsBlock}>
      <h3>{eventsTitle}</h3>
      <p>{eventsDuration}</p>
      <p>{eventsType}</p>
      <div className={eventsStyles.eventsBlockLinkBlock}>
        <a href="/Register">REGISTER</a>
        <img src={arrow_right} alt="arrownew" />
      </div>
    </div>
  );
};

export default EventsBlock;
