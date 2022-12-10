import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import { AGORA_APP_ID, AGORA_TOKEN } from "@zuri/utilities";
import styles from "./styles/videoRoom.css";

const VideoRoom = ({ workspaceId }) => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: AGORA_APP_ID,
    channel: "plug",
    token: AGORA_TOKEN
  };
  const callbacks = {
    EndCall: () => setVideoCall(false)
  };

  const styleProps = {
    videoMode: { max: "cover" },
    UIKitContainer: {
      position: "relative",
      background: "#838383",
      overflow: "hidden"
    },
    minViewContainer: {
      maxWidth: "auto",
      maxHeight: "168px",
      position: "absolute",
      top: "0px",
      right: "0px",
      display: "flex",
      justifyContent: "flex-end"
    },
    minViewStyles: {
      maxWidth: "128px",
      maxHeight: "128px",
      margin: "32px 40px 0 0",
      overflow: "hidden",
      borderRadius: "10px",
      boxShadow: "1px 1px 15px 3px rgba(184, 88, 32, 0.2)"
    },
    minViewOverlayContainer: {
      background: "red"
    },

    maxViewContainer: {
      position: "absolute",
      width: "100%",
      height: "100%"
    },
    maxViewStyles: {},
    localBtnContainer: {
      background: "#00b87c"
    },
    localBtnStyles: {
      endCall: {
        minHeight: "48px",
        minWidth: "48px",
        background: "rgb(220,60,60)",
        border: "none"
      },
      muteLocalAudio: {
        minHeight: "48px",
        minWidth: "48px",
        background: "transparent",
        border: "none"
      },
      muteLocalVideo: {
        minHeight: "48px",
        minWidth: "48px",
        background: "transparent",
        border: "none"
      }
    }
  };
  return videoCall ? (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        padding: "10px"
      }}
    >
      <AgoraUIKit
        styleProps={styleProps}
        rtcProps={rtcProps}
        callbacks={callbacks}
      />
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
