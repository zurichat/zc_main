import { useContext } from "react";
import { TopbarContext } from "../context/Topbar";
import { ProfileContext } from "../context/ProfileModal";
import styles from "../styles/StatusBadgeModal.module.css";

const StatusBadgeModal = () => {
  const { user } = useContext(ProfileContext);
  const {
    emoji: [chosenEmoji]
  } = useContext(TopbarContext);
  return <button className={styles.statusBadge}></button>;
};

export default StatusBadgeModal;
