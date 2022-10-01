import React from "react";
import { useWorkspaceContext } from "./WorkspaceContext";
import styles from "../style/workspace.module.css";
import { useTranslation } from "react-i18next";

const SelectedWorkspace = () => {
  const { t } = useTranslation();

  const { organizations, redirectPage } = useWorkspaceContext();

  const numSelectedWorkspace = organizations.filter(org => org.selected);

  const numberOfSelected =
    numSelectedWorkspace.length > 0 ? numSelectedWorkspace.length : "None";

  const handleNextPage = () => {
    if (!numSelectedWorkspace.length) {
      return;
    } else {
      redirectPage();
    }
  };

  return (
    <div className={`${styles.workspace_section_intro}`}>
      <p>
        {numberOfSelected} {t("workspace.space.selected")}
      </p>
      <button
        style={{
          background: `${!numSelectedWorkspace.length ? "#BEBEBE" : "#00B87C"}`,
          color: `${!numSelectedWorkspace.length ? "#242424" : "#ffffff"}`,
          borderColor: `${!numSelectedWorkspace.length ? "#C4C4C4" : "#00B87C"}`
        }}
        type="button"
        className={`${styles.workspace_btn}`}
        onClick={handleNextPage}
      >
        {t("workspace.space.open")} &nbsp; &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="17"
          height="16"
          viewBox="0 0 17 16"
        >
          <path
            stroke={`${!numSelectedWorkspace.length ? "#242424" : "#fff"}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M3.2 8h10.6M9.8 
            4l4 4-4 4"
          />
        </svg>
      </button>
    </div>
  );
};

export default SelectedWorkspace;
