import React from "react"

import style from "../styles/ClearTime.module.css"

const myStyle = {
  default: {
    width: "90%",
    paddingLeft: "6em"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
}

const ClearTime = () => {
  return (
    <>
      <select className="form-select mb-3" style={myStyle.inputfield} required>
        <option defaultValue style={myStyle.default}>
          Don't clear
        </option>
        <option value=""> 30 minutes </option>
        <option value=""> 1 hour</option>
        <option value=""> 4 hours</option>
        <option value=""> Today </option>
        <option value=""> This week </option>
      </select>
    </>
  )
}

export default ClearTime
