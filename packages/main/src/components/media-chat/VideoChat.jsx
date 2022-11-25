import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

const VideoChat = () => {
  const [videoCall, setVideoCall] = useState(true);

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
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
};

export default VideoChat;
