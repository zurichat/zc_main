import ChatItem from "../../../../chat_box/ChatItem"
import avatar from "../../../profile.svg"

export default function MessageCard({ messageData }) {
  return (
    <div className="msg-container">
      <div>
        <img
          src={messageData.imageUrl || avatar}
          alt="user-avatar"
          className="user-avatar"
        />
      </div>
      <div className="msgParticulars">
        <div className="name-time">
          <span className="name">
            <strong> {messageData.username} </strong>
          </span>
          <span className="time">{messageData.time}</span>
        </div>
        <div className="message">
          <ChatItem richUiMessageConfig={messageData.richUiData} />
        </div>
      </div>
    </div>
  )
}
