import React, { useEffect } from "react";

import styles from "../styles/adminHead.module.css";
import { Link } from "react-router-dom";

// icons
import zuriLogo from "../assets/zuriLogo.svg";
import grid from "../assets/grid.svg";
import bouy from "../assets/bouy.svg";
import la_rocket from "../assets/la_rocket.svg";
import { getCurrentWorkspace } from "../Utils/Common";
import { authAxios } from "../Utils/Api";

// icon
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
          // console.log(res.data.data)
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
      {/* <div className={styles.menu}>
        <Link className={styles.menuLink} to="/">
          <img className={styles.menuImg} src={la_rocket} alt="rocket icon" />
          Plans
        </Link>
        <Link className={styles.menuLink} to="/">
          <img className={styles.menuImg} src={grid} alt="grid icon" />
          Workspaces
        </Link>
        <Link className={styles.menuLink} to="/">
          <img className={styles.menuImg} src={bouy} alt="bouy icon" />
          Help
        </Link>
        <Link className={styles.menuLink} to="/">
          <img className={styles.menuImg} src={zuriLogo} alt="zuri icon" />
          Launch
        </Link>
      </div> */}

      <div onClick={() => setModal(!openModal)} className={styles.mobileMenu}>
        <FiMenu className={styles.headerMenu} />
      </div>
    </div>
  );
};

export default AdminHeader;
