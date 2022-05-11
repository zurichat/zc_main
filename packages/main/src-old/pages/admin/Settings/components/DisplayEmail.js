import React from "react";
import axios from "axios";

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
  let organizationid = "6158c1ac3a1e49b1e5165df3";
  let showDE = false;
  let token = localStorage.getItem("token");
  axios.defaults.baseURL = "https://api.zuri.chat";
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
