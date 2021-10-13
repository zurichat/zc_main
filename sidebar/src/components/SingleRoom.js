import {React, useState} from "react"
import { navigateToUrl } from "single-spa"
import styles from "../styles/Sidebar.module.css"
import Badge from "./badge"
import useThemeMode from "../../../topbar/customHooks/useThemeMode";

export default function SingleRoom({ image, name, link }) {
  const [nullValue, setnullValue] = useState(0)
  const {theme} = useThemeMode();
  return (
    <div className={`row mt-2 ${styles.sb__item}  ${theme}`}>
      <a
        className={`row mt-2 ${styles.sb__item} ${theme}`}
        href={link && link}
        onClick={navigateToUrl}
      >
        <div className={`col-10 d-flex align-items-center ${styles.sb__col}  ${theme}`}>
          <img className={`${styles.item__img}`} src={image} alt="icon" />
          <p className={`mb-0 ${styles.item_p}  ${theme}`}>{name}</p>
        </div>
        <div className={`col-2 d-flex align-items-center`}>
          {}
          {/* <Badge number={ <Badge number={details.joined_rooms[0].unread} />} /> */}
        </div>
      </a>
    </div>
  )
}
