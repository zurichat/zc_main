import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <>
      <input type="radio" name="guidelines" id="" style={myStyle.radio} />
      <label style={myStyle.text}>{t("guidelines_default")}</label>
      <br />
      <p style={myStyle.smalltext}>{t("join_channel_show_message")}</p>
      <input type="radio" name="guidelines" id="" />
      <label style={myStyle.text}>{t("guidelines_custom_guidelines")}</label>
      <textarea
        className="form-control"
        id=""
        rows="5"
        style={myStyle.inputfield}
      ></textarea>
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        {t("guidelines_save")}
      </button>
    </>
  );
};

export default Guidelines;
