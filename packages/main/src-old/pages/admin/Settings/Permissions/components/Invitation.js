import React from "react";

const myStyle = {
  text: {
    color: "#616061",
    fontWeight: "400",
    fontSize: "18px",
    padding: "5px"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};
const Invitation = () => {
  return (
    <>
      <input type="checkbox" name="displayname" id="displayname" />
      <label style={myStyle.text}>Require admin approval</label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default Invitation;
