import { useContext } from "react";
import { ProfileContext } from "../context/profile-modal.context";
import styles from "../styles/ProfileModal.module.css";

function ProfileModal(props) {
  const { modal, toggleModalState } = useContext(ProfileContext);

  return (
    <div>{modal && <div className={styles.modal}>{props.children}</div>}</div>
  );
}

export default ProfileModal;
