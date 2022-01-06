import axios from "axios";
import { BASE_URL } from "@zuri/utilities";

const user = JSON.parse(sessionStorage.getItem("user"));

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${user.token}`
  }
});
