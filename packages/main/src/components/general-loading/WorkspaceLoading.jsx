import React from "react";
import styles from "./WorkspaceLoading.module.css";

import ZuriChatLogo from "../../assets/zuri-chat-logo/logo.png";

const WorkspaceLoading = ({ text }) => {
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
            alt="zuri chat loader"
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

export default WorkspaceLoading;
