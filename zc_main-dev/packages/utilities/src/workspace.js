import axios from "axios";
import { BASE_API_URL } from "./constants";

/**
 * @param {string} userEmail email of the user to get
 * @param {string} workspaceName name of workspace
 * @param {string} token auth token of the user
 * @returns {Promise<object>} returns an object containing the user's info
 * @description uses the email to get the user's info in the workspace from the local cache or the server
 */

export const getWorkspaceUser = async (userEmail, workspaceName, token) => {
  if (!userEmail) return new Error("No workspace user identifier provided");

  // User identifier should be email address
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!userEmail.match(emailRegex))
    throw Error("Workspace user email must be a valid email address.");

  const workspaceUsers = await getWorkspaceUsers(workspaceName, token);
  return workspaceUsers.find(
    workspaceUser => workspaceUser.email === userEmail
  );
};

/**
 * @returns {Promise<object>} returns an object containing the user's info
 * @description uses the email to get the user's info in the current workspace from the local cache or the server
 */

export const getCurrentWorkspaceUser = async () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const currentWorkspaceUsers = await getCurrentWorkspaceUsers();
  return currentWorkspaceUsers.find(
    workspaceUser => workspaceUser.email === user.email
  );
};

/**
 * @param {string} workspaceName name of workspace
 * @param {string} token auth token of the user
 * @returns {Promise<object[]>} returns an array containing all the users in the workspace
 * @description gets all the users in the workspace from the local cache or the server
 */

export const getWorkspaceUsers = async (workspaceName, token) => {
  try {
    const url = `${BASE_API_URL}/organizations/${workspaceName}/members`;
    const cache = await caches.open("zuri-utilities-getworkspaceusers");
    const cachedWorkspaceUsersResponse = await cache.match(url);
    if (cachedWorkspaceUsersResponse) {
      const cachedWorkspaceUsers = await cachedWorkspaceUsersResponse.json();
      console.log("GetWorkspaceUsers-cached");
      return cachedWorkspaceUsers.data;
    }
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    cache.add(url);
    return res.data.data;
  } catch (err) {
    console.error("failed to get users in the current workspace", err);
  }
};

/**
 * @returns {Promise<object[]>} returns an array containing all the users in the current workspace
 * @description gets all the users in the current workspace from the local cache or the server
 */

export const getCurrentWorkspaceUsers = async () => {
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  const userToken = sessionStorage.getItem("token");
  return await getWorkspaceUsers(currentWorkspace, userToken);
};
