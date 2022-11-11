import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Card } from "react-bootstrap";
import styles from "./styles/RequestInvite.module.css";
import { Helmet } from "react-helmet";

function RequestInvite() {
  return (
    <div>
      <Helmet>
        <title>Request Invite - Zuri Chat</title>
      </Helmet>
      <Card
        className={styles.root}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Card.Body>
          <div className={styles.title} gutterBottom align="left">
            <p className={styles.main}>Request Invitation to Zuri Chat</p>
            <form>
              <div className={styles.first}>
                <p> To: </p>
                <Container>
                  <Form.Control
                    style={{ fontSize: 12, padding: 20, width: 500 }}
                    name="foo"
                    placeholder="tosben@hnginternship.com"
                  />
                </Container>
              </div>
              <div className={styles.second}>
                <p> Invite as: </p>
                <Container>
                  <Form.Control
                    style={{ fontSize: 12, padding: 5, width: 500 }}
                    name="foo"
                    placeholder="Member"
                  />
                </Container>
              </div>
              <div className={styles.third}>
                <p> Reason for request(optional): </p>
                <Container>
                  <Form.Control
                    style={{ fontSize: 12, padding: 16, width: 500 }}
                    name="foo"
                    color="#FFFFFF"
                    placeholder="Add a note to your admin"
                  />
                </Container>
              </div>
            </form>
          </div>
          <div className={styles.submain} gutterBottom align="center">
            <div className={styles.firstsubmain}>
              <p>
                {" "}
                Your request will be sent to the admin, and you will be notified
                when it has been approved or denied
              </p>
              <p>
                New member will automatically join your workspace's default
                channel <a href="addmore"> Add more</a>{" "}
              </p>
            </div>
            <div className={styles.secondsubmain}>
              <Link to="./RequestSent">
                <button
                  href="RequestSent"
                  className={styles.btnr}
                  variant="contained"
                  backgroundcolor="#00B87C"
                  color="success"
                  type="submit"
                >
                  Send Request
                </button>
              </Link>
            </div>
          </div>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
}

export default RequestInvite;
