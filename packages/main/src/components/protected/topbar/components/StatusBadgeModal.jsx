import { useContext } from "react";
import { TopbarContext } from "../context/topbar.context";
import styles from "../styles/StatusBadgeModal.module.css";

const StatusBadgeModal = () => {
  const {
    emoji: [chosenEmoji]
  } = useContext(TopbarContext);
  return (
    <button className={styles.statusBadge}>
      {chosenEmoji ? chosenEmoji.emoji : null}
    </button>
  );
};

export default StatusBadgeModal;
