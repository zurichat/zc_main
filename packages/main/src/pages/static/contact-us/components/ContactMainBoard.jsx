import React from "react";
import contactStyle from "./ContactMainBoard.module.css";

const ContactMainBoard = () => {
  return (
    <div className={contactStyle.contactMainBoardContainer}>
      <div className={contactStyle.contactMainBoardInnerContainer}>
        <div className={contactStyle.contactMainBoardTitleContainer}>
          <h1>Contact Us</h1>
          <p>
            Let us know how we can help. We will respond as soon as possible!
          </p>
        </div>

        <form className={contactStyle.contactFormContainer}>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              required
              id="fullName"
              type="text"
              placeholder="Enter your First and Last Name"
            />
          </div>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              required
              id="email"
              type="email"
              placeholder="Type your email here"
            />
          </div>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              required
              id="phoneNumber"
              type="phone"
              placeholder="Type your phone number here"
            />
          </div>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              type="phone"
              placeholder="Type your message here"
            />
          </div>
          <div className={contactStyle.inputGroupCheckBox}>
            <input
              required
              id="message"
              type="checkbox"
              placeholder="Type your message here"
            />
            <label htmlFor="message">I will like to recieve your news</label>
          </div>

          <div>
            <button className={contactStyle.contactBtn}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMainBoard;
