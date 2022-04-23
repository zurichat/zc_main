import PropTypes from "prop-types";

import MessageBox from "./components/message_box/MessageBox";
import HoverItems from "./components/hover_items/HoverItems";
import EmojiCard from "./components/emoji_card/EmojiCard";

import styles from "./message-pane.module.css";

function MessagePane({
  message,
  onShowMoreOptions,
  onShowEmoji,
  onEmojiClicked,
  currentUserId
}) {
  return (
    <div className={styles.MessageContainer}>
      <div className={styles.hoverItemsContainer}>
        <HoverItems
          id={message.message_id}
          handleShowMoreOptions={onShowMoreOptions}
          handleShowEmoji={onShowEmoji}
        />
      </div>
      <div className={styles.messageCardContainer}>
        <MessageBox id={message.message_id} message={message} />
      </div>
      <div className={styles.emojiCardContainer}>
        {message.emojis &&
          message.emojis.map((emoji, i) => (
            <div
              onClick={event =>
                onEmojiClicked(event, emoji, message.message_id)
              }
              key={i}
            >
              <EmojiCard currentUserId={currentUserId} emojiObject={emoji} />
            </div>
          ))}

        {message.emojis.length > 0 ? (
          <div onClick={event => onShowEmoji(message.message_id, event)}>
            <EmojiCard emojiSvg={true} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

MessagePane.propTypes = {
  currentUserId: PropTypes.string,
  message: PropTypes.object.isRequired,
  onSendMessage: PropTypes.func,
  onSendAttachedFile: PropTypes.func,
  onReact: PropTypes.func
};

export default MessagePane;
