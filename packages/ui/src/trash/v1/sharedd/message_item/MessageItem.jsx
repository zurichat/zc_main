import MessageCard from "./components/message_card/MessageCard";
import HoverItems from "./components/HoverItems/HoverItems";
import EmojiCard from "./components/EmojiCard/EmojiCard";

import styles from "./MessageItem.module.css";

export default function MessageContainer({
  messageData,
  handleShowMoreOptions,
  handleShowEmoji,
  handleEmojiClicked,
  currentUserId
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
            <div
              onClick={event =>
                handleEmojiClicked(event, emoji, messageData.message_id)
              }
              key={i}
            >
              <EmojiCard currentUserId={currentUserId} emojiObject={emoji} />
            </div>
          ))}

        {messageData.emojis.length > 0 ? (
          <div
            onClick={event => handleShowEmoji(messageData.message_id, event)}
          >
            <EmojiCard emojiSvg={true} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
