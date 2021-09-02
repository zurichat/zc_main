import React, { useContext } from 'react'
import { TopbarContext } from '../contexts/Topbar'
import styles from '../styles/StatusBadge.module.css'

const StatusBadge = () => {
  const {
    emoji: [chosenEmoji],
    openStatus
  } = useContext(TopbarContext)
  return (
    <button className={styles.statusBadge} onClick={openStatus}>
      {chosenEmoji ? chosenEmoji.emoji : null}
    </button>
  )
}

export default StatusBadge
