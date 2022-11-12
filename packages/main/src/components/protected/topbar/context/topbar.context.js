import { createContext, useState, useRef, useContext } from "react";
import { authAxios } from "../utils/api";
import { ProfileContext } from "./profile-modal.context";

export const TopbarContext = createContext(null);
export const TopbarProvider = ({ children }) => {
  const modalRef = useRef();

  // setting up my states for the profile topbar modal
  const [presence, setPresence] = useState("true");
  const [showModal, setShowModal] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState({ emoji: "4️⃣" });
  const [reusableModal, setReusableModal] = useState("");
  const [profilePicView, setProfilePicView] = useState(false);
  //get Profile content state

  const { orgId, user } = useContext(ProfileContext);

  // The function that opens the topbar profile modal
  const openModal = () => {
    setShowModal(true);
  };

  // The function that closes the topbar profile modal
  const closeModal = e => {
    setShowModal(false);
  };

  // The function that opens the topbar profile status modal
  const openStatus = () => {
    setShowStatus(!showStatus);
  };

  // The function that closes the topbar profile status modal
  const closeStatus = e => {
    if (modalRef.current === e.target) {
      setShowStatus(false);
    }
  };

  // The function for the emoji onclick events
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  // The function that opens the member list modal
  const openMembersModal = () => {
    setShowMembersModal(true);
  };

  // The function that closes the member list modal
  const closeMembersModal = () => {
    setShowMembersModal(false);
  };

  const onSetPresence = () => {
    setPresence(() => {
      if (presence === "true") {
        return "false";
      } else {
        return "true";
      }
    });
  };
  const toggleUserPresence = () => {
    onSetPresence();
    authAxios
      .post(`/organizations/${orgId}/members/${user._id}/presence`, presence)
      .then(res => {
        // console.log('response1 =>', res)
        return authAxios.get(`/organizations/${orgId}/members/${user._id}/`);
      })
      .then(res => {
        // console.log('response2', res.data.data.presence)
      })
      .catch(err => {
        console.error(err?.response?.data);
      });
  };
  // Passes all functions and states to the state object
  const state = {
    openModal,
    closeModal,
    openStatus,
    closeStatus,
    openMembersModal,
    closeMembersModal,
    toggleUserPresence,
    onSetPresence,
    modalRef,
    presence,
    setPresence,
    reusableModal,
    setReusableModal,
    profilePicView,
    setProfilePicView,
    show: [showModal, setShowModal],
    status: [showStatus, setShowStatus],
    emoji: [chosenEmoji, setChosenEmoji],
    modal: [showMembersModal, setShowMembersModal],
    onEmojiClick
  };

  return (
    <TopbarContext.Provider value={state}>{children}</TopbarContext.Provider>
  );
};
