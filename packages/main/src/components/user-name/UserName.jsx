import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../user-name/SettingsTab.module.css";

const UserName = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  let organization_id = JSON.parse(sessionStorage.organisations)[0].id;
  let user_member_id = JSON.parse(sessionStorage.organisations)[0].member_id;

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const updateUserName = event => {
    event.preventDefault();
    axios
      .patch(
        `https://api.zuri.chat/organizations/${organization_id}/members/${user_member_id}/profile`,
        {
          display_name: userName
        },

        {
          headers: {
            Authorization: "Bearer " + user.token
          }
        }
      )
      .then(res => console.log(res))
      .catch(error => console.log(error.response));
  };

  return (
    <div className={styles.passwordsection}>
      <form
        className="row d-flex flex-column"
        onSubmit={e => {
          updateUserName(e);
        }}
      >
        <div className="col-md-5 mt-2">
          <input
            type="text"
            placeholder="New Username"
            className="form-control"
            onChange={e => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4 mb-3 mt-3">
          <button className="btn">Save</button>
        </div>
        <p>
          Usernames are not part of your profile and are only required by
          Zurichat for technical reasons. Your username is mostly invisible to
          others but you can change it if you want to.
        </p>
      </form>
    </div>
  );
};

export default UserName;
