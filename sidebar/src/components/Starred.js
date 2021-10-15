import React, {  useState } from "react"
import DropDown from "./Drop"
import styles from "../styles/Drop.module.css"
import Room from "./Room"
import RoomItem from "./RoomItem"
import SkeletonLoader from "./SkeletonLoader"

export default function Starred(props) {
  const [isOpen, setOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  const toggleDropdown = () => setOpen(!isOpen)

  setChecked(props.check.includes(true) ? true : false)
  return props.state.sidebar ? (
    <div className={`${styles.item__row} ${checked && styles.open}`}>
      {props.state && (
        <DropDown
          categoryName="Starred"
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      )}

      {props.state.sidebar &&
       Object.keys(props.state.sidebar).map((plugin, idx) =>{
           
           return(
            //    <h1 key={idx}>all good</h1>
        <ul 
        key={idx}
        className={`col-12 ps-4 ${styles.item__row} ${isOpen && styles.open}`}
        >
        {props.state.sidebar[plugin].starred_rooms &&
         props.state.sidebar[plugin].starred_rooms.map((room, idx) => {
            if (room.room_name !== undefined) {
              return (
                  <RoomItem 
                  room={room}
                  key={idx}
                  />
              )
            }
          })}
      </ul>
      )
    })

      }
      {/* {props.state.sidebar &&
        props.name &&
        Object.keys(props.state.sidebar).map((plugin, index) => {
          
            let category = props.state.sidebar[plugin].starred
          
          return category && category ===  "starred" ? (
            <Room
              isOpen={isOpen}
              itemName={props.name}
              id={props.state.sidebar.name}
              key={index}
              items={props.state.sidebar[plugin]}
            >
            <RoomItem />
            </Room>
          ) : null
        })} */}
    </div>
  ) : (
    <SkeletonLoader />
  )
}
