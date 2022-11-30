import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import styles from "../assets/css/notifications.css";
import "../assets/css/main.css";

export default function Notifications() {
  return (
    <div className={`${styles.notifications} pt-5`}>
      <div className={`${styles.notificationsPage}`}>
        <div className="d-flex justify-content-between mb-2">
          <p>Notify about...</p>
          <p>
            About notifications
            <BsQuestionCircle className="ms-2" role="button" />
          </p>
        </div>
        <div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">All new messages</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">Direct Messages, mentions & Keywords</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">Nothing</label>
          </div>
        </div>

        <div className="my-4">
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox1" />
            <label htmlFor="checkbox1">
              Notify me about replies to thread I’m following
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox2" />
            <label htmlFor="checkbox2">
              Show a bagde in my sidebar whren I have a new Connection
            </label>
          </div>
        </div>
        <div className={`${styles.notificationSchedule}`}>
          <p>Notification schedule</p>
          <p>
            You’ll only recieve notification in hours you choose. outside of
            times, <br /> notifications will be paused.
            <a href="#">Learn more</a>
          </p>
        </div>
        <div className="">
          <div className="mb-2 mt-4">
            <b>Allow notifications:</b>
          </div>
          <select name="" id="">
            <option value="">Custom</option>
          </select>
        </div>
        <div className="my-4">
          <div className={`${styles.weekdays} d-flex align-items-center mb-3`}>
            <p>Monday</p>
            <span className={`${styles.day1} d-flex`}>
              <select name="" id="">
                <option value="">07:00am</option>
              </select>
              <p className="mx-3">to</p>
              <select name="" id="">
                <option value="">10:00pm</option>
              </select>
            </span>
          </div>
          <div className={`${styles.weekdays} d-flex align-items-center mb-3`}>
            <p>Tuesday</p>
            <span className={`${styles.day1} d-flex`}>
              <select name="" id="">
                <option value="">07:00am</option>
              </select>
              <p className="mx-3">to</p>
              <select name="" id="">
                <option value="">10:00pm</option>
              </select>
            </span>
          </div>
          <div className={`${styles.weekdays} d-flex align-items-center mb-3`}>
            <p>Wednesday</p>
            <span className={`${styles.day2} d-flex`}>
              <select name="" id="">
                <option value="">07:00am</option>
              </select>
              <p className="mx-3">to</p>
              <select name="" id="">
                <option value="">10:00pm</option>
              </select>
            </span>
          </div>
          <div className={`${styles.weekdays} d-flex align-items-center mb-3`}>
            <p>Thursday</p>
            <span className={`${styles.day3} d-flex`}>
              <select name="" id="">
                <option value="">07:00am</option>
              </select>
              <p className="mx-3">to</p>
              <select name="" id="">
                <option value="">10:00pm</option>
              </select>
            </span>
          </div>
          <div className={`${styles.weekdays} d-flex align-items-center mb-3`}>
            <p>Friday</p>
            <span className={`${styles.day4} d-flex`}>
              <select name="" id="">
                <option value="">07:00am</option>
              </select>
              <p className="mx-3">to</p>
              <select name="" id="">
                <option value="">10:00pm</option>
              </select>
            </span>
          </div>
          <div className={`${styles.weekdays} d-flex align-items-center mb-3`}>
            <p>Saturday</p>
            <span className={`${styles.day3} d-flex`}>
              <select name="" id="">
                <option value="">07:00am</option>
              </select>
              <p className="mx-3">to</p>
              <select name="" id="">
                <option value="">10:00pm</option>
              </select>
            </span>
          </div>
          <div className={`${styles.weekdays} d-flex align-items-center mb-3`}>
            <p>Sunday</p>
            <span className={`${styles.day1} d-flex`}>
              <select name="" id="">
                <option value="">07:00am</option>
              </select>
              <p className="mx-3">to</p>
              <select name="" id="">
                <option value="">10:00pm</option>
              </select>
            </span>
          </div>
        </div>
        <div className="">
          <b>Sound</b>
          <p className="mt-2">
            Send me an email notification for direct messages
          </p>
          <div className="my-4">
            <div className="d-flex align-items-center mb-3">
              <input type="checkbox" name="" id="checkbox1" />
              <label htmlFor="checkbox1">
                Mute all notifications from Zuri Chat
              </label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input type="checkbox" name="" id="checkbox2" />
              <label htmlFor="checkbox2">
                Allow all notifications from Zuri Chat
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="">
        <div className="d-flex align-items-center mb-3 ms-md-5 ms-3">
          <input type="checkbox" name="" id="checkbox1" />
          <label htmlFor="checkbox1">
            Send me an email notification for direct messages
          </label>
        </div>
      </div>
      <hr />
    </div>
  );
}
