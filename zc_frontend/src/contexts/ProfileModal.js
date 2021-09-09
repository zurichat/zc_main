import { createContext, useState } from 'react'

export const ProfileContext = createContext(null)
export const ProfileProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const toggleModalState = () => {
    setModal(!modal)
    console.log(modal);
  }

  const toggleProfileState = () => {
    setShowProfile(!showProfile)
  }

  return (
    <ProfileContext.Provider
      value={{ modal, toggleModalState, showProfile, toggleProfileState }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
