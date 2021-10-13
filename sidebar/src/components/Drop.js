import React, { useState, useEffect, useRef } from "react"
import styles from "../styles/Drop.module.css"
import { TiArrowSortedDown } from "react-icons/ti"
import { navigateToUrl } from "single-spa"
import hash from "../assets/icons/hash.svg"
import { AiOutlinePlusCircle } from "react-icons/ai"
import PluginRoomAddUser from "./PluginRoomAddUser"
import RoomOptions from "./RoomOptions"
import infoIcon from "./../assets/icons/info-icon.svg"

const DropDown = ({ itemName, items }) => {
  const [addToRoom, setAddToRoom] = useState(false)
  const [roomId, setRoomId] = useState(false)
  const [isOpen, setOpen] = useState(false)
  // const [items,   setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = id => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id)
  }

  const [click, isClicked] = useClick()

  function useClick() {
    const [value, setValue] = useState(false)

    const ref = useRef(null)

    const RightClick = e => {
      e.preventDefault()
      setValue(true)
    }
    const CloseClick = () => setValue(false)

    useEffect(
      () => {
        const node = ref.current
        if (node) {
          node.addEventListener("contextmenu", RightClick)
          document.addEventListener("click", CloseClick)

          return () => {
            node.removeEventListener("contextmenu", RightClick)
            document.removeEventListener("click", CloseClick)
          }
        }
      },
      [ref.current] // Recall only if ref changes
    )

    return [ref, value]
  }

  return (
    <div
      className={`row p-0 ${styles.dropDown} text-decoration-none ${isOpen && styles.openWrapper
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
          <p className={`mb-0 ${styles.dropDown__title}`}> {itemName}</p>
          {/* <img src={infoIcon} alt="icon" role="button" /> */}
          {/* {items.button_url ? (
            <a href={items.button_url} onClick={navigateToUrl}>
              <AiOutlinePlusCircle className={`${styles.icon}`} />
            </a>
          ) : null} */}
        </div>
      </div>
      <ul
        className={`col-12 ps-4 ${styles.item__row} ${isOpen && styles.open}`}
      >
        {items.joined_rooms &&
          items.joined_rooms.map((room, index) => {
            if (room.room_name !== undefined) {
              return (
                // console.log(itemList)
                <li key={index} className={`row py-1 px-2 ${styles.item__list}`}>
                  <a
                    className={`col-12 d-flex align-items-center ${styles.item_name}`}
                    href={room.room_url}
                    onClick={navigateToUrl}
                    ref={click}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      ref={click}
                      className={`${styles.item__image}`}
                      src={room.room_image || hash.toString()}
                      onError={e => (e.target.src = hash.toString())}
                      alt="img"
                    />
                    <div className={`mb-0 d-inline-flex align-items-center ${styles.dropDown__name}`}>
                      {room.room_name}
                      {/* Add to Room Button */}
                      {/* <AiOutlinePlusCircle
                        className={`${styles.icon}`}
                        onClick={() => {
                          setAddToRoom(!addToRoom)
                          setRoomId(room._id)
                        }}
                      /> */}
                      <div className={`${styles.optionsContainer}`}>
                        <RoomOptions isClicked={isClicked} />
                      </div>
                    </div>
                  </a>
                </li>
              )
            }
          })}
      </ul>
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
