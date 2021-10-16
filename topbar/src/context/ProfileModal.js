import { createContext, useState, useEffect } from "react"
import userAvatar from "../assets/images/user.svg"

export const ProfileContext = createContext(null)
export const ProfileProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [sideBar, setSideBar] = useState(1)
  const [user, setUser] = useState([])
  const [orgId, setOrgId] = useState("")
  const [userProfileImage, setUserProfileImage] = useState(null)
  const [theme, setTheme] = useState("light")

  const toggleTheme = arg => {
    const side = document.getElementById(
      "single-spa-application:@zuri/sidebar"
    )?.firstElementChild
    const pluginHeader = document.getElementById("pluginHeader")
    side.classList.remove(theme)
    pluginHeader.classList.remove(theme)
    side.classList.add(arg)
    pluginHeader.classList.add(arg)
    setTheme(arg)
    localStorage.setItem("theme", arg)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [theme])

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
        setUserProfileImage,
        theme,
        toggleTheme
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
