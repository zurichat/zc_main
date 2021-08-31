import React, { useState } from 'react'

const ProfileContext = React.createContext()

const ProfileProvider = ({ children }) => {

    const [openModal, setOpenModal] = useState(false);

    const toggleModalState = () => {
        setOpenModal(!openModal)
    }

    return (
        <ProfileContext.Provider value={{ openModal, toggleModalState }}>
            {children}
        </ProfileContext.Provider>
    )
}

const ProfileConsumer = ProfileContext.Consumer

export {ProfileConsumer, ProfileContext}

export default ProfileProvider
