import styles from "./overlay.module.css";

export default function Overlay({ handleOverlayClicked }) {
  return <div onClick={handleOverlayClicked} className={styles.Overlay}></div>;
}
