import React from "react"
import { navigateToUrl } from "single-spa"
import styles from "../styles/Sidebar.module.css"
import Badge from "./badge"

export default function SingleRoom({ image, name, link }) {
  return (
    <div className={`row mt-2 ${styles.sb__item}`}>
      <a
        className={`row mt-2 ${styles.sb__item}`}
        href={link && link}
        onClick={navigateToUrl}
      >
        <div className={`col-10 d-flex align-items-center ${styles.sb__col}`}>
          <img className={`${styles.item__img}`} src={image} alt="icon" />
          <p className={`mb-0 ${styles.item_p} sb--link`}>{name}</p>
        </div>
        <div className={`col-2 d-flex align-items-center`}>
          {}
          {/* <Badge number={ <Badge number={details.joined_rooms[0].unread} />} /> */}
        </div>
      </a>
    </div>
  )
}
