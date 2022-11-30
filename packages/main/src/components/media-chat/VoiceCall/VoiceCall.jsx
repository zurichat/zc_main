import { AGORA_APP_ID, AGORA_TOKEN } from "@zuri/utilities";
import AgoraUIKit from "agora-react-uikit";
import "agora-react-uikit/dist/index.css";
import React, { useState } from "react";

const VoiceCall = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);

  const rtcProps = {
    appId: AGORA_APP_ID,
    channel: "plug",
    token: AGORA_TOKEN,
    role: isHost ? "host" : "audience"
  };

  const styleProps = {
    iconSize: 50,
    theme: "#000",
    minViewStyles: { width: 200, height: 150 },
    maxViewStyles: { height: 500, width: 500 },
    localControlStyles: {
      bottom: 0,
      height: 100,
      backgroundColor: "#000000"
    },
    BtnTemplateStyles: {
      paddingleft: 2,
      backgroundColor: ""
    },

    UIKitContainer: {
      backgroundColor: "#000",
      borderRadius: 15,
      overflowX: "hidden",
      overflowY: "hidden"
    },
    localBtnContainer: {
      marginLeft: "150px",
      backgroundColor: "#bebebe",
      borderRadius: 15,
      width: "400px"
    },

    localBtnStylesInterface: {
      muteLocalVideo: {
        padding: 10
      },
      muteLocalAudio: {
        padding: 10
      }
    }
  };

  const callbacks = {
    EndCall: () => setVideocall(false)
  };

  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <h1 style={styles.heading}>Voice Call</h1>
        {videocall ? (
          <>
            <div style={styles.nav}>
              <p style={{ fontSize: 20, width: 200 }}>
                You're {isHost ? "a host" : "an audience"}
              </p>
              <p style={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </p>
            </div>
            <AgoraUIKit
              styleProps={styleProps}
              rtcProps={rtcProps}
              callbacks={callbacks}
            />
          </>
        ) : (
          <div style={styles.nav}>
            <div style={styles.btn} onClick={() => setVideocall(true)}>
              Start Call
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: "30px",
    marginRight: "50px",
    border: "solid 2px black"
  },
  heading: { textAlign: "center", marginBottom: 0 },
  videoContainer: { display: "flex", flexDirection: "column", flex: 1 },
  nav: { display: "flex", justifyContent: "space-around", marginBottom: 20 },
  btn: {
    backgroundColor: "#00b87c",
    cursor: "pointer",
    borderRadius: 5,
    padding: 5,
    color: "#ffffff",
    fontSize: 20
  }
};

export default VoiceCall;
