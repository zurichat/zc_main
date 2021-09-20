<<<<<<< HEAD
import { createContext, useState } from 'react'
import userAvatar from '../assets/user.svg'


export const ProfileContext = createContext(null)
export const ProfileProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [sideBar, setSideBar] = useState(1)
  const [user, setUser] = useState([])
  const [orgId, setOrgId] = useState('');
  const [userProfileImage, setUserProfileImage ] = useState(userAvatar);


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
        setOrgId,
        userProfileImage,
        setUserProfileImage
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
=======
import { createContext, useState } from 'react'
import userAvatar from '../assets/user.svg'

export const ProfileContext = createContext(null)
export const ProfileProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [sideBar, setSideBar] = useState(1)
  const [user, setUser] = useState([])
  const [orgId, setOrgId] = useState('')
  const [userProfileImage, setUserProfileImage] = useState(userAvatar)

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
        setOrgId,
        userProfileImage,
        setUserProfileImage
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
>>>>>>> 5ce7e1f81e5cbafc7134dd653c17981442f09083
