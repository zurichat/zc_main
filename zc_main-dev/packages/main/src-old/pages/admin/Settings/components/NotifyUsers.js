import React from "react";
import axios from "axios";

const myStyle = {
  text: {
    color: "#1d1c1d",
    fontWeight: "600",
    fontSize: "18px",
    padding: "5px"
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

const modifyOrganizationSettings = () => {
  let organizationid = "6158c1ac3a1e49b1e5165df3";
  let notifyUsers = false;
  let token = localStorage.getItem("token");
  axios.defaults.baseURL = "https://api.zuri.chat";
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  axios({
    method: "patch",
    url: "/organizations/" + organizationid + "/settings",
    data: {
      notifyofnewusers: notifyUsers
    }
  });
};

const NotifyUsers = () => {
  return (
    <>
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>
        Notify users when someone new joins the channel
      </label>
      <br />
      <p style={myStyle.smalltext}>
        Note: members can decide to opt out of this
      </p>
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

export default NotifyUsers;
