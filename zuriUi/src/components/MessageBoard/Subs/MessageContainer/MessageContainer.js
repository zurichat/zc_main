import MessageCard from "./MessageCard/MessageCard"
import HoverItems from "./HoverItems/HoverItems"
import MoreMenu from "./MoreMenu/MoreMenu"
import Overlay from "./Overlay/Overlay"

import styles from "./MessageContainer.module.css"
import { useState } from "react"

export default function MessageContainer({
  messageData,
  handleShowMoreOptions,
  handleShowEmoji,
  id,
}) {
  return (
    <div className={styles.MessageContainer}>
      <div className={styles.hoverItemsContainer}>
        <HoverItems 
          id={id} handleShowMoreOptions={handleShowMoreOptions}
          handleShowEmoji={handleShowEmoji}
         
         />
      </div>
      <div className={styles.messageCardContainer}>
        <MessageCard id={id} messageData={messageData} />
      </div>
    </div>
  )
}
