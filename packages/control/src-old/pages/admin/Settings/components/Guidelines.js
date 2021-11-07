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

const Guidelines = () => {
  return (
    <>
      <input type="radio" name="guidelines" id="" style={myStyle.radio} />
      <label style={myStyle.text}>Default guidelines</label>
      <br />
      <p style={myStyle.smalltext}>
        This could be your first name or nick name - however you’d like people
        to refer to you on Zuri Chat
      </p>
      <input type="radio" name="guidelines" id="" />
      <label style={myStyle.text}>Custom guidelines</label>
      <textarea
        className="form-control"
        id=""
        rows="5"
        style={myStyle.inputfield}
      ></textarea>
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        Save
      </button>
    </>
  );
};

export default Guidelines;
