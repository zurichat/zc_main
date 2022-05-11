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

const WorkflowBuilder = () => {
  return (
    <>
      <input type="checkbox" name="workflowbuilder" id="workflowbuilder" />
      <label style={myStyle.text}>
        Show steps from apps installed on this workspace in Workflow Builder
      </label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default WorkflowBuilder;
