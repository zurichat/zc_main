import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
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

const modifyOrganizationSettings = () => {
  let organizationid = localStorage.getItem("currentWorkspace");
  let showDN = true;
  let token = sessionStorage.getItem("token");
  axios.defaults.baseURL = BASE_API_URL;
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  axios({
    method: "patch",
    url: "/organizations/" + organizationid + "/settings",
    data: {
      showdisplayname: showDN
    }
  });
};

const DisplayName = () => {
  const { t } = useTranslation();
  return (
    <>
      <input type="checkbox" name="displayname" id="displayname" />
      <label style={myStyle.text}>{t("display_name_show_name")}</label>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        style={myStyle.btn}
        onClick={modifyOrganizationSettings}
      >
        {t("display_name_save")}
      </button>
    </>
  );
};

export default DisplayName;
