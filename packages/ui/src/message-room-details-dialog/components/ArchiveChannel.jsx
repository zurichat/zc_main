import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
const ArchiveChannel = ({ closeEdit }) => {
  const room = window.location.href.split("/").at(6);
  const organizationID = localStorage.getItem("currentWorkspace") || null;
  const BASE_URL = "https://chat.zuri.chat";
  const user = JSON.parse(sessionStorage.getItem("user")) || null;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/org/${organizationID}/rooms/${room}`)
      .then(res => {
        setData(res.data.data);
      });
  });
  const handleArchiveChannel = () => {
    if (data !== null) {
      const newData = { ...data, is_archived: true };
      axios
        .post(
          `${BASE_URL}/api/v1/org/${organizationID}/members/${user.id}/rooms/${room}`,
          newData
        )
        .then(res => {
          console.log(res);
          window.location.reload();
        })
        .catch(er => console.log(er));
    }
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
          <button className={styles.button2} onClick={handleArchiveChannel}>
            Archive Channel
          </button>
        </div>
      </div>
    </ChannelModal>
  );
};

export default ArchiveChannel;
