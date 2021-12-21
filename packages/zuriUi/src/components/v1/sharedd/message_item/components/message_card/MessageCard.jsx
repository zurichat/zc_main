import { DateTime } from "luxon";
import MessageEditorReader from "@components/sharedd/message_editor_reader/MessageEditorReader";
import avatar from "@assets/profile.svg";

export default function MessageCard({ messageData }) {
  return (
    <div className="msg-container">
      <div>
        <img
          src={messageData.sender.sender_image_url || avatar}
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
              <strong> {messageData.sender.sender_name} </strong>
            </span>
            <span className="time">
              {DateTime.fromMillis(messageData.timestamp).toFormat("T a")}
            </span>
          </div>
          <div className="message">
            <MessageEditorReader richUiMessageConfig={messageData.richUiData} />
          </div>
        </div>
      )}
    </div>
  );
}
