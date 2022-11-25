import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
const ArchiveChannel = ({ closeEdit }) => {
  const user = JSON.parse(sessionStorage.getItem("user")) || null;
  const room = window.location.href.split("/").at(6);
  const organizationID = localStorage.getItem("currentWorkspace") || null;

  const handleArchive = () => {
    const text = `https://chat.zuri.chat/api/v1/org/${organizationID}/members/${user.id}/rooms/${room}`;
    console.log(text);
    axios
      .put(
        `https://chat.zuri.chat/api/v1/org/${organizationID}/members/${user.id}/rooms/${room}`,
        {
          room_name: "New test",
          description: "string",
          topic: "Humans",
          is_private: false,
          is_archived: true
        }
      )
      .then(r => console.log(r.data))
      .catch(er => console.log(er));
    alert("hey");
    closeEdit();
  };
  return (
    <ChannelModal
      closeEdit={closeEdit}
      full
      archiveTitle="Archive this Channel for everyone?"
    >
      <div className={styles.content}>
        <p className={styles.p}>
          When you archive a channel, it's archived for everyone. That means...
        </p>
        <p className={styles.p}>Keep in mind that:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            No one will be able to send messages to the channel
          </li>
          <li className={styles.li}>
            Any apps installed in the channel will be disabled
          </li>
        </ul>
        <p className={styles.p}>
          You will still be able to find the channel's contents via search.{" "}
          <br />
          And you can always unarchive the channel in the future, if you'd like.
        </p>
        <div className={styles.button}>
          <button className={styles.button4}>Cancel</button>
          <button className={styles.button2} onClick={handleArchive}>
            Archive Channel
          </button>
        </div>
      </div>
    </ChannelModal>
  );
};

export default ArchiveChannel;
