import React, { useState } from "react";
import styles from "../styles/NotificationPreference.module.css";

const SidebarPreference = () => {
  const [state, setState] = useState({
    name: "React",
    value: "duration"
  });

  const onValueChange = event => {
    setState({
      selectedOption: event.target.value
    });
  };
  const changeValue = event => {
    setState({
      selectedOptions: event.target.value
    });
  };

  return (
    <div>
      <div className={styles.notifiyContent}>
        <div className={styles.itemTitle1}>
          <h4 className={styles.titleLarge}>Always show in Sidebar</h4>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            All Unreads
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            All DMs
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            Mentions & Reactions
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            Saved Items
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            Zuri Connect
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            File Browser
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            People
          </label>
        </div>

        <div className={styles.itemTitle2}>
          <h4 className={styles.titleLarge}>Show All the Following</h4>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            value="all-conversations"
            checked={state.selectedOption === "all-conversations"}
            onChange={onValueChange}
          />
          <label htmlFor="all-messages">All Conversations</label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            value="unread-messages"
            checked={state.selectedOption === "unread-messages"}
            onChange={onValueChange}
          />
          <label htmlFor="direct-messages">All unread messages</label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            value="custom"
            checked={state.selectedOption === "custom"}
            onChange={onValueChange}
          />
          <label htmlFor="custom">Custom</label>
        </div>
        <div className={styles.itemTitle2}>
          <h4 className={styles.titleLarge}>Sort by</h4>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            value="alphabet"
            checked={state.selectedOptions === "alphabet"}
            onChange={changeValue}
          />
          <label htmlFor="alphabet">Alphabet</label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            value="most-recent"
            checked={state.selectedOptions === "most-recent"}
            onChange={changeValue}
          />
          <label htmlFor="most-recent">Most Recent</label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            value="priority"
            checked={state.selectedOptions === "priority"}
            onChange={changeValue}
          />
          <label htmlFor="most-recent">Priority</label>
        </div>

        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            Show Profile Photo
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            List Private Channels together
          </label>
        </div>
        <div className={styles.markbox}>
          <label htmlFor="for-unread">
            <input type="checkbox" value="for-unread" />
            Organise conversations
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarPreference;
