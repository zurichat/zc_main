import React from "react"
import { navigateToUrl } from "single-spa"
import styles from "../styles/Sidebar.module.css"
import Badge from "./badge"

export default function Room({ name, image }) {
  return (
    <div className={`row mt-2 ${styles.sb__item}`}>
      <div 
        className={`col-10 d-flex align-items-center ${styles.sb__col}`}
        >
        <img className={`${styles.item__img}`} src={image} alt="icon" />
        <p className={`mb-0 ${styles.item_p}`}>{name}</p>

        {/* 
          // Add Back to the destructure in Room() if need be {link, icon}
        {link ? (
          <a href={link} onClick={navigateToUrl} className={`${styles.addButton}`}>
            <img
              className={`${styles.addButton}`}
              src={icon}
              alt="icon"
              role="button"
            ></img>
          </a>
        ) : (
          <img
            className={`${styles.addButton}`}
            src={icon}
            alt="icon"
            role="button"
          ></img>
        )} */}
      </div>
      <div 
      className={`col-2 d-flex align-items-center`}
      >
      <Badge 
      // className={`${styles.addButton}`}
      />
      </div>
    </div>
  )
}
