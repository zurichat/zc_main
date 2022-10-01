import styled from "styled-components";
import ChatItem from "./ChatItem";
const Chats = ({ chatInfo }) => {
  return (
    <Wrapper>
      {chatInfo.map(chat => (
        <ChatItemWrapper key={chat.id}>
          <ChatItem {...chat} />
        </ChatItemWrapper>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 16px;
  margin-bottom: 9px;
`;
const ChatItemWrapper = styled.div`
  margin-bottom: 16px;
`;
export default Chats;
