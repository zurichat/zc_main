import React, { useState, useEffect } from "react";
import CompanyNameCSS from "../styles/CompanyName.module.css";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { createDefaultChannel } from "../../../api/channels";

function CompanyName({ input }) {
  const [user, setUser] = useState(null);
  const [orgId, setOrgId] = useState(null);
  const [orgName, setOrgName] = useState("");
  let match = useRouteMatch();
  let newOrgId;
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
      setUser(user);
    }
  }, []);

  // Function to Create A new Organization
  const createUserOrg = () => {
    axios
      .post(
        "https://api.zuri.chat/organizations",
        { creator_email: user.email },
        {
          headers: {
            Authorization: "Bearer " + user.token
          }
        }
      )
      .then(res => {
        // Clears User Extracted Details from LS during Registraion

        localStorage.removeItem("userUserPassword");
        localStorage.removeItem("newUserEmail");
        newOrgId = res.data.data.organization_id;

        // Automatic Org Name Renaming From Default to new Org Name
        setTimeout(() => {
          axios.patch(
            `https://api.zuri.chat/organizations/${res.data.data.organization_id}/name`,
            {
              organization_name: orgName
            },
            {
              headers: {
                Authorization: "Bearer " + user.token
              }
            }
          );
          // .then(res => console.log(res))
          axios
            .get(
              `https://api.zuri.chat/organizations/${newOrgId}/members/?query=${user.email}`
            )
            .then(res => {
              // console.log("this is res: ", res);
              let member_id = res.data.data[0]._id;
              // console.log(member_id);
              localStorage.setItem("member_id", member_id);
            });
        }, 500);
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Choose Company Name - Zuri Chat</title>
      </Helmet>
      <article className={CompanyNameCSS.wrapper}>
        <div className={CompanyNameCSS.email}>
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>

        <div className={CompanyNameCSS.centerWrapper}>
          <h4> Step 1 of 3</h4>
          <h1>What is the name of your company or team ?</h1>
          <h4>
            This will be the name of your workspace. Choose something that your
            team will recognise
          </h4>
          <input
            type="text"
            placeholder="Ex: The Brand Hub"
            maxLength="50"
            onChange={e => setOrgName(e.target.value)}
            className={CompanyNameCSS.inputBox}
          />
          <span className={CompanyNameCSS.charLimit}>
            Maximum 50 characters
          </span>
          <div className={CompanyNameCSS.buttonContainer}>
            <Link to="/create-workspace">
              {" "}
              <button style={{ backgroundColor: "#f40101", color: "white" }}>
                Cancel
              </button>
            </Link>
            <Link to={`${match.url}/step2`}>
              {" "}
              <button
                disabled={orgName.length < 3}
                style={
                  orgName.length > 1
                    ? { backgroundColor: "#00b87c", color: "white" }
                    : { backgroundColor: "revert", cursor: "not-allowed" }
                }
                onClick={createUserOrg}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CompanyName;
