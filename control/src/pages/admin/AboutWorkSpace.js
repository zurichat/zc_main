import React, { useEffect, useState } from "react"
import AdminSettings from "./index"
import AboutWorkSpaceTabs from "./components/AboutWorkSpaceTabs"
import styles from "./styles/aboutWorkspace.module.css"
import { FiAlertOctagon } from "react-icons/fi"
import { authAxios } from "./Utils/Api"

const AboutWorkSpace = () => {
  const [orgDetails, setOrgdetails] = useState(null)
  const currentWorkspace = localStorage.getItem("currentWorkspace")

  if (!currentWorkspace) {
    return null

  }

  const getOrgDetails = async () => {
    const organization = await authAxios.get(
      `/organizations/${currentWorkspace}`
    )
    setOrgdetails(organization.data.data)
  }

  useEffect(async () => {
    getOrgDetails()
    //eslint-disable-next-line
  }, [])

  return (
    <AdminSettings>
      <div className={styles.workSpaceContainer}>
        <div className={styles.contentWrapper}>
          <h5 className={styles.contentHeading}>
            {" "}
            <FiAlertOctagon className={styles.icon} /> About This Workspace
          </h5>
          <AboutWorkSpaceTabs
            organizationDetails={orgDetails}
            currentWorkspace={currentWorkspace}
          />
        </div>
      </div>
    </AdminSettings>
  )
}

export default AboutWorkSpace
