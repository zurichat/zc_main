import React from "react";
import styles from "./reports.module.css";
import { Container } from "react-bootstrap";

export const ComplaintProfiles = props => {
  const Continue = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, inputChange } = props;

  return (
    <Container className={styles.formcontainer}>
      <form className="main-container" onSubmit={Continue}>
        <h1 className="mb-5 text-success">Report Complaint</h1>

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
            <b className="text-success">Offender's e-mail</b>
          </label>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Input offender's e-mail"
            className="form-control"
            name="email"
            required
            onChange={inputChange("email")}
            value={values.email}
            style={{ width: "75%", padding: "12px" }}
          />
        </div>

        <br />

        <div>
          <div className="form-group">
            <label htmlFor="text">
              <b className="text-success">Offence</b>
            </label>
          </div>

          <div className="form-group">
            <select
              name="offence"
              style={{ width: "75%", padding: "12px" }}
              onChange={inputChange("offence")}
            >
              <option value="Anti Semitism">Anti Semitism </option>
              <option value="Racism">Racism </option>
              <option value="Hate Speech"> Hate Speech</option>
              <option value="Verbal Abuse"> Verbal Abuse</option>
            </select>
          </div>
        </div>
        <br />

        {/* <div className="form-group">
                        <label htmlFor="text"><b>Date of Occurence</b></label>
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" name="date" onChange={inputChange('date')} value={values.date} style={{ width: "20.5rem", height: "2.3rem" }} />
                    </div> */}

        <br />

        <div style={{ display: "flex", flexDirection: "space-inbetween" }}>
          <label htmlFor="text">
            <b className="text-success">Description </b>(Optional)
          </label>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            name="text"
            onChange={inputChange("description")}
            value={values.description}
            style={{ width: "75%", height: "100px" }}
          />
        </div>

        <br />

        <div className="form-check form-switch ">
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            <b className="text-success">Report as anonymous</b>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onChange={inputChange("anonymous")}
              checked={values.anonymous}
              backgroundColor="#00B87C"
              color="#00B87C"
            />
          </label>
        </div>
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
                color: "white",
                // backgroundColor: "#00B87C",
                borderRadius: "5%"
                // padding: '12px'
              }}
            >
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button
              type="submit"
              className="btn btn-success"
              // onClick={Continue}
              style={{
                color: "white",
                backgroundColor: "#00B87C",
                // padding: '12px',
                borderRadius: "5%",
                marginLeft: "45%"
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
      <br />
    </Container>
  );
};

export default ComplaintProfiles;
