import React from "react"
import styles from "../styles/adminowners.module.css"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { authAxios } from "../Utils/Api"

const AdminOwners = () => {
  return (
    <div className={styles.adminowners}>
      <h3 className={styles.heading}>Sort By</h3>

      {/* role and search */}
      <div className={styles.rolesearch}>
        <select className={styles.select}>
          <option value="Role">Role</option>
          <option value="FullName">FullName</option>
        </select>

        <div className={styles.search}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search Admins and Owners"
            className={styles.input}
          />
        </div>
      </div>
      {/* end of role and search */}
    </div>
  )
}

export default AdminOwners
