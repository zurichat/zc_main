import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AdminSettings from "../../../src/pages/protected/admin-settings/AdminSettings";
import styles from "../change-workspace-name/ChangeWorkspaceName.module.css";
import Logo from "../change-workspace-name/assets/default.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ChangeWorkspaceName = () => {
  const [user, setUser] = useState(null);
  const { t } = useTranslation();
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
          <title>{t("change_workspace_name_title")}</title>
        </Helmet>
      </div>

      <div className={styles["change_workspace"]}>
        <form action="">
          <div className={styles["change_workspace_header"]}>
            <div className={styles["change_workspace_logo"]}>
              <img src={Logo} alt="" />
            </div>

            <h1> {t("change_workspace_name_change_name")}</h1>
          </div>

          <div className={styles["change_workspace_content"]}>
            <section className={styles["change_workspace_section"]}>
              <div className={styles["change_workspace_div1"]}>
                <h2 className={styles["change_workspace_h2"]}>
                  {t("change_workspace_name_workspace_name")}
                </h2>

                <div className={styles["change_workspace_text"]}>
                  <div className={styles["change_workspace_flexp"]}>
                    <p className={styles["change_workspace_p"]}>
                      {t("change_workspace_name_your_workspace_name")}
                    </p>
                  </div>
                  <div className={styles["inputdiv"]}>
                    <input
                      type="text"
                      placeholder={t(
                        "change_workspace_name_workspace_placeholder"
                      )}
                      className={styles["change_workspace_input1"]}
                      onChange={e => setOrgName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles["change_workspace_section"]}>
              <div>
                <h2 className={styles["change_workspace_h2"]}>
                  {t("change_workspace_name_workspace_url")}
                </h2>
              </div>

              <div className={styles["change_workspace_text"]}>
                <div>
                  <p className={styles["change_workspace_p"]}>
                    {t("change_workspace_name_you_can")}
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
                      {t("change_workspace_name_-zurichat")}
                    </span>{" "}
                  </div>
                  <div>
                    <p className={styles["change_workspace_small"]}>
                      {t("change_workspace_name_instruction")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles["change_workspace_section_last"]}>
              <div className={styles["Note_div"]}>
                <p className={styles["Note"]}>
                  {t("change_workspace_name_note")}
                </p>
              </div>

              <div className={styles["Link"]}>
                <Link to="/admin/settings">
                  <button
                    type="submit"
                    onClick={updateName}
                    className={styles["Button"]}
                  >
                    {t("change_workspace_name_save")}
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
