import React from 'react'
import styles from './reports.module.css'

export const ComplaintProfiles = props => {
  const Continue = e => {
    e.preventDefault()
    props.nextStep()
  }

  const back = e => {
    e.preventDefault()
    props.prevStep()
  }

  const { values, inputChange } = props

  return (
    <div className={styles.formcontainer}>
      <div className="main-container">
        <h1 className="mb-5">Report Complaint</h1>

        <br />

        <span>
          This is a safe space, note that all complaints will be investigated.
          Input all details below...
        </span>
        <div>
          <br />
        </div>
        <div>
          {' '}
          <label htmlFor="name">
            <b>Offender's e-mail</b>
          </label>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Input offender's e-mail"
            className="form-control"
            name="email"
            onChange={inputChange('email')}
            value={values.email}
            style={{ width: '19rem', padding: '12px' }}
          />
        </div>

        <br />

        <div>
          <div className="form-group">
            <label htmlFor="text">
              <b>Offence</b>
            </label>
          </div>

          <div
            className="form-group"
            style={{ width: '19rem', padding: '12px' }}
          >
            <select
              name="offence"
              style={{ width: '19rem', padding: '12px' }}
              onChange={inputChange('offence')}
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

        <div style={{ display: 'flex', flexDirection: 'space-inbetween' }}>
          <label htmlFor="text">
            <b>Description</b>(Optional)
          </label>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            name="text"
            onChange={inputChange('description')}
            value={values.description}
            style={{ width: '20.5rem', height: '3rem' }}
          />
        </div>

        <br />

        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            <b>Report as anonymous</b>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onChange={inputChange('anonymous')}
              checked={values.anonymous}
            />
          </label>
        </div>
      </div>
      <br />

      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'flex-end' }}
      >
        <div className="col-2">
          <button
            className="btn btn-secondary"
            onClick={back}
            style={{
              color: 'white',
              // backgroundColor: "#00B87C",
              borderRadius: '10%',
              padding: '12px'
            }}
          >
            Back
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-success"
            onClick={Continue}
            style={{
              color: 'white',
              backgroundColor: '#00B87C',
              padding: '12px',
              borderRadius: '10%',
              marginLeft: '290px'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComplaintProfiles
