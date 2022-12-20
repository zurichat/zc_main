import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
import "react-notifications/lib/notifications.css";
//importing react-notifications

const ArchiveChannel = ({ closeEdit }) => {
  // const room = window.location.href.split("/").at(6);
  const organizationID = localStorage.getItem("currentWorkspace") || null;
  const BASE_URL = "https://chat.zuri.chat";
  const orgs = JSON.parse(sessionStorage.getItem("organisations")) || null;
  const room = sessionStorage.getItem("currentRoom") || null;
  const [isAdmin, setIsAdmin] = useState(false);
  const [prevData, setPrevData] = useState([]);

  //
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/org/${organizationID}/rooms/${room}`)
      .then(res => {
        const data = res.data.data;
        setPrevData(data);
        if (data.room_members[`${orgs?.[0]?.member_id}`].role === "admin") {
          setIsAdmin(true);
        }
      })
      .catch(e => console.error(e));
  }, []);
  //
  const handleArchiveChannel = () => {
    if (prevData !== null) {
      const newData = { ...prevData, is_archived: true };
      axios
        .put(
          `${BASE_URL}/api/v1/org/${organizationID}/members/${orgs?.[0]?.member_id}/rooms/${room}`,
          newData
        )
        .then(res => {
          NotificationManager.info("Archived Successfully", "Info!", 2000);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch(er => console.error(er));
    }
  };
  //
  return (
    <ChannelModal
      closeEdit={closeEdit}
      full
      archiveTitle="Archive this Channel for everyone?"
    >
      <NotificationContainer />
      <div className={styles.modal}></div>
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
          <button className={styles.button4} onClick={closeEdit}>
            Cancel
          </button>

          {isAdmin ? (
            <button className={styles.button3} onClick={handleArchiveChannel}>
              Archive Channel
            </button>
          ) : (
            <h3>You are not admin</h3>
          )}
        </div>
      </div>
    </ChannelModal>
  );
};

export default ArchiveChannel;
