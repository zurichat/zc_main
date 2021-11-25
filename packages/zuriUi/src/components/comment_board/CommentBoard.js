import { useState } from "react";
import UnstyledButton from "../shared/unstyled_button/UnstyledButton";
import MessageEditorInput from "../shared/message_editor_input/MessageEditorInput";
import messagesData from "../message_board/messages.data";
import MessageEditorReader from "@components/shared/message_editor_reader/MessageEditorReader";
import {
  CommentBoardWrapper,
  CommentBoardHeader,
  CommentMessagesWrapper,
  CommentMessageItem
} from "./CommentBoard.styled";

const CommentBoard = ({ commentBoardConfig }) => {
  const [displayCommentBoard, setDisplayCommentBoard] = useState(
    commentBoardConfig.displayCommentBoard
  );
  const [messages, setMessages] = useState([...messagesData]);

  const addToMessages = message => {
    // console.log("mes", message)
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
            <MessageEditorReader richUiMessageConfig={message.richUiData} />
          </CommentMessageItem>
        ))}
      </CommentMessagesWrapper>
      {/* <Chats chatInfo={messages} /> */}
      <MessageEditorInput
        sendMessageHandler={commentBoardConfig.sendChatMessageHandler}
        addToMessages={addToMessages}
      />
    </CommentBoardWrapper>
  );
};

export default CommentBoard;
