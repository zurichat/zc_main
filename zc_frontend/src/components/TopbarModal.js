import React, { useContext } from 'react'

// react icons
import { FaChevronRight, FaCircle, FaTimes } from 'react-icons/fa'

import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'

import styles from '../styles/Topbar.module.css'
import { TopbarContext } from '../contexts/Topbar'

const TopbarModal = () => {
  const state = useContext(TopbarContext)
  const [showModal] = state.show
  const [showStatus, setShowStatus] = state.status
  const [chosenEmoji] = state.emoji
  const { onEmojiClick, openStatus, closeStatus, modalRef } = state

  return (
    <>
      {/* The section that shows the status */}
      {showStatus ? (
        <div
          ref={modalRef}
          className={styles.backgrounds}
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
              <img src="/profile.png" alt="profile" />
            </div>
            <div className={styles.oneRight}>
              <h4>Praise.A</h4>
              <div className={styles.online}>
                <FaCircle className={styles.circle} />
                <p>Active</p>
              </div>
            </div>
          </div>

          <div onClick={openStatus} className={styles.sectionTwo}>
            <p>{chosenEmoji ? chosenEmoji.emoji : null}</p>
          </div>

          <div className={styles.sectionThree}>
            <p onClick={openStatus}>Set a status</p>
            <p>Set yourself as away</p>
            <div className={styles.pause}>
              <p>Pause Notifications</p>
              <FaChevronRight className={styles.chevron} />
            </div>
          </div>

          <hr />

          <div className={styles.sectionFour}>
            <p>Edit profile</p>
            <p>View profile</p>
            <p>Preference</p>
          </div>

          <hr />

          <div className={styles.sectionFive}>
            <p>Sign out of Team Einstein workspace</p>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default TopbarModal
