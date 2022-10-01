import React from "react";
import axios from "axios";
import styles from "./reports.module.css";
import { Container } from "react-bootstrap";

export const Confirm = props => {
  const reportComplaint = async (token, complaint) => {
    // console.log(token,complaint)
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json"
      //   Authorization: `Token ${token}`
    };
    await axios
      .post(`/api/report/`, complaint)
      .then(res => {
        // console.log(res)
        props.setPostSucc(true);
      })
      .catch(err => {
        console.error(err.response.request.responseText);
        props.setPostSucc(false);
        // console.log(true)
      });
  };

  const reportLocalComplaint = complaint => {
    let date = new Date();
    const complant = {
      id: Math.floor(Math.random() * 100) + 1,
      email: complaint.offender_email,
      offence: complaint.subject,
      description: complaint.description,
      date: date.toLocaleDateString(),
      anonymous: complaint.anonymous,
      authorize: false
    };
    // console.log(complant)
    var lol = localStorage.getItem("zurimainComplaints");
    // console.log(lol)
    if (lol) {
      localStorage.removeItem("zurimainComplaints");
      var lola = JSON.parse(lol);
      lola.push(complant);
      // console.log(lola)
      localStorage.setItem("zurimainComplaints", JSON.stringify(lola));
    } else {
      localStorage.setItem("zurimainComplaints", JSON.stringify([complant]));
    }
  };

  const Continue = e => {
    e.preventDefault();
    const token = "";
    const complaint = {
      offender_email: email,
      subject: offence,
      description,
      anonymous
    };

    reportComplaint(token, complaint);

    reportLocalComplaint(complaint);

    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: { email, offence, description, anonymous }
  } = props;

  return (
    <Container className={styles.formcontainer}>
      <h1 className={`mb-5 text-success ${styles.head1}`}>Confirm</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <b>Name:</b> {email}
        </li>
        <li className="list-group-item">
          <b>Offence: </b> {offence}
        </li>
        <li className="list-group-item">
          <b>Description </b> {description}
        </li>
        <li className="list-group-item">
          <b>anonymous</b>: {anonymous.toString()}
        </li>
      </ul>

      <br />
      <br />

      <div
        className="row"
        style={{ display: "flex", flexDirection: "flex-end" }}
      >
        <div className="col-6">
          <button
            className="btn btn-secondary"
            onClick={back}
            style={{
              color: "white"
              // borderRadius: '10%',
              // padding: '12px'
            }}
          >
            Back
          </button>
        </div>
        <div className="col-6 text-right">
          <button
            className="btn btn-success"
            onClick={Continue}
            style={{
              color: "white",
              // borderRadius: '10%',
              backgroundColor: " #00B87C",
              // padding: '12px',
              marginLeft: "50%"
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
};
