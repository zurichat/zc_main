import React from "react"
import styles from "./reports.module.css"
import { Container } from "react-bootstrap"

export const AdminPage = props => {
  const Continue = e => {
    e.preventDefault()
    props.nextStep(1)
  }

  return (
    <Container className={styles.formcontainer}>
      <div>
        <span className={`text-success ${styles.successText}`}>
          <h1>View Complaint</h1>
        </span>

        {props.len ? (
          <b>Dear Admin, you have {props.len} complaint(s) to review</b>
        ) : (
          <p>Dear Admin, you have no complaints to review</p>
        )}
      </div>

      <br />
      <div className="text-right">
        <button
          className={`btn btn-success ${styles.btnComplaint}`}
          onClick={Continue}
        >
          View Complaint
        </button>
      </div>
    </Container>
  )
}

export default AdminPage
