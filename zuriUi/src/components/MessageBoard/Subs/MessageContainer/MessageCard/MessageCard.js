import avatar from "../../../profile.svg"

export default function MessageCard({ messageData }) {
  return (
    <div className="msg-container">
      <div>
        <img src={avatar} alt="user-avatar" className="user-avatar" />
      </div>
      <div className="msgParticulars">
        <div className="name-time">
          <span className="name">
            <strong> {messageData.name} </strong>
          </span>
          <span className="time">{messageData.time}</span>
        </div>
        <div className="message">{messageData.message}</div>
      </div>
    </div>
  )
}
