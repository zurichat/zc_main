import axios from "axios";

const useChannel = channel_id => {
  const BASE_API_URL = "https://chat.zuri.chat";
  const token = sessionStorage.getItem("token");
  //const member_id = localStorage.getItem("user");
  const org_id = localStorage.getItem("currentWorkspace");
  const member = JSON.parse(sessionStorage.getItem("user")) || null;
  const member_id = member.id;
  //const room_id =member.id

  const createChannel = data => {
    //const aisosa= `${BASE_API_URL}/api/v1/org/${org_id}/members/${member_id}`
    //console.log(data,aisosa, "here");
    axios.post(
      `${BASE_API_URL}/api/v1/org/${org_id}/members/${member_id}/rooms`,
      data,
      {
        headers: {
          //Authorization: `Bearer ${token}`,
          /*'acces-control-allow-origin':'application/json',
        'Content-Type': 'application/json'*/
          "access-control-allow-credentials": "true",
          "access-control-allow-origin": "*",
          connection: "keep-alive",
          "content-length": "46",

          "content-type": "application/json"
        }
      }
    );
  };

  const updatePrivacy = isPrivate =>
    axios.put(
      `${BASE_API_URL}/api/v1/org/${org_id}/members/${channel_id}/rooms/`,
      { private: isPrivate },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  return {
    updatePrivacy,
    createChannel
  };
};

export default useChannel;
