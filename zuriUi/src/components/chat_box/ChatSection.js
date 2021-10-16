import { useState, useEffect } from "react"
import styled from "styled-components"
import Chats from "./Chats"
import UnstyledButton from "../message_input2/UnstyledButton"
import MessageInputBox from "../message_input/MessageInputField"

const CommentSection = ({ chatsConfig }) => {
  const [openSidebar, setOpenSidebar] = useState(chatsConfig.showChatSideBar)
  const [messages, setMessages] = useState([])

  const addToMessages = message => {
    // console.log("mes", message)
    setMessages(messages => [...messages, message])
  }

  return (
    <Wrapper showSidebar={openSidebar}>
      <div style={{ position: "relative" }}>
        <Header>{chatsConfig.chatHeader || "Comments"}</Header>
        <UnstyledButton
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={() => setOpenSidebar(false)}
        >
          X
        </UnstyledButton>
      </div>

      <Chats chatInfo={messages} />
      <MessageInputBox
        sendMessageHandler={chatsConfig.sendChatMessageHandler}
        addToMessages={addToMessages}
      />
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  /* width: 60%; */
  display: ${props => (props.showSidebar ? "grid" : "none")};
  grid-template-rows: auto 1fr auto;

  width: 399px;
  z-index: 999;

  margin-left: 8px;
  background-color: #e5e5e5;
  height: 92vh;
  padding: 0 0 20px 0;
`
const Header = styled.header`
  background: hsla(160, 100%, 36%, 1);
  padding: 12px 16px;
  margin-right: -16px;
  color: white;
  font-weight: 700;

  font-size: ${18 / 16}rem; ;
`

export default CommentSection
