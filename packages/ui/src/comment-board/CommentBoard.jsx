import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UnstyledButton from "~/shared/button/Button";
import {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  ParentMessage,
  MessagePaneWrapper
} from "./CommentBoard.styled";

import { getSampleMessages } from "~/utils/samples";
import MessagePaneInput from "~/message-pane-input/MessagePaneInput";
import RichTextRenderer from "~/rich-text-renderer/RichTextRenderer";
import axios from "axios";
import MessagePane from "../message-pane/MessagePane";

const CommentBoard = ({
  commentBoardConfig,
  Messages = [],
  onReact,
  currentUserId
}) => {
  const [displayCommentBoard, setDisplayCommentBoard] = useState(
    commentBoardConfig.displayCommentBoard
  );
  const [messages, setMessages] = useState([...getSampleMessages()]);

  const addToMessages = message => {
    setMessages(messages => [...messages, message]);
  };

  let thread = window.location.pathname.split("/").at(-2);
  const handleClose = () => {
    setDisplayCommentBoard(false);
    window.history.back();
  };
  const BASE_URL = "https://chat.zuri.chat/api/v1";
  const getRoomMessagesHandler = async (orgId, roomId) => {
    try {
      if (orgId && roomId) {
        const getRoomMessagesResponse = await axios.get(
          `${BASE_URL}/org/${orgId}/rooms/${roomId}/messages`
        );
        return getRoomMessagesResponse.data;
      }
      throw new Error("Invalid arguments");
    } catch (error) {
      console.error("error getting room messages", error);
    }
  };

  useEffect(async () => {
    try {
      const data = await getRoomMessagesHandler();
      // setMessages(data)
    } catch (err) {
      console.log(err);
      toast.error(err?.message, {
        position: "top-center"
      });
    }
  }, []);

  // Added

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [shouldScrollToBottom, setScrollToBottom] = useState(true);
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

  // This

  function handleEmojiClicked(event, emojiObject, messageId) {
    const message_id = messageId || currentMessageId;
    onReact && onReact(event, emojiObject, message_id);
    setScrollToBottom(false);
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

            <div className="msg__wrapper">
              <ParentMessage>
                <MessagePane message={messages[0]} />
                <span style={{ display: "flex" }}>
                  9 replies <hr />
                </span>
              </ParentMessage>

              <CommentMessagesWrapper>
                {messages.map((message, idx) => (
                  <MessagePane key={idx} message={message} />
                ))}
              </CommentMessagesWrapper>
              <MessagePaneWrapper>
                <MessagePaneInput
                  sendMessageHandler={commentBoardConfig.sendChatMessageHandler}
                  addToMessages={addToMessages}
                />
              </MessagePaneWrapper>
            </div>
          </CommentBoardWrapper>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentBoard;
