import React, { useState, useEffect, useRef } from "react"
import styles from "../styles/Drop.module.css"
import { TiArrowSortedDown } from "react-icons/ti"
import { navigateToUrl } from "single-spa"
import hash from "../assets/icons/hash.svg"
import { AiOutlinePlusCircle } from "react-icons/ai"
import PluginRoomAddUser from "./PluginRoomAddUser"
import RoomOptions from "./RoomOptions"
import infoIcon from "./../assets/icons/info-icon.svg"
import Badge from "./badge"

const DropDown = ({ categoryName, isOpen, toggleDropdown }) => {
  const [addToRoom, setAddToRoom] = useState(false)
  const [roomId, setRoomId] = useState(false)
  // const [isOpen, setOpen] = useState(false)
  // const [items,   setItems] = useState(data);
  // const [selectedItem, setSelectedItem] = useState(null)

  // const handleItemClick = id => {
  //   selectedItem == id ? setSelectedItem(null) : setSelectedItem(id)
  // }

  return (
    <div
      className={`row p-0 ${styles.dropDown} text-decoration-none ${
        isOpen && styles.openWrapper
      }`}
    >
      <div
        className={`col-12 d-flex align-items-center ${styles.plugin__title}`}
        onClick={toggleDropdown}
      >
        <div className={`d-flex align-items-center`}>
          <TiArrowSortedDown
            className={`${styles.icon} ${isOpen && styles.open}`}
          />
        </div>
        <div
          className={`w-100 d-flex align-items-center justify-content-between`}
        >
          <p className={`mb-0 ${styles.dropDown__title} sb--link`}>
            {" "}
            {categoryName}
          </p>
          {/* <img src={infoIcon} alt="icon" role="button" /> */}
          {/* {items.button_url ? (
            <a href={items.button_url} onClick={navigateToUrl}>
              <AiOutlinePlusCircle className={`${styles.icon}`} />
            </a>
          ) : null} */}
        </div>
      </div>

      {/* Add to Room */}
      {/* {addToRoom && (
        <PluginRoomAddUser
          isOpen={addToRoom}
          isClosed={setAddToRoom}
          room_id={roomId}
        />
      )} */}
    </div>
  )
}

export default DropDown
