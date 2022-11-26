import axios from "axios";

const useChannel = data => {
  let { check } = data;
  const BASE_API_URL = "https://chat.zuri.chat";
  const token = sessionStorage.getItem("token");
  //const member_id = localStorage.getItem("user");
  const org_id = localStorage.getItem("currentWorkspace");
  const valentina = localStorage.getItem("room_id");
  const member = JSON.parse(sessionStorage.getItem("user")) || null;
  const member_id = member.id;
  localStorage.setItem("isPrivate", check);

  const updatePrivacy = privat =>
    axios.put(
      console.log(
        valentina
      )`${BASE_API_URL}/api/v1/org/${org_id}/members/${member_id}/rooms`,
      { isPrivate: privat },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json"
        }
      }
    );

  return {
    updatePrivacy
  };
};

export default useChannel;
