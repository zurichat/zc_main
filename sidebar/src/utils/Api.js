import axios from "axios"

const endpoint = "https://api.zuri.chat"

const user = JSON.parse(sessionStorage.getItem("user"))
export const authAxios = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `Bearer ${user.token}`
  }
})
