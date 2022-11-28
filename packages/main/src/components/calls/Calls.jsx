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

const Calls = () => {
  return (
    <>
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>Allow video calls on Zuri Chat</label>
      <br />
      <p style={myStyle.smalltext}>Calling options</p>
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>Zuri Chat</label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default Calls;
