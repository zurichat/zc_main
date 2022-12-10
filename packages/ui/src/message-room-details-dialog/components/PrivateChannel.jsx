import React, { useState, useEffect } from "react";
import axios from "axios";
import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";

const PrivateChannel = ({ closeEdit }) => {
  const org_id = localStorage.getItem("currentWorkspace");
  const user = JSON.parse(sessionStorage.getItem("organisations"));
  const room = window.location.href.split("/").at(6);
  const BASE_URL = "https://chat.zuri.chat";

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/org/${org_id}/rooms/${room}`)
      .then(res => {
        setData(res.data.data);
      })
      .catch(e => console.log(e));
  }, [5]);

  const privateChannel = () => {
    const info = user?.find(x => x.id === org_id)?.member_id;
    if (data !== null) {
      const newData = { ...data, is_private: true };
      console.log(newData);
      axios
        .put(
          `${BASE_URL}/api/v1/org/${org_id}/members/${info}/rooms/${room}`,
          newData
        )
        .then(res => {
          console.log(res);
          //createNotification("success");
        })
        .catch(e => console.log(e));
    }
  };

  return (
    <>
      <ChannelModal
        closeEdit={closeEdit}
        full
        archiveTitle="Make this channel Private?"
      >
        <div className={styles.content}>
          <p className={styles.p}>When you make a channel private</p>
          <p className={styles.p}>It means that:</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              only you can invite members to this channel
            </li>
          </ul>
          <div className={styles.button}>
            <button className={styles.button4}>Cancel</button>
            <button className={styles.button2} onClick={privateChannel}>
              Private Channel
            </button>
          </div>
        </div>
      </ChannelModal>
    </>
  );
};

export default PrivateChannel;
