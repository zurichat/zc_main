import { useState, useEffect } from "react";
import LiveBroadcast from "../../../components/media-chat/LiveBroadcast";
import {
  Switch,
  Route,
  useParams,
  useHistory,
  useRouteMatch,
  useLocation,
  Link
} from "react-router-dom";
import {
  TopBarWrapperStyle,
  SidebarWrapperStyle,
  WorkspaceWrapperStyle,
  GlobalWorkSpaceStyle,
  WorkspaceSidebarStyle
} from "./Workspace.style";
import styles from "./Workspace.module.css";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

// import { GeneralLoading } from "../../../components";

import { Sidebar, TopBar } from "../../../components/protected";
import {
  BsPlusCircle,
  BsGearFill,
  BsFillQuestionCircleFill,
  BsFillCaretDownFill,
  BsWindowSidebar
} from "react-icons/bs";
import { useMediaQuery } from "@chakra-ui/react";
import VideoChat from "../../../components/media-chat/VideoChat";

const cache = setupCache({
  // check if response header has a specification for caching
  readHeaders: true,
  // if not, cache API response for 3 minutes
  maxAge: 3 * 60 * 1000,
  // {debug: true} logs caching info to console.
  debug: false
});

const instance = axios.create({
  adapter: cache.adapter
});

export default function Index() {
  const [tablet] = useMediaQuery("(max-width: 769px");
  const { workspaceId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch(`/workspace/${workspaceId}`);
  const pluginsName = ["plugin-music"];
  const [workspaces, setWorkspaces] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const switchWorkspace = id => {
    console.log(id);
    window.location.href = `/workspace/${id}/plugin-chat/all-dms`;
  };

  const getAcronymn = sentence => {
    let matches = sentence.match(/\b(\w)/g); // ['J','S','O','N']
    let acronym = matches.join("");
    return acronym;
  };

  const fetchUserWorkspacesResponse = async () => {
    let userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      let response = await instance.get(
        `https://api.zuri.chat/users/${userData.email}/organizations`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`
          }
        }
      );

      let userSpace = response.data.data;
      setWorkspaces(userSpace);
    }
  };

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
  useEffect(() => {
    fetchUserWorkspacesResponse();
  }, []);

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
        {/* only show extra side bar if (workspaces.length > 1) */}
        {workspaces && workspaces.length > 1 && (
          <div
            id={`${styles.workspaceSidebar}`}
            {...(tablet &&
              !sidebarOpen && {
                className: styles.workspaceSidebarClosed
              })}
          >
            <div id={`${styles.workspaceBox}`}>
              {/* {workspaces} */}
              {workspaces?.map((workSpace, index) => (
                <div
                  className={`${styles.workspaceWrap}`}
                  role="button"
                  key={index}
                  title={workSpace.name}
                >
                  <div
                    className={`${
                      window.location.pathname.includes(workSpace.id)
                        ? styles.currentWorkspace
                        : styles.workspaceAvatar
                    }`}
                    role="button"
                    onClick={() => switchWorkspace(workSpace.id)}
                    title={workSpace.name}
                  >
                    <div className={`${styles.workspaceAvatarM}`}>
                      {getAcronymn(workSpace.name)}
                    </div>
                  </div>
                  <div className={`${styles.workspaceInfo}`}>
                    <div>
                      <h3 className={`${styles.workspaceName}`}>
                        {workSpace.name}
                      </h3>
                      <p>{workSpace.workspace_url}</p>
                    </div>
                    <BsFillCaretDownFill />
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.lowerDrawer}`}>
              <Link
                to="/choose-workspace"
                className={`${styles.workspaceAdd}`}
                role="button"
                title="Add a workspace"
              >
                <div className={`${styles.workspacehelp}`}>
                  <BsPlusCircle />
                </div>
                <p className={`${styles.optionName}`}>Add a workspace</p>
              </Link>
              <div
                className={`${styles.workspaceAdd}`}
                role="button"
                title="Preferences"
              >
                <div className={`${styles.workspacehelp}`}>
                  <BsGearFill />
                </div>
                <p className={`${styles.optionName}`}>Preferences</p>
              </div>
              <div
                className={`${styles.workspaceAdd}`}
                role="button"
                title="Help"
              >
                <div className={`${styles.workspacehelp}`}>
                  <BsFillQuestionCircleFill />
                </div>
                <p className={`${styles.optionName}`}>Help</p>
              </div>
            </div>
          </div>
        )}
        <SidebarWrapperStyle>
          <Sidebar />
        </SidebarWrapperStyle>
        <WorkspaceWrapperStyle>
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
