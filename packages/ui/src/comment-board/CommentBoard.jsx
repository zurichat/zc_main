import { useContext, useEffect, useState } from "react";
import UnstyledButton from "~/shared/button/Button";
import {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  CommentMessageItem
} from "./CommentBoard.styled";
// import { messageContext } from "@zuri/messaging";
import { getSampleMessages } from "~/utils/samples";
import MessagePaneInput from "~/message-pane-input/MessagePaneInput";
import RichTextRenderer from "~/rich-text-renderer/RichTextRenderer";
import axios from "axios";
import MessagePane from "../message-pane/MessagePane";

// const data = useContext(messageContext);

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
      console.log(data);
      // setMessages(data)
    } catch (err) {
      console.log(err);
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
            {/* <div style={{ position: "sticky", top: "0px" }}> */}
            <CommentBoardHeader>
              {commentBoardConfig.commentBoardHeader || "Comments"}

              <UnstyledButton
                style={{ position: "absolute", top: "0px", right: "10px" }}
                onClick={() => handleClose()}
              >
                X
              </UnstyledButton>
            </CommentBoardHeader>
            {/* </div> */}

            <CommentMessagesWrapper>
              {messages.map((message, idx) => (
                <MessagePane
                  key={idx}
                  onShowMoreOptions={handleShowMoreOptions}
                  onShowEmoji={handleShowEmoji}
                  onEmojiClicked={handleEmojiClicked}
                  message={message}
                  currentUserId={currentUserId}
                />
              ))}
            </CommentMessagesWrapper>
            <MessagePaneInput
              sendMessageHandler={commentBoardConfig.sendChatMessageHandler}
              addToMessages={addToMessages}
            />
          </CommentBoardWrapper>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

// <div key={idx * (3 / 0.63)} className="message_container">
// <div>
//   <div className="img_container">
//     <img src={`${message.sender.sender_image_url}`} />
//   </div>
// </div>

// <div className="text-content">
//   <div className="user_name">
//     <p>{message.sender.sender_name} 5️⃣ </p>

//     <p className="time_ago">6 hours ago</p>
//   </div>
//   <CommentMessageItem>
//     <RichTextRenderer
//       richUiMessageConfig={message.richUiData}
//     />
//   </CommentMessageItem>
// </div>
// </div>
export default CommentBoard;
