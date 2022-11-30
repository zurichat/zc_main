import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import LiveBroadcast from "../../../components/media-chat/LiveBroadcast";
import useParamHook from "./useParamHook";
import styles from "./Workspace.module.css";
import {
  GlobalWorkSpaceStyle,
  SidebarWrapperStyle,
  TopBarWrapperStyle,
  WorkspaceWrapperStyle
} from "./Workspace.style";

// import { GeneralLoading } from "../../../components";

import { useMediaQuery } from "@chakra-ui/react";
import {
  BsFillCaretDownFill,
  BsFillQuestionCircleFill,
  BsGearFill,
  BsPlusCircle
} from "react-icons/bs";
import VideoChat from "../../../components/media-chat/VideoChat";
import VoiceCall from "../../../components/media-chat/VoiceCall/VoiceCall";
import { Sidebar, TopBar } from "../../../components/protected";

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
  // const { workspaceId } = useParams();
  const {
    workspaceId: { workspaceId, short_id }
  } = useParamHook({ workspaceId: "workspaceId" });

  const [tablet] = useMediaQuery("(max-width: 769px");

  const location = useLocation();
  // console.log(location)
  const history = useHistory();
  const match = useRouteMatch(`/workspace/${short_id}`);
  const pluginsName = ["plugin-music"];
  const [workspaces, setWorkspaces] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const switchWorkspace = id => {
    console.log(id);
    window.location.href = `/workspace/${id}/plugin-chat/all-dms`;
    history.replace(`/workspace/${id}/plugin-chat/`);
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
        `${BASE_API_URL}/users/${userData.email}/organizations`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`
          }
        }
      );

      const userSpace = response.data.data;
      const urlsTracker = JSON.parse(localStorage.getItem("urlsTracker"));

      const newUserSpace = [];
      userSpace.forEach(spaceUser => {
        const current = urlsTracker.workspaceIds.filter(
          urlId => urlId.real_id === spaceUser.id
        );
        spaceUser["short_id"] = current[0].short_id;
        newUserSpace.push(spaceUser);
      });

      setWorkspaces(newUserSpace);
    }
  };

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
                      window.location.pathname.includes(workSpace.short_id)
                        ? styles.currentWorkspace
                        : styles.workspaceAvatar
                    }`}
                    role="button"
                    // onClick={() => switchWorkspace(short_id)}
                    onClick={() => switchWorkspace(workSpace.short_id)}
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
