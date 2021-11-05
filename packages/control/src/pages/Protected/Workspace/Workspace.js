import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { lazily } from "react-lazily";
import {
  TopBarWrapperStyle,
  SidebarWrapperStyle,
  WorkspaceWrapperStyle
} from "./Workspace.style";

const { Sidebar, TopBar } = lazily(() =>
  import("../../../components/Protected")
);

export default function Index() {
  const { workspaceId } = useParams();

  // Temporary
  React.useEffect(() => {
    document.title = "Workspace";
    localStorage.setItem("currentWorkspace", workspaceId);
  }, [workspaceId]);

  return (
    <>
      <TopBarWrapperStyle>
        <TopBar />
      </TopBarWrapperStyle>

      <SidebarWrapperStyle>
        <Sidebar />
      </SidebarWrapperStyle>

      <WorkspaceWrapperStyle>
        <Switch>
          <Route
            path="/workspace/:workspaceId/marketplace"
            component={() => <h1>MarketPlace</h1>}
          />

          {/* All other routes not by control go to Single SPA */}
          <Route
            path="/workspace/:workspaceId*"
            component={() =>
              React.createElement(
                "div",
                { id: "zuriPluginsLoadArea" },
                "Plugins Load Section"
              )
            }
          />
        </Switch>
      </WorkspaceWrapperStyle>
    </>
  );
}
