import axios from "axios";

// const user = JSON.parse(sessionStorage.getItem("user"))
const $http = axios.create({
  timeout: 30000
  // baseURL: "https://"
});

export const plugins = [
  {
    name: "todo",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://todo.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}&org_id=${org_id}&member_id=${member_id}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    },
    filterCall: (org_id, member_id) =>
      $http.get(
        `https://todo.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}?org_id=${org_id}&member_id=${member_id}`
      )
  },
  {
    name: "goals",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://goals.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    }
    // filterCall: (org_id, member_id) =>
    // $http.get(
    //   `https://goals.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}`
    // )
  },

  {
    name: "chess",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://chess.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    }
    // filterCall: (org_id, member_id) =>
    //   $http.get(
    //     `https://chess.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}`
    //   )
  },

  {
    name: "music",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://music.zuri.chat/music/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    },
    filterCall: (org_id, member_id) =>
      $http.get(
        `https://music.zuri.chat/music/api/v1/search-suggestions/${org_id}/${member_id}`
      )
  },
  {
    name: "channels",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://channels.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    }
    // filterCall: (org_id, member_id) =>
    //   $http.get(
    //     `channels.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}`
    //   )
  },
  {
    name: "dm",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://dm.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    },
    filterCall: (org_id, member_id) =>
      $http.get(
        `https://dm.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}`
      )
  },

  {
    name: "noticeboard",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://noticeboard.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    }
    // filterCall: (org_id, member_id) =>
    //   $http.get(
    //     `noticeboard.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}`
    //   )
  },
  {
    name: "companyfiles",
    apiCall: (org_id, member_id, query, filter = null) => {
      return $http.get(
        `https://companyfiles.zuri.chat/api/v1/search/${org_id}/${member_id}?q=${query}${
          !filter ? "" : `&filter=${filter}`
        }`
      );
    }
    // filterCall: (org_id, member_id) =>
    //   $http.get(
    //     `https://companyfiles.zuri.chat/api/v1/search-suggestions/${org_id}/${member_id}`
    //   )
  }
];
