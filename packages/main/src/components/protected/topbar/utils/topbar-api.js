import axios from "axios";

// const user = JSON.parse(sessionStorage.getItem("user"))
const $http = axios.create({
  timeout: 30000
  // baseURL: "https://"
});

export const getDummmyData = () => {
  return [
    {
      title: "debugger",
      destination_url: "www.prl.com",
      created_at: "12-10-2022",
      content:
        "I like the edit feature o, but I also want to delete a message. Is this feature on slack or its just this workspace that doesn't allow that? Any idea?",
      channel: "general "
    },
    {
      title: "debugger",
      destination_url: "www.prl.com",
      created_at: "12-10-2022",
      content:
        "I like the edit feature o, but I also want to delete a message. Is this feature on slack or its just this workspace that doesn't allow that? Any idea?",
      channel: "general "
    },
    {
      title: "debugger",
      destination_url: "www.prl.com",
      created_at: "12-10-2022",
      content:
        "I like the edit feature o, but I also want to delete a message. Is this feature on slack or its just this workspace that doesn't allow that? Any idea?",
      channel: "general "
    },
    {
      title: "taiwo_jay",
      destination_url: "www.prl.com",
      created_at: "12-10-2022",
      content:
        "Omo , Someone should just come up with a new and reliable ISP na, MTN can make someone loose their Job ",
      channel: "general "
    },
    {
      title: "zekinat",
      destination_url: "www.prl.com",
      created_at: "12-10-2022",
      content:
        "Please my phone was inside my pocket unlocked hence the invitations I gave people. I'm sorry please",
      channel: "general "
    },
    {
      title: "kenny",
      destination_url: "www.prl.com",
      created_at: "12-10-2022",
      content:
        "Do not fight in the North or the South. Fight every battle everywhere, always, in your mind. Everyone is your enemy, everyone is your friend. Every possible series of events is happening all at once. ",
      channel: "general "
    },
    {
      title: "2shots",
      destination_url: "www.prl.com",
      created_at: "12-10-2022",
      content:
        "Workshop for me was that other side of life you never want to be! May workshop not happen to you o. If you leave HNG without workshop, you may not know the Lord's work in your life!",
      channel: "general "
    }
  ];
};

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
