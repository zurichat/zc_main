import { getUserInfo } from "@zuri/utilities";
import { ACTIONS } from "../reducers/sidebar.reducer";
import { getOrgDetails } from "./get-org-details";

export const fetchUser = async dispatch => {
  try {
    dispatch({
      type: ACTIONS.IS_LOADING,
      payload: true
    });
    const user = await getUserInfo();

    //Get workspace info
    let currentWorkspace = localStorage.getItem("currentWorkspace");

    //Check if user id is valid and get user organization
    if (user.user._id !== "") {
      //Set user details
      dispatch({ type: ACTIONS.ADD_USER_INFO, payload: user });

      //set organization details
      getOrgDetails(dispatch, currentWorkspace, user.email, user.user._id);
    }
    dispatch({
      type: ACTIONS.IS_LOADING,
      payload: false
    });
  } catch (err) {
    console.warn(err);
  }
};
