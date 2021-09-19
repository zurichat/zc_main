import React, { useContext, useState } from 'react'
import styles from '../styles/Profile.module.css'

import avatar from '../assets/avatar.png'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import { ProfileContext } from '../context/ProfileModal'
import { TopbarContext } from '../context/Topbar'
import EditProfile from './EditProfile'
import Preferences from './Preferences'
import { Dropdown } from './ProfileMore'

const Profile = () => {
  const { toggleModalState, showProfile, toggleProfileState } =
    useContext(ProfileContext)
  const state = useContext(TopbarContext)
  const [dropdown, setDropdown] = useState(false)
  const [modal, setModal] = useState('')

  return (
    <div className={showProfile ? styles.container : styles.containerNone}>
      <svg
        className={styles.mobileBackButton}
        onClick={toggleProfileState}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9998 12H3.99982"
          strokeWidth="1.22693"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99982 18L3.99982 12L9.99982 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className={styles.header}>
        <div className={styles.title}>Profile</div>
        <svg
          onClick={toggleProfileState}
          className={styles.closeIcon}
          viewBox="0 0 329.26933 329"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
        </svg>
      </div>
      <div className={styles.content}>
        <img className={styles.userAvatar} src={avatar} alt="avatar" />
        <div className={styles.userDetails}>
          <h3>
            Praise Aderinwale <span>3</span>
          </h3>
          <p>Product Design</p>
          <small>He/Him</small>
        </div>

        <div className={styles.buttonGroupsMobile}>
          <button>Message</button>
          <button
            onClick={() => {
              toggleProfileState()
              setModal(() => 'edit profile')
              toggleModalState()
            }}
          >
            Edit Profile
          </button>
        </div>

        <div className={styles.buttonGroups}>
          <button
            onClick={() => {
              setModal(() => 'edit profile')
              toggleModalState()
            }}
          >
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10.5V9.5C10 8.39543 9.10457 7.5 8 7.5H4C2.89543 7.5 2 8.39543 2 9.5V10.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Edit Profile
          </button>
          <button onClick={state.openStatus}>
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 1.00005L9 3L3.5 8.5H1.5V6.5L7 1.00005Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 11H10.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Edit Status
          </button>
          <button onClick={() => setDropdown(!dropdown)}>
            <svg
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 7C7.05228 7 7.5 6.55228 7.5 6C7.5 5.44772 7.05228 5 6.5 5C5.94772 5 5.5 5.44772 5.5 6C5.5 6.55228 5.94772 7 6.5 7Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 7C11.0523 7 11.5 6.55228 11.5 6C11.5 5.44772 11.0523 5 10.5 5C9.94772 5 9.5 5.44772 9.5 6C9.5 6.55228 9.94772 7 10.5 7Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 7C3.05228 7 3.5 6.55228 3.5 6C3.5 5.44772 3.05228 5 2.5 5C1.94772 5 1.5 5.44772 1.5 6C1.5 6.55228 1.94772 7 2.5 7Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            More
          </button>
          {dropdown && <Dropdown />}
          {modal === 'preference' && <Preferences />}
          {modal === 'edit profile' && <EditProfile />}
        </div>

        <div className={`${styles.moreInfo} ${styles.mobile}`}>
          <div className={styles.infoTitle}>What i do</div>
          <div className={styles.infoContent}>Design</div>
        </div>
        <div className={`${styles.moreInfo} ${styles.mobile}`}>
          <div className={styles.infoTitle}>Pronouns</div>
          <div className={styles.infoContent}>Her</div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>Display name</div>
          <div className={styles.infoContent}>Praise.A</div>
        </div>
        <div className={`${styles.moreInfo} ${styles.mobile}`}>
          <div className={styles.infoTitle}>Status</div>
          <div className={styles.infoContent}>
            <span>5</span>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>Email address</div>
          <a href="mailto:praise@example.com" className={styles.infoLink}>
            praise@example.com
          </a>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>Phone number</div>
          <a href="tel:2348101234567" className={styles.infoLink}>
            +234 810 123 4567
          </a>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.infoTitle}>Local time</div>
          <div className={styles.infoContent}>11:33 PM</div>
        </div>

        <div className={styles.social}>
          <div className={styles.icons}>
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className={styles.icons}>
            <img src={instagram} alt="instagram" />
          </div>
          <div className={styles.icons}>
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
