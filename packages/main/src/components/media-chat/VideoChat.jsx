import { AGORA_APP_ID, AGORA_TOKEN } from "@zuri/utilities";
import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

const VideoChat = () => {
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
    <div style={{ display: "flex", width: "100vw", height: "100%" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
};

export default VideoChat;
