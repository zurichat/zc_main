import React from "react"
import styles from "./reports.module.css"
import { Container } from "react-bootstrap"

export const Confirm = props => {
  const Continue = (index, val) => {
    props.inputChange(index, val)
    props.prevStep()
  }

  const back = e => {
    e.preventDefault()
    props.prevStep()
  }

  const detail = props.complaint

  return (
    <Container className={styles.formcontainer}>
      <h1 className={`mb-5 text-success ${styles.head1}`}>Offence Details</h1>
      <ul className="list-group">
        <li className={`list-group-item ${styles.ListofItems}`}>
          <b className="col-6">Email: </b>{" "}
          <p className="col-6">{detail.email}</p>
        </li>
        <li className={`list-group-item ${styles.ListofItems}`}>
          <b className="col-6">Offence: </b>{" "}
          <p className="col-6"> {detail.offence} </p>
        </li>
        <li className={`list-group-item ${styles.ListofItems}`}>
          <b className="col-6">Description:</b>{" "}
          <p className="col-6">{detail.description} </p>
        </li>
        <li className={`list-group-item ${styles.ListofItems}`}>
          <b className="col-6">anonymous:</b>{" "}
          <p className="col-6">{detail.anonymous.toString()} </p>
        </li>
        <li className={`list-group-item ${styles.ListofItems}`}>
          <b className="col-6">Confirmed:</b>{" "}
          <p className="col-6">{detail.authorize.toString()} </p>
        </li>
      </ul>

      <br />
      <br />

      <div className={`row ${styles.BoxRow}`}>
        <div className="col-6">
          <button
            className={`btn btn-secondary ${styles.btnBack1}`}
            onClick={back}
          >
            Back
          </button>
        </div>
        {!detail.authorize ? (
          <div className="col-6 text-right">
            <button
              className={`btn btn-success ${styles.btnConfirm}`}
              onClick={() => Continue(props.idx, true)}
            >
              Confirm
            </button>
          </div>
        ) : (
          <div className="col-6 ">
            <button
              className={`btn btn-danger ${styles.btnUnconfirm}`}
              onClick={() => Continue(props.idx, false)}
            >
              Unconfirm
            </button>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Confirm
