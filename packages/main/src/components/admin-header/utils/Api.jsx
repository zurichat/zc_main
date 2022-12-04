import { BASE_API_URL } from "@zuri/utilities";

import axios from "axios";

const endpoint = BASE_API_URL;

const user = JSON.parse(sessionStorage.getItem("user"));
export const authAxios = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `Bearer ${user?.token}`
  }
});
