import axios from "axios";
import Centrifuge from "centrifuge";
import { themeColors as colors } from "./themecolors";

const utilitiesCaches = [
  "zuri-utilities-getuserinfo",
  "zuri-utilities-getworkspaceuser",
  "zuri-utilities-getworkspaceusers"
];
export const GetUserInfo = async () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  let token = sessionStorage.getItem("token");

  if ((user && token) !== null) {
    const url = `https://api.zuri.chat/organizations/${currentWorkspace}/members/?query=${user.email}`;
    const cache = await caches.open("zuri-utilities-getuserinfo");
    const cachedUserInfoResponse = await cache.match(url);
    if (cachedUserInfoResponse) {
      const cachedUserInfo = await cachedUserInfoResponse.json();
      console.log("GetUserInfo-cached");
      const userInfo = Array.isArray(cachedUserInfo.data);
      let userData = {
        currentWorkspace,
        token,
        user: userInfo ? { ...cachedUserInfo.data[0] } : {}
      };
      return userData;
    }
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const userInfo = Array.isArray(response.data.data);
      let userData = {
        currentWorkspace,
        token,
        user: userInfo ? { ...response.data.data[0] } : {}
      };

      localStorage.setItem(`userData`, JSON.stringify(userData));
      cache.add(url);
      return userData;
    } catch (err) {
      console.error("failed to get user info in current workspace", err);
    }
  } else {
    console.warn("YOU ARE NOT LOGGED IN, PLEASE LOG IN");
  }
};

export const GetWorkspaceUser = async identifier => {
  if (!identifier) return new Error("No workspace user identifier provided");

  // User identifier should be email address
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!identifier.match(emailRegex))
    throw Error("Workspace user identifier must be a valid email address.");

  let user = JSON.parse(sessionStorage.getItem("user"));
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  const token = sessionStorage.getItem("token");

  try {
    const url = `https://api.zuri.chat/organizations/${currentWorkspace}/members/?query=${identifier}`;
    const cache = await caches.open("zuri-utilities-getworkspaceuser");
    const cachedWorkspaceUserResponse = await cache.match(url);
    if (cachedWorkspaceUserResponse) {
      const cachedWorkspaceUser = await cachedWorkspaceUserResponse.json();
      console.log("GetWorkspaceUser-cached");
      return cachedWorkspaceUser.data[0];
    }
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.data.data) {
      cache.add(url);
      return response.data.data[0];
    } else {
      throw Error("No users matching identifier found in workspace");
    }
  } catch (error) {
    console.error("failed to get user info in current workspace", error);
  }
};

export const GetWorkspaceUsers = async () => {
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  const token = sessionStorage.getItem("token");
  try {
    const url = `https://api.zuri.chat/organizations/${currentWorkspace}/members`;
    const cache = await caches.open("zuri-utilities-getworkspaceusers");
    const cachedWorkspaceUsersResponse = await cache.match(url);
    if (cachedWorkspaceUsersResponse) {
      const cachedWorkspaceUsers = await cachedWorkspaceUsersResponse.json();
      console.log("GetWorkspaceUsers-cached");
      const user = cachedWorkspaceUsers.data;
      return { totalUsers: user.length, users: user };
    }
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    let user = res.data.data;
    // let workSpaceUsersData = { totalUsers: user.length, ...user.slice(0, 100) }
    // console.log(user);
    let workSpaceUsersData = { totalUsers: user.length, users: user };
    // console.log(user.slice(0, 100))
    // console.log(workSpaceUsersData)
    cache.add(url);
    return workSpaceUsersData;
  } catch (err) {
    console.error("failed to get users in the current workspace", err);
  }

  // localStorage.setItem('WorkspaceUsers', JSON.stringify(res.data.data))
};

export const DeleteUtilitiesCache = async cacheName => {
  return await caches.delete(cacheName);
};
export const DeleteAllUtilitiesCache = async () => {
  utilitiesCaches.forEach(async cacheName => {
    await DeleteUtilitiesCache(cacheName);
  });
  return true;
};

export const SetPageTitle = pageTitle => {
  document.title = `Zuri | ${pageTitle} | ${
    localStorage.getItem("orgName") || ""
  }`;
  return true;
};

// Setup Centrifugo Route
const centrifuge = new Centrifuge(
  "wss://realtime.zuri.chat/connection/websocket"
);

centrifuge.setConnectData({ bearer: sessionStorage.getItem("token") });

centrifuge.connect();
centrifuge.on("connect", function (connectCtx) {
  console.warn("connected", connectCtx);
});

export const SubscribeToChannel = (plugin_id, callback) => {
  centrifuge.subscribe(plugin_id, ctx => {
    callback(ctx);
  });
};

// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

export const themeColors = colors;
