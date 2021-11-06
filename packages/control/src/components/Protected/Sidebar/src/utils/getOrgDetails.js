import { authAxios } from "./Api";
import { ACTIONS } from "../App";
import { plugindata } from "./plugindata";

export const getOrgDetails = (
  dispatch,
  currentWorkspace,
  userEmail,
  user_id
) => {
  authAxios.get(`/organizations/${currentWorkspace}`).then(res => {
    //Get current user details from organization workspace

    try {
      let org_details = res.data.data;

      //Check user role in organization
      let user_role =
        res.data.data.creator_email === userEmail ? { owner: true } : null;

      // Add user role to global state
      dispatch({ type: ACTIONS.ADD_USER_INFO, payload: user_role });

      //Add organization details to global state
      dispatch({ type: ACTIONS.ADD_ORGANIZATION, payload: org_details });

      //Add plugins to global state
      plugindata(dispatch, res.data.data.plugins, currentWorkspace, user_id);
    } catch (err) {
      console.warn(err);
    }
  });
};
