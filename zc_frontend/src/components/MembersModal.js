import React, { useContext, useReducer, useState } from 'react'
import faker from 'faker'

import { IoMdClose, IoMdSearch } from 'react-icons/io'
import { TopbarContext } from '../context/Topbar'
import styles from '../styles/MembersModal.module.css'

// Generate placeholder data with faker
const placeHolder = n => {
  const placeHolderMembersArray = []
  for (let i = 0; i < n; i++) {
    placeHolderMembersArray.push({
      userName: faker.internet.userName().toLowerCase(),
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      status: faker.lorem.sentence(),
      avatar: faker.internet.avatar()
    })
  }
  return placeHolderMembersArray
}
const faked = placeHolder(379)

const MembersModal = ({ channelTitle, membersArray }) => {
  // membersArray is be an array of users, exact object structure can be updated
  const [_membersArray, set_MembersArray] = useState(membersArray || faked)

  const [filtedArr] = useReducer(searchReducer, _membersArray)
  console.log(filtedArr)

  return (
    <div className={styles.modalWrapper}>
      <Header
        channelTitle={channelTitle || 'announcement'}
        memberNumber={_membersArray.length}
      />
      <Search membersArray={_membersArray} />
      <MemberList membersArray={_membersArray} />
    </div>
  )
}

const Header = ({ channelTitle, memberNumber }) => {
  const { closeMembersModal } = useContext(TopbarContext)

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTop}>
        <div className={styles.headerText}>{`#${channelTitle}`}</div>
        <div>
          <IoMdClose
            onClick={closeMembersModal}
            style={{ cursor: 'pointer', color: 'red' }}
          />
        </div>
      </div>
      <p>Members - {memberNumber}</p>
    </div>
  )
}

const Search = ({ membersArray }) => {
  const [, dispatch] = useReducer(searchReducer, membersArray)
  return (
    <div id="search" className={styles.searchWrapper}>
      <div className={styles.searchBox}>
        <IoMdSearch fontSize={20} />
        <input
          placeholder="Find members"
          onChange={e => dispatch({ type: 'search', payload: e.target.value })}
        />
      </div>
    </div>
  )
}

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'search':
      console.log(state)
      return [...state].filter(e => e.userName.indexOf(action.payload) > -1)
    default:
      return state
  }
}

const MemberList = ({ membersArray }) => {
  return (
    <div id="member-list" className={styles.memberlist}>
      {membersArray.map((val, idx) => {
        return <MemberCard data={val} key={idx} />
      })}
    </div>
  )
}

const MemberCard = ({ data: { userName, fullName, status, avatar } }) => {
  return (
    // To be updated to anchor tags with appropriate resources linked
    <div id="member-card" className={styles.membercardWrapper}>
      <div className={styles.membercardImage}>
        <img src={avatar} alt="user avatar" />
      </div>
      <div className={styles.membercardTextBlock}>
        <div className={styles.membercardUserDetails}>
          <b>{userName}</b>
          {'-'}
          <p>{fullName}</p>
        </div>
        <p className={styles.membercardStatus}>{status}</p>
      </div>
    </div>
  )
}

export const MembersModalButton = () => {
  // This would ordinarily be a slice of the membersArray
  const imageArray = faked.slice(0, 3)

  // Ordinarily memberArray.length
  const _membersArraySize = faked.length

  const { openMembersModal } = useContext(TopbarContext)
  return (
    <div className={styles.modalbuttonWrapper}>
      <button onClick={openMembersModal} className={styles.modalButton}>
        <div className={styles.modalbuttonImageWrapper}>
          {imageArray.map((val, idx) => (
            <span>
              <img src={val.avatar} key={idx} alt={'user avatar'} />
            </span>
          ))}
        </div>
        <p>{_membersArraySize}</p>
      </button>
    </div>
  )
}

export default MembersModal
