import Sidebar from "./components/Sidebar";
import { useEffect, useReducer } from "react";
import SkeletonLoader from "./components/SkeletonLoader";
import { fetchUser } from "./utils/fetch-user-details";
import { themeColors } from "@zuri/utilities";
import { reducer } from "./reducers/sidebar.reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {});
  const theme = localStorage.getItem("theme");
  if (theme !== null && theme !== "") {
    const sideBar = document.getElementById(
      "single-spa-application:@zuri/sidebar"
    );

    // Ensure the sidebar is mounted before changing the theme
    if (sideBar) {
      sideBar.style.backgroundColor = themeColors[theme]?.primary;
    }
  }

  useEffect(() => {
    //Load user related information when component mounts
    fetchUser(dispatch);
  }, []);

  return !state.user && state.IS_LOADING ? (
    <SkeletonLoader COUNTER={10} />
  ) : (
    <>
      <Sidebar state={state} dispatch={dispatch} />
    </>
  );
}
