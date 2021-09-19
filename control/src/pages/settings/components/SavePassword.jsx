import React from 'react'
import styles from '../styles/SettingsTab.module.css'

const SavePassword = () => {
  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5">
          <label for="firstname" className="form-label">
            Current password
          </label>
          <input type="password" className="form-control" required />
        </div>
        <div className="col-md-5">
          <label for="lastname" className="form-label">
            New password
          </label>
          <input type="password" className="form-control" required />
        </div>
        <div className="col-md-4 mb-3 mt-3">
          <button className="btn btn-primary" id="submit">
            Save password
          </button>
        </div>
      </form>
    </div>
  )
}

export default SavePassword
