import AgoraUIKit from "agora-react-uikit";

import { useState } from "react";

// agora live broadcast
const LiveBroadcast = () => {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "9e95b753731148ff9f6ab866502fe3df",
    channel: "live",
    token:
      "007eJxTYDj58VrtlTlHFwfZ5SyY/eWqkNO5VQGdk1X/e16elFblWHdQgcEy1dI0ydzU2NzY0NDEIi3NMs0sMcnCzMzUwCgt1Tgljbe0IbkhkJFhwZ+JDIxQCOKzMORklqUyMAAAMnYiKg=="
  };

  const callbacks = {
    EndCall: () => setVideoCall(false)
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "600px", height: "100%" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <button
      style={{ width: "100px", height: "50px", backgroundColor: "red" }}
      onClick={() => setVideoCall(true)}
    >
      Start Live Broadcast
    </button>
  );
};

export default LiveBroadcast;
