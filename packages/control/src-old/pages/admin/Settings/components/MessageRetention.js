import React from "react";

const myStyle = {
  text: {
    fontWeight: "600",
    fontSize: "18px",
    padding: "5px",
    color: "c4c4c4"
  },
  inputfield: {
    margin: "5px 0",
    width: "70%",
    color: "#c4c4c4"
  },
  smalltext: {
    fontWeight: "400",
    fontSize: "18px",
    color: "c4c4c4"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const MessageRetention = () => {
  return (
    <>
      <p style={myStyle.text}>Public channels</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="keep all changes, but don't track revisions"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>Private channels</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="keep all changes, but don't track revisions"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>Direct channels</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="keep all changes, but don't track revisions"
        style={myStyle.inputfield}
      />
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>
        Let workspace members override this setting
      </label>
      <br />
      <p style={myStyle.smalltext}>
        This setting allows users to set their own retention period - making it
        longer or shorter -<br />
        for private and direct channels
      </p>
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        See Paid Plans
      </button>
    </>
  );
};

export default MessageRetention;
