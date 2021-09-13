import React from 'react'
import Languages from '../constants/Language'
import styles from '../styles/SettingsTab.module.css'

const Language = () => {
  const result = Languages.map(item => <option>{item}</option>)

  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5 mt-2">
          <select className="form-select" required>
            <option disabled selected>
              Choose language
            </option>
            {result}
          </select>
        </div>
        <div className="col-md-4 mb-3 mt-2">
          <button className="btn btn-primary">Save Locale</button>
        </div>
      </form>
    </div>
  )
}

export default Language
