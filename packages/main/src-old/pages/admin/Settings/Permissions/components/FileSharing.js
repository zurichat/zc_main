import React from "react";

const myStyle = {
  text: {
    color: "#1d1c1d",
    fontWeight: "600",
    fontSize: "18px",
    padding: "5px"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const FileSharing = () => {
  return (
    <>
      <input type="checkbox" name="filesharing" id="filesharing" />
      <label style={myStyle.text}>Enable public file URL creation</label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default FileSharing;
