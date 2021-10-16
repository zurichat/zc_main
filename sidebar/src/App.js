import Sidebar from "./sidebar.component"
import { useEffect, useReducer } from "react"
import SkeletonLoader from "./components/SkeletonLoader"
import { fetchUser } from "./utils/fetchUserDetails"
import themeColors from "../../theming/themecolors"

export const ACTIONS = {
  ADD_USER_INFO: "add-user-info",
  ADD_ITEM: "add",
  UPDATE_PLUGINS: "update",
  ADD_ORGANIZATION: "add-org-email"
}

const insertSideBarData = (state, action) => {
  var sidebar_data = action.payload
  var category = sidebar_data[Object.keys(sidebar_data)[0]].category
  var categoryData = state.sidebar
    ? state.sidebar[category ? category : "others"]
    : null
  if (categoryData) {
    categoryData = {
      ...categoryData,
      ...sidebar_data
    }
    state.sidebar[category] = categoryData
  } else {
    if (!state.sidebar) state.sidebar = {}
    state.sidebar[category ? category : "others"] = {
      ...sidebar_data
    }
  }
  return state
}

function reducer(state={sidebar: {}}, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      //Add items to sidebar
      state = insertSideBarData(state, action)
      return {
        ...state,
        sidebar: {
          ...state.sidebar
        }
      }
    case ACTIONS.UPDATE_PLUGINS:
      //Update sidebar
      state= insertSideBarData(state, action)
      return {
        ...state,
        sidebar: {
          ...state.sidebar
        }
      }

    case ACTIONS.ADD_USER_INFO:
      //Add user info
      var userInfo = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          ...userInfo
        }
      }
    case ACTIONS.ADD_ORGANIZATION:
      //set organization info
      var org_info = action.payload
      return {
        ...state,
        organization_info: {
          ...state.organization_info,
          ...org_info
        }
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {})
  const theme = localStorage.getItem("theme")
  if (theme !== null || theme !== "") {
    const sideBar = document.getElementById("single-spa-application:@zuri/sidebar")
    sideBar.style.backgroundColor = themeColors[theme].primary
  }
  useEffect(() => {
    //Load user related information when component mounts
    fetchUser(dispatch)
  }, [])

  return !state.user ? (
    <SkeletonLoader COUNTER={12}/>
  ) : (
    <Sidebar state={state} dispatch={dispatch} />
  )
}