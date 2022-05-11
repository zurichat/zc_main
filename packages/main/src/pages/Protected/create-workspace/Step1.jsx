import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import styles from "./Steps.module.css";

export default function Index({ createWorkspaceData, setCreateWorkspaceData }) {
  const history = useHistory();
  let location = useLocation();
  const organizations = location.state;
  // console.log(location);

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
    <div>
      <div className={styles.wrapper}>
        <div className={styles.email}>
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>

        <div className={styles.centerWrapper}>
          <h4> Step 1 of 3</h4>
          <h1>What is the name of your company or team ?</h1>
          <h4>
            This will be the name of your workspace. Choose something that your
            team will recognise
          </h4>
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
          />

          <span className={styles.charLimit}>Maximum 50 characters</span>

          <div className={styles.buttonContainer}>
            <Link to="/create-workspace">
              {" "}
              <button style={{ backgroundColor: "#f40101", color: "white" }}>
                Cancel
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
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
