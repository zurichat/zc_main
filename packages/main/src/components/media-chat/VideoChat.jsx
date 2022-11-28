import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";
import styles from "./VideoChat.module.css";

const VideoChat = () => {
  const [videoCall, setVideoCall] = useState(false);

  const rtcProps = {
    appId: process.env.REACT_APP_AGORA_APP_ID,
    channel: "plug",
    token: process.env.REACT_APP_AGORA_TOKEN
  };

  const callbacks = {
    EndCall: () => setVideoCall(false)
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100%" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <button
      colorScheme="blue"
      onClick={() => setVideoCall(true)}
      className={styles.joinBtn}
    >
      Join Video Chat
    </button>
  );
};

export default VideoChat;
