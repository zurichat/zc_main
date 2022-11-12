import React from "react";
import { Helmet } from "react-helmet";

import styles from "./styles/weeklySummary.modules.css";
import logo from "./assets/logo.svg";

const WeeklySummary = () => {
  return (
    <>
      <article className={styles.summary_wrapper}>
        <Helmet>
          <title>Weekly Summary - Zuri Chat</title>
        </Helmet>
        <header>
          <img src={logo} alt="Zuri logo" />
          <h3>Sunday, Sept 5th - Saturday, Sept 11th</h3>
        </header>

        <section className={styles.summary_intro}>
          <p>
            Hope you had a good weekend! Here’s a summary of what happened in
            your workspace last week:
          </p>
          <p>
            <strong>Current workspace members</strong>
            <br />
            <strong>Total members: 20</strong>
            <br />
            <em>Invite more people</em>
          </p>
        </section>
        <section className={styles.summary_admin_roles}>
          <h4>Administrative roles</h4>
          <p>
            1 workspace owner: Digitaldesigner (Abraham) Remember, its important
            to keep the
            <em>list of owners and admins up</em>
            to date since they control the workspace
          </p>
        </section>
        <section className={styles.summary_workspace_stat}>
          <p>
            Your members sent a total of 250 messages last week ( that’s 32 more
            than the week before). Of those, 10% were in public channels, 26% in
            private channels, and 64% were direct messages. Your members also
            uploaded 2 files ( that’s 1 more than the week before).
          </p>
          <p>
            Looking for more stats? Check out{" "}
            <em>your workspace’s stats page</em>
          </p>
        </section>
        <section className={styles.summary_ignore}>
          <p>
            If you didn’t request this email, there’s nothing to worry about —
            you can safely ignore it.
          </p>
        </section>
      </article>
      <footer></footer>
    </>
  );
};
