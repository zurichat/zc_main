import { useState, useEffect, useRef, useCallback } from "react";
import styles from "../styles/Sidebar.module.css";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import threadIcon from "../assets/icons/thread-icon.svg";
import dmIcon from "../assets/icons/dm-icon.svg";
import liveicon from "../assets/icons/newlive.svg";
import phoneicon from "../assets/icons/phone.svg";
import draftIcon from "../assets/icons/draft-icon.svg";
import { subscribeToChannel } from "@zuri/utilities";
import { ACTIONS } from "../reducers/sidebar.reducer";
import Header from "./Header";
import Room from "./Room";
import SingleRoom from "./SingleRoom";
import Category from "./Category";
import Starred from "./Starred";
import { storeSideBarInfo } from "../../../../utils/cache-sidebar";

const categories = [];

const Sidebar = props => {
  let currentWorkspace = localStorage.getItem("currentWorkspace") || null;
  let currentRoom = sessionStorage.getItem("currentRoom") || null;
  let currentWorkspaceShort =
    localStorage.getItem("currentWorkspaceShort") || null;
  const history = useHistory();

  const { t } = useTranslation();

  const [nullValue, setnullValue] = useState(0);

  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);

    // use the default cursor on the UI when not resizing
    document.querySelector("body").style.cursor = "default";
  }, []);

  const resize = useCallback(
    mouseMoveEvent => {
      if (isResizing) {
        const newWidth =
          mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left;

        setSidebarWidth(() => newWidth);

        // use the col-resize cursor on the UI while resizing
        document.querySelector("body").style.cursor = "col-resize";

        // collapse the sidebar on further minimization
        if (newWidth <= 185) setSidebarWidth(0);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  useEffect(() => {
    setnullValue(1);
  }, []);

  // Update the local storage sidebar information anytime there's a change
  useEffect(() => {
    if (
      props.state.user?.user?.email &&
      props.state.sidebar &&
      props.state.organization_info
    ) {
      storeSideBarInfo(props.state.user?.user?.email, {
        sidebar: props.state.sidebar,
        organization_info: props.state.organization_info
      });
    }
  }, [
    props.state.user?.user?.email,
    props.state.sidebar,
    props.state.organization_info,
    storeSideBarInfo
  ]);

  //
  //   Check if roomId is Valid else navigate to a valid room
  useEffect(() => {
    if (props.state.sidebar) {
      let data = checkRoomId(props.state.sidebar);
      if (data.valid === false && data.nextRoomId) {
        sessionStorage.setItem("currentRoom", data.nextRoomId);
        history.replace(data.nextRoomId);
      }
    }
  }, [props.state.sidebar]);
  //
  //   Check if roomId is Valid else navigate to a valid room
  function checkRoomId(params) {
    let valid = [];
    let nextRoomId = [];
    if (params) {
      Object.entries(params).filter(product => {
        for (let prop in product) {
          let data = Object.values(product[prop]);
          for (let i = 0; i < data.length; i++) {
            if (data[i].joined_rooms) {
              let validRoomId = data[i].joined_rooms.some(
                ele => ele.room_id === currentRoom
              );
              valid.push(validRoomId);
              nextRoomId.push(...data[i].joined_rooms);
              break;
            }
          }
        }
      });
    }
    return {
      valid: valid.includes(true),
      nextRoomId: nextRoomId[0].room_id
    };
  }
  //
  function customFilter(objList, public_rooms, joined_rooms) {
    let newObject = {};
    const keys = Object.keys(objList);
    keys.map(key => {
      if (key === "channels") {
        let objKey = Object.keys(objList[key]);
        newObject = {
          ...objList,
          [key]: { ...objList[key][objKey], public_rooms, joined_rooms }
        };
      } else
        newObject = {
          ...newObject
        };
    });
    return {
      channel: newObject.channels,
      direct_messages: newObject["direct messages"]["chat.zuri.chat_1"]
    };
  }

  {
    //Listening for sidebar update
    nullValue === 1 &&
      props.state.sidebar &&
      subscribeToChannel(
        `${currentWorkspace}_${props.state.user.user._id}_sidebar`,
        ctx => {
          const websocket = ctx.data;
          if (websocket.event === "sidebar_update") {
            //Update sidebar with recent changes
            let sidebar_update = customFilter(
              props.state.sidebar,
              websocket.data.public_rooms,
              websocket.data.joined_rooms
            );
            props.dispatch({
              type: ACTIONS.UPDATE_PLUGINS,
              payload: [
                { ...sidebar_update.channel },
                { ...sidebar_update.direct_messages }
              ]
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
    games: "games",
    utility: "utility",
    tools: "tools",
    entertainment: "entertainment",
    sales: "sales",
    productivity: "productivity",
    channels: "channels",
    "direct messages": "direct messages",
    others: "others"
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
              name={data.joined_rooms?.[0].room_name}
              image={data.joined_rooms?.[0].room_image}
              link={data.joined_rooms?.[0].room_url}
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
    <div
      ref={sidebarRef}
      style={{ width: sidebarWidth }}
      //   onMouseDown={e => e.preventDefault()}
      className={`${styles.sb__container}`}
    >
      {sidebarWidth > 0 && (
        <div className={styles.sb__content}>
          <Header state={props.state} />
          <div className={`${styles.subCon2}`}>
            <>
              <SingleRoom
                name={`${t("workspace_chat.threads")}`}
                image={threadIcon}
                link={`/workspace/${currentWorkspaceShort}/plugin-chat/threads`}
              />
              <SingleRoom
                name={`${t("workspace_chat.alldms")}`}
                image={dmIcon}
                link={`/workspace/${currentWorkspaceShort}/plugin-chat/all-dms`}
              />
              <SingleRoom
                name="Video Chat"
                image={dmIcon}
                link={`/workspace/${currentWorkspaceShort}/video-chat`}
              />
              <SingleRoom
                name={`${t("workspace_chat.drafts")}`}
                image={draftIcon}
              />
              <SingleRoom
                name="LiveBroadcast"
                image={liveicon}
                link={`/workspace/${currentWorkspaceShort}/LiveBroadcast`}
              />
              <SingleRoom
                name="Voice Call"
                image={phoneicon}
                link={`/workspace/${currentWorkspaceShort}/voice-call`}
              />
              <div className={styles.sb__divider} />
              <Starred starredRooms={starredRooms} />
              {singleItems}
              {categorizedItems}
            </>
          </div>
        </div>
      )}
      <div className={styles.sb__resizer} onMouseDown={startResizing} />
    </div>
  );
};

export default Sidebar;

/*
  create a category file
  accept props and populate the data
*/
