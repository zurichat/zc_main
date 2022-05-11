import React from "react";
import styles from "../style/workspace.module.css";
import { useWorkspaceContext } from "./WorkspaceContext";
import { useTranslation } from "react-i18next";

const WorkspaceOpen = ({ workspaceID }) => {
  const { t } = useTranslation();

  const { redirectPage } = useWorkspaceContext();

  const handleNextPage = id => {
    localStorage.setItem("currentWorkspace", id);
    redirectPage();
  };

  return (
    <button
      type="button"
      className={`${styles.workspace_btn}`}
      onClick={() => handleNextPage(workspaceID)}
    >
      <p>{t("workspace.space.open")}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="17"
        height="16"
        viewBox="0 0 17 16"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M3.2 8h10.6M9.8 
        4l4 4-4 4"
        />
      </svg>
    </button>
  );
};

//b7

export default WorkspaceOpen;
