import axios from "axios"

const user = JSON.parse(sessionStorage.getItem("user"))
const $http = axios.create({
  timeout: 30000,
  baseURL: "https://"
})

export const plugins = [
  {
    name: "todo",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `todo.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}&org_id=${org_id}&member_id=${member_id}${
          !filter ? "" : `&filter=${filter}`
        }`
      )
    },
    filterCall: (org_id, member_id) =>
      $http.get(
        `todo.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}?org_id=${org_id}&member_id=${member_id}`
      )
  },
  {
    name: "goals",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `goals.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      )
    }
  },

  {
    name: "chess",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `chess.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      )
    }
  },

  {
    name: "music",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `music.zuri.chat/music/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      )
    },
    filterCall: (org_id, member_id) =>
      $http.get(
        `music.zuri.chat/music/api/v1/search-suggestions/${org_id}/${member_id}`
      )
  },
  {
    name: "channels",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `channels.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      )
    }
  },
  {
    name: "dm",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `dm.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      )
    },
    filterCall: (org_id, member_id) =>
      $http.get(`dm.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}`)
  },
  {
    name: "companyfiles",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `companyfiles.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      )
    }
  }
]
