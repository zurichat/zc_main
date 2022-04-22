import { useState } from "react";
import UnstyledButton from "~/shared/button/Button";
import {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  CommentMessageItem
} from "./CommentBoard.styled";
import { getSampleMessages } from "../utils";
import MessagePaneInput from "~/message_pane_input/MessagePaneInput";
import RichTextRenderer from "~/rich_text_renderer/RichtextRenderer";

const CommentBoard = ({ commentBoardConfig }) => {
  const [displayCommentBoard, setDisplayCommentBoard] = useState(
    commentBoardConfig.displayCommentBoard
  );
  const [messages, setMessages] = useState([...getSampleMessages()]);

  const addToMessages = message => {
    setMessages(messages => [...messages, message]);
  };

  return (
    <CommentBoardWrapper showCommentBoard={displayCommentBoard}>
      <div style={{ position: "relative" }}>
        <CommentBoardHeader>
          {commentBoardConfig.commentBoardHeader || "Comments"}
        </CommentBoardHeader>
        <UnstyledButton
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={() => setDisplayCommentBoard(false)}
        >
          X
        </UnstyledButton>
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
  );
};

export default CommentBoard;
