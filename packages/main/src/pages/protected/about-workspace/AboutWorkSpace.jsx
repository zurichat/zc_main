import React, { useEffect, useState } from "react";
import AdminSettings from "../admin-settings/AdminSettings";
import AboutWorkSpaceTabs from "../../../components/about-workspace-tabs/AboutWorkSpaceTabs";
import styles from "../about-workspace/AboutWorkspace.module.css";
import { FiAlertOctagon } from "react-icons/fi";
import { authAxios } from "../about-workspace/utils/Api";

const AboutWorkSpace = () => {
  const [orgDetails, setOrgdetails] = useState({});
  const [items, setItems] = useState(null);
  const currentWorkspace = localStorage.getItem("currentWorkspace");

  if (!currentWorkspace) {
    return null;
  }

  const getOrgDetails = async () => {
    try {
      const organization = await authAxios.get(
        `/organizations/${currentWorkspace}`
      );
      if (!organization) {
        return null;
      }

      setOrgdetails(organization.data.data);
    } catch (err) {
      if (err) throw err;
    }
  };

  const workspaceuser = async () => {
    try {
      const response = await authAxios.get(
        `/organizations/${currentWorkspace}/members`
      );

      if (!response) {
        return null;
      }

      const users = response.data.data.filter(function (item) {
        return item.role === "owner" || item.role === "admin";
      });

      setItems(users);
    } catch (error) {
      if (error) throw error;
    }
  };

  useEffect(() => {
    getOrgDetails();
    workspaceuser();
  }, []);

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
            admins={items}
          />
        </div>
      </div>
    </AdminSettings>
  );
};

export default AboutWorkSpace;
