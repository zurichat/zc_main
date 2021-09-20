import React, { useState } from 'react'
import styles from '../styles/PauseNotification.module.css'
import PauseNotificationModal from './PauseNotificationModal'

const PauseNotification = ({ pause, setPause }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.popWrapper}>
      <div className={styles.topContent}>
        <div className={styles.title}>Pause notification...</div>
        <div onClick={() => setPause(!pause)} className={styles.newItem}>
          For 30 minutes
        </div>
        <div onClick={() => setPause(!pause)} className={styles.newItem}>
          For 1 hour
        </div>
        <div onClick={() => setPause(!pause)} className={styles.newItem}>
          For 2 hours
        </div>
        <div onClick={() => setPause(!pause)} className={styles.newItem}>
          For 4 hours
        </div>
        <div onClick={() => setPause(!pause)} className={styles.newItem}>
          Until tomorrow
        </div>
        <div onClick={() => setPause(!pause)} className={styles.newItem}>
          Until next week
        </div>
      </div>
      <div
        onClick={() => setShowModal(!showModal)}
        className={styles.buttonContent}
      >
        Set a custom notification
      </div>
      {showModal && (
        <PauseNotificationModal modal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  )
}

export default PauseNotification
