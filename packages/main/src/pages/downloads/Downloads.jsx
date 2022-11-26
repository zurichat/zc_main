import React from "react";
import styles from "./downloads.module.css";

const Downloads = () => {
  return (
    <section className={styles.section}>
      <div className={styles.introText}>
        <h1>Zuri Download</h1>
        <p>Communicate and collaborate from wherever you are</p>
        <span>
          Invite your team to your workspace. Stay connected ,stay in sync, and
          explore ideas together from anywhere
        </span>
        <button type="button">Download</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Downloads;
