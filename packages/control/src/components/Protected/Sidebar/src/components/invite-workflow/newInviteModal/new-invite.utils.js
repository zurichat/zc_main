import axios from "axios";
const APIURL = "https://api.zuri.chat";

const sendInviteAPI = async invites => {
  const organizationID = localStorage.getItem("currentWorkspace") || null;
  const userToken = sessionStorage.getItem("token") || null;
  if (organizationID && userToken) {
    const response = await axios.post(
      `${APIURL}/organizations/${organizationID}/send-invite`,
      {
        emails: invites
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    );
    return response;
  } else {
    throw new Error("Invalid information");
  }
};

export { sendInviteAPI };
