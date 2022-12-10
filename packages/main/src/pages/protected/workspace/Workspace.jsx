import { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import LiveBroadcast from "../../../components/media-chat/LiveBroadcast";
import useParamHook from "./useParamHook";
import {
  ExtraSidebarWrapperStyle,
  GlobalWorkSpaceStyle,
  SidebarWrapperStyle,
  TopBarWrapperStyle,
  WorkspaceWrapperStyle
} from "./Workspace.style";

import VideoChat from "../../../components/media-chat/VideoChat";
import VoiceCall from "../../../components/media-chat/VoiceCall/VoiceCall";
import { Sidebar, TopBar } from "../../../components/protected";
import ExtraSidebar from "../../../components/protected/extra-sidebar";
import WorkspaceLoading from "../../../components/general-loading/WorkspaceLoading";

export default function Index() {
  const {
    workspaceId: { workspaceId, short_id }
  } = useParamHook({ workspaceId: "workspaceId" });

  const location = useLocation();
  // console.log(location)
  const history = useHistory();
  const match = useRouteMatch(`/workspace/${short_id}`);
  const pluginsName = ["plugin-music"];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event("zuri-plugin-load"));
    match?.isExact &&
      history.replace(`/workspace/${short_id}/plugin-chat/all-dms`);
  }, []);

  // Temporary
  useEffect(() => {
    localStorage.setItem("currentWorkspace", workspaceId);
    localStorage.setItem("currentWorkspaceShort", short_id);
  }, [workspaceId]);

  useEffect(() => {
    window.localStorage.setItem("lastLocation", location.pathname);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <GlobalWorkSpaceStyle />
      <TopBarWrapperStyle>
        <TopBar toggleSidebar={toggleSidebar} />
      </TopBarWrapperStyle>

      <div
        style={{ display: "flex", height: "calc(100vh - 48px)" }}
        id="workspace-all"
      >
        <>
          <ExtraSidebarWrapperStyle open={sidebarOpen}>
            <ExtraSidebar />
          </ExtraSidebarWrapperStyle>
          <SidebarWrapperStyle>
            <Sidebar />
          </SidebarWrapperStyle>
        </>

        <WorkspaceWrapperStyle>
          <div id="single-spa-loader">
            <WorkspaceLoading text="Initializing Workspace..." />
          </div>
          <div id="zuri-plugin-load-section"></div>
          <Switch>
            <Route exact path="/workspace/:workspaceId">
              <h1>Welcome to your Workspace</h1>
            </Route>
            <Route path="/workspace/:workspaceId/LiveBroadcast">
              <LiveBroadcast />
            </Route>

            <Route path="/workspace/:workspaceId/video-chat">
              <VideoChat />
            </Route>
            <Route path="/workspace/:workspaceId/voice-call">
              <VoiceCall />
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
