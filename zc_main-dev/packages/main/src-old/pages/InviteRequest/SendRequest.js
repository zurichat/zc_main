import React from "react";
import { Navbar } from "react-bootstrap";
import cancel from "./assets/cancel.png";
import shape from "./assets/shape.png";
import add from "./assets/add.png";
import styles from "./styles/SendRequest.module.css";
import { Helmet } from "react-helmet";

function SendRequest() {
  return (
    <div className={styles.App}>
      <Helmet>
        <title>SendRequest - Zuri Main</title>
      </Helmet>
      <div className={styles.Request}>
        <div className={styles.nav}>
          <Navbar className={styles.navbar}>
            <img className={styles.cancel} src={cancel} alt="cancel" href="#" />
          </Navbar>
        </div>
        <div className={styles.check}>
          <img className={styles.tick} src={shape} alt="shape" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.descs}>Sent!</h1>
          <p className={styles.des}>
            {" "}
            <img className={styles.add} src={add} alt="add" />
            olaorosamson@yahoo.com
          </p>
          <p className={styles.desc}>
            Will be invited as a member of Zuri Chat once an admin approves the
            request.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btninv}>Invite more people</button>
          <button className={styles.btnd}>Finished</button>
        </div>
      </div>
    </div>
  );
}
export default SendRequest;
