import { ACTIONS } from "../reducers/sidebar.reducer";
import { authAxios } from "./api";
import { plugindata } from "./plugin-data";

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
      const orgPlugins = [];
      if (org_details?.plugins) {
        Object.keys(org_details.plugins).map(plugin => {
          orgPlugins.push(org_details.plugins[plugin]);
        });
      }
      plugindata(dispatch, orgPlugins, currentWorkspace, user_id);
    } catch (err) {
      console.warn(err);
    }
  });
};
