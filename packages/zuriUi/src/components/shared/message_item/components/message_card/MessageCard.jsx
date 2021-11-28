// import ChatItem from "/src/components/chat_box/ChatItem";
import MessageEditorReader from "@components/shared/message_editor_reader/MessageEditorReader";
import avatar from "@assets/profile.svg";

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
      {messageData.event?.action === "join:channel" ? (
        <span className="name">
          <span style={{ fontStyle: "italic", color: "grey" }}>
            {" "}
            {messageData.username} joined the channel{" "}
          </span>
        </span>
      ) : (
        <div className="msgParticulars">
          <div className="name-time">
            <span className="name">
              <strong> {messageData.username} </strong>
            </span>
            <span className="time">{messageData.time}</span>
          </div>
          <div className="message">
            <MessageEditorReader richUiMessageConfig={messageData.richUiData} />
          </div>
        </div>
      )}
    </div>
  );
}
