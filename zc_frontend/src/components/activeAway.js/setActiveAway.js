import React, { useState } from 'react'
import styles from '../../styles/SwitchUserActive.module.css'
import profilePic from '../../assets/profilePic.png'

const SwitchActiveAway = () => {
  const [userActive, setUserActive] = useState(true)
  const handleSetActive = () => {
    setUserActive(!userActive)
  }
  return (
    <div className={styles.switchUserActive}>
      <div className={styles.profilePic}>
        <img src={profilePic} alt='profilepicture' />
      </div>
      <div className={styles.imageBtn}>
        <button className={styles.imageBtnUpload}>Upload an image</button>
        <button className={styles.imageBtnDelete}>Delete an image</button>
      </div>
      <div className={styles.setActive}>
        <p>set yourself as</p>
        <button onClick={handleSetActive}>
          {userActive ? 'Away' : 'Active'}
        </button>
      </div>
    </div>
  )
}

export default SwitchActiveAway
