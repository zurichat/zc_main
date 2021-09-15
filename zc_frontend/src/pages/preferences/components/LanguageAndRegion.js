import React from 'react'
import styles from '../styles/LanguageAndRegion.module.css'

const LanguageAndRegion = () => {
  return (
    <div className={styles.container}>
      <div>
        <form>
          <div>
            <label className={styles.subhead} htmlFor="language">
              Language
            </label>
            <select className={styles.selectbox} name="language" id="language">
              <option value="english(uk)">English (UK)</option>
            </select>
            <p className={styles.note}>
              Choose the language you want to use in Zurichat.
            </p>
          </div>

          <div>
            <label className={styles.subhead} htmlFor="timezone">
              Time zone
            </label>
            <label className={styles.auto} htmlFor="">
              <input
                type="checkbox"
                value="set time zone automatically"
                checked="checked"
              />
              <span className={styles.checkmark}></span>
              Set time zone automatically
            </label>

            <select
              className={styles.selectbox}
              name="time-zone"
              id="time-zone"
            >
              <option value="West Central Africa">
                (UTC+01:00) West Central Africa
              </option>
            </select>
            <p className={styles.note}>
              Zurichat uses your time zone to send summary and notification
              emails, for times in your activity feeds and for reminders.
            </p>
          </div>

          <div>
            <label className={styles.subhead} htmlFor="spell-check">
              Spell Check
            </label>
            <label
              className={styles.auto}
              htmlFor="Enable spellcheck on your messages"
            >
              <input
                type="checkbox"
                value="Enable spellcheck on your messages"
                checked="checked"
              />
              <span className={styles.checkmark}></span>
              Enable spellcheck on your messages
            </label>

            <input
              name="spell-Check"
              className={styles.selectbox}
              type="text"
              value="English"
            />
            <p className={styles.note}>
              Choose the languages you’d like Zurichat to spellcheck as you
              type.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LanguageAndRegion
