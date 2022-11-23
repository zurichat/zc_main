import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import MessagePaneInput from "~/message-pane-input/MessagePaneInput";
import MessagePane from "../message-pane/MessagePane";

import { MessageBoardContainer } from "./MessageBoard.styled";
import MoreMenu from "./components/more-menu/MoreMenu";
import Overlay from "./components/overlay/Overlay";
import EmojiPicker from "../message-room-emoji-picker/MessageRoomEmojiPicker";

/**
 * Message Board Component
 * A component that displays a list of messages with support for message editing
 */
function MessageBoard({
  currentUserId,
  isLoadingMessages,
  messages = [],
  onSendMessage,
  onSendAttachedFile,
  navigateThread,
  onReact
}) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [shouldScrollToBottom, setScrollToBottom] = useState(true);

  const [top, setTop] = useState(null);
  const [right, setRight] = useState(null);
  const [currentMessageId, setCurrentMessageId] = useState(null);

  const handleSendMessage = message => {
    const shouldScroll = onSendMessage && onSendMessage(message);
    setScrollToBottom(shouldScroll);
  };

  function handleOverlayClicked() {
    setShowMoreOptions(false);
    setShowEmoji(false);
  }

  const handleShowMoreOptions = (id, event) => {
    setShowMoreOptions(!showMoreOptions);
    setTop(event.clientY);
    setRight(window.innerWidth - event.clientX);
    if (window.innerHeight - event.clientY < 320) {
      setTop(event.clientY - 320);
    }
  };

  const handleShowEmoji = (id, event) => {
    setCurrentMessageId(id);
    setShowEmoji(!showEmoji);
    setTop(event.clientY);
    setRight(window.innerWidth - event.clientX);

    if (window.innerHeight - event.clientY < 320) {
      setTop(event.clientY - 320);
    }
    if (event.clientX < 288) {
      setRight(event.clientX + 300);
    }
    if (window.innerWidth < 500) {
      setRight(20);
      setTop(100);
    }
    // console.log(window.innerWidth - event.clientX)
  };

  function handleEmojiClicked(event, emojiObject, messageId) {
    const shouldScroll =
      onReact && onReact(event, emojiObject, messageId || currentMessageId);
    setScrollToBottom(shouldScroll);
  }

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    shouldScrollToBottom && scrollToBottom();
    setScrollToBottom(true);
  }, [messages]);

  return (
    <>
      <MessageBoardContainer>
        <div className="MsgBoard">
          {messages.map((message, i) => (
            <MessagePane
              key={`message-item-${i}`}
              onShowMoreOptions={handleShowMoreOptions}
              onShowEmoji={handleShowEmoji}
              onEmojiClicked={handleEmojiClicked}
              message={message}
              currentUserId={currentUserId}
              navigateThread={navigateThread}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        {isLoadingMessages && (
          <div className="text-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem", color: "#7ed5af" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <div className="input-text">
          <MessagePaneInput
            onSendMessage={handleSendMessage}
            onAttachFile={onSendAttachedFile}
          />
        </div>
      </MessageBoardContainer>
      {showMoreOptions && (
        <div>
          <Overlay handleOverlayClicked={handleOverlayClicked} />
          <MoreMenu top={top} right={right} />
        </div>
      )}

      {showEmoji && (
        <div>
          <Overlay handleOverlayClicked={handleOverlayClicked} />
          <EmojiPicker
            top={top}
            right={right}
            handleEmojiClicked={handleEmojiClicked}
          />
        </div>
      )}
    </>
  );
}

MessageBoard.propTypes = {
  currentUserId: PropTypes.string,
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func,
  onSendAttachedFile: PropTypes.func,
  onReact: PropTypes.func
};

export default MessageBoard;
