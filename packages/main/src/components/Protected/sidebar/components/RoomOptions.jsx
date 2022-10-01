import React, { useState, useEffect } from "react";
import styles from "../styles/ModalComponentStyles.module.css";
import axios from "axios";

const RoomOptions = ({ isClicked, position, room, baseUrl }) => {
  // const isClicked = true;
  const room_Id = room?.room_url?.split("/")[2];
  const org = localStorage.getItem("currentWorkspace");
  const orgs = JSON.parse(sessionStorage.getItem("organisations"));
  const [memberId, setMemberId] = useState("");
  // const member_id = orgs ? orgs.filter(x => x.id == org)[0].member_id
  //  axios
  // .("https://api.zuri.chat/auth/login", {

  // })
  useEffect(() => {
    setMemberId(orgs?.find(x => x.id == org)?.member_id);
  }, []);

  const starRoomClicked = () => {
    console.warn(room_Id, baseUrl, org, memberId);
    axios
      .put(
        `${baseUrl}/api/v1/org/${org}/rooms/${room_Id}/members/${memberId}/star`
      )
      .then(res => console.warn(res, "started room"))
      .catch(err => console.warn(err));
  };

  let screenHeight = window.innerHeight / 2;

  let menuPosition =
    position.y > screenHeight
      ? {
          top: `${position.y - 250}px`,
          left: `${position.x + 5}px`
        }
      : {
          top: `${position.y}px`,

          left: `${position.x + 5}px`
        };

  return (
    <section
      className={`${
        isClicked ? styles.openmodalOptionsCon : styles.modalOptionsCon
      }`}
      style={menuPosition}
    >
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p>Change notifications</p>
        </div>
        <div>
          <p>Mute room</p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p>Mute roomInfo</p>
        </div>
        <div>
          <p>Copy link</p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column  ${styles.modalSection}`}>
        <div>
          <p onClick={starRoomClicked}>Star room</p>
        </div>
      </div>
      <hr className={styles.modalDivider} />
      <div className={`d-flex flex-column ${styles.modalSection}`}>
        <div>
          <p>Open conversation details</p>
        </div>
        <div>
          <p>Close conversation</p>
        </div>
      </div>
    </section>
  );
};

export default RoomOptions;
