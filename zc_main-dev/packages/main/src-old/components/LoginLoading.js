import React from "react";
import styles from "../component-styles/LoginLoading.module.css";
import Logo from "../component-assets/zurichat.png";

const LoginLoading = () => {
  //Redirect to dashboard
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loaderContainer}>
        <div>
          <img width="100" height="100" className={styles.rotate} src={Logo} />
        </div>
        <div className={styles.loadingStatus}>
          <h1>Launching Zuri Chat...</h1>
        </div>
      </div>
      {/* <div className={styles.loadingImage}>
        <img src="/loading-image-1-new.png" alt="" />
        <img src="/loading-image-2-new.svg" alt="" />
        <img src="/loading-image-3-new.png" alt="" />
      </div> */}
    </div>
  );
};

export default LoginLoading;
