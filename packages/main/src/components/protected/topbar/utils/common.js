import { authAxios } from "./api";
import useParamHook from "../../../../pages/protected/workspace/useParamHook"; //my import

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const getUser = () => {
  const result = JSON.parse(sessionStorage.getItem("user") || null);
  return result;
};

// get Current Workspace
export const getCurrentWorkspace = () => {
  //I added this code
  const {
    workspaceId: { workspaceId, short_id }
  } = useParamHook({ workspaceId: "workspaceId" });

  const userData = JSON.parse(localStorage.getItem("userData"));

  localStorage.setItem(
    "currentWorkspace",
    userData?.currentWorkspace ?? workspaceId
  );
  localStorage.setItem("currentWorkspaceShort", short_id);

  let currentWorkspace = localStorage.getItem("currentWorkspace") || null;

  return currentWorkspace;
};

// get Current Workspace Data
export const getCurrentWorkspaceData = () => {
  if (getCurrentWorkspace()) {
    authAxios
      .get(`/organizations/${getCurrentWorkspace()}`)
      .then(res => {
        // console.log(res.data.data)
        return res.data.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
