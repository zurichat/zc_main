import { authAxios } from "./api";

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
  let workSpaceIds = JSON.parse(localStorage.getItem("currentWorkspace"));
  // End of code
  // const currentWorkspace = localStorage.getItem("currentWorkspace") || null;
  const currentWorkspace = workSpaceIds.workspaceId || null;

  // const currentWorkspace = localStorage.getItem("currentWorkspace") || null;
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
