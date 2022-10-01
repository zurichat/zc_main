import { DateTime } from "luxon";
import avatar from "@assets/profile.svg";
import RichTextRenderer from "~/rich-text-renderer/RichtextRenderer";

export default function MessageBox({ message }) {
  return (
    <div className="msg-container">
      <div>
        <img
          src={
            message.sender.sender_image_url ||
            `https://i.pravatar.cc/300?u=${message.sender_id}`
          }
          alt="user-avatar"
          className="user-avatar"
        />
      </div>
      {message.event?.action === "join:channel" ? (
        <span className="name">
          <span style={{ fontStyle: "italic", color: "grey" }}>
            {" "}
            {message.username} joined the channel{" "}
          </span>
        </span>
      ) : (
        <div className="msgParticulars">
          <div className="name-time">
            <span className="name">
              <strong> {message.sender.sender_name} </strong>
            </span>
            <span className="time">
              {DateTime.fromMillis(message.timestamp).toFormat("T a")}
            </span>
          </div>
          <div className="message">
            <RichTextRenderer richUiMessageConfig={message.richUiData} />
          </div>
        </div>
      )}
    </div>
  );
}
