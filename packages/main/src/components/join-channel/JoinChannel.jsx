import React from "react";
import { useTranslation } from "react-i18next";
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

const JoinChannel = () => {
  const { t } = useTranslation();
  return (
    <>
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>{t("join_channel_show_message")}</label>
      <br />
      <p style={myStyle.smalltext}>{t("join_channel_note")}</p>
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        {t("join_channel_save")}
      </button>
    </>
  );
};

export default JoinChannel;
