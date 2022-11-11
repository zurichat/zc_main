import { useState, useEffect } from "react";
import styles from "../styles/Sidebar.module.css";
import { useTranslation } from "react-i18next";

import threadIcon from "../assets/icons/thread-icon.svg";
import dmIcon from "../assets/icons/dm-icon.svg";
import draftIcon from "../assets/icons/draft-icon.svg";

import { subscribeToChannel } from "@zuri/utilities";
import { ACTIONS } from "../reducers/sidebar.reducer";
import Header from "./Header";
import Room from "./Room";
import SingleRoom from "./SingleRoom";
import Category from "./Category";
import Starred from "./Starred";

const categories = [];

const Sidebar = props => {
  let currentWorkspace = localStorage.getItem("currentWorkspace");
  const { t } = useTranslation();

  const [nullValue, setnullValue] = useState(0);

  useEffect(() => {
    setnullValue(1);
  }, []);

  {
    //Listening for sidebar update
    nullValue === 1 &&
      props.state.sidebar &&
      subscribeToChannel(
        `${currentWorkspace}_${props.state.user.user._id}_sidebar`,
        ctx => {
          const websocket = ctx.data;
          // console.log("websocket", websocket)
          if (websocket.event === "sidebar_update") {
            let sidebar_update = { [websocket.plugin_id]: websocket.data };
            //Update sidebar with recent changes
            props.dispatch({
              type: ACTIONS.UPDATE_PLUGINS,
              payload: sidebar_update
            });
          }
        }
      );
  }

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

  const categoriesTransDict = {
    games: "side_workspace_games",
    utility: "side_workspace_utility",
    tools: "side_workspace_tools",
    entertainment: "side_workspace_entertainment",
    sales: "side_workspace_sales",
    productivity: "side_workspace_productivity",
    channels: "side_workspace_channel",
    "direct messages": "side_workspace_direct_messages",
    others: "side_workspace_others"
  };

  var singleItems = [];
  var categorizedItems = [];
  var starredRooms = [];
  if (props.state.sidebar && nullValue === 1) {
    for (let key in props.state.sidebar) {
      if (!categories.includes(key)) {
        continue;
      } else if (key == "others") {
        singleItems = Object.keys(props.state.sidebar[key]).map((k, idx) => {
          var data = props.state.sidebar[key][k];
          return (
            <SingleRoom
              key={`${data.name}${idx}`}
              name={data.joined_rooms[0].room_name}
              image={data.joined_rooms[0].room_image}
              link={data.joined_rooms[0].room_url}
            />
          );
        });
      } else {
        const categoryData = Object.keys(props.state.sidebar[key]).map(
          (k, id) => {
            const data = props.state.sidebar[key][k];
            data.baseUrl = `https://${k}`;
            data.id = id;
            return data;
          }
        );
        categorizedItems.push(
          <Category
            key={categoryData[0]?.name}
            name={categoriesTransDict[key]}
            data={categoryData}
          />
        );

        starredRooms = Object.keys(props.state.sidebar[key]).map(
          (k, id) => props.state.sidebar[key][k].starred_rooms
        );

        //    Object.keys(props.state.sidebar).map((p, idx)=>{
        //     return (categories.includes(p) ?
        //     <Category key={idx} name={p} data={categoryData} />
        //     : null)
        // }
      }
    }
  }
  const check =
    props.state.sidebar &&
    Object.keys(props.state.sidebar).map((plugin, idx) => {
      return props.state.sidebar[plugin].starred_rooms ? true : false;
    });

  return (
    <div className={`container-fluid ${styles.sb__container}`}>
      <Header state={props.state} />
      <div className={`${styles.subCon2}`}>
        <>
          <SingleRoom
            name={t("side_workspace_thread")}
            image={threadIcon}
            link={`/workspace/${currentWorkspace}/plugin-chat/threads`}
          />
          {/* <SingleRoom
            name="All Dms"
            image={dmIcon}
            link={`/workspace/${currentWorkspace}/plugin-chat/all-dms`}
          /> */}
          <SingleRoom name="Drafts" image={draftIcon} />
          <SingleRoom
            name={t("side_workspace_dms")}
            image={dmIcon}
            link={`/workspace/${currentWorkspace}/plugin-chat/all-dms`}
          />
          <SingleRoom name={t("side_workspace_drafts")} image={draftIcon} />

          <Starred starredRooms={starredRooms} />
          {singleItems}
          {categorizedItems}
        </>
      </div>
    </div>
  );
};

export default Sidebar;

/*
  create a category file
  accept props and populate the data
*/
