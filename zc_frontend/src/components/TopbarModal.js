import { useContext, useState } from 'react'

// react icons
import { FaChevronRight, FaTimes, FaCircle } from 'react-icons/fa'

import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'

import styles from '../styles/Topbar.module.css'
import { TopbarContext } from '../context/Topbar'
import StatusBadge from './StatusBadge'
import { ProfileContext } from '../context/ProfileModal'
import Preferences from './Preferences'
import EditProfile from './EditProfile'

const TopbarModal = () => {
  const { toggleModalState, toggleProfileState } = useContext(ProfileContext)

  const state = useContext(TopbarContext)
  const [showModal] = state.show
  const [showStatus, setShowStatus] = state.status
  const { onEmojiClick, openStatus, closeStatus, modalRef } = state
  const [modal, setModal] = useState('')
  const [active, setActive] = useState(true)

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
            <FaTimes
              className={styles.times}
              onClick={() => setShowStatus(!showStatus)}
            />
            <div className={styles.smileys}>
              <Picker
                onEmojiClick={onEmojiClick}
                skinTone={SKIN_TONE_MEDIUM_DARK}
              />
            </div>
          </div>
        </div>
      ) : null}

      {/* The section that shows the topbarprofile */}
      {showModal ? (
        <section className={styles.topbarModal}>
          <div className={styles.sectionOne}>
            <div className={styles.oneLeft}>
              <img src="/profilepic.png" alt="profile" />
            </div>

            <div className={styles.oneRight}>
              <h4>Praise.A</h4>
              {active ? (
                <div className={styles.online}>
                  <FaCircle className={styles.circle} />
                  <p>Active</p>
                </div>
              ) : (
                <div className={styles.online}>
                  <FaCircle className={styles.circlegrey} />
                  <p>Away</p>
                </div>
              )}
            </div>
          </div>

          <div onClick={openStatus} className={styles.sectionTwo}>
            <StatusBadge />
          </div>

          <div className={styles.sectionThree}>
            <p onClick={openStatus}>Set a status</p>
            <p onClick={() => setActive(!active)}>
              {active ? 'Set yourself as away' : 'Set yourself as online'}
            </p>
            <div className={styles.pause}>
              <p>Pause Notifications</p>
              <FaChevronRight className={styles.chevron} />
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles.sectionFour}>
            <p
              onClick={() => {
                toggleModalState()
                setModal('edit profile')
              }}
            >
              Edit profile
            </p>
            <p onClick={toggleProfileState}>View profile</p>
            <p
              onClick={() => {
                toggleModalState()
                setModal('preference')
              }}
            >
              Preferences
            </p>
          </div>

          <hr className={styles.hr} />

          <div className={styles.sectionSix}>
            <p>Downloads</p>
          </div>

          {modal === 'edit profile' && <EditProfile />}

          {modal === 'preference' && <Preferences />}

          <hr className={styles.hr} />

          <div className={styles.sectionFive}>
            <p>Sign out of Team Einstein workspace</p>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default TopbarModal
