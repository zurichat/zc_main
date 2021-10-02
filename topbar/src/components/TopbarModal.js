import { useContext, useState, useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'
import axios from 'axios'
import defaultAvatar from '../assets/images/avatar_vct.svg'

import styles from '../styles/Topbar.module.css'
import { TopbarContext } from '../context/Topbar'
import StatusBadgeModal from './StatusBadgeModal'
import { ProfileContext } from '../context/ProfileModal'
import Preferences from './Preferences'
import EditProfile from './EditProfile'
import MembersModal from './MembersModal'
import Downloads from './Downloads'
import PauseNotification from './PauseNotification'
import SetStatusModal from './SetStatusModal'
// react icons

const TopbarModal = ({ members }) => {
  const { userProfileImage, toggleModalState, toggleProfileState, user } =
    useContext(ProfileContext)

  const state = useContext(TopbarContext)
  const [showModal] = state.show
  // const [username, setUsername] = state.username
  const [showStatus] = state.status
  const [showMembersModal] = state.modal
  const {
    onEmojiClick,
    openModal,
    openStatus,
    closeStatus,
    modalRef,
    closeMembersModal,
    toggleUserPresence,
    reusableModal,
    setReusableModal,
    presence,
    setPresence
  } = state


  const currentWorkspace = localStorage.getItem('currentWorkspace')
  let token = sessionStorage.getItem('token')
  

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem('user'))

    if ((user && token) !== null) {
      try {
        axios
          .get(`https://api.zuri.chat/organizations/${currentWorkspace}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            //Get Current Workspace Or Organization Name
            localStorage.setItem('orgName', response.data.data.name)
            // let userData = { currentWorkspace, ...response.data.data }
          })
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('YOU ARE NOT LOGGED IN, PLEASE LOG IN')
    }
  }, [])



  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const logout = () => {
    window.location.href = '/signout'
  }
  const [pause, setPause] = useState(false)
  const [statusModal, setStatusModal] = useState(false)

  let userPresence = null
  let toggleStatus = null

  switch (presence) {
    case 'true':
      userPresence = 'Set yourself as away'
      toggleStatus = (
        <div className={styles.online}>
          <div className={styles.activeCircle} />
          <p className={styles.active}>Active</p>
        </div>
      )
      break
    default:
      userPresence = 'Set yourself as active'
      toggleStatus = (
        <div className={styles.online}>
          <div className={styles.awayCircle} />
          <p className={styles.away}>Away</p>
        </div>
      )
  }

  useEffect(() => {
    console.log('user presence', user.presence)
    setPresence(user.presence)
  }, [user])

  return (
    <>
      {/* The section that shows the status */}
      {showStatus ? (
        <div
          ref={modalRef}
          className={styles.modalContainers}
          onClick={closeStatus}
        >
          <div className={styles.picker}>
            <div className={styles.smileys}>
              <Picker
                onEmojiClick={onEmojiClick}
                pickerStyle={{ boxShadow: 'none' }}
                skinTone={SKIN_TONE_MEDIUM_DARK}
              />
            </div>
          </div>
        </div>
      ) : null}

      {/* The section that shows the members modal */}
      {showMembersModal ? (
        <div ref={modalRef} className={styles.modalContainers}>
          <div
            id="overlay"
            onClick={closeMembersModal}
            className={styles.membersModalOverlay}
          />
          <MembersModal members={members} roomTitle={'announcements'} />
        </div>
      ) : null}

      {/* The section that shows the topbarprofile */}
      {showModal ? (
        <section className={styles.topbarModal}>
          <div className={styles.sectionOne}>
            <div className={styles.oneLeft}>
              <img
                src={userProfileImage !== '' ? userProfileImage : defaultAvatar}
                alt="profile-pic"
              />
            </div>

            <div className={styles.oneRight}>
              <h4>{user.display_name ? user.display_name : user.user_name}</h4>
              {toggleStatus}
            </div>
          </div>

          <div className={styles.sectionTwo}>
            <StatusBadgeModal />
            <p className={styles.statusContent}>{user.status}</p>
          </div>

          <div className={styles.sectionThree}>
            {/* <p onClick={openStatus}>Set a status</p> */}
            <p onClick={() => setStatusModal(!statusModal)}>Set a status</p>
            {statusModal && (
              <SetStatusModal
                statusModal={statusModal}
                setStatusModal={setStatusModal}
                openStatus={openStatus}
              />
            )}
            <p
              onClick={() => {
                toggleUserPresence()
              }}
            >
              {userPresence}
            </p>
            <div className={styles.pause}>
              <p onClick={() => setPause(!pause)}>Pause Notifications</p>
              <FaChevronRight className={styles.chevron} />
            </div>
            {pause && <PauseNotification pause={pause} setPause={setPause} />}
          </div>

          <hr className={styles.hr} />

          <div className={styles.sectionFour}>
            <p
              onClick={() => {
                setReusableModal('edit profile')
                toggleModalState()
              }}
            >
              Edit profile
            </p>
            <p
              onClick={() => {
                toggleProfileState()
                openModal()
              }}
            >
              View profile
            </p>
            <p
              onClick={() => {
                setReusableModal('preference')
                toggleModalState()
              }}
            >
              Preferences
            </p>
          </div>

          <hr className={styles.hr} />

          <div className={styles.sectionSix}>
            <p
              onClick={() => {
                setReusableModal('downloads')
              }}
            >
              Downloads
            </p>
          </div>

          {reusableModal === 'edit profile' && <EditProfile />}

          {reusableModal === 'preference' && <Preferences />}

          {reusableModal === 'downloads' && (
            <Downloads setModal={setReusableModal} />
          )}

          <hr className={styles.hr} />

          <div className={styles.sectionFive}>
            <p onClick={logout}>Sign out of Team Einstein workspace</p>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default TopbarModal
