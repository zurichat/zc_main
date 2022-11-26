import AgoraUIKit from "agora-react-uikit";

import { useState } from "react";

// agora live broadcast
const LiveBroadcast = () => {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    // from env
    appId: process.env.REACT_APP_AGORA_APP_ID,
    channel: "live",
    token: process.env.REACT_APP_AGORA_TOKEN
  };

  const callbacks = {
    EndCall: () => setVideoCall(false)
  };

  return videoCall ? (
    <div
      style={{
        display: "flex",
        paddingLeft: "100px",
        width: "600px",
        height: "100%"
      }}
    >
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <button
      style={{
        margin: "100px",
        width: "100px",
        height: "50px",
        backgroundColor: "#00b87c"
      }}
      onClick={() => setVideoCall(true)}
    >
      Start Live Broadcast
    </button>
  );
};

export default LiveBroadcast;
