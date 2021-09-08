import React, { useContext } from 'react'
import faker from 'faker'

import { IoMdClose, IoMdSearch } from 'react-icons/io'
import { TopbarContext } from '../contexts/Topbar'
import styles from '../styles/MembersModal.module.css'

const MembersModal = ({ channelTitle }) => {
  return (
    <div className={styles.modalWrapper}>
      <Header channelTitle={channelTitle || 'announcement'} />
      <Search />
      <MemberList />
    </div>
  )
}

const Header = ({ channelTitle }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTop}>
        <div className={styles.headerText}>{`#${channelTitle}`}</div>
        <div>
          <IoMdClose />
        </div>
      </div>
      <p>Members - 1470</p>
    </div>
  )
}

const Search = () => {
  return (
    <div id="search" className={styles.searchWrapper}>
      <div className={styles.searchBox}>
        <IoMdSearch fontSize={20} />
        <input placeholder="Find members" />
      </div>
    </div>
  )
}

const MemberList = () => {
  const n = 100

  return (
    <div id="member-list" className={styles.memberlist}>
      {[...Array(n)].map((val, idx) => {
        return <MemberCard key={idx} />
      })}
    </div>
  )
}

const MemberCard = ({ username, fullname, status, avatar }) => {
  // faker for placeholder data
  const _username = username || `${faker.internet.userName().toLowerCase()}`
  const _fullname =
    fullname || `${faker.name.firstName()} ${faker.name.lastName()}`
  const _status = status || `${faker.lorem.sentence()}`
  const _avatar = avatar || faker.internet.avatar()

  return (
    <div id="member-card" className={styles.membercardWrapper}>
      <img src={_avatar} alt="user avatar" />
      <div className={styles.membercardTextBlock}>
        <div className={styles.membercardUserDetails}>
          <b>{_username}</b>
          {'-'}
          <p>{_fullname}</p>
        </div>
        <div className={styles.membercardStatus}>{_status}</div>
      </div>
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

export default MembersModal
