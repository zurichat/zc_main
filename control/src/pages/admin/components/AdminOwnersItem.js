import React from "react"
import styles from "../styles/adminOwnersItem.module.css"
import avatar from "../assets/avatar.svg"

const AdminOwnersItem = ({ user }) => {
  return (
    <>
      <div className={styles.adminandOwners}>
        <div className={styles.peopleAvatar}>
          <button className={styles.buttonAvatar}>
            <img
              // src="https://www.entorm.com/blog/wp-content/uploads/2020/12/mark.jpg"
              src={user.image_url === "" ? avatar : user.image_url}
              alt="user"
              className="imgAvatar"
            />
          </button>
        </div>
        <div className={styles.admin}>
          <p className={styles.adminName}>
            {user.first_name + " " + user.last_name}{" "}
          </p>
          <div className={styles.details}>
            <span className={styles.spanName}>{user.first_name}</span>
            <span className={styles.spanDot}>.</span>
            <span className={styles.spanEmail}>{user.email}</span>
          </div>

          <p className={styles.status}>{user.role}</p>
        </div>
      </div>
    </>
  )
}

export default AdminOwnersItem
