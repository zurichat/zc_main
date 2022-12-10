import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import { AGORA_APP_ID, AGORA_TOKEN } from "@zuri/utilities";
import styles from "./styles/videoRoom.css";

const VideoRoom = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: AGORA_APP_ID,
    channel: "plug",
    token: AGORA_TOKEN
  };
  const callbacks = {
    EndCall: () => setVideoCall(false)
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%"
      }}
    >
      <button
        colorScheme="blue"
        onClick={() => setVideoCall(true)}
        className={styles.joinBtn}
      >
        Join Video Chat
      </button>
    </div>
  );
};

export default VideoRoom;
