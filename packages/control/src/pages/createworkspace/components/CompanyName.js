import React, { useState, useEffect } from "react"
import CompanyNameCSS from "../styles/CompanyName.module.css"
import { Link, useRouteMatch } from "react-router-dom"
import axios from "axios"
import { Helmet } from "react-helmet"
import { Footer, FooterLink } from "./UserOrganization"
import Header from "../../../components/Header"
import { createDefaultChannel } from "../../../api/channels"

function CompanyName({ input }) {
  const [user, setUser] = useState(null)
  const [orgId, setOrgId] = useState(null)
  const [orgName, setOrgName] = useState("")
  let match = useRouteMatch()
  let newOrgId
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
      setUser(user)
    }
  }, [])

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

        localStorage.removeItem("userUserPassword")
        localStorage.removeItem("newUserEmail")
        newOrgId = res.data.data.organization_id

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
          )
          // .then(res => console.log(res))
          axios
            .get(
              `https://api.zuri.chat/organizations/${newOrgId}/members/?query=${user.email}`
            )
            .then(res => {
              // console.log("this is res: ", res);
              let member_id = res.data.data[0]._id
              // console.log(member_id);
              localStorage.setItem("member_id", member_id)
            })
        }, 500)

        localStorage.setItem("currentWorkspace", newOrgId)
        // createDefaultChannel(newOrgId)
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  return (
    <div>
      <Helmet>
        <title>Choose Company Name - Zuri Chat</title>
      </Helmet>
      <Header />
      <article className={CompanyNameCSS.wrapper}>
        {user ? (
          <div className={CompanyNameCSS.email}>
            <span>Signed in as {user.email}</span>
            <span className={CompanyNameCSS.change}>Change</span>
          </div>
        ) : null}

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
            <Link to={`${match.url}/step2`}>
              {" "}
              <button
                disabled={orgName.length < 3}
                style={
                  orgName.length > 2
                    ? {
                        backgroundColor: "#00b87c",
                        color: "white",
                        borderRadius: "3px"
                      }
                    : {
                        background: "rgba(0, 184, 124, 0.48)",
                        color: "white",
                        cursor: "not-allowed"
                      }
                }
                onClick={createUserOrg}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </article>
      <Footer fixBottom>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Terms</FooterLink>
        <FooterLink>Help Centre</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </Footer>
    </div>
  )
}

export default CompanyName
