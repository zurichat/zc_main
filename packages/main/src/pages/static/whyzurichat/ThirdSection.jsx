import React from "react";
import styles from "./why.module.css";
import globe from "./images/globe.svg";
export default function ThirdSection() {
  return (
    <section>
      <div className={styles.why_head}>
        <article>
          <h3 style={{ lineHeight: "1.1em" }}>
            Zuri Keeps everyone connected and productive
          </h3>
          <p>
            Teams using different groups of people at the same time. A real-time
            messaging app brings everyone together on one platform. Gain
            visibility into what everyone is doing and make better decisions
            faster.
          </p>
        </article>
        <img src={globe} alt="" />
      </div>
      <div className={styles.percentages}>
        <div className={styles.second_flex}>
          <div>
            <h3>85%</h3>
            <h4>Feel their ability to work remotley has improved</h4>
          </div>
          <div>
            <h3>65%</h3>
            <h4>would be unhappy if zuri is taken away.</h4>
          </div>
        </div>
        <div className={styles.second_flex}>
          <div>
            <h3>90%</h3>
            <h4>Feel more connected to their team</h4>
          </div>
          <div>
            <h3>81%</h3>
            <h4>say Zuri has improved communication</h4>
          </div>
          <div>
            <h3>60%</h3>
            <h4>Depends on slack to get their work done.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
