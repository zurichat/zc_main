import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { joiningPeriod } from "../data/membersData";
import JoiningMembers from "./JoiningMembers";
import { authAxios } from "../Utils/Api";
import axios from "axios";
import styles from "../styles/adminMembersTab.module.css";
// import { GetWorkspaceUsers } from "@zuri/utilities"
import { getUser, getCurrentWorkspace } from "../Utils/Common";
import { GetWorkspaceUsers } from "@zuri/utilities";
import DataTable, { createTheme } from "react-data-table-component";

const MembersTab = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    GetWorkspaceUsers().then(res => {
      setItems(Object.values(res));
    });
  }, []);
  const columns = [
    {
      name: "Name",
      selector: row => row.first_name,
      sortable: true
    },
    {
      name: "userID",
      selector: row => row._id,
      sortable: true
    },
    {
      name: "Username",
      selector: row => row.display_name,
      sortable: true
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true
    },
    {
      name: "Account created",
      selector: row => row.joined_at,
      sortable: true
    }
  ];

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
            return "active";
          } else if (row.status === "inactive") {
            return "inactive";
          } else if (row.status === "pending") {
            return "pending";
          }
        }}
      />
    </section>
  );
};

export default MembersTab;
