import React, { useEffect } from "react";
import styles from "../styles/adminSidebar.module.css";
import { Link, NavLink } from "react-router-dom";

// image
import avatar from "../assets/avatar.svg";

// icons

import zuriLogo from "../assets/zuriLogo.svg";
import grid from "../assets/grid.svg";
import bouy from "../assets/bouy.svg";
import la_rocket from "../assets/la_rocket.svg";

import {
  FiAlertCircle,
  FiAlertOctagon,
  FiBook,
  FiCheckSquare,
  FiCloudLightning,
  FiCornerUpLeft,
  FiCreditCard,
  FiExternalLink,
  FiHome,
  FiLogOut,
  FiPieChart,
  FiScissors,
  FiSettings,
  FiUser,
  FiUserPlus,
  FiUsers
} from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { getUser } from "../Utils/Common";

const AdminSidebar = ({ setModal, openModal }) => {
  const user = getUser();

  return (
    <div
      className={
        openModal ? styles.sidebarWrapperActive : styles.sidebarWrapper
      }
    >
      <GrFormClose
        onClick={() => setModal(!openModal)}
        className={styles.closeIcon}
      />
      <div className={styles.userDetails}>
        <img className={styles.avatar} src={avatar} alt="avatar icon" />
        <div className={styles.user}>
          <h4 className={styles.info}>SIGNED IN AS</h4>
          <p className={styles.name}>
            {user.email.slice(0, 15)}
            {user.email.length > 16 ? "..." : ""}
          </p>
        </div>
      </div>

      <div className={styles.mobileTopMenu}>
        <Link
          onClick={() => setModal(!openModal)}
          className={styles.menuLink}
          to="/"
        >
          <img className={styles.menuImg} src={la_rocket} alt="rocket icon" />
          Plans
        </Link>
        <Link
          onClick={() => setModal(!openModal)}
          className={styles.menuLink}
          to="/"
        >
          <img className={styles.menuImg} src={grid} alt="grid icon" />
          Workspaces
        </Link>
        <Link
          onClick={() => setModal(!openModal)}
          className={styles.menuLink}
          to="/"
        >
          <img className={styles.menuImg} src={bouy} alt="bouy icon" />
          Help
        </Link>
        <Link
          onClick={() => setModal(!openModal)}
          className={styles.menuLink}
          to="/"
        >
          <img className={styles.menuImg} src={zuriLogo} alt="zuri icon" />
          Launch
        </Link>
      </div>

      <div className={styles.sidebarMenu}>
        <h6 className={styles.sidebarHeading}>ACCOUNT</h6>
        <div className={styles.sidebarMenuItems}>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/home"
          >
            <FiCornerUpLeft className={styles.icon} />
            Back to Zuri Chat
          </Link>
          <NavLink
            exact
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            activeClassName={styles.sidebarLinkActive}
            to="/admin/settings/home"
          >
            <FiHome className={styles.icon} />
            Home
          </NavLink>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/accountsProfile"
          >
            <FiUser className={styles.icon} />
            Account & Profile
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            <FiCloudLightning className={styles.icon} />
            Configure Apps
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/stats"
          >
            <FiPieChart className={styles.icon} />
            Analytics
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/customize"
          >
            <FiScissors className={styles.icon} />
            Customize
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/aboutworkspace"
          >
            <FiAlertOctagon className={styles.icon} />
            About this workspace
          </Link>
        </div>
      </div>
      <div className={styles.sidebarMenu}>
        <h6 className={styles.sidebarHeading}>ADMINISTRATION</h6>
        <div className={styles.sidebarMenuItems}>
          <NavLink
            exact
            onClick={() => setModal(!openModal)}
            activeClassName={styles.sidebarLinkActive}
            className={styles.sidebarLink}
            to="/admin/settings"
          >
            <FiSettings className={styles.icon} />
            Settings & permission
          </NavLink>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/managemembers "
          >
            <FiBook className={styles.icon} />
            Manage members
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/usergroups"
          >
            <FiUsers className={styles.icon} />
            User groups
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/invites"
          >
            <FiUserPlus className={styles.icon} />
            Invitations
          </Link>
          <NavLink
            exact
            onClick={() => setModal(!openModal)}
            activeClassName={styles.sidebarLinkActive}
            className={styles.sidebarLink}
            to="/admin/settings/billings"
          >
            <FiCreditCard className={styles.icon} />
            Billings
          </NavLink>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            <FiScissors className={styles.icon} />
            Authentication
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/deprecation"
          >
            <FiScissors className={styles.icon} />
            Deprecation
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            <FiCheckSquare className={styles.icon} />
            About this workspace
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            <FiAlertCircle className={styles.icon} />
            Support for Transport layer security
          </Link>
        </div>
      </div>
      <div className={styles.sidebarMenu}>
        <h6 className={styles.sidebarHeading}>OTHERS</h6>
        <div className={styles.sidebarMenuItems}>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            Tour
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/managemembers "
          >
            Manage members
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            Brand guidelines
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/help"
          >
            Help
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            API
            <FiExternalLink className={styles.iconRight} />
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/components/gateways"
          >
            Gateways
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/pricing"
          >
            Pricing
          </Link>
          <Link className={styles.sidebarLink} to="/blog">
            Our blog
          </Link>
          <Link className={styles.sidebarLink} to="/signout">
            Sign out
            <FiLogOut className={styles.iconRight} />
          </Link>
        </div>
      </div>

      <div className={styles.sidebarFooter}>
        Made with &nbsp;
        <BsFillHeartFill className={styles.heartIcon} /> &nbsp; by zuri chat
      </div>
    </div>
  );
};

export default AdminSidebar;
