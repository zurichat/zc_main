import React from "react";
import styles from "../styles/overviewWorkspace.module.css";
import avatar from "../assets/avatar.svg";
import { Link } from "react-router-dom";
const OverviewWorkspace = ({ organizationDetails, currentWorkspace }) => {
  if (!organizationDetails) {
    return "Loading...";
  }
  const { name, workspace_url, version, created_at, logo_url } =
    organizationDetails;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const date = new Date(Date.parse(created_at)).toLocaleDateString(
    "en-US",
    options
  );
  return (
    <div>
      <div className={styles.details}>
        <div className={styles.imgContainer}>
          <img src={logo_url === "" ? avatar : logo_url} alt="" />
        </div>
        <div className={styles.name}>
          <h3 className={styles.h3}>{name}</h3>
          <Link
            href={workspace_url}
            className={styles.link}
            rel="noreferrer"
            target="_blank"
          >
            {workspace_url}
          </Link>
        </div>
      </div>
      <div className={styles.workspacePlan}>
        <h3 className={styles.workspaceHeader}>Plan type</h3>
        <p className={styles.workspacePara}>{version}</p>
      </div>
      <div className={styles.workspaceDate}>
        <h3 className={styles.workspaceDateHeader}>Date created</h3>
        <h4 className={styles.workspaceDatePara}>{date}</h4>
      </div>
      <div className={styles.workspaceTerms}>
        <h3 className={styles.workspaceTermHeader}>Terms of service</h3>
        <Link
          to="/privacy"
          rel="noreferrer"
          target="_blank"
          className={styles.review}
        >
          Review
        </Link>
      </div>
    </div>
  );
};
export default OverviewWorkspace;
