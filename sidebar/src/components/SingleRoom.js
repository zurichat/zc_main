import React from "react"
import { navigateToUrl } from "single-spa"
import styles from "../styles/Sidebar.module.css"
import Badge from "./badge"


export default function SingleRoom({ details }) {
  return (
    <div className={`row mt-2 ${styles.sb__item}`}>
      <a
       className={`row mt-2 ${styles.sb__item}`}
        href={details.joined_rooms && details.joined_rooms[0].room_url}
        onClick={navigateToUrl}
      >
        <div className={`col-10 d-flex align-items-center ${styles.sb__col}`}>
          <img
            className={`${styles.item__img}`}
            src={details.joined_rooms && details.joined_rooms[0].room_image}
            alt="icon"
          />
          <p className={`mb-0 ${styles.item_p}`}>{details.group_name}</p>
        </div>
        <div 
      className={`col-2 d-flex align-items-center`}
      >
      {details.joined_rooms && details.joined_rooms[0].unread &&
         ( details.joined_rooms[0].unread > 9 ? <Badge number="9+" /> : 
         <Badge number={details.joined_rooms[0].unread} />
          
          )}
           {/* <Badge number={ <Badge number={details.joined_rooms[0].unread} />} /> */}
      </div>
      </a>
    </div>
  )
}
