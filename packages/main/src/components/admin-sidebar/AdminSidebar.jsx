import React, { useEffect } from "react";
import styles from "../admin-sidebar/AdminSidebar.module.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import avatar from "../admin-sidebar/assets/avatar.svg";
import zuriLogo from "../admin-sidebar/assets/zuriLogo.svg";
import grid from "../admin-sidebar/assets/grid.svg";
import bouy from "../admin-sidebar/assets/bouy.svg";
import la_rocket from "../admin-sidebar/assets/la_rocket.svg";
import { useTranslation } from "react-i18next";

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
import { getUser } from "../admin-sidebar/utils/Common";

const AdminSidebar = ({ setModal, openModal }) => {
  const user = getUser();
  const { t } = useTranslation();
  const history = useHistory();

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
          <h4 className={styles.info}>{t("admin_side_bar_signed")}</h4>
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
          {t("admin_side_bar_plans")}
        </Link>
        <Link
          onClick={() => setModal(!openModal)}
          className={styles.menuLink}
          to="/"
        >
          <img className={styles.menuImg} src={grid} alt="grid icon" />
          {t("admin_side_bar_wworkspaces")}
        </Link>
        <Link
          onClick={() => setModal(!openModal)}
          className={styles.menuLink}
          to="/"
        >
          <img className={styles.menuImg} src={bouy} alt="bouy icon" />
          {t("admin_side_bar_help")}
        </Link>
        <Link
          onClick={() => setModal(!openModal)}
          className={styles.menuLink}
          to="/"
        >
          <img className={styles.menuImg} src={zuriLogo} alt="zuri icon" />
          {t("admin_side_bar_launch")}
        </Link>
      </div>

      <div className={styles.sidebarMenu}>
        <h6 className={styles.sidebarHeading}>ACCOUNT</h6>
        <div className={styles.sidebarMenuItems}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModal(!openModal);
              history.goBack();
            }}
            className={styles.sidebarLink}
          >
            <FiCornerUpLeft className={styles.icon} />
            {t("admin_side_bar_back")}
          </div>
          <NavLink
            exact
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            activeClassName={styles.sidebarLinkActive}
            to="/admin/settings/home"
          >
            <FiHome className={styles.icon} />
            {t("admin_side_bar_home")}
          </NavLink>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/accountsProfile"
          >
            <FiUser className={styles.icon} />
            {t("admin_side_bar_account")}
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/"
          >
            <FiCloudLightning className={styles.icon} />
            {t("admin_side_bar_configure")}
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/stats"
          >
            <FiPieChart className={styles.icon} />
            {t("admin_side_bar_analytics")}
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/customize"
          >
            <FiScissors className={styles.icon} />
            {t("admin_side_bar_customize")}
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/aboutworkspace"
          >
            <FiAlertOctagon className={styles.icon} />
            {t("admin_side_bar_about")}
          </Link>
        </div>
      </div>
      <div className={styles.sidebarMenu}>
        <h6 className={styles.sidebarHeading}>{t("admin_side_bar_admin")}</h6>
        <div className={styles.sidebarMenuItems}>
          <NavLink
            exact
            onClick={() => setModal(!openModal)}
            activeClassName={styles.sidebarLinkActive}
            className={styles.sidebarLink}
            to="/admin/settings"
          >
            <FiSettings className={styles.icon} />
            {t("admin_side_bar_settings")}
          </NavLink>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/managemembers"
          >
            <FiBook className={styles.icon} />
            {t("admin_side_bar_manage")}
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/invitation"
          >
            <FiUserPlus className={styles.icon} />
            Invitations
          </Link>
          <Link
            onClick={() => setModal(!openModal)}
            className={styles.sidebarLink}
            to="/admin/settings/aboutworkspace"
          >
            <FiCheckSquare className={styles.icon} />
            {t("admin_side_bar_about")}
          </Link>
        </div>
      </div>
      <div className={styles.sidebarMenu}>
        <h6 className={styles.sidebarHeading}>{t("admin_side_bar_others")}</h6>
        <div className={styles.sidebarMenuItems}>
          <Link
            onClick={() => setModal(prev => !prev)}
            className={styles.sidebarLink}
            to="/admin/settings/managemembers"
          >
            {t("admin_side_bar_manage_mem")}
          </Link>
          <Link
            onClick={() => setModal(prev => !prev)}
            className={styles.sidebarLink}
            to="/legal"
          >
            {t("admin_side_bar_brand")}
          </Link>
          <Link
            onClick={() => setModal(prev => !prev)}
            className={styles.sidebarLink}
            to="/help"
          >
            {t("admin_side_bar_help")}
          </Link>
          <Link
            onClick={() => setModal(prev => !prev)}
            className={styles.sidebarLink}
            to="/pricing"
          >
            {t("admin_side_bar_pricing")}
          </Link>
          <Link className={styles.sidebarLink} to="/signout">
            {t("admin_side_bar_sign_out")}
            <FiLogOut className={styles.iconRight} />
          </Link>
        </div>
      </div>

      <div className={styles.sidebarFooter}>
        {t("admin_side_bar_made_with")}&nbsp;
        <BsFillHeartFill className={styles.heartIcon} /> &nbsp;{" "}
        {t("admin_side_bar_zurichat")}
      </div>
    </div>
  );
};

export default AdminSidebar;
