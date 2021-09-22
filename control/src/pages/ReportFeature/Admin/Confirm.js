import React from 'react'
import styles from './reports.module.css'

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
    <div className={styles.formcontainer}>
      <h1 className={`mb-5 ${styles.head1}`}>Offence Details</h1>
      <ul className="list-group">
        <li className="list-group-item" style={{ display: 'flex' }}>
          <b>Email: </b> <p style={{ marginLeft: '25rem' }}>{detail.email}</p>
        </li>
        <li className="list-group-item" style={{ display: 'flex' }}>
          <b>Offence: </b>{' '}
          <p style={{ marginLeft: '25rem' }}> {detail.offence} </p>
        </li>
        <li className="list-group-item" style={{ display: 'flex' }}>
          <b>Description:</b>{' '}
          <p style={{ marginLeft: '25rem' }}>{detail.description} </p>
        </li>
        <li className="list-group-item" style={{ display: 'flex' }}>
          <b>anonymous:</b>{' '}
          <p style={{ marginLeft: '25rem' }}>{detail.anonymous.toString()} </p>
        </li>
        <li className="list-group-item" style={{ display: 'flex' }}>
          <b>Confirmed:</b>{' '}
          <p style={{ marginLeft: '25rem' }}>{detail.authorize.toString()} </p>
        </li>
      </ul>

      <br />
      <br />

      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'flex-end' }}
      >
        <div className="col-6">
          <button
            className="btn btn-secondary"
            onClick={back}
            style={{ color: 'white', borderRadius: '10%', padding: '12px' }}
          >
            Back
          </button>
        </div>
        {!detail.authorize ? (
          <div className="col-6 text-right">
            <button
              className="btn btn-success"
              onClick={() => Continue(props.idx, true)}
              style={{
                color: 'white',
                // backgroundColor: " #00B87C",
                padding: '12px',
                borderRadius: '10%',
                marginLeft: '150px'
              }}
            >
              Confirm
            </button>
          </div>
        ) : (
          <div className="col-6 text-right">
            <button
              className="btn btn-danger"
              onClick={() => Continue(props.idx, false)}
              style={{
                color: 'white',
                // backgroundColor: " #00B87C",
                padding: '12px',
                borderRadius: '10%',
                marginLeft: '150px'
              }}
            >
              Unconfirm
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Confirm
