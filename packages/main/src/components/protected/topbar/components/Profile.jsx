import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import defaultAvatar from "../assets/images/avatar_vct.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";
import github from "../assets/images/github.svg";
import { BiUser } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";
import moment from "moment";
import { ProfileContext } from "../context/profile-modal.context";
import { TopbarContext } from "../context/topbar.context";
import EditProfile from "./EditProfile";
import Preferences from "./Preferences";
import { Dropdown } from "./ProfileMore";
import StatusBadgeModal from "./StatusBadgeModal";
import { FiSettings } from "react-icons/fi";
import { authAxios } from "../utils/api";
import { getCurrentWorkspace, getUser } from "../utils/common";

import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  const {
    userProfileImage,
    toggleModalState,
    showProfile,
    toggleProfileState,
    user
  } = useContext(ProfileContext);
  // console.log('user status', user.status)
  const state = useContext(TopbarContext);
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState("");

  const currentTime = moment().format("h:mm a");

  const userData = getUser();
  const currentWorkspace = getCurrentWorkspace();
  const [workspaceData, setWorkspaceData] = React.useState({});

  useEffect(() => {
    if (currentWorkspace) {
      authAxios
        .get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [currentWorkspace]);

  return (
    <div
      className={showProfile ? styles.ProfileContainer : styles.containerNone}
    >
      <svg
        className={styles.mobileBackButton}
        onClick={toggleProfileState}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9998 12H3.99982"
          strokeWidth="1.22693"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99982 18L3.99982 12L9.99982 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className={styles.header}>
        <div className={styles.title}>{t("profile_user")}</div>
        <svg
          onClick={toggleProfileState}
          className={styles.closeIcon}
          viewBox="0 0 329.26933 329"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
        </svg>
      </div>
      <div className={styles.content}>
        <img
          className={`avatar ${styles.userAvatar}`}
          src={userProfileImage ? userProfileImage : defaultAvatar}
          alt="avatar"
        />
        <div className={styles.userDetails}>
          <h3 className={styles.h3users}>
            {user.first_name
              ? `${user.first_name} ${user.last_name} `
              : t("profile_user_name")}{" "}
            {/* <span>{<StatusBadgeModal />  === '' ? <StatusBadgeModal />  :'0' }</span> */}
            {/* <ProfileStatusBadgeModal /> */}
            <StatusBadgeModal />
          </h3>

          <p className={styles.myp}>
            {user.bio ? user.bio : t("profile_user_description")}
          </p>
        </div>

        <div className={styles.buttonGroupsMobile}>
          <button>{t("profile_message")}</button>
          <button
            onClick={() => {
              toggleModalState();
              setModal(() => "edit profile");
              toggleProfileState();
            }}
          >
            Edit Profile
          </button>
          <a
            className={styles.settingsLink}
            href={
              workspaceData.creator_email === userData.email
                ? "/admin/settings"
                : "/settings"
            }
          >
            <FiSettings className={styles.iconSettings} />
          </a>
        </div>

        <div className={styles.buttonGroups}>
          <div>
            <button
              onClick={() => {
                setModal(() => "edit profile");
                toggleModalState();
              }}
              className={styles.ctaButton}
            >
              <BiUser className={styles.ctaButtonIcon} />
            </button>
            <h6 className={styles.ctaText}> {t("profile_edit_profile")}</h6>
          </div>
          <div>
            <button onClick={state.openStatus} className={styles.ctaButton}>
              <AiFillEdit className={styles.ctaButtonIcon} />
            </button>
            <h6 className={styles.ctaText}> {t("profile_edit_status")}</h6>
          </div>
          <div>
            <button
              onClick={() => setDropdown(!dropdown)}
              className={styles.ctaButton}
            >
              <FaEllipsisH className={styles.ctaButtonIcon} />
            </button>
            <h6 className={styles.ctaText}>{t("profile_more_items")}</h6>
          </div>
          {dropdown && (
            <Dropdown setDropdown={setDropdown} setModal={setModal} />
          )}
          {modal === "preference" && <Preferences />}
          {modal === "edit profile" && <EditProfile />}
        </div>

        <div className={`${styles.moreInfo} ${styles.mobile}`}>
          <div className={styles.infoTitle}>{t("profile_what_i_do")}</div>
          <div className={styles.infoContent}>{t("profile_design")}</div>
        </div>
        <div className={`${styles.moreInfo} ${styles.mobile}`}>
          <div className={styles.infoTitle}>{t("profile_pronouns")}</div>
          <div className={styles.infoContent}>
            {user.pronouns ? user.pronouns : t("profile_number_status")}
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>{t("profile_display_name")}</div>
          <div className={styles.infoContent}>
            {user.display_name ? user.display_name : user.username}
            {/* {user.display_name ? user.display_name : user.user_name} */}
          </div>
        </div>
        <div className={`${styles.moreInfo} ${styles.mobile}`}>
          <div className={styles.infoTitle}>{t("profile_status")}</div>
          <div className={styles.infoContent}>
            <span>{user?.status?.text !== "" ? user?.status?.text : "0"}</span>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>{t("profile_email_address")}</div>
          <div className={styles.infoContent}>
            {user.email ? user.email : t("profile_number_status")}
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>{t("profile_phone_number")}</div>
          <div className={styles.infoContent}>
            {user.phone ? user.phone : t("profile_number_status")}
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>{t("profile_local_time")}</div>
          <div className={styles.infoContent}>{currentTime}</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
