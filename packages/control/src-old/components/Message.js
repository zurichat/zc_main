import React from "react";
import styles from "../component-styles/Message.module.css";
const Message = ({ type }) => {
  if (type === "contact") {
    return (
      <div className={styles.message}>
        <p>Discover More.</p>
        <span>
          From channels to chat,learn how zuri chat works from top to bottom
        </span>
        <div className={styles.buttonSection}>
          <button className={styles.buttonOutline}>
            <a href="/help-center">Visit Help Center</a>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.message}>
      <p>Whatever work you do,you can do it in Zuri Chat</p>
      <div className={styles.buttonSection}>
        <button className={styles.buttonFilled}>
          <a href="/sales">Talk to Sales</a>
        </button>
        <button className={styles.buttonOutline}>
          <a href="/try-it-free">TRY IT FREE</a>
        </button>
      </div>
    </div>
  );
};
export default Message;
