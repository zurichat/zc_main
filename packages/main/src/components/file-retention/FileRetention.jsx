import React from "react";
import { useTranslation } from "react-i18next";
const myStyle = {
  text: {
    color: "#c4c4c4",
    fontWeight: "600",
    fontSize: "18px",
    padding: "5px"
  },
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

const FileRetention = () => {
  const { t } = useTranslation();
  return (
    <>
      <p style={myStyle.text}>{t("file_retention_file_retention")}</p>
      <input
        type="text"
        className="form-control"
        id=""
        placeholder="keep all files"
        style={myStyle.inputfield}
      />
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        {t("file_retention_see-plans")}
      </button>
    </>
  );
};

export default FileRetention;
