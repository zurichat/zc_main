import React from "react";
import styles from "../component-styles/LoginLoading.module.css";
import Logo from "../component-assets/zurichat.png";

const GeneralLoading = () => {
  //Redirect to dashboard
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loaderContainer}>
        <div>
          <img width="200" height="200" className={styles.rotate} src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default GeneralLoading;
