import React from "react";

const myStyle = {
  text: {
    fontWeight: "700",
    fontSize: "16px",
    padding: "5px",
    color: "#1D1C1D"
  },
  bigtext: {
    color: "c4c4c4",
    fontWeight: "700",
    fontSize: "18px",
    padding: "5px"
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

const UserGroups = () => {
  return (
    <>
      <p style={myStyle.text}>People who can create and disable user groups:</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Workspace Admins and Owners only (default)"
        style={myStyle.inputfield}
      />
      <p style={myStyle.text}>People who can modify user groups:</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Workspace Admins and Owners only (default)"
        style={myStyle.inputfield}
      />
      <br />
      <input type="checkbox" name="usergroup" id="usergroup" />
      <label style={myStyle.bigtext}>
        Create @admins for all Workspace Admins
      </label>
      <br />
      <input type="checkbox" name="usergroup" id="usergroup" />
      <label style={myStyle.bigtext}>
        Create @owners for all Workspace Owners
      </label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        See Plans
      </button>
    </>
  );
};

export default UserGroups;
