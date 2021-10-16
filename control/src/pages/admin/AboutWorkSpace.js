import React, { useEffect, useState } from "react"
import AdminSettings from "./index"
import AboutWorkSpaceTabs from "./components/AboutWorkSpaceTabs"
import styles from "./styles/aboutWorkspace.module.css"
import { FiAlertOctagon } from "react-icons/fi"
import { authAxios } from "./Utils/Api"

const AboutWorkSpace = () => {
  const [orgDetails, setOrgdetails] = useState({})
  const [items, setItems] = useState(null)
  const currentWorkspace = localStorage.getItem("currentWorkspace")
  const [filtered, setFiltered] = useState(null)

  if (!currentWorkspace) {
    return null
  }

  const getOrgDetails = async () => {
    try {
      const organization = await authAxios.get(
        `/organizations/${currentWorkspace}`
      )
      if (!organization) {
        return null
      }

      setOrgdetails(organization.data.data)
    } catch (err) {
      if (err) throw err
    }
  }

  const workspaceuser = async () => {
    try {
      const response = await authAxios.get(
        `/organizations/${currentWorkspace}/members`
      )

      if (!response) {
        return null
      }

      const users = response.data.data

      setItems(users)

      //eslint-disable-next-line
      console.log(users)
    } catch (error) {
      if (error) throw error
    }
  }

  const filterOwner = () => {
    const filter = items.filter(function (item) {
      return item.role === "owner" || item.role === "member"
    })
    setFiltered(filter)
  }

  useEffect(() => {
    getOrgDetails()
    workspaceuser()
    //eslint-disable-next-line
  }, [])

  return (
    <AdminSettings>
      <div className={styles.workSpaceContainer}>
        <div className={styles.contentWrapper}>
          <h5 className={styles.contentHeading}>
            {" "}
            <FiAlertOctagon
              className={styles.icon}
              onClick={filterOwner}
            />{" "}
            About This Workspace
          </h5>
          <AboutWorkSpaceTabs
            organizationDetails={orgDetails}
            currentWorkspace={currentWorkspace}
            admins={filtered}
          />
        </div>
      </div>
    </AdminSettings>
  )
}

export default AboutWorkSpace
