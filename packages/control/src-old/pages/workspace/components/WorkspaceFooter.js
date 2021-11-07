import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/workspace.module.css";
import { useTranslation } from "react-i18next";

const WorkspaceFooter = () => {
  const { t } = useTranslation();

  const deleteSessionId = () => {
    // console.log(sessionStorage.getItem("session_id"))
    sessionStorage.removeItem("session_id");
    // console.log(sessionStorage.getItem("session_id"))
  };

  return (
    <footer className={`${styles.workspace_footer}`}>
      <p>{t("workspace.space.foot_head")}</p>
      <Link to="/login" onClick={deleteSessionId}>
        {t("workspace.space.foot_link")}
      </Link>
    </footer>
  );
};

export default WorkspaceFooter;
