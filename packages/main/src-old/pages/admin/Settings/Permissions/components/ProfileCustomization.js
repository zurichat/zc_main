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

const ProfileCustomization = () => {
  return (
    <>
      <p style={myStyle.text}>People who can add profile fields:</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="Workspace Admins and Owners (default)"
        style={myStyle.inputfield}
      />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        See Plans
      </button>
    </>
  );
};

export default ProfileCustomization;
