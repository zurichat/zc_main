import { useState, useEffect, Fragment } from "react"
import styles from "./styles/Sidebar.module.css"
import DropDown from "./components/Drop"

import threadIcon from "./assets/icons/thread-icon.svg"
import dmIcon from "./assets/icons/dm-icon.svg"
import draftIcon from "./assets/icons/draft-icon.svg"
import filesIcon from "./assets/icons/files-icon.svg"
import pluginIcon from "./assets/icons/plugin-icon.svg"

import { SubscribeToChannel } from "@zuri/control"
import { ACTIONS } from "./App"
import Header from "./components/Header"
import Invite from "./components/Invite"
import Room from "./components/Room"

const Sidebar = props => {
  let currentWorkspace = localStorage.getItem("currentWorkspace")

  const [nullValue, setnullValue] = useState(0)

  useEffect(() => {
    setnullValue(1)
  }, [])

  {
    //Listening for sidebar update
    nullValue === 1 &&
      props.state.sidebar &&
      SubscribeToChannel(
        `${currentWorkspace}_${props.state.user[0].org_id}_sidebar`,
        ctx => {
          const websocket = ctx.data
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

  return (
    <div className={`container-fluid ${styles.sb__container}`}>
      <Header state={props.state} />
      <div className={`${styles.subCon2}`}>
        <Fragment>
          <Room name="Threads" image={threadIcon} styling={`row ${styles.side_item} mt-2 ${styles.sb__item} ${styles.sb__active} ${styles.sb__itemchosen}`} />
          <Room name="All DMs" image={dmIcon} styling={`row ${styles.side_item} mt-2 ${styles.sb__item}`}/>
          <Room name="Drafts" image={draftIcon} styling={`row ${styles.side_item} mt-2 ${styles.sb__item}`}/>
          <Room name="Files" image={filesIcon} styling={`row ${styles.side_item} mt-2 ${styles.sb__item}`}/>

          <Room name="Plugins" image={pluginIcon} styling={`row ${styles.side_item} mt-2 ${styles.sb__item}`}/>

          {/* SIDE BAR DATA */}
          {props.state.sidebar &&
            Object.keys(props.state.sidebar).map((plugin, index) => {
              return (
                <DropDown
                  itemName={props.state.sidebar[plugin].name}
                  id={props.state.sidebar.name}
                  key={index}
                  items={props.state.sidebar[plugin]}
                />
              )
            })}

          {/* button for inviting users to workspace */}
          <Invite state={props.state} />
        </Fragment>
      </div>
    </div>
  )
}
export default Sidebar
