import React, {  useState } from "react"
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
<<<<<<< HEAD
    <div
      style={{
        display: !emptyRoom ? "block" : "none"
      }}
    >
=======
   
   <div className={`${styles.item__row} ${props.check && props.check.includes(true) && styles.open}`}>
>>>>>>> 07b34da11121660b1937e3d22434a9267e4d91cc
      {props.state && (
        <DropDown
          categoryName="Starred"
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      )}

      {props.state.sidebar &&
<<<<<<< HEAD
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
=======
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
>>>>>>> 07b34da11121660b1937e3d22434a9267e4d91cc
    </div>
  ) : (
    <SkeletonLoader />
  )
}
