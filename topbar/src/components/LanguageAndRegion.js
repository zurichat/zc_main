import React, { useState, useContext, useEffect } from "react"
import styles from "../styles/LanguageAndRegion.module.css"
import TimezoneSelect from "react-timezone-select"
import  Select from "react-select"
import autoComplete from '@material-ui/core/TextField'
import { authAxios } from "../utils/Api"
import { ProfileContext } from "../context/ProfileModal"


const options = [
  { value: 'eng', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'du', label: 'Deutch' },
];

const LanguageAndRegion = () => {
  const { user, orgId } = useContext(ProfileContext)
  const [langreg, setLangreg] = useState(user.settings.languages_and_regions);
  const [selectedTimezone, setSelectedTimezone] = useState({})
  //CHECKBOXES
  const [tzChb, setTzChb] = useState(false)
  const [spellCheck, setSpellCheck] = useState(true);
  const handleSpellCheck = () => {
    setSpellCheck(!spellCheck)
  }

  const handleTZ = () => {
    setTzChb(!tzChb)
  }

  const handleData = (langreg) => {
      authAxios.patch(`organizations/${user.org_id}/members/${user._id}/settings/languages-and-region`, langreg)
      .then(res => {
      
      })
      .catch(err => {
        console.error(err)
      })
  }

  const handleSelect = (selectedOptions) => {
    let options = [];

    selectedOptions.forEach(option => {
      options.push(option.value)
    })

    let newSpell = {...langreg, languages_zuri_should_spell_check: options}

    handleData(newSpell)
  }

  useEffect(() => {
    let timeZone = {...langreg, time_zone: selectedTimezone.label}
    setLangreg(timeZone)
    handleData(timeZone)
  }, [selectedTimezone])

  
  
  return (
    <div className={styles.container}>
      <div>
        <form>
          <div className={styles.section}>
            <label className={styles.subhead} htmlFor="language">
              Language
            </label>
            <select className={styles.selectbox} onChange={e => {
               setLangreg({...langreg, language: e.target.value})
               handleData({...langreg, language: e.target.value})
            }} name="language" id="language">
              <option>{langreg.language}</option>
              <option value="English(uk)">English (UK)</option>
              <option value="English(us)">English (US)</option>
              <option value="Deutsch(deu)">Deutsch(Deutschland)</option>
              <option value="French(fra)">French (FRA)</option> 
            </select>
            <p className={styles.note}>
              Choose the language you want to use in Zurichat.
            </p>
          </div>

          <div className={styles.section}>
            <label className={styles.subhead} htmlFor="timezone">
              Time zone
            <label className={styles.auto} htmlFor="">
            </label>
              <input 
                type="checkbox" className={styles.cbox} 
                checked={langreg.set_time_zone_automatically}
                 onClick={() => {
                   if(langreg !== undefined) {
                     setLangreg({...langreg, set_time_zone_automatically: !langreg.set_time_zone_automatically})
                    handleData({...langreg, set_time_zone_automatically: !langreg.set_time_zone_automatically})
                   }
                }}  
              />
              <span className={styles.checkmark}></span>
              Set time zone automatically
            </label>

            <TimezoneSelect
                  styles = {customStyles}
                  placeholder="Select Timezone"
                  value={selectedTimezone}
                  isSearchable={langreg.set_time_zone_automatically}
                  defaultValue={user.settings.languages_and_regions.time_zone}
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
              <input type="checkbox" className={styles.cbox}  
              checked={langreg.spell_check } 
              onClick={() => {
                if(langreg !== undefined) {
                  setLangreg({...langreg, spell_check: !langreg.spell_check})
                 handleData({...langreg, spell_check: !langreg.spell_check})
                }}
              }
              />
              <span className={styles.checkmark}></span>
              Enable spellcheck on your message
            </label>
            <Select
          isMulti
          name="colors"
          defaultValue={langreg.languages_zuri_should_spell_check}
          styles={customStyles}
          options={options}
          classNamePrefix="select"
          placeholder="Type a language..."
          onChange={(selectedOptions) => {
            handleSelect(selectedOptions)
          }}
        />
            {/* <SelectOption/>  */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default LanguageAndRegion


const customStyles = {
  control: base => ({
    ...base,
    height: "2.5rem",
    width: "60%",
    minHeight: "2.5rem",
    border: "1px solid #DADADA",
    borderRadius: "4px",
    marginTop:"10px",
    fontSize: ".75rem",
    "&:hover": {
      borderColor: "#00B87C"
    },
    "&:active": {
      borderColor: "#00B87C"
    }
  })
}
