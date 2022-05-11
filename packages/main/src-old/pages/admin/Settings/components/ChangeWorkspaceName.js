import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AdminSettings from "../..";
import styles from "../styles/changeworkspacename.module.css";
import Logo from "../../assets/default.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const ChangeWorkspaceName = () => {
  const [user, setUser] = useState(null);

  const [orgUrl, setOrgUrl] = useState(null);
  const [orgName, setOrgName] = useState("");

  let currentWorkspace = localStorage.getItem("currentWorkspace");

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
      setUser(user);
    }
  }, []);

  const updateName = () => {
    axios
      .patch(
        `https://api.zuri.chat/organizations/${currentWorkspace}/name`,
        {
          organization_name: orgName
        },

        {
          headers: {
            Authorization: "Bearer " + user.token
          }
        }
      )
      .then(res => {
        // Clears User Extracted Details from LS during Registration

        // setOrgId(res.data.data.organization_id)

        // Automatic Org Name Renaming From Default to new Org Name
        setTimeout(() => {
          axios.patch(
            `https://api.zuri.chat/organizations/${currentWorkspace}/url`,
            {
              url: orgUrl
            },
            {
              headers: {
                Authorization: "Bearer " + user.token
              }
            }
          );
          // .then(res => console.log(res))
        }, 500);
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  return (
    <AdminSettings>
      <div>
        <Helmet>
          <title>Settings - Zuri Chat</title>
        </Helmet>
      </div>

      <div className={styles["change_workspace"]}>
        <form action="">
          <div className={styles["change_workspace_header"]}>
            <div className={styles["change_workspace_logo"]}>
              <img src={Logo} alt="" />
            </div>

            <h1> Change Workspace Name</h1>
          </div>

          <div className={styles["change_workspace_content"]}>
            <section className={styles["change_workspace_section"]}>
              <div className={styles["change_workspace_div1"]}>
                <h2 className={styles["change_workspace_h2"]}>
                  Workspace Name
                </h2>

                <div className={styles["change_workspace_text"]}>
                  <div className={styles["change_workspace_flexp"]}>
                    <p className={styles["change_workspace_p"]}>
                      Your workspace name is displayed in menus and headings. It
                      will usually be (or include) the name of your company.
                    </p>
                  </div>
                  <div className={styles["inputdiv"]}>
                    <input
                      type="text"
                      placeholder="New Workspace name"
                      className={styles["change_workspace_input1"]}
                      onChange={e => setOrgName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles["change_workspace_section"]}>
              <div>
                <h2 className={styles["change_workspace_h2"]}>Workspace URL</h2>
              </div>

              <div className={styles["change_workspace_text"]}>
                <div>
                  <p className={styles["change_workspace_p"]}>
                    You can change your workspace’s URL (web address), but out
                    of courtesy to your fellow Zurichat users, please don’t do
                    this often :)
                  </p>
                </div>

                <div className={styles["change_workspace_flexinput"]}>
                  <div className={styles["change_workspace_flexsmallinput"]}>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="New Url"
                      className={styles["change_workspace_input2"]}
                      onChange={e => setOrgUrl(e.target.value)}
                    />
                    <span className={styles["change_workspace_span"]}>
                      .zuri.chat
                    </span>{" "}
                  </div>
                  <div>
                    <p className={styles["change_workspace_small"]}>
                      Your workspace URL can only contain lowercase letters,
                      numbers and dashes (and must start with a letter or
                      number).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles["change_workspace_section_last"]}>
              <div className={styles["Note_div"]}>
                <p className={styles["Note"]}>
                  Note: If you change your workspace’s URL, Zurichat will
                  automatically redirect from the old to the new address.
                  However, you should still make sure everyone in your workspace
                  knows about the change because the old name will be placed
                  back into the pool and could be used by some other workspace
                  in the future.
                </p>
              </div>

              <div className={styles["Link"]}>
                <Link to="/admin/settings">
                  <button
                    type="submit"
                    onClick={updateName}
                    className={styles["Button"]}
                  >
                    Save Changes
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </form>
      </div>
    </AdminSettings>
  );
};

export default ChangeWorkspaceName;
