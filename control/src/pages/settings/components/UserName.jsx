import React from 'react'
import styles from '../styles/SettingsTab.module.css'

const UserName = () => {
  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5 mt-2">
          <input type="text" className="form-control" required />
        </div>
        <div className="col-md-4 mb-3 mt-3">
<<<<<<< HEAD:zc_frontend/src/pages/settings/components/UserName.jsx
          <button className="btn px-5">Save</button>
=======
          <button className="btn">Save</button>
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/settings/components/UserName.jsx
        </div>
        <p>
          Usernames are not part of your profile and are only required by
          Zurichat for technical reasons. Your username is mostly invisible to
          others but you can change it if you want to.
        </p>
      </form>
    </div>
  )
}

export default UserName
