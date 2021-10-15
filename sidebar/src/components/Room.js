import React, { useState, useRef, useEffect } from "react"
import { navigateToUrl } from "single-spa"
import styles from "../styles/Drop.module.css"
import Badge from "./badge"
import hash from "../assets/icons/hash.svg"
import { AiOutlinePlusCircle } from "react-icons/ai"
import PluginRoomAddUser from "./PluginRoomAddUser"
import RoomOptions from "./RoomOptions"
import infoIcon from "./../assets/icons/info-icon.svg"

export default function Room({ items, isOpen }) {
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
    <ul className={`col-12 ps-4 ${styles.item__row} ${isOpen && styles.open}`}>
      {items.joined_rooms &&
        items.joined_rooms.map((room, index) => {
          if (room.room_name !== undefined) {
            return (
              // console.log(itemList)
              <li key={index} className={`row py-1 px-2 ${styles.item__list}`}>
                <a
                  className={`row ${styles.item_name}`}
                  href={room.room_url}
                  onClick={navigateToUrl}
                  ref={click}
                  style={{ textDecoration: "none" }}
                >
                  <div className={`col-10 d-flex align-items-center`}>
                    <img
                      ref={click}
                      className={`${styles.item__image}`}
                      src={room.room_image || hash.toString()}
                      onError={e => (e.target.src = hash.toString())}
                      alt="img"
                    />
                    <div
                      className={`mb-0 d-inline-flex align-items-center ${styles.dropDown__name}`}
                    >
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
                        {/* <RoomOptions isClicked={isClicked} /> */}
                      </div>
                    </div>
                  </div>
                  <div className={`col-2 d-flex align-items-center`}>
                    <Badge number={room.unread} />
                  </div>
                </a>
              </li>
            )
          }
        })}
    </ul>
  )
}
