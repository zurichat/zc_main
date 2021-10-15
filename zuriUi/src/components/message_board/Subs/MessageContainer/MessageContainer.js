import MessageCard from "./MessageCard/MessageCard"
import HoverItems from "./HoverItems/HoverItems"
import EmojiCard from "./EmojiCard/EmojiCard"

import styles from "./MessageContainer.module.css"
import { useState } from "react"

export default function MessageContainer({
  messageData,
  handleShowMoreOptions,
  handleShowEmoji
}) {
  return (
    <div className={styles.MessageContainer}>
      <div className={styles.hoverItemsContainer}>
        <HoverItems
          id={messageData.message_id}
          handleShowMoreOptions={handleShowMoreOptions}
          handleShowEmoji={handleShowEmoji}
        />
      </div>
      <div className={styles.messageCardContainer}>
        <MessageCard id={messageData.message_id} messageData={messageData} />
      </div>
      <div className={styles.emojiCardContainer}>
        {messageData.emojis &&
          messageData.emojis.map((emoji, i) => (
            <EmojiCard key={i} emojiObject={emoji} />
          ))}

        {messageData.emojis.length > 1 ? (
          <div
            onClick={event => handleShowEmoji(messageData.message_id, event)}
          >
            <EmojiCard emojiSvg={true} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
