import React from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "./Steps.module.css";

export default function Index({ createWorkspaceData, setCreateWorkspaceData }) {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user")) || null;

  if (!createWorkspaceData.workspaceName) history.push("/create-workspace");

  const [workspaceDefaultChannelName, setWorkspaceDefaultChannelName] =
    React.useState(createWorkspaceData.workspaceDefaultChannelName);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.email}>
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>

        <div className={styles.centerWrapper}>
          <h4> Step 2 of 3</h4>
          <h1>What is your team working on right now ?</h1>
          <h4>
            This could be anything- a project, campiagn, event or the deal you
            are trying to close
          </h4>
          <input
            type="text"
            placeholder="Ex: Q1 Budget, Project Alpha"
            className={styles.inputBox}
            onChange={e => setWorkspaceDefaultChannelName(e.target.value)}
            value={workspaceDefaultChannelName}
          />
          <span className={styles.charLimit}>Maximum 50 characters</span>

          <div className={styles.buttonContainer}>
            <Link to="/create-workspace/step-1">
              {" "}
              <button style={{ backgroundColor: "#f40101", color: "white" }}>
                Back
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
                history.push("/create-workspace/step-3");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
