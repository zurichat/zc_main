import React, { useContext } from "react";
import { TopbarContext } from "../context/Topbar";
import { ProfileContext } from "../context/ProfileModal";

import styles from "../styles/ProfilePicView.module.css";

const ProfilePicView = () => {
  const { profilePicView, setProfilePicView } = useContext(TopbarContext);
  const { userProfileImage, user } = useContext(ProfileContext);

  return (
    <div className={`${styles.ppv_wrapper}`}>
      <div
        className={`${styles.ppv_overlay}`}
        onClick={() => setProfilePicView(!profilePicView)}
      />
      <div className={`${styles.ppv_imgcontainer}`}>
        <img src={userProfileImage} />
      </div>
    </div>
  );
};

export default ProfilePicView;
