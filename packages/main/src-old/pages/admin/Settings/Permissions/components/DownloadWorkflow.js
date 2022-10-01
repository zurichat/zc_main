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

const DownloadWorkflow = () => {
  return (
    <>
      <input type="checkbox" name="downloadworkflow" id="downloadworkflow" />
      <label style={myStyle.text}>
        Workflow Builder users can downlaod from resposes
      </label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default DownloadWorkflow;
