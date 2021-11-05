import React from "react"
import styles from "./reports.module.css"
import { Container } from "react-bootstrap"

export const ComplaintProfiles = props => {
  const Continue = e => {
    e.preventDefault()
    props.nextStep(1)
  }

  const back = e => {
    e.preventDefault()
    props.prevStep()
  }

  const { values, inputChange } = props

  return (
    <Container className={styles.formcontainer}>
      <div className="main-container">
        <h1 className={`mb-5 text-success ${styles.head1}`}>
          Report Complaint
        </h1>

        <br />

        <span>
          This is a safe space, note that all complaints will be investigated.
          Input all details below...
        </span>
        <div>
          <br />
        </div>
        <div>
          {" "}
          <label htmlFor="name">
            <b>Name</b>
          </label>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Input offender's name"
            className={`form-control ${styles.inputFieldOffende}`}
            name="name"
            onChange={inputChange("name")}
            value={values.name}
          />
        </div>

        <br />

        <div>
          <div className="form-group">
            <label htmlFor="text">
              <b>Offence</b>
            </label>
          </div>

          <div className={`form-group ${styles.FormGroup1}`}>
            <select name="offence" className={styles.SelectBox}>
              <option value="Anti Semitism">Anti Semitism </option>
              <option value="Racism">Racism </option>
              <option value="Hate Speech"> Hate Speech</option>
              <option value="Verbal Abuse"> Verbal Abuse</option>
            </select>
          </div>
        </div>
        <br />

        <div className="form-group">
          <label htmlFor="text">
            <b>Date of Occurence</b>
          </label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${styles.inputFieldDate}`}
            name="text"
            onChange={inputChange("text")}
            value={values.text}
          />
        </div>

        <br />

        <div className={styles.DescriptionBox}>
          <label htmlFor="text">
            <b>Description</b>(Optional)
          </label>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className={`form-control ${styles.TextareaField}`}
            name="text"
            onChange={inputChange("text")}
            value={values.text}
          />
        </div>

        <br />

        <div>
          <span>
            <b>Report as anonymous</b>
          </span>
        </div>
      </div>
      <br />

      <div className={`row ${styles.BoxRow}`}>
        <div className="col-6">
          <button className={`btn btn-danger ${styles.btnBack}`} onClick={back}>
            Back
          </button>
        </div>
        <div className="col-6 text-right">
          <button
            className={`btn btn-primary ${styles.btnSubmit}`}
            onClick={Continue}
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  )
}

export default ComplaintProfiles
