import React from 'react'
import styles from './reports.module.css'

export const AdminPage = props => {
  const Continue = e => {
    e.preventDefault()
    props.nextStep(1)
  }

  return (
    <div className={styles.formcontainer}>
      <div>
        <span style={{ padding: '12px', marginLeft: '10px' }}>
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
          className="btn btn-primary"
          onClick={Continue}
          style={{
            color: 'white',
            borderRadius: '10%',
            backgroundColor: '#00B87C',
            padding: '12px',
            marginLeft: '15rem'
          }}
        >
          View Complaint
        </button>
      </div>
    </div>
  )
}

export default AdminPage
