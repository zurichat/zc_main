import axios from "axios";
import { BASE_API_URL } from "@zuri/utilities";

const sendInviteAPI = async invites => {
  const organizationID = localStorage.getItem("currentWorkspace") || null;
  const userToken = sessionStorage.getItem("token") || null;
  if (organizationID && userToken) {
    const response = await axios.post(
      `${BASE_API_URL}/organizations/${organizationID}/send-invite`,
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
