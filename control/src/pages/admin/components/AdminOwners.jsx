import React, { useState, useEffect } from "react"
import styles from "../styles/adminowners.module.css"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { authAxios } from "../Utils/Api"

const AdminOwners = ({ admins }) => {
  const [adminObj, setAdminObj] = useState(admins)
  const [filtered, setFiltered] = useState(null)

  const handleChange = e => {
    filterAdmins(e.target.value)
    //eslint-disable-next-line
    console.log(e)
  }

  const filterAdmins = text => {
    const filteredAdmins = adminObj.filter(eachObj => {
      const regex = new RegExp(`${text}`, "gi")
      return (
        eachObj.email.match(regex) ||
        eachObj.first_name.match(regex) ||
        eachObj.last_name.match(regex)
      )
    })
    setFiltered(filteredAdmins)
  }

  return (
    <div className={styles.adminowners}>
      <h3 className={styles.heading}>Sort By</h3>

      {/* role and search */}
      <div className={styles.rolesearch}>
        <select>
          <option value="Role">Role</option>
          <option value="FullName">FullName</option>
        </select>

        <div className={styles.search}>
          <FiSearch />
          <input
            placeholder="Search Admins and Owners"
            className={styles.input}
            onChange={handleChange}
            type="text"
          />
        </div>
      </div>
      {/* end of role and search */}
      {filtered !== null
        ? filtered.map(person => <div key={person._id}>{person.email}</div>)
        : adminObj.map(person => <div key={person._id}>{person.email}</div>)}
    </div>
  )
}

export default AdminOwners
