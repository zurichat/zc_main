import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";

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
  let organizationid = localStorage.getItem("currentWorkspace");
  let defaultchannels = "";
  let token = sessionStorage.getItem("token");
  axios.defaults.baseURL = BASE_API_URL;
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
  const { t } = useTranslation();
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
        {t("default_channel_see")}
      </button>
    </>
  );
};

export default DefaultChannels;
