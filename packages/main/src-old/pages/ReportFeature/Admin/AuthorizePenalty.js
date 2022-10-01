import React, { useState } from "react";
import styles from "./reports.module.css";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { Container, Card, Button } from "react-bootstrap";

export const AuthorizePenalty = props => {
  const [check, setCheck] = useState(false);

  const handleClose = () => setCheck(false);
  const handleShow = () => setCheck(true);

  const authorize = e => {
    e.preventDefault();
    localStorage.removeItem("zurimainComplaints");
    localStorage.setItem(
      "zurimainComplaints",
      JSON.stringify(props.complaints)
    );
    handleClose();
    props.putComplaints(true);
    props.nextStep(2);
  };

  const view = (id, e) => {
    e.preventDefault();
    props.nextStep(1);
    props.idSettter(id);
  };
  // const back = e => {
  //     e.preventDefault();
  //     props.prevStep();
  // };

  const { complaints } = props;

  return (
    <Container className={styles.formcontainer}>
      <div>
        <h1 className={`mb-5 text-success ${styles.head1}`}>Complaints</h1>

        <br />

        <span
          style={{
            backgroundColor: "rgb(53, 231, 142)",
            display: "flex",

            flexDirection: "space-around"
            // borderBlock: "1px solid green",
          }}
        >
          <b>Offender</b>
        </span>
        <div>
          <br />
        </div>
        {complaints.length ? (
          <>
            {complaints.map((complain, idx) => (
              <Card key={idx}>
                <Card.Body
                  style={{ display: "flex", flexDirection: "space-inbetween" }}
                >
                  <div className="col-7">
                    <Card.Title>{complain.email}</Card.Title>
                    <Card.Text className="date ">{complain.date}</Card.Text>
                  </div>
                  {complain.authorize ? (
                    <TiTick
                      className="col-7"
                      color="green"
                      onClick={handleShow}
                    />
                  ) : null}
                </Card.Body>
                <Button
                  className=" "
                  onClick={e => view(idx, e)}
                  variant="outline-success"
                  style={{
                    width: "30%",
                    marginLeft: "45%"
                  }}
                >
                  View Details
                </Button>

                <br />
              </Card>
            ))}
          </>
        ) : (
          <h1>No Complaints yet</h1>
        )}

        <br />
        {/* <div className="row" style={{ display: "flex", flexDirection: "flex-end" }} > */}

        <div className="col-6 text-right">
          <button
            className="btn btn-success"
            onClick={handleShow}
            style={{
              color: "white",
              borderRadius: "5%",
              // padding: "12px",
              marginLeft: "50%"
            }}
          >
            Authorize Penalty
          </button>
        </div>
      </div>

      <Modal show={check} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-success">ZuriChat Watches</Modal.Title>
          <AiOutlineClose
            color="green"
            variant="secondary"
            onClick={handleClose}
          />
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to authorize these penalties?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={authorize}>
            Authorize
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AuthorizePenalty;
