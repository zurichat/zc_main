import React from "react";
import styles from "./why.module.css";
import organize from "./images/organize.svg";
import productive from "./images/productive.svg";
import align from "./images/align.svg";
export default function SecondSection() {
  return (
    <section>
      <h2 className={styles.heading}>Why Zurichat?</h2>
      <div className={styles.why_cards}>
        <div className={styles.why_card}>
          <article>
            <h3>Organize your work</h3>
            <p>
              Organizing your work is the first step towards success. Zuri does
              help you get organized with their easy to use organization tools.
            </p>
          </article>

          <img src={organize} alt="" />
        </div>
        <div className={styles.why_card}>
          <article>
            <h3>Create alignment</h3>
            <p>
              Zuri is a communication tool that offers several benefits. Rather
              than sending an email back and forth, you can respond in real
              time. By doing this, you can make communication faster and more
              efficient.
            </p>
          </article>

          <img src={align} alt="" />
        </div>
        <div className={styles.why_card}>
          <article>
            <h3>Be more productive</h3>
            <p>
              Zuri is a collaboration hub where users can communicate and
              interact with each other through specific workspaces. The idea is
              to enable companies, groups and people to communicate via private
              group conversations, public channels and direct messages in a
              variety of ways.
            </p>
          </article>

          <img src={productive} alt="" />
        </div>
      </div>
    </section>
  );
}
