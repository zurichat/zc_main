import React from "react";

const myStyle = {
  text: {
    color: "c4c4c4",
    fontWeight: "700",
    fontSize: "18px",
    padding: "5px"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};
const FileUploads = () => {
  return (
    <>
      <input type="checkbox" name="fileupload" id="fileupload" />
      <label style={myStyle.text}>
        Enable uploading and sharing files in conversation with people from
        pther companies.
      </label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        See Plans
      </button>
    </>
  );
};

export default FileUploads;
