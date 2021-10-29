import React, { useState, useEffect } from "react"
import { Link, useRouteMatch } from "react-router-dom"
import ProjectNameCSS from "../styles/ProjectName.module.css"
import { Button } from "./WorkspaceHome"
import { Helmet } from "react-helmet"
import { Footer, FooterLink } from "./UserOrganization"
import { createDefaultChannel } from "../../../api/channels"
import Header from "../../../components/Header"

const ProjectName = ({ inputChangeHandler, value }) => {
  let match = useRouteMatch()

  let newOrgId, channelName, member_id

  const [user, setUser] = useState(null)
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    if (user) {
      setUser(user)
    }
    newOrgId = localStorage.getItem("currentWorkspace")
    channelName = localStorage.getItem("input")
  }, [])

  const setChannelName = () => {
    newOrgId = localStorage.getItem("currentWorkspace")
    channelName = localStorage.getItem("input")
    member_id = localStorage.getItem("member_id")
    createDefaultChannel(newOrgId, channelName, member_id)
  }

  return (
    <div>
      <Helmet>
        <title>Choose Project Name - Zuri Chat</title>
      </Helmet>
      <Header />
      <article className={ProjectNameCSS.wrapper}>
        {user ? (
          <div className={ProjectNameCSS.email}>
            <span>Signed in as {user.email}</span>
            <span className={ProjectNameCSS.change}>Change</span>
          </div>
        ) : null}

        <div className={ProjectNameCSS.centerWrapper}>
          <h4> Step 2 of 3</h4>
          <h1>What is your team working on right now ?</h1>
          <h4>
            This could be anything- a project, campiagn, event or the deal you
            are trying to close
          </h4>
          <input
            type="text"
            placeholder="Ex: Q1 Budget, Project Alpha"
            maxLength="80"
            className={ProjectNameCSS.inputBox}
            onChange={inputChangeHandler}
            value={value}
          />
          <span className={ProjectNameCSS.charLimit}>
            Maximum 80 characters
          </span>

          <Link to={`${match.url}/step3`}>
            <Button
              onClick={setChannelName}
              disabled={value.length < 3}
              style={
                value.length > 2
                  ? {
                      backgroundColor: "#00b87c",
                      color: "white",
                      borderRadius: "3px"
                    }
                  : {
                      backgroundColor: "rgba(0, 184, 124, 0.48)",
                      color: "white",
                      cursor: "not-allowed"
                    }
              }
            >
              Continue
            </Button>
          </Link>
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

export default ProjectName
