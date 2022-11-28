import React from "react";

import styles from "../assets/css/sidebar.css";
// import "../assets/css/main.css"

// images
import unread from "../assets/images/unread.png";
import dms from "../assets/images/dms.png";
import thread from "../assets/images/thread.png";
import drafts from "../assets/images/drafts.png";
import saved from "../assets/images/saved.png";
import zuri from "../assets/images/zuri.png";
import folder from "../assets/images/folder.png";
import people from "../assets/images/people.png";

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.sidebarPage}`}>
        <b>Always show in the sidebar: </b>
        <div className="my-4">
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox1" />
            <label htmlFor="checkbox1">
              <img src={unread} alt="" className="mx-2" />
              Unread messages
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox2" />
            <label htmlFor="checkbox2">
              <img src={dms} alt="" className="mx-2" />
              All DMs
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox1" />
            <label htmlFor="checkbox1">
              <img src={thread} alt="" className="mx-2" />
              Thread
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox2" />
            <label htmlFor="checkbox2">
              <img src={drafts} alt="" className="mx-2" />
              Drafts & New
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox1" />
            <label htmlFor="checkbox1">
              <img src={saved} alt="" className="mx-2" />
              Saved Items
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox2" />
            <label htmlFor="checkbox2">
              <img src={zuri} alt="" className="mx-2" />
              Zuri Chat Connect
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox1" />
            <label htmlFor="checkbox1">
              <img src={folder} alt="" className="mx-2" />
              Files
            </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" name="" id="checkbox2" />
            <label htmlFor="checkbox2">
              <img src={people} alt="" className="mx-2" />
              People & user groups
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className={`${styles.sidebarPage}`}>
        <b>Show...</b>
        <div className="my-4">
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">All your conversations</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">Unread conversations only</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">Custom, depending on the section</label>
          </div>
        </div>
        <i>Choose your settings for each section from the sidebar</i>
      </div>
      <hr />
      <div className={`${styles.sidebarPage}`}>
        <b>Sort...</b>
        <div className="my-4">
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">Alphabetically</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">By most recent</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">By, priority</label>
          </div>
        </div>
        <i>
          You can also choose how individual sections are sorted directly from
          your sidebar.
        </i>
      </div>
      <hr />
    </div>
  );
}
