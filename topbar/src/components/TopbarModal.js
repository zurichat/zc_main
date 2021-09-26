import { useContext, useState, useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'
import userAvatar from '../assets/images/user.svg'

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
  const { presence, setPresence } = state
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
    setReusableModal
  } = state

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
                src={userProfileImage ? userProfileImage : userAvatar}
                alt="profile-pic"
              />
            </div>

            <div className={styles.oneRight}>
              <h4>{user.user_name ? user.user_name : 'anonnymous'}</h4>
              {toggleStatus}
            </div>
          </div>

          <div className={styles.sectionTwo}>
            <StatusBadgeModal />
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
            <p>
              {' '}
              <a href="/signout">Sign out of Team Einstein workspace</a>{' '}
            </p>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default TopbarModal
