import { DateTime } from "luxon";
import avatar from "@assets/profile.svg";
import RichTextRenderer from "~/rich-text-renderer/RichTextRenderer";
import styles from "../../message-pane.module.css";

export default function MessageBox({ message }) {
  return (
    <div className="msg-container">
      <div className="img__wrapper">
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
            {Object.keys(message.richUiData).length !== 0 && (
              <RichTextRenderer richUiMessageConfig={message.richUiData} />
            )}
          </div>
          <div>
            {message.files.map((e, i) => {
              return (
                <div key={i} className={styles.fileWrapper}>
                  <span className="file-name">Media</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
