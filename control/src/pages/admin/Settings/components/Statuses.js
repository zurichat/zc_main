import React from "react"
import styles from "../styles/Statuses.module.css"
import ClearTime from "./ClearTIme"
const Statuses = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.status__container}>
          <h2>Suggested statuses</h2>
          <p>
            Anyone can write their own status, and Zurichat offers a few
            suggestions to get you started. If you’d like, you can customize
            these suggestions for your workspace.
          </p>
          <div className={styles.status_settings}>
            <div className={styles.set_status}>
              <p>Status</p>
              <div className={styles.set_status_text}>
                <button>🗓</button>
                <input
                  type="text"
                  defaultValue="In a meeting"
                  placeholder="What's your status?"
                />
              </div>
              <div className={styles.set_status_text}>
                <button>🚎</button>
                <input
                  type="text"
                  defaultValue="Commuting"
                  placeholder="What's your status?"
                />
              </div>
              <div className={styles.set_status_text}>
                <button>🤒</button>
                <input
                  type="text"
                  defaultValue="Out sick"
                  placeholder="What's your status?"
                />
              </div>
              <div className={styles.set_status_text}>
                <button>🌴</button>
                <input
                  type="text"
                  defaultValue="Vacationing"
                  placeholder="What's your status?"
                />
              </div>
              <div className={styles.set_status_text}>
                <button>🏡</button>
                <input
                  type="text"
                  defaultValue="Working remotely"
                  placeholder="What's your status?"
                />
              </div>
            </div>
            <div className={styles.status_clear_time}>
              <p>By default, clear after:</p>
              <ClearTime />
              <ClearTime />
              <ClearTime />
              <ClearTime />
              <ClearTime />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <button className={styles.btn_save_status}>Save</button>
          </div>
          <div>
            <h2>Tips for statuses:</h2>
            <ul>
              <li>Keep it short</li>
              <li>Avoid use of acroynms</li>
              <li>Pick the perfect emoji: this is the key.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Statuses
