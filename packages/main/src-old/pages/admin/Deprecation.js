import React from "react";
import styles from "./styles/deprecation.module.css";

const Deprecation = () => {
  return (
    <div className={styles.deprecation}>
      <div className={styles.upper}>
        <h1 className={styles.caps}>
          Apps & Custom Integrations Impacted by Deprecations
        </h1>
        <div className={styles.upper_second}>
          <label htmlFor="Deprecations"></label>
          <select className={styles.deprecate}>
            <option value="events">
              Events API Authorizations Breaking Changes
            </option>
            <option value="legacy">Non-conversation Api</option>
            <option value="audi" selected>
              Legacy Workspace Apps
            </option>
          </select>

          <label htmlFor="apptype"></label>
          <select className={styles.app_type}>
            <option value="live">Live in App Directory</option>
            <option value="internal">Internal Apps</option>
            <option value="custom">Custom Integrations</option>
            <option value="audi" selected>
              Tester Tokens - legacy
            </option>
          </select>
          <div className={styles.export}>
            <button>Export</button>
          </div>
        </div>
      </div>

      <div className={styles.secondbox}>
        <div className={styles.legacy}>
          <h1 className={styles.caps}>Legacy Workspace Apps</h1>
          <div className={styles.firstline}>
            <p>
              We’re retiring a rare form of Zuri app that was in developer
              preview and discontinued in October 2018. These apps will
              completely stop functioning on August 24, 2022.
            </p>
          </div>
          <div className={styles.secondline}>
            <p>
              {" "}
              This list includes all legacy workspace apps, whether they are
              actively used or not.
            </p>
          </div>
        </div>

        <div className={styles.updates}>
          <div>
            <p className={styles.bold}>Date Announced</p>
            <p>March 15, 2021</p>
          </div>
          <div>
            <p className={styles.bold}>Deprecation Date</p>
            <p>August 24, 2022</p>
          </div>
        </div>
      </div>
      <div className={styles.link_announcement}>
        {" "}
        <a href="#">view announcement</a>
      </div>
      <div className={styles.list}>
        <p>Impacted App</p>
        <p>Collaborators</p>
        <p>Active users(last 28days)</p>
      </div>
      <div className={styles.apps_found}>No apps found</div>
    </div>
  );
};

export default Deprecation;
