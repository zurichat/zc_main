import axios from "axios";

const endpoint = "https://api.zuri.chat";
const channelsEndpointV1 = "https://channels.zuri.chat/api/v1";

const user = JSON.parse(sessionStorage.getItem("user"));
export const authAxios = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `Bearer ${user?.token}`
  }
});
