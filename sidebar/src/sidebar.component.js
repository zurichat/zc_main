import { useState, useEffect, Fragment } from "react"
import styles from "./styles/Sidebar.module.css"
import DropDown from "./components/Drop"

import threadIcon from "./assets/icons/thread-icon.svg"
import dmIcon from "./assets/icons/dm-icon.svg"
import draftIcon from "./assets/icons/draft-icon.svg"
import filesIcon from "./assets/icons/files-icon.svg"
import pluginIcon from "./assets/icons/plugin-icon.svg"
import infoIcon from "./assets/icons/info-icon.svg"
import addIcon from "./assets/icons/add-icon.svg"

import { SubscribeToChannel } from "@zuri/control"
import { ACTIONS } from "./App"
import Header from "./components/Header"
import Invite from "./components/Invite"
import Room from "./components/Room"
import SingleRoom from "./components/SingleRoom"
import Category from "./components/Category"
import { dummySidebar } from "./components/dummySidebar"
import Starred from "./components/Starred"

const Sidebar = props => {
  let currentWorkspace = localStorage.getItem("currentWorkspace")

  console.error("wow", props.state)
  const [nullValue, setnullValue] = useState(0)

  useEffect(() => {
    setnullValue(1)
  }, [])

  {
    //Listening for sidebar update
    nullValue === 1 &&
      props.state.sidebar &&
      SubscribeToChannel(
        `${currentWorkspace}_${props.state.user[0]._id}_sidebar`,
        ctx => {
          const websocket = ctx.data
          // console.log("websocket", websocket)
          if (websocket.event === "sidebar_update") {
            let sidebar_update = { [websocket.plugin_id]: websocket.data }
            //Update sidebar with recent changes
            props.dispatch({
              type: ACTIONS.UPDATE_PLUGINS,
              payload: sidebar_update
            })
          }
        }
      )
  }
  const categories=[
      "games",
      "utility",
      "tools",
      "entertainment",
      "sales",
      "productivity",
      "channels",
      "direct messages",
      "others"
  ]

  var singleItems =[]
  var categorizedItems=[]
  for (let key in props.state.sidebar) {
    if (!categories.includes(key)){
      continue;
    }
    
    else if(key == "others"){
      singleItems = Object.keys(props.state.sidebar[key]).map((k, idx)=>{
        var data = props.state.sidebar[key][k]
        return(
          <SingleRoom
          key={data.name}
          name={data.joined_rooms[0].room_name}
          image={data.joined_rooms[0].room_image}
          link={data.joined_rooms[0].room_url}
          />
        )
      })
    }else{
      const categoryData = Object.keys(props.state.sidebar[key]).map(
        k => props.state.sidebar[key][k]
      )

      categorizedItems.push(<Category key={key} name={key} data={categoryData} />)
    //    Object.keys(props.state.sidebar).map((p, idx)=>{
    //     return (categories.includes(p) ? 
    //     <Category key={idx} name={p} data={categoryData} />
    //     : null)
    
    // }
   }
  }

  return (
    <div className={`container-fluid ${styles.sb__container}`}>
      <Header state={props.state} />
      <div className={`${styles.subCon2}`}>
        <Fragment>
          {/* <Room name="Threads" image={threadIcon} />
          <Room name="All DMs" image={dmIcon} />
          <Room name="Drafts" image={draftIcon} />
  <Room name="Plugins" image={pluginIcon} />*/}

          {/* SIDE BAR DATA */}
          <SingleRoom name="Threads" image={threadIcon} />
          <SingleRoom name="All Dms" image={dmIcon} />
          <SingleRoom name="Drafts" image={draftIcon} />

          <SingleRoom name="Plugins" image={pluginIcon} link="/marketplace" />
          <Starred state={props.state} />
          {singleItems}
          {categorizedItems}


          {/* {props.state.sidebar && Object.keys(props.state.sidebar).map((p, idx)=>{
                return categories.includes(p) ? 
                <Category key={idx} name={p} state={props.state} />
                : null
              })
          } */}

          
          {/* <Category name="games" state={props.state} />
          <Category name="utility" state={props.state} />
          <Category name="tools" state={props.state} />
          <Category name="entertainment" state={props.state} />
          <Category name="sales" state={props.state} />
          <Category name="productivity" state={props.state} />
          <Category name="channels" state={props.state} />
          <Category name="direct messages" state={props.state} /> */}
          {/* button for inviting users to workspace */}
          <Invite state={props.state} />
        </Fragment>
      </div>
    </div>
  )
}
export default Sidebar

/*
  create a category file
  accept props and populate the data
*/
