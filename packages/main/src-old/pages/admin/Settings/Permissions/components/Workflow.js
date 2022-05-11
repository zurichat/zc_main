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
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const Workflow = () => {
  return (
    <>
      <input type="radio" name="workflow" id="" style={myStyle.radio} />
      <label style={myStyle.text}>Everyone, except guests</label>
      <br />
      <input type="radio" name="workflow" id="" style={myStyle.radio} />
      <label style={myStyle.text}>Any owner or admin</label>
      <br />
      <input type="checkbox" name="workflow" id="workflow" />
      <label style={myStyle.text}>
        Also include these specific users and groups
      </label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default Workflow;
