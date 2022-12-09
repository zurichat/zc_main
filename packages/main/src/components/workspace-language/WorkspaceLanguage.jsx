import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";

const myStyle = {
  inputfield: {
    margin: "10px 0",
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
  let workspacelanguage = "";
  let token = sessionStorage.getItem("token");
  axios.defaults.baseURL = BASE_API_URL;
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  axios({
    method: "patch",
    url: "/organizations/" + organizationid + "/settings",
    data: {
      workspacelanguage: workspacelanguage
    }
  });
};

const WorkspaceLanguage = () => {
  const { t } = useTranslation();

  return (
    <>
      <select className="form-select" style={myStyle.inputfield}>
        <option selected>{t("English(US)_Lang")}</option>
        <option value="1">{t("English(UK)")}</option>
        <option value="2">{t("French_Lang")}</option>
      </select>
      <button
        type="button"
        className="btn btn-primary"
        style={myStyle.btn}
        onClick={modifyOrganizationSettings}
      >
        {t("Save_Lang")}
      </button>
    </>
  );
};

export default WorkspaceLanguage;
