import { createContext, useState } from 'react'

export const ProfileContext = createContext(null)
export const ProfileModal = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [sideBar, setSideBar] = useState(1)
  const [user, setUser] = useState([])
  const [orgId, setOrgId] = useState('');

  const toggleModalState = () => {
    setModal(!modal)
  }

  const toggleProfileState = () => {
    setShowProfile(!showProfile)
  }

  return (
    <ProfileContext.Provider
      value={{
        modal,
        toggleModalState,
        showProfile,
        toggleProfileState,
        sideBar,
        setSideBar,
        user,
        setUser,
        orgId,
        setOrgId
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
