import React, { useState, useRef, useEffect } from "react"
import { navigateToUrl } from "single-spa"
import styles from "../styles/Drop.module.css"
import Badge from "./badge"
import hash from "../assets/icons/hash.svg"
import { AiOutlinePlusCircle } from "react-icons/ai"
import PluginRoomAddUser from "./PluginRoomAddUser"
import RoomItem from "./RoomItem"
import RoomOptions from "./RoomOptions"
import infoIcon from "./../assets/icons/info-icon.svg"

export default function Room({ items, isOpen }) {
  return (
    <ul className={`col-12 ps-4 ${styles.item__row} ${isOpen && styles.open}`}>
      {items.joined_rooms &&
        items.joined_rooms.map((room, idx) => {
          if (room.room_name !== undefined) {
            return <RoomItem room={room} key={idx} baseUrl={items.baseUrl}/>
          }
        })}
    </ul>
  )
}
