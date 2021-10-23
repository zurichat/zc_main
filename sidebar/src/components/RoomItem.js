import React, { useState, useEffect, useRef } from "react"
import styles from "../styles/Drop.module.css"
import hash from "../assets/icons/hash.svg"
import { navigateToUrl } from "single-spa"
import Badge from "./badge"
import RoomOptions from "./RoomOptions"

const RoomItem = ({ room, baseUrl }) => {
  const [click, isClicked] = useClick()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  function useClick() {
    const [value, setValue] = useState(false)

    const ref = useRef(null)

    const RightClick = e => {
      e.preventDefault()
      const clickX = e.clientX
      const clickY = e.clientY
      setPosition({ x: clickX, y: clickY })
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
    <li ref={click} className={`row py-1 px-2 ${styles.item__list}`}>
      <a
        href={room.room_url}
        className={`row ${styles.item_name}`}
        style={{ textDecoration: "none" }}
        onClick={navigateToUrl}
      >
        <div className={`col-10 d-flex align-items-center`}>
          <img
            // ref={click}
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
          </div>
        </div>
        <div className={`col-2 d-flex align-items-center`}>
          {/* {room && room.unread &&
         ( room.unread > 9 ? <Badge number="9+" /> : 
         <Badge number={room.unread} />
          
          )} */}
          <Badge number={room.unread} />
        </div>
      </a>
      <div className={`${styles.optionsContainer}`}>
        <RoomOptions room={room} baseUrl={baseUrl} isClicked={isClicked} position={position} />
      </div>
    </li>
  )
}

export default RoomItem
