import React from 'react'
import SettingsNav from './components/SettingsNav'
import Tab from './components/Tab'
import { Helmet } from 'react-helmet'
import { ProfileProvider } from './context/ProfileModal'

const index = () => {
  return (
    <div>
      <ProfileProvider>
        <Helmet>
          <title>Settings - Zuri Chat</title>
        </Helmet>
        <SettingsNav />
        <Tab />
      </ProfileProvider>
    </div>
  )
}

export default index
