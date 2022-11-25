import { useContext, useState } from "react";
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
  return (
    <>
      {thread === "thread" ? (
        <CommentBoardWrapper showCommentBoard={displayCommentBoard}>
          <div style={{ position: "sticky", top: "0px" }}>
            <CommentBoardHeader>
              {commentBoardConfig.commentBoardHeader || "Comments"}

              <UnstyledButton
                style={{ position: "absolute", top: "0px", right: "10px" }}
                onClick={() => handleClose()}
              >
                X
              </UnstyledButton>
            </CommentBoardHeader>
          </div>
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
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentBoard;
