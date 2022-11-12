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

const ChannelManagement = () => {
  return (
    <>
      <p style={myStyle.text}>People who can create private channels:</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Everyone, except guests (default)"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>People who can create public channels:</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Everyone, except Guests (default)"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>
        People who can remove members from private channels:{" "}
      </p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Everyone, except Guests (default)"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>
        People who can remove members from public channels:{" "}
      </p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Workspace Admins and Owners only (default)"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>
        People who can manage posting permissions in channels:{" "}
      </p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Workspace Admins and Owners only (default)"
        style={myStyle.inputfield}
      />
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default ChannelManagement;
