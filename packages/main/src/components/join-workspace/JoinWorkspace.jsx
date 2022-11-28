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
  inputfield: {
    margin: "5px 0",
    width: "70%"
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

const JoinWorkspace = () => {
  return (
    <>
      <input type="radio" name="join" id="" style={myStyle.radio} />
      <label style={myStyle.text}>Allow Invitation</label>
      <br />
      <input type="radio" name="join" id="" />
      <label style={myStyle.text}>
        Allow invitations, and approve invitations for any email from these
        domains:
      </label>
      <textarea
        className="form-control"
        id=""
        rows="5"
        style={myStyle.inputfield}
      ></textarea>
      <p style={myStyle.smalltext}>
        If you want to add more domains, seperate each one with a comma
      </p>
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default JoinWorkspace;
