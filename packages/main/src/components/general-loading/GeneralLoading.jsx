import React from "react";
import styles from "./GeneralLoading.module.css";

import ZuriChatLogo from "../../assets/zuri-chat-logo/logo.png";

const GeneralLoading = ({ text }) => {
  //Redirect to dashboard
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loaderContainer}>
        <div>
          <img
            width="150"
            height="150"
            className={styles.rotate}
            src={ZuriChatLogo}
          />
        </div>

        {text && (
          <div className={styles.loadingStatus}>
            <h1>{text}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralLoading;
