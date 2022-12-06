import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import { BASE_API_URL } from "@zuri/utilities";
import {
  BsFillCaretDownFill,
  BsFillQuestionCircleFill,
  BsGearFill,
  BsPlusCircle
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ExtraSidebar() {
  const { pathname } = useLocation();
  const [workspaces, setWorkspaces] = useState([]);
  const currentPlugin = localStorage.getItem("currentPlugin") || "plugin-chat";
  const currentPluginRoom = localStorage.getItem("currentRoom") || "";
  const defaultPluginRoom = `${currentPlugin}/${currentPluginRoom}`;

  const isActive = id => pathname.includes(id);

  useEffect(() => {
    let mounting = true;

    if (mounting)
      getWorkspaces().then(response => {
        setWorkspaces(() => response);
      });

    return () => {
      mounting = false;
    };
  }, []);

  return workspaces.length ? (
    <>
      <div className="x-sb_workspaceBox">
        {workspaces?.map((workSpace, index) => (
          <div
            className="x-sb_workspaceWrap"
            role="button"
            key={index}
            title={workSpace.name}
          >
            <Link
              to={`/workspace/${workSpace.short_id}/${defaultPluginRoom}`}
              className={`${
                isActive(workSpace.short_id)
                  ? "x-sb_currentWorkspace"
                  : "x-sb_workspaceAvatar"
              }`}
              role="button"
              // onClick={() => switchWorkspace(workSpace.short_id)}
              title={workSpace.name}
            >
              <div className="x-sb_workspaceAvatarM">
                {getAcronymn(workSpace.name)}
              </div>
            </Link>
            <div className="x-sb_workspaceInfo">
              <div>
                <h3 className="x-sb_workspaceName">{workSpace.name}</h3>
                <p>{workSpace.workspace_url}</p>
              </div>
              <BsFillCaretDownFill />
            </div>
          </div>
        ))}
      </div>
      <div className="x-sb_lowerDrawer">
        <Link
          to="/choose-workspace"
          className="x-sb_workspaceAdd"
          role="button"
          title="Add a workspace"
        >
          <div className="x-sb_workspacehelp">
            <BsPlusCircle />
          </div>
          <p className="x-sb_optionName">Add a workspace</p>
        </Link>
        <div className="x-sb_workspaceAdd" role="button" title="Preferences">
          <div className="x-sb_workspacehelp">
            <BsGearFill />
          </div>
          <p className="x-sb_optionName">Preferences</p>
        </div>
        <div className="x-sb_workspaceAdd" role="button" title="Help">
          <div className="x-sb_workspacehelp">
            <BsFillQuestionCircleFill />
          </div>
          <p className="x-sb_optionName">Help</p>
        </div>
      </div>
    </>
  ) : null;
}

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

async function getWorkspaces() {
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

    let parsedWorkspaces = [];
    const workspaces = response.data.data;
    sessionStorage.setItem("organisations", JSON.stringify(workspaces));

    parsedWorkspaces = addShortIds(workspaces);
    return parsedWorkspaces;
  }
}

function addShortIds(workspaces) {
  let parsedWorkspaces = [];
  const urlsTracker = { workspaceIds: [] };

  parsedWorkspaces = workspaces.map(workspace => {
    urlsTracker.workspaceIds.push({
      real_id: workspace.id,
      short_id: `${workspace.id.slice(4, 6)}${workspace.id.slice(
        6,
        8
      )}${workspace.id.slice(-3, -1)}`
    });

    localStorage.setItem("urlsTracker", JSON.stringify(urlsTracker));

    workspace["short_id"] = urlsTracker.workspaceIds.filter(
      urlId => urlId.real_id === workspace.id
    )[0]?.short_id;
    return workspace;
  });

  return parsedWorkspaces;
}

const getAcronymn = sentence => {
  let matches = sentence.match(/\b(\w)/g); // ['J','S','O','N']
  let acronym = matches.join("");
  return acronym;
};
