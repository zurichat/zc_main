import React, { useEffect } from "react";
import styles from "./reports.module.css";
import { Container } from "react-bootstrap";

export const Success = props => {
  useEffect(() => {
    // return () =>{
    //   props.resetStep();
    //  };
  });

  return (
    <Container className={styles.formcontainer}>
      {props.postSucc ? (
        <div>
          <h1 className={`text-success ${styles.head1}`}>
            <b>Successful!</b>
          </h1>
          <p className="text-success">Your complaint has been reported</p>
        </div>
      ) : (
        <div>
          <h1 className="text-danger head1">
            <b>Unsuccessful!</b>
          </h1>
          <p className="text-danger">Your complaint failed to be reported</p>
        </div>
      )}
    </Container>
  );
};

export default Success;
