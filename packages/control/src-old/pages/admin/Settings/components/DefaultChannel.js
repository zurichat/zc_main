import React from "react";
import axios from "axios";

const myStyle = {
  inputfield: {
    margin: "5px 0",
    width: "50%"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const modifyOrganizationSettings = () => {
  let organizationid = "6158c1ac3a1e49b1e5165df3";
  let defaultchannels = "";
  let token = localStorage.getItem("token");
  axios.defaults.baseURL = "https://api.zuri.chat";
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  axios({
    method: "patch",
    url: "/organizations/" + organizationid + "/settings",
    data: {
      defaultchannels: defaultchannels
    }
  });
};

const DefaultChannels = () => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="keep all files"
        style={myStyle.inputfield}
      />
      <button
        type="button"
        className="btn btn-primary"
        style={myStyle.btn}
        onClick={modifyOrganizationSettings}
      >
        See Paid Plans
      </button>
    </>
  );
};

export default DefaultChannels;
