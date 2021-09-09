// This components helps to setup a modal for profile

import { useContext } from 'react'
import { ProfileContext } from '../context/ProfileModal'
import styles from '../styles/ProfileModal.module.css'

const ProfileModal = ({ title, children, full }) => {
  const { modal, toggleModalState } = useContext(ProfileContext)

  return (
    <div
      className={styles.modalContainer}
      style={modal ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={styles.overlay} onClick={toggleModalState}></div>
      <div className={full ? styles.modalFull : styles.modalContent}>
        {full && <div className={styles.mobile}>You</div>}
        <div className={`${styles.modalHeader}`}>
          {title}
          {
            <svg
              onClick={toggleModalState}
              className={styles.closeIcon}
              viewBox="0 0 329.26933 329"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          }
        </div>
        {children}
      </div>
    </div>
  )
}

export default ProfileModal
