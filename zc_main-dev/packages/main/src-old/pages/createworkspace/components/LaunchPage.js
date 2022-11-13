import React, { useState, useEffect } from "react";
import LaunchPageCSS from "../styles/LaunchPage.module.css";
import { Helmet } from "react-helmet";
import { goToDefaultChannel } from "../../../api/channels";

function LaunchPage() {
  const [user, setUser] = useState(null);
  const [projectname, setProjectname] = useState(
    localStorage.getItem("input") || "alpha"
  );
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
    goToDefaultChannel();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Launch workspace - Zuri Chat</title>
      </Helmet>
      <article className={LaunchPageCSS.wrapper}>
        <div className={LaunchPageCSS.email}>
          {" "}
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>
        <div className={LaunchPageCSS.centerWrapper}>
          <div className={LaunchPageCSS.logoContainer}>
            <span className={LaunchPageCSS.zuriLogo}></span> Zuri Chat
          </div>
          <div className={LaunchPageCSS.bigLetter}>
            <h1>{projectname.slice(0, 2).toUpperCase()}</h1>
          </div>
          {/* Desktop View */}
          <h1 className={LaunchPageCSS.brandhub}> Launching {projectname}</h1>

          <div className={LaunchPageCSS.openZuriDesktop}>
            Click <a href="/choose-workspace"> "Open Zuri Chat"</a> to launch
            the desktop app
          </div>
          {/* end */}
          <a href="/choose-workspace" className={LaunchPageCSS.openZuri}>
            Open Zuri Chat App
          </a>
        </div>
      </article>
    </div>
  );
}

export default LaunchPage;
