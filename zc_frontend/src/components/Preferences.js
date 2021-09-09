import React from 'react'
import ProfileModal from './ProfileModal'
import NotificationPreference from './NotificationPreference'
import AdvancedSettings from './AdvancedSettings'

const Preferences = () => {
  return (
    <ProfileModal title="Preference">
      <NotificationPreference />
      <AdvancedSettings />
    </ProfileModal>
  )
}

export default Preferences
