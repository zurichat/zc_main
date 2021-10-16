import React, { useState } from "react"
import styles from "../styles/Sidebar.module.css"
import addIcon from "../assets/icons/add-icon.svg"
import { AiOutlinePlus } from "react-icons/ai"

export default function Invite(props) {
  //for invite
  const [openInvite, setOpenInvite] = useState(false)

  //Invite modal
  const openInviteModal = () => setOpenInvite(true)
  const closeInviteModal = () => setOpenInvite(false)

  return (
    <div className={`row mt-2 ${styles.sb__item}`}>
      {props.state.user && props.state.user[0].role === ("owner" || "admin") ? (
        <div
          className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
          onClick={openInviteModal}
        >
          <div className={styles.invite__icon}>
            <AiOutlinePlus />
          </div>
          <p
            role="button"
            onClick={openInviteModal}
            className={`mb-0 ${styles.item_p}`}
          >
            Invite people to workspace
          </p>
        </div>
      ) : null}
    </div>
  )
}
