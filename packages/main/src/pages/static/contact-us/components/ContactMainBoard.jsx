import React from "react";
import contactStyle from "./ContactMainBoard.module.css";

const ContactMainBoard = () => {
  return (
    <div className={contactStyle.contactMainBoardContainer}>
      <div className={contactStyle.contactMainBoardInnerContainer}>
        <div className={contactStyle.contactMainBoardTitleContainer}>
          <h1>Contact Us</h1>
        </div>

        <form className={contactStyle.contactFormContainer}>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              required
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className={contactStyle.inputGroup}>
            <label htmlFor="message">Tell us what you need help with:</label>
            <textarea
              required
              id="message"
              type="phone"
              placeholder="Enter any topic"
            />
          </div>
          <div>
            <button className={contactStyle.contactBtn}>GET HELP</button>
          </div>
        </form>
        <div className={contactStyle.privacyPolicy}>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default ContactMainBoard;
