import React, { useContext } from 'react'
import { TopbarContext } from '../contexts/Topbar'
import styles from '../styles/MembersModal.module.css'

const Header = () => {
  return (
    <div id="header">
      <div style={styles}>Header</div>
    </div>
  )
}

const Search = () => {
  return (
    <div id="search">
      <div style={styles}>Search</div>
    </div>
  )
}

const MemberList = () => {
  return (
    <div id="member-list">
      <div style={styles}>Member List</div>
    </div>
  )
}

export const MembersModalButton = () => {
  const { openMembersModal } = useContext(TopbarContext)
  return (
    <div className={styles.modalButtonWrapper}>
      <button onClick={openMembersModal} className={styles.modalButton}>
        Show Modal
      </button>
    </div>
  )
}

const MembersModal = () => {
  return (
    <div>
      <Header />
      <Search />
      <MemberList />
    </div>
  )
}

export default MembersModal
