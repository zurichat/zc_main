import { retrieveSideBarInfo } from "../../../../utils/cache-sidebar";

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
  action.payload.forEach(sidebar_data => {
    var category = sidebar_data.category;

    var categoryData = state.sidebar
      ? state.sidebar[category ? category : "others"]
      : null;
    if (categoryData) {
      categoryData = {
        ...categoryData,
        [sidebar_data.pluginKey]: sidebar_data
      };
      state.sidebar[category || "others"] = categoryData;
    } else {
      if (!state.sidebar) state.sidebar = {};
      state.sidebar[category ? category : "others"] = {
        [sidebar_data.pluginKey]: sidebar_data
      };
    }
  });
  return state;
};

// Check if there is a stored version of the sidebar for the user
// ensuring it is the current workspace, and display that instead
// only if there isnt a sidebar already displayed.
const insertCachedSideBar = state => {
  const storedSiderBar = retrieveSideBarInfo(state.user?.user?.email);
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  if (
    !state.sidebar &&
    storedSiderBar &&
    storedSiderBar?.organization_info?._id === currentWorkspace
  ) {
    return {
      ...state,
      ...storedSiderBar
    };
  }
  return {
    ...state
  };
};

export function reducer(state = { sidebar: {} }, action) {
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
      state = insertCachedSideBar(state);
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
