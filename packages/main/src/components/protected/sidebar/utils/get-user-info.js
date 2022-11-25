import { authAxios } from "./Api";
export const GetUserInfo = async () => {
  let user = JSON.parse(sessionStorage.getItem("user"));

  //I added this code
  let workSpaceIds = JSON.parse(localStorage.getItem("currentWorkspace"));
  // End of code
  // const currentWorkspace = localStorage.getItem("currentWorkspace") || null;
  const currentWorkspace = workSpaceIds.workspaceId;

  // const currentWorkspace = localStorage.getItem("currentWorkspace");
  let token = sessionStorage.getItem("token");

  if ((user && token) !== null) {
    try {
      const response = await authAxios.get(
        `/organizations/${currentWorkspace}/members/?query=${user.email}`
      );
      let userData = { currentWorkspace, token, ...response.data.data };
      // console.log('getuserinfo', response.data.data)
      // console.log(userData)
      return userData;
    } catch (err) {
      console.error(err);
    }
  } else {
    console.warn("YOU ARE NOT LOGGED IN, PLEASE LOG IN");
  }
};
