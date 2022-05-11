import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ProjectNameCSS from "../styles/ProjectName.module.css";
import { Button } from "./WorkspaceHome";
import { Helmet } from "react-helmet";

import { createDefaultChannel } from "../../../api/channels";

const ProjectName = ({ inputChangeHandler, value }) => {
  let match = useRouteMatch();

  let newOrgId, channelName, member_id;

  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
    newOrgId = localStorage.getItem("currentWorkspace");
    channelName = localStorage.getItem("input");
  }, []);

  const setChannelName = () => {
    newOrgId = localStorage.getItem("currentWorkspace");
    channelName = localStorage.getItem("input");
    member_id = localStorage.getItem("member_id");
    createDefaultChannel(newOrgId, channelName, member_id);
  };

  return (
    <div>
      <Helmet>
        <title>Choose Project Name - Zuri Chat</title>
      </Helmet>
      <article className={ProjectNameCSS.wrapper}>
        <div className={ProjectNameCSS.email}>
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>

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
              style={
                value.length > 1
                  ? {
                      backgroundColor: "#00b87c",
                      color: "white",
                      display: "flex",
                      justifyContent: "center"
                    }
                  : { display: "flex", justifyContent: "center" }
              }
            >
              Continue
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ProjectName;
