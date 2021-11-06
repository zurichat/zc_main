import React from "react";
import { Route, Switch } from "react-router-dom";

import { TopNavigationBar, Footer } from "../../../components";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import LaunchWorkspace from "./LaunchWorkspace";

export default function Index() {
  const [createWorkspaceData, setCreateWorkspaceData] = React.useState({
    workspaceName: "",
    workspaceDefaultChannelName: "",
    coworkersEmail: []
  });

  return (
    <>
      <TopNavigationBar />

      <Switch>
        <Route
          exact
          path="/create-workspace"
          component={() => (
            <Step0
              createWorkspaceData={createWorkspaceData}
              setCreateWorkspaceData={setCreateWorkspaceData}
            />
          )}
        />

        <Route
          exact
          path="/create-workspace/step-1"
          component={() => (
            <Step1
              createWorkspaceData={createWorkspaceData}
              setCreateWorkspaceData={setCreateWorkspaceData}
            />
          )}
        />

        <Route
          exact
          path="/create-workspace/step-2"
          component={() => (
            <Step2
              createWorkspaceData={createWorkspaceData}
              setCreateWorkspaceData={setCreateWorkspaceData}
            />
          )}
        />

        <Route
          exact
          path="/create-workspace/step-3"
          component={() => (
            <Step3
              createWorkspaceData={createWorkspaceData}
              setCreateWorkspaceData={setCreateWorkspaceData}
            />
          )}
        />

        <Route
          exact
          path="/create-workspace/launch"
          component={() => (
            <LaunchWorkspace createWorkspaceData={createWorkspaceData} />
          )}
        />
      </Switch>
    </>
  );
}
