import React from "react";
import axios from "axios";

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

const Webhooks = () => {
  return (
    <>
      <input type="checkbox" name="webhooks" id="webhooks" />
      <label style={myStyle.text}>
        Workflow Builder users can use webhooks
      </label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default Webhooks;
