import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Steps.module.css";

export default function Index({ createWorkspaceData, setCreateWorkspaceData }) {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user")) || null;

  if (!createWorkspaceData.workspaceName) history.push("/create-workspace");

  const { t } = useTranslation();

  const [workspaceDefaultChannelName, setWorkspaceDefaultChannelName] =
    React.useState(createWorkspaceData.workspaceDefaultChannelName);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.email}>
          {user ? (
            <span>
              {t("create_workspace_eight")} {user.email}
            </span>
          ) : null}
        </div>

        <div className={styles.centerWrapper}>
          <h4>{t("create_workspace_fifteen")}</h4>
          <h1>{t("create_workspace_sixteen")} ?</h1>
          <h4>{t("create_workspace_seventeen")}</h4>
          <input
            type="text"
            placeholder="Ex: Q1 Budget, Project Alpha"
            className={styles.inputBox}
            onChange={e => setWorkspaceDefaultChannelName(e.target.value)}
            value={workspaceDefaultChannelName}
            data-cy="create_workspace_textfield"
          />
          <span className={styles.charLimit}>
            {t("create_workspace_twelve")}
          </span>

          <div className={styles.buttonContainer}>
            <Link to="/create-workspace/step-1">
              {" "}
              <button style={{ backgroundColor: "#f40101", color: "white" }}>
                {t("create_workspace_eighteen")}
              </button>
            </Link>

            <button
              disabled={
                workspaceDefaultChannelName.length < 3 ||
                workspaceDefaultChannelName.length > 50
              }
              style={
                workspaceDefaultChannelName.length >= 3 &&
                workspaceDefaultChannelName.length <= 50
                  ? { backgroundColor: "#00b87c", color: "white" }
                  : { backgroundColor: "revert", cursor: "not-allowed" }
              }
              onClick={() => {
                setCreateWorkspaceData({
                  ...createWorkspaceData,
                  workspaceDefaultChannelName
                });
                // history.push("/create-workspace/step-3");
                history.push("/create-workspace/launch");
              }}
              data-cy="create_workspace_continue_action_element"
            >
              {t("create_workspace_thirteen")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
