import React from "react";
import { Link } from "react-router-dom";
import ZuriLogo from "./ZuriLogo";
import styles from "../style/workspace.module.css";
import Logo from "../assets/zurichat-09.svg";
import { useTranslation } from "react-i18next";

const WorkspaceHeader = () => {
  const { t } = useTranslation();

  return (
    <header className={`${styles.workspace_header}`}>
      <div style={{ marginBottom: "10px" }} className="ZuriLogo">
        <img src={Logo} alt="Zuri Logo" />
      </div>
      <div className="ChooseWorkspaceHeaderDiv1">
        <h1 style={{ fontSize: "28px" }}>{t("workspace.space.headline")}</h1>
      </div>
      <div className="ChooseWorkspaceHeaderDiv2">
        <p style={{ fontSize: "15px" }}>{t("workspace.space.post_headline")}</p>
      </div>
    </header>
  );
};

export default WorkspaceHeader;
