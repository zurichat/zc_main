import React, { Fragment, useState } from "react"
import DropDown from "./Drop"
import styles from "../styles/Drop.module.css"
import Room from "./Room"
import RoomItem from "./RoomItem"
import SkeletonLoader from "./SkeletonLoader"

export default function Starred(props) {
  const [isOpen, setOpen] = useState(true)

  const toggleDropdown = () => setOpen(!isOpen)

  const [emptyRoom, setEmptyRoom] = useState(false)

  console.warn("plugin", props)

  return props.state.sidebar ? (
    <div
      style={{
        display: !emptyRoom ? "block" : "none"
      }}
    >
      {props.state && (
        <DropDown
          categoryName="Starred"
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      )}

      {props.state.sidebar &&
        Object.keys(props.state.sidebar).map((plugin, idx) => {
          return (
            props.state.sidebar[plugin].starred_rooms &&
            props.state.sidebar[plugin].starred_rooms.map((room, idx) => {
              if (room.room_name !== undefined) {
                return <RoomItem room={room} key={idx} />
              }
            })
          )
        })}
    </div>
  ) : (
    <SkeletonLoader />
  )
}
