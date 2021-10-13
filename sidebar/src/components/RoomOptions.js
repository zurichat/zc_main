import React from "react"
import styles from "../styles/ModalComponentStyles.module.css"

const RoomOptions = ({ isClicked }) => {
  //   const isOpen = true;

  return (
    <section
      className={`${
        isClicked ? styles.openmodalOptionsCon : styles.modalOptionsCon
      }`}
    >
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p>Change notifications</p>
        </div>
        <div>
          <p>Mute room</p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p>Mute roomInfo</p>
        </div>
        <div>
          <p>Copy link</p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p>Star room</p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column ${styles.modalSection}`}>
        <div>
          <p>Open conversation details</p>
        </div>
        <div>
          <p>Close conversation</p>
        </div>
      </div>
    </section>
  )
}

export default RoomOptions
