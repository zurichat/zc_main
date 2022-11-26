import React, { useState, useEffect } from "react";
import axios from "axios";
import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";
import useChannel from "../auth/useChannel";

const PrivateChannel = ({ closeEdit }, props) => {
  const org_id = localStorage.getItem("currentWorkspace");
  const orgs = JSON.parse(sessionStorage.getItem("organisations"));
  const [memberId, setMemberId] = useState("");
  const [errorDetail, setErrorDetail] = useState(null);
  const [laeveData, setLeaveData] = useState(null);
  //const [state, setState]=useState(false)

  useEffect(() => {
    setMemberId(orgs?.find(x => x.id == org_id)?.member_id);
  }, []);

  const privateChannel = e => {
    let ourCurrentRoom = sessionStorage.getItem("currentRoom");

    console.log(ourCurrentRoom, memberId, org_id);

    const token = sessionStorage.getItem("token");

    axios.put(
      `https://chat.zuri.chat/api/v1/org/${org_id}/members/${memberId}/rooms/${ourCurrentRoom}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
  };

  return (
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
          <button
            className={styles.button2}
            onClick={() => {
              privateChannel();
            }}
          >
            Private Channel
          </button>
        </div>
      </div>
    </ChannelModal>
  );
};

export default PrivateChannel;
