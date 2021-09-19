import React from 'react'
import styles from '../styles/SettingsTab.module.css'
import TimeZones from '../constants/TimeZone'

const TimeZone = () => {
  const result = TimeZones.map(item => <option>{item}</option>)
  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5 mt-2">
          <select className="form-select" required>
            {result}
          </select>
        </div>
        <div className="col-md-4 mb-3 mt-2">
          <button className="btn btn-primary">Save Time Zone</button>
        </div>
      </form>
    </div>
  )
}

export default TimeZone
