import React from "react";

const myStyle = {
  text: {
    fontWeight: "700",
    fontSize: "16px",
    padding: "5px",
    color: "#1D1C1D"
  },
  inputfield: {
    margin: "5px 0",
    width: "70%",
    color: "#1D1C1D"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const Messaging = () => {
  return (
    <>
      <p style={myStyle.text}>
        People who can use @channel and @here in all channels, except #general:
      </p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Everyone, except guests (default)"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>
        People who can use @channel and @here in all channels, except #general:
      </p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Everyone, (default)"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>
        Show a warning when using@channel, @here, or @everyone (in channels with
        at least 6 members):
      </p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Always (default)"
        style={myStyle.inputfield}
      />
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default Messaging;
