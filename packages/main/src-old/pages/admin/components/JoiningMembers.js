import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/adminMembersTab.module.css";

const JoiningMembers = ({ date, users, url }) => {
  return (
    <div className={styles.joining_members}>
      <div>
        <p>{date}</p>
      </div>
      <div>
        {users.map((user, index) => {
          const { image, username, accountType } = user;

          return (
            <div key={index} className={styles.members}>
              <Link to={`${url}`}>
                <img src={image} alt="" />
              </Link>
              <p>
                <Link to={`${url}`}>{username}</Link> joined the workspace{" "}
                <span>{accountType}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JoiningMembers;
