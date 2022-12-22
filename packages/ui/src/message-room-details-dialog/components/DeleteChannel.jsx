import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
const DeleteChannel = ({ closeEdit }) => {
  const room = sessionStorage.getItem("currentRoom") || null;
  const organizationID = localStorage.getItem("currentWorkspace") || null;
  const BASE_URL = "https://chat.zuri.chat";
  const orgs = JSON.parse(sessionStorage.getItem("organisations")) || null;

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/org/${organizationID}/rooms/${room}`)
      .then(res => {
        const data = res.data.data;
        if (data.room_members[`${orgs?.[0]?.member_id}`].role === "admin") {
          setIsAdmin(true);
        }
      })
      .catch(e => console.error(e));
  }, []);

  //function for deleting a channel
  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/api/v1/org/${organizationID}/rooms/${room}`)
      .then(res => {
        NotificationManager.success("Successfully deleted");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(e => console.error(e));
  };

  return (
    <ChannelModal
      closeEdit={closeEdit}
      full
      archiveTitle="Delete this Channel?"
    >
      <NotificationContainer />
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
          <button className={styles.button1} onClick={closeEdit}>
            Cancel
          </button>
          {isAdmin ? (
            <button className={styles.button3} onClick={handleDelete}>
              Delete Channel
            </button>
          ) : (
            <h3>You are not admin</h3>
          )}
        </div>
      </div>
    </ChannelModal>
  );
};

export default DeleteChannel;
