import { useContext, useState, useEffect } from "react";
import { BASE_API_URL } from "@zuri/utilities";
import { FaChevronRight } from "react-icons/fa";
import { BiSmile } from "react-icons/bi";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import axios from "axios";
import defaultAvatar from "../assets/images/avatar_vct.svg";
import smile from "../assets/images/smile.png";
import edit from "../assets/images/pen.png";
import { useTranslation } from "react-i18next";

import styles from "../styles/Topbar.module.css";
import { TopbarContext } from "../context/topbar.context";
import StatusBadgeModal from "./StatusBadgeModal";
import { ProfileContext } from "../context/profile-modal.context";
import Preferences from "./Preferences";
import EditProfile from "./EditProfile";
import MembersModal from "./MembersModal";
import SetStatusModal from "./SetStatusModal";
import NewStatusModal from "./NewStatusModal";
import { authAxios } from "../utils/api";
// react icons

const TopbarModal = ({ members, statusModal, setStatusModal }) => {
  const {
    userProfileImage,
    orgId,
    toggleModalState,
    toggleProfileState,
    user,
    setUser
  } = useContext(ProfileContext);

  const state = useContext(TopbarContext);
  const [showModal, setShowModal] = state.show;

  const handleClearStatus = async () => {
    setUser({
      ...user,
      status: {
        ...user.status,
        expiry_time: "",
        text: "",
        tag: ""
        // status_history: [...user.status.status_history]
      }
    });

    setShowModal(!showModal);

    try {
      const res = await authAxios.patch(
        `/organizations/${orgId}/members/${user._id}/status`,
        {
          expiry_time: "one_hour",
          tag: "",
          text: ""
        }
      );
      const response = res.status;
    } catch (error) {
      const errorResponse = error;
    }
  };

  // const handleClearStatus = async () => {
  //   // setEmoji("")
  //   // setText("")
  //   try {
  //     const res = await authAxios.patch(
  //       `/organizations/${orgId}/members/${user._id}/status`,
  //       {
  //         expiry_time: "one_hour",
  //         tag: "",
  //         text: ""
  //       }
  //     )
  //     res.status == 200 && alert(res?.data?.message)
  //   } catch (error) {
  //     alert(error)
  //   }
  // }
  const [hoverState, setHoverState] = useState(false);

  // const [username, setUsername] = state.username
  const [showStatus] = state.status;
  const [showMembersModal] = state.modal;
  const {
    onEmojiClick,
    openModal,
    closeModal,
    openStatus,
    closeStatus,
    modalRef,
    closeMembersModal,
    toggleUserPresence,
    reusableModal,
    setReusableModal,
    presence,
    setPresence
  } = state;

  const currentWorkspace = localStorage.getItem("currentWorkspace");
  let token = sessionStorage.getItem("token");

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));

    if ((user && token) !== null) {
      try {
        axios
          .get(`${BASE_API_URL}/organizations/${currentWorkspace}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            //Get Current Workspace Or Organization Name
            localStorage.setItem("orgName", response.data.data.name);
            // let userData = { currentWorkspace, ...response.data.data }
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      // console.log('YOU ARE NOT LOGGED IN, PLEASE LOG IN')
    }
  }, []);

  const { t } = useTranslation();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const logout = () => {
    window.location.href = "/signout";
  };
  const [pause, setPause] = useState(false);
  // console.log(user)

  var userAppearance = null;
  var toggleAppearance = null;

  switch (presence) {
    case "true":
      userAppearance = `${t("user_appearance_active")}`;
      toggleAppearance = (
        <div className={styles.online}>
          <span className={styles.activeCircle} />
          <span className={styles.active}>{t("user_active")} </span>
        </div>
      );
      break;
    default:
      userAppearance = `${t("user_appearance_away")}`;
      toggleAppearance = (
        <div className={styles.online}>
          <span className={styles.awayCircle} />
          <span className={styles.away}>{t("user_away")}</span>
        </div>
      );
  }

  useEffect(() => {
    // console.log("user presence", user.presence)
    setPresence(user.presence);
  }, [user]);

  return (
    <>
      {/* The section that shows the set status */}
      {statusModal && (
        <NewStatusModal
          statusModal={statusModal}
          setStatusModal={setStatusModal}
          openStatus={openStatus}
        />
      )}

      {/* The section that shows the status picker*/}
      {showStatus ? (
        <div
          ref={modalRef}
          className={styles.modalContainers}
          onClick={closeStatus}
        >
          <div className={styles.smileys}>
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ boxShadow: "none" }}
              skinTone={SKIN_TONE_MEDIUM_DARK}
            />
          </div>
        </div>
      ) : null}

      {/* The section that shows the members modal */}
      {showMembersModal ? (
        <div ref={modalRef} className={styles.modalContainers}>
          <div
            id="overlay"
            onClick={closeMembersModal}
            className={styles.membersModalOverlay}
          />
          <MembersModal members={members} roomTitle={"announcements"} />
        </div>
      ) : null}

      {/* The section that shows the topbarprofile */}
      {showModal ? (
        <div>
          <section className={styles.topbarModal}>
            <div className={styles.sectionOne}>
              <div className={styles.oneLeft}>
                <img
                  src={userProfileImage ? userProfileImage : defaultAvatar}
                  alt="profile-pic"
                />
              </div>

              <div className={styles.oneRight}>
                <h4 style={{ paddingLeft: 0 }}>
                  {user.user_name
                    ? `${user.user_name
                        .charAt(0)
                        .toUpperCase()}${user.user_name.slice(1)}`
                    : `${t("user_anonymous")}`}
                </h4>
                {toggleAppearance}
              </div>
            </div>
            <div
              className={styles.sectionTwo}
              onClick={() => {
                setStatusModal(!statusModal);
                closeModal();
              }}
              onMouseEnter={() => setHoverState(true)}
              onMouseLeave={() => setHoverState(false)}
            >
              <div className={styles.emoji}>
                {hoverState ? (
                  user?.status?.tag ? (
                    <img src={edit} className={styles.defalutEmoji} />
                  ) : (
                    <div>😃</div>
                  )
                ) : (
                  <>
                    {user?.status?.tag || (
                      <img src={smile} className={styles.defalutEmoji} />
                    )}
                  </>
                )}
              </div>

              <div className={styles.statusContent}>
                {!(user?.status?.text || user?.status?.tag)
                  ? `${t("user_status_update")}`
                  : user?.status?.text}
              </div>
            </div>

            <div className={styles.optionSection} style={{ marginTop: "1rem" }}>
              {(user?.status?.text || user?.status?.tag) && (
                <p onClick={handleClearStatus}>{t("user_clear_status")}</p>
              )}
              <p
                onClick={() => {
                  toggleUserPresence();
                }}
              >
                {userAppearance}
              </p>
              {/* <div className={styles.pause}>
               <p onClick={() => setPause(!pause)}>Pause Notifications</p>
               <FaChevronRight className={styles.chevron} />
              </div>
            {pause && <PauseNotification pause={pause} setPause={setPause} />}*/}
            </div>

            <hr className={styles.hr} />

            <div className={styles.optionSection}>
              <p
                onClick={() => {
                  setReusableModal("edit profile");
                  toggleModalState();
                }}
              >
                {t("user_edit_profile")}
              </p>
              <p
                onClick={() => {
                  toggleProfileState();
                  closeModal();
                }}
              >
                {t("user_view_profile")}
              </p>
              <p
                onClick={() => {
                  setReusableModal("preference");
                  toggleModalState();
                }}
              >
                {t("user_preferences")}
              </p>
            </div>

            <hr className={styles.hr} />

            {reusableModal === "edit profile" && <EditProfile />}

            {reusableModal === "preference" && <Preferences />}

            <div className={styles.optionSection}>
              <p onClick={logout}>{t("user_signout")}</p>
            </div>
          </section>
          <div className={styles.modalBackDrop} onClick={closeModal}></div>
        </div>
      ) : null}
    </>
  );
};

export default TopbarModal;
