import React, { useContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import userOrganizations from "./data";
import reducer from "./workspaceReducer";
import axios from "axios";
import { goToDefaultChannel, switchWorkSpace } from "../../../api/channels";

export const WorkspaceContext = React.createContext();

const initialState = {
  loading: false,
  user: JSON.parse(sessionStorage.getItem("user")) || {},
  organizations: null,
  error: "",
  pageLoading: false
};

export const WorkspaceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

  useEffect(() => {
    if (
      sessionStorage.getItem("user") &&
      sessionStorage.getItem("session_id")
    ) {
      const userDetails = JSON.parse(sessionStorage.getItem("user"));
      dispatch({ type: "ACTION_CALL_API", payload: userDetails });
    }

    getOrganizations();
  }, [state.user.email]);

  const getOrganizations = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    try {
      const response = await axios.get(
        `https://api.zuri.chat/users/${user.email}/organizations`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      if (response.status !== 200) {
        dispatch({
          type: "ACTION_FAILED",
          error: `Unable to fetch list of wokspaces, status code: ${response.status}`
        });
        throw Error(
          `Unable to fetch list of wokspaces, status code: ${response.status}`
        );
      }
      const { data } = await response.data;
      dispatch({ type: "ACTION_SUCCESSFUL", data: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "ACTION_FAILED", error: error });
    }
  };

  const toggleSelected = id => {
    dispatch({ type: "SELECT_WORKSPACE", payload: id });
  };

  const redirectPage = () => {
    dispatch({ type: "LOADER_ACTION" });

    setTimeout(() => {
      dispatch({ type: "PAGE_REDIRECT" });
      // goToDefaultChannel()
      const currentOrgId = localStorage.getItem("currentWorkspace");
      switchWorkSpace(currentOrgId);
      // history.push('/home')
    }, 1000);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        ...state,
        toggleSelected,
        redirectPage
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspaceContext = () => {
  return useContext(WorkspaceContext);
};
