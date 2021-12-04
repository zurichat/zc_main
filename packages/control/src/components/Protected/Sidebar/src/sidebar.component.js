import { useState, useEffect, Fragment } from "react";
import styles from "./styles/Sidebar.module.css";

import threadIcon from "./assets/thread-icon.svg";
import dmIcon from "./assets/dm-icon.svg";
import draftIcon from "./assets/draft-icon.svg";
import pluginIcon from "./assets/plugin-icon.svg";

import { SubscribeToChannel } from "@zuri/utilities";
import { ACTIONS } from "./App";
import Header from "./components/Header";
import Invite from "./components/Invite";
import Room from "./components/Room";
import SingleRoom from "./components/SingleRoom";
import Category from "./components/Category";
import { dummySidebar } from "./components/dummySidebar";
import Starred from "./components/Starred";

const categories = [];

const Sidebar = props => {
  let currentWorkspace = localStorage.getItem("currentWorkspace");

  const [nullValue, setnullValue] = useState(0);

  useEffect(() => {
    setnullValue(1);
  }, []);

  {
    //Listening for sidebar update
    nullValue === 1 &&
      props.state.sidebar &&
      SubscribeToChannel(
        `${currentWorkspace}_${props.state.user[0]._id}_sidebar`,
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
            name={key}
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
        <Fragment>
          <SingleRoom
            name="Threads"
            image={threadIcon}
            link={`/workspace/${currentWorkspace}`}
          />
          <SingleRoom
            name="All Dms"
            image={dmIcon}
            link={`/workspace/${currentWorkspace}/plugin-messaging`}
          />
          <SingleRoom name="Drafts" image={draftIcon} />

          <Starred starredRooms={starredRooms} />
          {singleItems}
          {categorizedItems}

          <Invite state={props.state} dispatch={props.dispatch} />
        </Fragment>
      </div>
    </div>
  );
};

export default Sidebar;

/*
  create a category file
  accept props and populate the data
*/
