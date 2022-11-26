import React from "react";

const myStyle = {
  text: {
    color: "#1d1c1d",
    fontWeight: "600",
    fontSize: "18px",
    padding: "5px"
  },
  smalltext: {
    fontWeight: "400",
    fontSize: "14px",
    color: "#616061"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const JoinChannel = () => {
  return (
    <>
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>
        Show a message when a user joins or leaves a channel
      </label>
      <br />
      <p style={myStyle.smalltext}>
        Note: you will always see messages in some cases
      </p>
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default JoinChannel;
