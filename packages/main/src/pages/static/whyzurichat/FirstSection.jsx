import React from "react";
import styles from "./why.module.css";
import transparency from "./images/transparency.svg";
import flexibility from "./images/flexibility.svg";
import collaboration from "./images/collaboration.svg";

export default function FirstSection() {
  return (
    <section>
      <h2 className={styles.heading}>What Zuri Chat Offers?</h2>
      <p className={styles.text}>
        Zuri is a great app that can help you and your team work better
        together. Check out this post to learn more about zuri’s features, how
        to make the most of it, and why it's worth giving a shot.
      </p>

      <div className={styles.buttons}>
        <button>Try for free</button>
        <button>Talk to sales</button>
      </div>
      <div className={styles.grid_2}>
        <div className={styles.benefit_boxes}>
          <article>
            <img src={transparency} alt="" />
            <h3>Transparency</h3>
            <p>
              Zuri is a raw, unfiltered and transparent way of communication. It
              offers clearness in communication without the need of reading
              between the lines. It feels like you are in the same team even if
              you are not in the same room or building.
            </p>
          </article>
          <article>
            <img src={flexibility} alt="" />
            <h3>Flexibility</h3>
            <p>
              Zuri is a popular messenger app, which is used mostly by teams to
              stay in touch. Slack helps you to be more flexible and allows you
              complete control over the organization of your messages, without
              having to monitor them.
            </p>
          </article>
          <article>
            <img src={collaboration} alt="" />
            <h3>Collaboration</h3>
            <p>
              Collaboration, teamwork and communication - these things can be
              challenging. Whether you're collaborating with co-workers,
              customers or a distributed team of freelancers and contractors,
              you want to make sure your team is working efficiently.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
