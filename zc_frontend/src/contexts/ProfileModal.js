import { createContext, useState } from 'react'

export const ProfileContext = createContext(null)
export const ProfileProvider = ({ children }) => {
  const [modal, setModal] = useState(false)

  const toggleModalState = () => {
    setModal(!modal)
  }

  return (
    <ProfileContext.Provider value={{ modal, toggleModalState }}>
      {children}
    </ProfileContext.Provider>
  )
}
