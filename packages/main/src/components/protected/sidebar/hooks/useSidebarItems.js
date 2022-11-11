import React, { useEffect, useReducer } from "react";
import { subscribeToChannel } from "@zuri/utilities";
import { reducer, ACTIONS } from "../reducers/sidebar.reducer";
import { fetchUser } from "../utils/fetch-user-details";

const categories = [
  "games",
  "utility",
  "tools",
  "entertainment",
  "sales",
  "productivity",
  "channels",
  "direct messages",
  "others"
];

const useSidebarItems = () => {
  const [state, dispatch] = useReducer(reducer, {});
  const currentWorkspace = localStorage.getItem("currentWorkspace");

  let singleItems = [];
  let categorizedItems = [];
  let starredRooms = [];

  useEffect(() => {
    //Load user related information when component mounts
    fetchUser(dispatch);
  }, []);

  useEffect(() => {
    if (state?.user?.user._id && state.sidebar) {
      subscribeToChannel(
        `${currentWorkspace}_${state?.user?.user._id}_sidebar`,
        ctx => {
          const websocket = ctx.data;
          // console.log("websocket", websocket)
          if (websocket.event === "sidebar_update") {
            let sidebar_update = { [websocket.plugin_id]: websocket.data };
            //Update sidebar with recent changes
            dispatch({
              type: ACTIONS.UPDATE_PLUGINS,
              payload: sidebar_update
            });
          }
        }
      );
    }
  }, [state, currentWorkspace, dispatch]);

  if (state?.sidebar) {
    for (let key in state.sidebar) {
      if (!categories.includes(key)) {
        continue;
      } else if (key == "others") {
        singleItems = Object.keys(state.sidebar[key]).map((k, idx) => {
          var data = state.sidebar[key][k];
          return {
            id: `${data.name}${idx}`,
            name: data.joined_rooms[0].room_name,
            image: data.joined_rooms[0].room_image,
            link: data.joined_rooms[0].room_url
          };
        });
      } else {
        const categoryData = Object.keys(state.sidebar[key]).map((k, id) => {
          const data = state.sidebar[key][k];
          data.baseUrl = `https://${k}`;
          data.id = id;
          return data;
        });
        categorizedItems.push({
          id: categoryData[0]?.name,
          name: { key },
          data: { categoryData }
        });

        starredRooms = Object.keys(state.sidebar[key]).map(
          (k, id) => state.sidebar[key][k].starred_rooms
        );
      }
    }
  }

  return {
    singleItems,
    categorizedItems,
    starredRooms,
    isLoading: Boolean(state?.isLoading)
  };
};

export default useSidebarItems;
