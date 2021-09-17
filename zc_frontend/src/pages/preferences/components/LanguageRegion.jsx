import React, { useState } from 'react'

import Languages from '../../settings/constants/Language'
import TimeZone from '../../settings/constants/TimeZone'
import styles from '../styles/LanguageRegion.module.css'

const Language = () => {
  const [tzChecked, tzSetChecked] = useState(true)
  const [spellChecked, spellSetChecked] = useState(true,
    fetch('https://api.zuri.chat/organizations/6133c5a68006324323416896/members/6141dd279fd1f4f655d4452b/settings', {
      method: 'PATCH',
      body: JSON.stringify({
        spell_check: true
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
    )
  const [isTimezone, setIsTimezone] = useState(true)
  const [isSpell, setIsSpell] = useState(true)
  const [data, setData] = useState('')

  // THE SECTION OF HANDLECHECK
  const handleTimezone = e => {
    tzSetChecked(!tzChecked)
    setIsTimezone(!isTimezone)
  }

  const handleSpell = e => {
    spellSetChecked(!spellChecked)
    setIsSpell(!isSpell)
    fetch('https://api.zuri.chat/organizations/6133c5a68006324323416896/members/6141dd279fd1f4f655d4452b/settings', {
      method: 'PATCH',
      body: JSON.stringify({
        spell_check: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleChange = e => {
    const { value } = e.target
    setData(value)
  }

  const result = Languages.map((item) => {
    if (item !== 'English (UK)') {
      return ''
    }
    else {
      return <option selected>{item}</option>;
    }
  })

  const results = TimeZone.map(item => <option>{item}</option>)

  return (
    <div className={styles.region}>
      <form className="row d-flex flex-column">
        {/* THE SECTION OF LANGUAGE */}
        <div className="col-md-5 mt-2 w-100">
          <label for="inputState" class="form-label">
            Language
          </label>
          <select className="form-select" onChange={handleChange} required>
            {result}
          </select>
          <p>Choose the language you want to use in Zurichat</p>
        </div>

        {/* THE SECTION OF TIME ZONE */}
        <div className="col-md-5 mt-2 w-100 mt-4">
          <label for="inputState" class="form-label">
            Timezone
          </label>
          <br />

          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" checked={tzChecked} onChange={handleTimezone} />
            <small>Set timezone automatically</small>
          </div>

          <select
            className="form-select"
            disabled={isTimezone && 'disabled'}
            required
          >
            {results}
          </select>
          <p>
            Zurichat uses your time zone to send summary and notification
            emails, for times in your activity feeds and for reminders.
          </p>
        </div>

        {/* THE SECTION OF THE SPELL CHECK */}
        <div className="col-md-5 mt-2 w-100 mt-4">
          <label for="inputState" class="form-label">
            Spellcheck
          </label>
          <br />

          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" onChange={handleSpell} checked={spellChecked}/>
            <small>Enable spell check on your messages</small>
          </div>

          <div className={styles.choosed}>
            <span className={isSpell ? styles.block : styles.none}>
              {isSpell && data}
            </span>
          </div>
          <p>
            Choose the languages you’d like Zurichat to spellcheck as you type.
          </p>
        </div>
      </form>
    </div>
  )
}

export default Language
