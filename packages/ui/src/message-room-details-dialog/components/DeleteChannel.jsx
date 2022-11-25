import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";
import axios from "axios";

const DeleteChannel = ({ closeEdit }) => {
  const room = window.location.href.split("/").at(6);
  const organizationID = localStorage.getItem("currentWorkspace") || null;
  const handleDelete = () => {
    axios
      .delete(
        `https://chat.zuri.chat/api/v1/org/${organizationID}/rooms/${room}/`
      )
      .then(res => console.log(res))
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <ChannelModal
      closeEdit={closeEdit}
      full
      archiveTitle="Delete this Channel?"
    >
      <div className={styles.content}>
        <p className={styles.p}>
          When you delete a channel, all messages from this channel will be
          removed from Zuri Chat immediately. This can't be undone.
        </p>
        <p className={styles.p}>Keep in mind that:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Any files uploaded to this channel won't be removed
          </li>
          <li className={styles.li}>
            You can{" "}
            <a className={styles.a} href="/">
              {" "}
              archive a channel{" "}
            </a>{" "}
            instead without removing its messages{" "}
          </li>
        </ul>
        {/* {reusableModal === "archive channel" && <ArchiveChannel />} */}
        <div className={styles.checkdiv}>
          <input
            type="checkbox"
            name="DeleteChannel"
            className={styles.checkbox}
            id="check"
            // value={deleteChannel}
          />
          <span className={styles.check}>
            Yes, permanently delete the channel
          </span>
        </div>
        <div className={styles.button}>
          <button className={styles.button1}>Cancel</button>
          <button className={styles.button3} onClick={handleDelete}>
            Delete Channel
          </button>
        </div>
      </div>
    </ChannelModal>
  );
};

export default DeleteChannel;
