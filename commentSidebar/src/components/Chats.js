
import styled from 'styled-components'
import ChatItem from './ChatItem.'
const Chats = ({ chatInfo }) => {
  return (
    <Wrapper>
      {chatInfo.map(chat => (
        <ChatItemWrapper>
          {/* <ChatItem {...chat} /> */}
          <ChatItem message={chat} />
        </ChatItemWrapper>
      ))}
    </Wrapper>
  )

}
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 17px;
  margin-bottom: 9px;
`
const ChatItemWrapper = styled.div`
  margin-bottom: 16px;
`
export default Chats
