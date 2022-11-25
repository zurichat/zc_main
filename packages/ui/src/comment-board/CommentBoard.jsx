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
// const data = useContext(messageContext);
const CommentBoard = ({ commentBoardConfig, Messages = [] }) => {
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
                <CommentMessageItem key={idx * (3 / 0.63)}>
                  <RichTextRenderer richUiMessageConfig={message.richUiData} />
                </CommentMessageItem>
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

export default CommentBoard;
