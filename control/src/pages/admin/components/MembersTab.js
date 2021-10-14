import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { joiningPeriod } from "../data/membersData"
import JoiningMembers from "./JoiningMembers"
import { authAxios } from "../Utils/Api"
import styles from "../styles/adminMembersTab.module.css"
import { GetWorkspaceUsers } from "../../../zuri-control"
import { getUser, getCurrentWorkspace } from "../Utils/Common"
import DataTable from "react-data-table-component"

const MembersTab = () => {
  const currentWorkspace = getCurrentWorkspace()
  const [items, setItems] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch(
        "https://api.zuri.chat/organizations/614679ee1a5607b13c00bcb7/members"
      )
        .then(res => res.json())
        .then(data => {
          setItems(data.data)
          console.log(data.data, "why null")
        })
        .catch(err => console.log(err.message))
    }, 1000)
  }, [])
  const columns = [
    {
      name: "Account created",
      selector: row => row.joined_at,
      sortable: true
    },
    {
      name: "userID",
      selector: row => row._id,
      sortable: true
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true
    }
  ]

  return (
    <section className={styles.members_tab_container}>
      <DataTable
        title="Joining Members"
        columns={columns}
        data={items}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        paginationComponentOptions={{
          rowsPerPageText: "Members per page:",
          rangeSeparatorText: "of"
        }}
        rowClassName={row => {
          if (row.status === "active") {
            return "active"
          } else if (row.status === "inactive") {
            return "inactive"
          } else if (row.status === "pending") {
            return "pending"
          }
        }}
      />
    </section>
  )
}

export default MembersTab
