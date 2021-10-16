import React, { useState, useEffect } from "react"
import styles from "../styles/adminowners.module.css"
import { FiSearch } from "react-icons/fi"
import AdminOwnersItem from "./AdminOwnersItem"

const AdminOwners = ({ admins }) => {
  const [adminObj, setAdminObj] = useState(admins)
  const [filtered, setFiltered] = useState(null)

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

  const handleChange = e => {
    filterAdmins(e.target.value)
    //eslint-disable-next-line
    console.log(e)
  }

  // const handleSort = e => {
  //   let sort
  //   if (e.target.value === "Role") {
  //     sort = adminObj.sort((a, b) => a.email - b.email)
  //   } else if (e.target.value === "FullName") {
  //     sort = adminObj.sort((a, b) => a.first_name - b.firstName)
  //   }
  // }

  return (
    <div className={styles.adminowners}>
      <h3 className={styles.heading}>Sort By</h3>

      {/* role and search */}
      <div className={styles.rolesearch}>
        <select>
          <option value="Role">Role</option>
          <option value="FullName">FullName</option>
        </select>

        <form className={styles.search}>
          <FiSearch className={styles.icon} />
          <input
            placeholder="Search Admins and Owners"
            className={styles.input}
            onChange={handleChange}
            type="text"
          />
        </form>
      </div>
      {/* end of role and search */}
      {filtered !== null
        ? filtered.map(person => (
            <AdminOwnersItem key={person._id} user={person} />
          ))
        : adminObj.map(person => (
            <AdminOwnersItem key={person._id} user={person} />
          ))}
    </div>
  )
}

export default AdminOwners
