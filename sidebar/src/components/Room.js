import React from "react"
import styles from "../styles/Sidebar.module.css"

export default function Room({ name, image, link, icon }) {
  return (
    <div className={`row mt-2 ${styles.sb__item}`}>
      <div
        className={`col-12 d-flex align-items-center ${styles.sb__col}`}
      >
        <img className={`${styles.item__img}`} src={image} alt="icon" />
        <p className={`mb-0 ${styles.item_p}`}>{name}</p>
        <img
          className={`${styles.addButton}`}
          src={icon}
          alt="icon"
          role="button"
        />
      </div>
    </div>
  )
}
