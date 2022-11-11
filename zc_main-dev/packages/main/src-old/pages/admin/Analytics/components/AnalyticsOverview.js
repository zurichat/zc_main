import React, { useState } from "react";
import styles from "../styles/Overview.module.css";
import { Bar } from "react-chartjs-2";
import { FaCircle } from "react-icons/fa";

const AnalyticsOverview = () => {
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);

  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.mySelections}>
          <select className={styles.myselect}>
            <option value="Last 30 Days">Last 30days</option>
            <option value="All Time">All Time</option>
          </select>

          <button className={styles.myBtn}>Export</button>
        </div>
        <hr></hr>
        <section>
          <h2 className={styles.OverviewHead}>All-Time Usage</h2>

          <section className={styles.contents}>
            <div className={styles.details}>
              <p>
                Messages Sent
                <p className={styles.details}>0</p>
                <p className={styles.detailss}>out of 10,000 messages</p>
              </p>
            </div>

            <div>
              <p>
                File Storage Used
                <p className={styles.details}>0</p>
                <p className={styles.detailss}>out of 5.0GB of file storage</p>
              </p>
            </div>
          </section>
        </section>
        <section className={styles.activeMembers}>
          <h1>Active members</h1>
          <p>
            See how many people are active — meaning they posted a message or
            read at least one channel or direct message.
          </p>
          <div className={styles.myTabs}>
            <p
              style={{ borderBottom: !tab1 ? "2px solid #00b87c" : "none" }}
              onClick={() => setTab1(false)}
            >
              Weekly
            </p>
            <p
              style={{ borderBottom: tab1 ? "2px solid #00b87c" : "none" }}
              onClick={() => setTab1(true)}
            >
              Monthly
            </p>
          </div>
          <div>
            <Bar height={150} />
          </div>

          <div className={styles.msgContent}>
            {!tab1 ? (
              <div className={styles.msgContent}>
                <p>
                  <FaCircle color="#00b87c" /> {""}
                  Weekly active Members
                </p>
              </div>
            ) : (
              <div className={styles.msgContent}>
                <p>
                  <FaCircle color="#00b87c" fontSize="smaller" />
                  {""} Daily active Members
                </p>
              </div>
            )}
          </div>
        </section>
        <hr></hr>
        <section className={styles.public}>
          <h1>Public and private</h1>
          <p>
            Understand where your members have conversations, and where messages
            are most commonly read. Most messages will have multiple readers.
          </p>

          <div className={styles.myTabs}>
            <p
              style={{ borderBottom: !tab2 ? "2px solid #00b87c" : "none" }}
              onClick={() => setTab2(false)}
            >
              Where people are reading
            </p>
            <p
              style={{ borderBottom: tab2 ? "2px solid #00b87c" : "none" }}
              onClick={() => setTab2(true)}
            >
              Where messages are sent
            </p>
          </div>

          <div>
            <Bar height={150} />
          </div>
          <div>
            <p>In the last 30 days</p>

            {/* <div className={styles.chartfooter}>
              <p>Views in public channels: 0% </p>
              <p>Views in private channels: 0% </p>
              <p>Views in DMs: 0% </p>
            </div> */}
          </div>

          <div>
            {!tab2 ? (
              <div className={styles.msgContent}>
                <p>
                  {" "}
                  <FaCircle color="#00b87c" /> Views in public channels
                </p>
                <p>
                  {" "}
                  <FaCircle color="#00b87c" /> Views in private channels
                </p>
                <p>
                  {" "}
                  <FaCircle color="#00b87c" /> Views in DMs
                </p>
              </div>
            ) : (
              <div className={styles.msgContent}>
                <p>
                  {" "}
                  <FaCircle color="#00b87c" /> Messages sent in public channel
                </p>
                <p>
                  {" "}
                  <FaCircle color="#00b87c" /> Messages sent in private channels
                </p>
                <p>
                  {" "}
                  <FaCircle color="#00b87c" /> Messages sent in DMs:
                </p>
              </div>
            )}
          </div>
        </section>
        <hr></hr>
        <section className={styles.messages}>
          <h1>Messages and Files</h1>

          <p>Learn how information is shared in your Workspace</p>

          <div className={styles.myTabs}>
            <p
              style={{ borderBottom: !tab3 ? "2px solid #00b87c" : "none" }}
              onClick={() => setTab3(false)}
            >
              Messages sent{" "}
            </p>
            <p
              style={{ borderBottom: tab3 ? "2px solid #00b87c" : "none" }}
              onClick={() => setTab3(true)}
            >
              Files Uploaded
            </p>
          </div>

          <div>
            <Bar height={150} />
          </div>

          <p>
            <FaCircle color="#00b87c" />{" "}
            {!tab3 ? "Messages from members" : "Files uploaded"}
          </p>
        </section>
        <hr></hr>
        <section className={styles.footnote}>
          <h6>A quick note about analytics</h6>
          <p>
            Some people post a lot of little messages. Others try to get it all
            in one. This data is best used for understanding your whole team’s
            use of Slack, not evaluating an individual’s performance.
          </p>
        </section>
      </section>
    </div>
  );
};

export default AnalyticsOverview;
