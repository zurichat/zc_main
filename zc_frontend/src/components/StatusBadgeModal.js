import { useContext } from 'react'
import { TopbarContext } from '../context/Topbar'
import styles from '../styles/StatusBadgeModal.module.css'

const StatusBadgeModal = () => {
  const {
    emoji: [chosenEmoji]
  } = useContext(TopbarContext)
  return (
    <button className={styles.statusBadge}>
      {chosenEmoji ? chosenEmoji.emoji : null}
    </button>
  )
}
// const StatusBadgeModal = () => {
//   const {
//     emoji: [chosenEmoji],
//     openStatus
//   } = useContext(TopbarContext)
//   return (
//     <button className={styles.statusBadge} onClick={openStatus}>
//       {chosenEmoji ? chosenEmoji.emoji : null}
//     </button>
//   )
// }

export default StatusBadgeModal
