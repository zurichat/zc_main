import Sidebar from "./sidebar.component";
import { useEffect, useReducer } from "react";
import SkeletonLoader from "./components/SkeletonLoader";
import { fetchUser } from "./utils/fetchUserDetails";
import NewInviteModal from "./components/invite-workflow/newInviteModal/newInviteModal";
import InviteResponseModal from "./components/invite-workflow/response-modal/responseModal";
import InviteLoaderModal from "./components/invite-workflow/loader/loader";
import { themeColors } from "@zuri/utilities";

export const ACTIONS = {
  ADD_USER_INFO: "add-user-info",
  ADD_ITEM: "add",
  UPDATE_PLUGINS: "update",
  ADD_ORGANIZATION: "add-org-email",
  INVITE_MODAL_TYPE: "select-invite-modal",
  MODAL_TO_SHOW: "",
  SHOW_MESSAGE: "",
  IS_OPEN: "is-open",
  IS_LOADING: "is-loading",
  RESPONSE_MODAL: "response-modal"
};

const insertSideBarData = (state, action) => {
  var sidebar_data = action.payload;
  var category = sidebar_data[Object.keys(sidebar_data)[0]].category;
  var categoryData = state.sidebar
    ? state.sidebar[category ? category : "others"]
    : null;
  if (categoryData) {
    categoryData = {
      ...categoryData,
      ...sidebar_data
    };
    state.sidebar[category] = categoryData;
  } else {
    if (!state.sidebar) state.sidebar = {};
    state.sidebar[category ? category : "others"] = {
      ...sidebar_data
    };
  }
  return state;
};

function reducer(state = { sidebar: {} }, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      //Add items to sidebar
      state = insertSideBarData(state, action);
      return {
        ...state,
        sidebar: {
          ...state.sidebar
        }
      };
    case ACTIONS.UPDATE_PLUGINS:
      //Update sidebar
      state = insertSideBarData(state, action);
      return {
        ...state,
        sidebar: {
          ...state.sidebar
        }
      };

    case ACTIONS.ADD_USER_INFO:
      //Add user info
      var userInfo = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          ...userInfo
        }
      };
    case ACTIONS.ADD_ORGANIZATION:
      //set organization info
      var org_info = action.payload;
      return {
        ...state,
        organization_info: {
          ...state.organization_info,
          ...org_info
        }
      };
    case ACTIONS.INVITE_MODAL_TYPE:
      //set invite modal
      return {
        ...state,
        inviteModalType: action.payload
      };
    case ACTIONS.MODAL_TO_SHOW:
      return {
        ...state,
        modalToShow: action.payload
      };
    case ACTIONS.SHOW_MESSAGE:
      return {
        ...state,
        showMessage: action.payload
      };
    case ACTIONS.IS_OPEN:
      return {
        ...state,
        isOpen: action.payload
      };
    case ACTIONS.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case ACTIONS.RESPONSE_MODAL:
      //set the modal to show(whether success or error modal)
      return {
        ...state,
        modalToShow: action.payload
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {});
  const theme = localStorage.getItem("theme");
  if (theme !== null && theme !== "") {
    const sideBar = document.getElementById(
      "single-spa-application:@zuri/sidebar"
    );
    sideBar.style.backgroundColor = themeColors[theme]?.primary;
  }

  useEffect(() => {
    //Load user related information when component mounts
    fetchUser(dispatch);
  }, []);

  return !state.user ? (
    <SkeletonLoader COUNTER={12} />
  ) : (
    <>
      <Sidebar state={state} dispatch={dispatch} />
      <NewInviteModal state={state} dispatch={dispatch} />
      <InviteLoaderModal state={state} dispatch={dispatch} />
      <InviteResponseModal state={state} dispatch={dispatch} />
    </>
  );
}
