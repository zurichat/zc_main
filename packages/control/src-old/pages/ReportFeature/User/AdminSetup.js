import React from "react";
import styles from "./reports.module.css";
import { Container } from "react-bootstrap";

export const AdminSetup = props => {
  const Continue = e => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <Container className={styles.formcontainer}>
      <br />
      <div className="text-center">
        <button
          className="btn btn-success"
          onClick={Continue}
          style={{
            // color: 'white',
            backgroundColor: " #00B87C"
            // padding: '12px',
            // borderRadius: '10%'
          }}
        >
          Report Complaint
        </button>
      </div>
    </Container>
  );
};

export default AdminSetup;
