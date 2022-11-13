import React from "react";

const myStyle = {
  text: {
    color: "#1d1c1d",
    fontWeight: "600",
    fontSize: "18px",
    padding: "5px"
  },
  radio: {
    backgroundColor: "#00B87C"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const ChannelEmail = () => {
  return (
    <>
      <input type="radio" name="email" id="" style={myStyle.radio} />
      <label style={myStyle.text}>Everyone, except guests</label>
      <br />
      <input type="radio" name="email" id="" style={myStyle.radio} />
      <label style={myStyle.text}>Any owner or admin</label>
      <br />
      <input type="checkbox" name="channelemail" id="channelemail" />
      <label style={myStyle.text}>
        Also include these specific users and groups
      </label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        See Plans
      </button>
    </>
  );
};

export default ChannelEmail;
