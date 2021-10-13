import styled from "styled-components"

const ChatItem = ({ messageConfig }) => {
  return (
    <div>
      {/* <h3>{author}</h3> */}
      <Message
        isBold={messageConfig.formatOptions.includes("bold")}
        isItalic={messageConfig.formatOptions.includes("italic")}
      >
        {messageConfig.message}
      </Message>
      {/* <span>{time}</span> */}
    </div>
  )
}
export default ChatItem

const Message = styled.p`
  font-family: "Lato";
  font-style: ${props => (props.isItalic ? "italic" : "normal")};
  font-weight: ${props => (props.isBold ? "bolder" : "normal")};
`
