import { createContext, useState } from "react";

export const ProfileContext = createContext(null);
export const ProfileProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [sideBar, setSideBar] = useState(1);

  const toggleModalState = () => {
    setModal(!modal);
  };

  const toggleProfileState = () => {
    setShowProfile(!showProfile);
  };

  return (
    <ProfileContext.Provider
      value={{
        modal,
        toggleModalState,
        showProfile,
        toggleProfileState,
        sideBar,
        setSideBar
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
