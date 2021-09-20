import { useContext } from 'react'
import { TopbarContext } from '../context/Topbar'
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
