import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import { AGORA_APP_ID, AGORA_TOKEN } from "@zuri/utilities";

const VideoRoom = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: AGORA_APP_ID,
    channl: "plug",
    token: AGORA_TOKEN
  };
  const callbacks = {
    EndCall: () => setVideoCall(false)
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
};

export default VideoRoom;
