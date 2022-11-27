import React, { useEffect } from "react";
import styles from "../admin-header/AdminHead.module.css";
import { Link } from "react-router-dom";
import { getCurrentWorkspace } from "../admin-header/utils/Common";
import { authAxios } from "../admin-header/utils/Api";
import { FiHome, FiMenu } from "react-icons/fi";

const AdminHeader = ({ setModal, openModal }) => {
  const currentWorkspace = getCurrentWorkspace();
  const [workspaceData, setWorkspaceData] = React.useState({});

  useEffect(() => {
    if (currentWorkspace) {
      authAxios
        .get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [currentWorkspace]);

  return (
    <div className={styles.adminHeader}>
      <Link style={{}} to="/admin/settings/home">
        <div className={styles.organizationLogo}>
          <FiHome className={styles.icons} />
          {workspaceData.name}
        </div>
      </Link>

      <div onClick={() => setModal(!openModal)} className={styles.mobileMenu}>
        <FiMenu className={styles.headerMenu} />
      </div>
    </div>
  );
};

export default AdminHeader;
