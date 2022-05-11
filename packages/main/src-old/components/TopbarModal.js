import { useContext, useState } from "react";

// react icons
import { FaCircle, FaChevronRight } from "react-icons/fa";

import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

import styles from "../styles/Topbar.module.css";
import { TopbarContext } from "../context/Topbar";
import StatusBadgeModal from "./StatusBadgeModal";
import { ProfileContext } from "../context/ProfileModal";
import Preferences from "./Preferences";
import EditProfile from "./EditProfile";
import MembersModal from "./MembersModal";
import Downloads from "./Downloads";
import PauseNotification from "./PauseNotification";

const TopbarModal = ({ members }) => {
  const { toggleModalState, toggleProfileState } = useContext(ProfileContext);

  const state = useContext(TopbarContext);
  const [showModal] = state.show;
  const [active, setActive] = state.presence;
  const [showStatus] = state.status;
  const [showMembersModal] = state.modal;
  const { onEmojiClick, openStatus, closeStatus, modalRef, closeMembersModal } =
    state;
  const [modal, setModal] = useState("");
  const [pause, setPause] = useState(false);

  return (
    <>
      {/* The section that shows the status */}
      {showStatus && (
        <div
          ref={modalRef}
          className={styles.modalContainers}
          onClick={closeStatus}
        >
          <div className={styles.picker}>
            {/* <FaTimes
              className={styles.times}
              onClick={() => setShowStatus(!showStatus)}
            /> */}
            <div className={styles.smileys}>
              <Picker
                onEmojiClick={onEmojiClick}
                skinTone={SKIN_TONE_MEDIUM_DARK}
              />
            </div>
          </div>
        </div>
      )}

      {/* The section that shows the members modal */}
      {showMembersModal && (
        <div ref={modalRef} className={styles.modalContainers}>
          <div
            id="overlay"
            onClick={closeMembersModal}
            className={styles.membersModalOverlay}
          />
          <MembersModal members={members} roomTitle={"announcements"} />
        </div>
      )}

      {/* The section that shows the topbarprofile */}
      {showModal && (
        <section className={styles.topbarModal}>
          <div className={styles.sectionOne}>
            <div className={styles.oneLeft}>
              <img src="/profilepic.png" alt="profile" />
            </div>

            <div className={styles.oneRight}>
              <h4>Praise.A</h4>
              {active ? (
                <div className={styles.online}>
                  <FaCircle className={styles.circle} />
                  <p className={styles.active}>Active</p>
                </div>
              ) : (
                <div className={styles.online}>
                  <FaCircle className={styles.circlegrey} />
                  <p className={styles.away}>Away</p>
                </div>
              )}
            </div>
          </div>

          <div className={styles.sectionTwo}>
            <StatusBadgeModal />
          </div>
          {/* <div onClick={openStatus} className={styles.sectionTwo}>
            <StatusBadgeModal />
          </div> */}

          <div className={styles.sectionThree}>
            <p onClick={openStatus}>Set a status</p>
            <p onClick={() => setActive(!active)}>
              {active ? "Set yourself as away" : "Set yourself as active"}
            </p>
            <div className={styles.pause}>
              <p onClick={() => setPause(!pause)}>Pause Notifications</p>
              <FaChevronRight className={styles.chevron} />
            </div>
            {pause && <PauseNotification pause={pause} setPause={setPause} />}
          </div>

          <hr className={styles.hr} />

          <div className={styles.sectionFour}>
            <p
              onClick={() => {
                setModal("edit profile");
                toggleModalState();
              }}
            >
              Edit profile
            </p>
            <p onClick={toggleProfileState}>View profile</p>
            <p
              onClick={() => {
                setModal("preference");
                toggleModalState();
              }}
            >
              Preferences
            </p>
          </div>

          <hr className={styles.hr} />

          <div className={styles.sectionSix}>
            <p
              onClick={() => {
                setModal("downloads");
              }}
            >
              Downloads
            </p>
          </div>

          {modal === "edit profile" && <EditProfile />}

          {modal === "preference" && <Preferences />}

          {modal === "downloads" && <Downloads setModal={setModal} />}

          <hr className={styles.hr} />

          <div className={styles.sectionFive}>
            <p>
              {" "}
              <a href="/signout">Sign out of workspace</a>{" "}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default TopbarModal;
