import { createContext, useState, useRef } from "react";

export const TopbarContext = createContext(null);
export const TopbarProvider = ({ children }) => {
  const modalRef = useRef();

  // setting up my states for the profile topbar modal
  const [active, setActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState({ emoji: "4️⃣" });

  // The function that opens the topbar profile modal
  const openModal = () => {
    setShowModal(!showModal);
  };

  // The function that closes the topbar profile modal
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
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

  // Passes all functions and states to the state object
  const state = {
    openModal,
    closeModal,
    openStatus,
    closeStatus,
    openMembersModal,
    closeMembersModal,
    modalRef,
    presence: [active, setActive],
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
