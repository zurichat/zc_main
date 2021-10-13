import React, { useState, useContext } from "react"
import styles from "../styles/LanguageAndRegion.module.css"
import TimezoneSelect from "react-timezone-select"
// import TimeZones from '../constants/TimeZone'
// import Languages from '../constants/Language'
import  Select from "react-select"
import autoComplete from '@material-ui/core/TextField'
import { authAxios } from "../utils/Api"
import { ProfileContext } from "../context/ProfileModal"

const LanguageAndRegion = () => {
  //CHECKBOXES
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const [tzChb, setTzChb] = useState(true)
  const [spellCheck, setSpellCheck] = useState(true);
  const { user, orgId } = useContext(ProfileContext)

  const handleSpellCheck = () => {
    setSpellCheck(!spellCheck)
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
              <option value="english(us)">English (US)</option>
              <option value="deutsch(deu)">Deutsch(Deutschland)</option>
              <option value="french(fra)">French (FRA)</option>
              <option value="Chin">French (FRA)</option>
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

            <TimezoneSelect
                  className={styles.selectbox}
                  value={selectedTimezone}
                  onChange={setSelectedTimezone} 
            />
            <p className={styles.note}>
              Zurichat uses your time zone to send summary and notification
              emails, for times in your activity feeds and for reminders.
            </p>
          </div>
          <div className={styles.section}>
          <label className={styles.subhead} htmlFor="spell-check">
              Spell check
            </label>
            <label className={styles.auto} htmlFor="">
              <input type="checkbox" onChange={handleSpellCheck} checked={spellCheck  } />
              <span className={styles.checkmark}></span>
              Enable spellcheck on your message
            </label>
            <SelectOption/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LanguageAndRegion

const options = [
  { value: 'eng', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'du', label: 'Deutch' },
];

const SelectOption = () =>{
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
     <Select
        className={styles.selectbox}
        defaultValue={[options[0]]}
        isMulti
        onChange={setSelectedOption}
        options={options}
      />
    </>
  )
}

