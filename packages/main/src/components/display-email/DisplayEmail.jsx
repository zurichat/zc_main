import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import React from "react";

const myStyle = {
  maindiv: {
    display: "flex",
    borderRadius: "4px",
    marginTop: "10px"
  },
  div1: {
    width: "10px",
    height: "48px",
    backgroundColor: "#F44336",
    borderRadius: "4px 0 0 4px"
  },
  div2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10px"
  },
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
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const modifyOrganizationSettings = () => {
  let organizationid = localStorage.getItem("currentWorkspace");
  let showDE = false;
  let token = sessionStorage.getItem("token");
  axios.defaults.baseURL = BASE_API_URL;
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  axios({
    method: "patch",
    url: "/organizations/" + organizationid + "/settings",
    data: {
      displayemail: showDE
    }
  });
};

const DisplayEmail = () => {
  return (
    <>
      <div style={myStyle.maindiv}>
        <div style={myStyle.div1}></div>
        <div style={myStyle.div2}>
          Email address may still be accessible via app, test tokens or API
        </div>
      </div>
      <p style={myStyle.text}>Who can access members mail address?</p>
      <input type="radio" name="email" id="" style={myStyle.radio} />
      <label style={myStyle.text}>No one</label>
      <br />
      <input type="radio" name="email" id="" />
      <label style={myStyle.text}>Members and quests</label>
      <br />
      <input type="radio" name="email" id="" style={myStyle.radio} />
      <label style={myStyle.text}>
        Members and quests, plus people from organisation you’re connected to
      </label>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        style={myStyle.btn}
        onClick={modifyOrganizationSettings}
      >
        Save
      </button>
    </>
  );
};

export default DisplayEmail;
