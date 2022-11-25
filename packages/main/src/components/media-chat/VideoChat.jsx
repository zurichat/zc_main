import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

const VideoChat = () => {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "f910a1fb4cfe4c5996c979c54e570ba7",
    channel: "plug",
    token:
      "007eJxTYLj/e9Xpk97phw25vb9Vbqs5ud+xNqfqh6LbwdVKB2fcPaOrwJBmaWiQaJiWZJKclmqSbGppaZZsaW6ZbGqSampukJRonizWkNwQyMhw/vt9BkYoBPFZGApyStMZGAAzOCKm"
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
