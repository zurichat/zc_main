import React from "react"
import styles from "../styles/Sidebar.module.css"


export default function Room({ name, image, style, link }) {
  const active = () => {
    let heading = document.getElementById("side")
    let row = heading.getElementsByClassName("row")
  
    for (let i = 0; i < row.length; i++) {
      row[i].addEventListener("click", function () {
        var current = document.getElementsByClassName(`${styles.sb__active}`)
        var highlight = document.getElementsByClassName(`${styles.sb__itemdisabled}`)
   
        current[0].className = current[0].className.replace(
          ` ${styles.sb__active}`,
          ""
        )
        this.className += ` ${styles.sb__active}`
       
        highlight[0].className = highlight[0].className.replace(
          ` ${styles.sb__itemdisabled}`,
          ""
        )
        this.className += ` ${styles.sb__itemdisabled}`
      })
    }
  }
  return (
    <div id="side">
    <div className={style} onClick={active}>
      <div
        className={`col-12 ps-3 d-flex align-items-center ${styles.sb__col}`}
      >
        <img className={`${styles.item__img}`} src={image} alt="icon" />
        <p className={`mb-0 ${styles.item_p}`}>{name}</p>
      </div>
    </div>
    </div>
  )
}
