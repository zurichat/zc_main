import { useContext } from 'react'
import { TopbarContext } from '../context/Topbar'
import styles from '../styles/ProfileStatusBadge.module.css'

const ProfileStatusBadgeModal = () => {
  const {
    emoji: [chosenEmoji]
  } = useContext(TopbarContext)
  return (
    <button className={styles.profstatus}>
      {chosenEmoji ? chosenEmoji.emoji : null}
    </button>
  )
}

export default ProfileStatusBadgeModal
