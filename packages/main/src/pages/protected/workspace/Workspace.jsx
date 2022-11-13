import { useEffect } from "react";
import {
  Switch,
  Route,
  useParams,
  useHistory,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import { lazily } from "react-lazily";
import {
  TopBarWrapperStyle,
  SidebarWrapperStyle,
  WorkspaceWrapperStyle,
  GlobalWorkSpaceStyle
} from "./Workspace.style";

// import { GeneralLoading } from "../../../components";

const { Sidebar, TopBar } = lazily(() =>
  import("../../../components/protected")
);

export default function Index() {
  const { workspaceId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch(`/workspace/${workspaceId}`);
  const pluginsName = ["plugin-music"];
  useEffect(() => {
    window.dispatchEvent(new Event("zuri-plugin-load"));
    match.isExact &&
      history.replace(`/workspace/${workspaceId}/plugin-chat/all-dms`);
  }, []);
  // Temporary
  useEffect(() => {
    localStorage.setItem("currentWorkspace", workspaceId);
  }, [workspaceId]);
  useEffect(() => {
    const activePlugin = pluginsName.find(plugin =>
      location.pathname.includes(plugin)
    );
    if (activePlugin) {
      document.title = `Zuri | ${activePlugin?.replace(
        "plugin-",
        ""
      )} | ${localStorage.getItem("orgName")}`;
    }
  }, [location.pathname]);

  return (
    <>
      <GlobalWorkSpaceStyle />
      <TopBarWrapperStyle>
        <TopBar />
      </TopBarWrapperStyle>

      <div style={{ display: "flex", height: "calc(100vh - 48px)" }}>
        <SidebarWrapperStyle>
          <Sidebar />
        </SidebarWrapperStyle>
        <WorkspaceWrapperStyle>
          <div id="zuri-plugin-load-section"></div>
          <Switch>
            <Route exact path="/workspace/:workspaceId">
              <h1>Welcome to your Workspace</h1>
            </Route>

            {/* <Route
              exact
              path="/workspace/:workspaceId/marketplace"
              component={() => <h1>MarketPlace</h1>}
            /> */}

            {/* All other routes not by main go to Single SPA */}
            {/* <Route path="/workspace/:workspaceId/*">
              <div id="zuri-plugin-load-section">
                <p>SHOULD SHOW PLUGINS</p>
              </div>
            </Route> */}
          </Switch>
        </WorkspaceWrapperStyle>
      </div>
    </>
  );
}
