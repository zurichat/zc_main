import { useState } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import UnstyledButton from "~/shared/button/Button";
import {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  ParentMessage
} from "./CommentBoard.styled";

import MessagePaneInput from "~/message-pane-input/MessagePaneInput";
import MessagePane from "../message-pane/MessagePane";
import EmojiPicker from "../message-room-emoji-picker/MessageRoomEmojiPicker";
import Overlay from "../message-board/components/overlay/Overlay";
const CommentBoard = ({
  commentBoardConfig,
  messages = [],
  parent = [],
  isLoadingMessages,
  onSendMessage,
  onSendAttachedFile,
  currentUserId
}) => {
  const [displayCommentBoard, setDisplayCommentBoard] = useState(
    commentBoardConfig.displayCommentBoard
  );
  const [scroll, setScroll] = useState(true);

  const handleSendMessage = message => {
    const shouldScroll = onSendMessage && onSendMessage(message);
    setScroll(shouldScroll);
  };

  let thread = window.location.pathname.split("/").at(-2);
  const handleClose = () => {
    setDisplayCommentBoard(false);
    window.history.back();
  };
  function handleOverlayClicked() {
    setShowMoreOptions(false);
    setShowEmoji(false);
  }

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [top, setTop] = useState(null);
  const [right, setRight] = useState(null);
  const [currentMessageId, setCurrentMessageId] = useState(null);

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
  };

  function handleEmojiClicked(event, emojiObject, messageId) {
    const message_id = messageId || currentMessageId;
    // onReact && onReact(event, emojiObject, message_id);
  }

  return (
    <>
      {thread === "thread" ? (
        <div>
          <CommentBoardWrapper showCommentBoard={displayCommentBoard}>
            <CommentBoardHeader>
              <div className="header_title">
                <h4>Thread</h4>

                <h6>#{commentBoardConfig.commentBoardHeader || "Comments"}</h6>
              </div>

              <UnstyledButton onClick={() => handleClose()}>X</UnstyledButton>
            </CommentBoardHeader>

            <ParentMessage>
              {parent.map((message, idx) => (
                <MessagePane
                  key={idx + "p"}
                  message={message}
                  // onShowEmoji={handleShowEmoji}
                  currentUserId={currentUserId}
                  // onEmojiClicked={handleEmojiClicked}
                />
              ))}

              {!isLoadingMessages && (
                <span style={{ display: "flex" }}>
                  {messages.length} replies <hr />{" "}
                </span>
              )}
            </ParentMessage>

            <CommentMessagesWrapper>
              {messages.map((message, idx) => (
                <MessagePane
                  key={idx}
                  message={message}
                  onShowEmoji={handleShowEmoji}
                  currentUserId={currentUserId}
                />
              ))}
            </CommentMessagesWrapper>
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
                onShowEmoji={handleShowEmoji}
              />
            </div>
            {showEmoji && (
              <div>
                <Overlay handleOverlayClicked={handleOverlayClicked} />
                <EmojiPicker top={top} right={right} />
              </div>
            )}
          </CommentBoardWrapper>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentBoard;
CommentBoard.propTypes = {
  currentUserId: PropTypes.string,
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func
};
