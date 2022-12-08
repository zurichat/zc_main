import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import styles from "./Steps.module.css";
import { useTranslation } from "react-i18next";

export default function Index({ createWorkspaceData, setCreateWorkspaceData }) {
  const history = useHistory();
  let location = useLocation();
  const organizations = location.state;
  // console.log(location);

  const { t } = useTranslation();

  const user = JSON.parse(sessionStorage.getItem("user")) || null;

  const [workspaceName, setWorkspaceName] = React.useState(
    createWorkspaceData.workspaceName
  );

  const [error, setError] = React.useState("");

  const workNameCheck = name => {
    for (var x of organizations) {
      if (x.name == name) {
        setError("Workspace name already exists");
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.email}>
          {user ? (
            <span>
              {t("create_workspace_eight")} {user.email}
            </span>
          ) : null}
        </div>

        <div className={styles.centerWrapper}>
          <h4>{t("create_workspace_nine")}</h4>
          <h1>{t("create_workspace_ten")} ?</h1>
          <h4>{t("create_workspace_eleven")}</h4>
          {error && (
            <div className={`${styles.errWrapper} d-flex text-danger`}>
              <RiErrorWarningLine />
              <div className="mx-2">{error}</div>
            </div>
          )}
          <input
            type="text"
            value={workspaceName}
            placeholder="Ex: The Brand Hub"
            onChange={e => {
              setError("");
              setWorkspaceName(e.target.value);
            }}
            className={styles.inputBox}
            data-cy="create_workspace_textfield"
          />

          <span className={styles.charLimit}>
            {t("create_workspace_twelve")}
          </span>

          <div className={styles.buttonContainer}>
            <Link to="/create-workspace">
              {" "}
              <button style={{ backgroundColor: "#f40101", color: "white" }}>
                {t("create_workspace_fourteen")}
              </button>
            </Link>
            <button
              disabled={workspaceName.length < 3 || workspaceName.length > 50}
              style={
                workspaceName.length >= 3 && workspaceName.length <= 50
                  ? { backgroundColor: "#00b87c", color: "white" }
                  : { backgroundColor: "revert", cursor: "not-allowed" }
              }
              onClick={() => {
                if (!workNameCheck(workspaceName)) {
                  setCreateWorkspaceData({
                    ...createWorkspaceData,
                    workspaceName
                  });
                  history.push("/create-workspace/step-2");
                }
              }}
              data-cy="create_workspace_continue_action_element"
            >
              {t("create_workspace_thirteen")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
