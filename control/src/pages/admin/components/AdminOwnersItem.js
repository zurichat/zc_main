import React from "react"
import styles from "../styles/adminowners.module.css"
import avatar from "../assets/avatar.svg"

const AdminOwnersItem = ({ user }) => {
  return (
    <div className={styles.owner}>
      <div className={styles.nameEmail}>
        <div className={styles.img}>
          <img
            src={user.image_url === "" ? avatar : user.image_url}
            alt="user"
          />
        </div>
        <div className={styles.details}>
          <p className={styles.name}>
            {user.first_name + " " + user.last_name}
          </p>
          <p className={styles.email}>{user.email}</p>
        </div>
      </div>
      <div className={styles.role}>
        <p className={styles.roleText}>{user.role}</p>
      </div>
    </div>
  )
}

export default AdminOwnersItem
