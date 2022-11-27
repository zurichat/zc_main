import axios from "axios";
import { BASE_API_URL } from "./constants";

/**
 * @returns {Promise<object>} returns an object containing the user's info
 * @description get the currently logged in user's info from the local cache or the server
 */

export const getUserInfo = async () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  let token = sessionStorage.getItem("token");

  if ((user && token) !== null) {
    const url = `${BASE_API_URL}/organizations/${currentWorkspace}/members/?query=${user.email}`;
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
      const userInfo = Array.isArray(response.data?.data);
      let userData = {
        currentWorkspace,
        token,
        user: userInfo ? { ...response.data.data[0] } : {}
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      cache.add(url);
      return userData;
    } catch (err) {
      console.error("failed to get user info in current workspace", err);
    }
  } else {
    console.warn("YOU ARE NOT LOGGED IN, PLEASE LOG IN");
  }
};
