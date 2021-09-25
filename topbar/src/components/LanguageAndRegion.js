import React, { useState, useContext } from 'react'
import styles from '../styles/LanguageAndRegion.module.css'
// import TimeZones from '../constants/TimeZone'
// import Languages from '../constants/Language'
import { authAxios } from '../utils/Api'
import { ProfileContext } from '../context/ProfileModal'

const LanguageAndRegion = () => {
  //CHECKBOXES
  const [spellChb, setSpellChb] = useState(true)
  const [tzChb, setTzChb] = useState(true)

  const { user, orgId } = useContext(ProfileContext)

  const connectData = () => {
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/settings`, {
        settings: {
          spell_check: spellChb
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSpell = () => {
    setSpellChb(connectData)
  }

  const handleTZ = () => {
    setTzChb(!tzChb)
  }

  return (
    <div className={styles.container}>
      <div>
        <form>
          <div className={styles.section}>
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

          <div className={styles.section}>
            <label className={styles.subhead} htmlFor="timezone">
              Time zone
            </label>
            <label className={styles.auto} htmlFor="">
              <input type="checkbox" onChange={handleTZ} checked={tzChb} />
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

          <div className={styles.section}>
            <label className={styles.subhead} htmlFor="spell-check">
              Spell Check
            </label>
            <label
              className={styles.auto}
              htmlFor="Enable spellcheck on your messages"
            >
              <input
                type="checkbox"
                onChange={handleSpell}
                checked={spellChb}
              />
              <span className={styles.checkmark}></span>
              Enable spellcheck on your messages
            </label>

            <div className={styles.choosed}>
              <span className={styles.block}>English
                <span className={styles.closebtn}>
                  <span aria-hidden="true">&times;</span>
                </span>
              </span>
            </div>
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

// const LanguageAndRegion = () => {
//   // CHECKBOXES
//   const [tzChecked, tzSetChecked] = useState(true)
//   const [spellChecked, spellSetChecked] = useState(true)

//   const [isTimezone, setIsTimezone] = useState(true)
//   const [isSpell, setIsSpell] = useState(true)
//   const [data, setData] = useState('')

//   const { user, orgId } = useContext(ProfileContext)

//   const connectData = () => {
//     authAxios.patch(`/organizations/${orgId}/members/${user._id}/settings`, {
//       settings: {
//         spell_check: spellChecked
//       }
//     })
//       .then(res => {
//         console.log(res)
//         // setState({ loading: false })
//       })
//       .catch(err => {
//         console.log(err)
//         // setState({ loading: false })
//       }

//       )
//   }

//   // THE SECTION OF HANDLECHECK
//   const handleTimezone = () => {
//     tzSetChecked(!tzChecked)
//     setIsTimezone(!isTimezone)
//   }

//   const handleSpell = () => {
//     spellSetChecked(connectData)
//     setIsSpell(!isSpell)
//   }
//   const handleChange = e => {
//     const { value } = e.target.value
//     setData(value)
//   }

//   const result = Languages.map((item) => {
//     if (item !== 'English (UK)') {
//       return ''
//     }
//     else {
//       return <option selected>{item}</option>;
//     }
//   }
//     // <option>{item}</option>
//   )

//   const results = TimeZones.map(item => <option>{item}</option>)

//   return (
//     <div className={styles.region}>
//       <form className="row d-flex flex-column">
//         {/* THE SECTION OF LANGUAGE */}
//         <div className="col-md-5 mt-2 w-100">
//           <label for="inputState" class="form-label">
//             Language
//           </label>
//           <select className="form-select" onChange={handleChange} required>
//             {result}
//           </select>
//           <p>Choose the language you want to use in Zurichat</p>
//         </div>

//         {/* THE SECTION OF TIME ZONE */}
//         <div className="col-md-5 mt-2 w-100 mt-4">
//           <label for="inputState" class="form-label">
//             Timezone
//           </label>
//           <br />

//           <div className="d-flex align-items-center mb-2">
//             <input type="checkbox" checked={tzChecked} onChange={handleTimezone} />
//             <small>Set timezone automatically</small>
//           </div>

//           <select
//             className="form-select"
//             disabled={isTimezone && 'disabled'}
//             required
//           >
//             {results}
//           </select>
//           <p>
//             Zurichat uses your time zone to send summary and notification
//             emails, for times in your activity feeds and for reminders.
//           </p>
//         </div>

//         {/* THE SECTION OF THE SPELL CHECK */}
//         <div className="col-md-5 mt-2 w-100 mt-4">
//           <label for="inputState" class="form-label">
//             Spellcheck
//           </label>
//           <br />

//           <div className="d-flex align-items-center mb-2">
//             <input type="checkbox" onChange={handleSpell} checked={spellChecked} />
//             <small>Enable spell check on your messages</small>
//           </div>

//           <div className={styles.choosed}>
//             <span className={isSpell ? styles.block : styles.none}>
//               {isSpell && data}
//             </span>
//           </div>
//           <p>
//             Choose the languages you’d like Zurichat to spellcheck as you type.
//           </p>
//         </div>
//       </form>
//     </div>
//   )
// }
