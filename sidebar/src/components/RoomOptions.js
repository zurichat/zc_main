import React from "react"
import styles from "../styles/ModalComponentStyles.module.css"

const RoomOptions = (
  { isClicked,
    position,
    room
  }
  ) => {
    // const isClicked = true;
  // const room_Id = room.room_url.split("/")[2]
  // const org = localStorage.getItem("currentWorkspace")
  // const orgs = sessionStorage.getItem

  let screenHeight = window.innerHeight/2;

  let menuPosition =
  position.y > screenHeight ? 
  {
    "top": `${position.y-250}px`,
    "left": `${position.x+5}px`
  } 
  :
  {
    "top": `${position.y}px`,
    "left": `${position.x+5}px`
  } 

  return (
    <section
      className={`${
        isClicked ? styles.openmodalOptionsCon : styles.modalOptionsCon
      }`}
      style={menuPosition}
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
