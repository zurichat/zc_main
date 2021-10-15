import React, { useState, useContext, useEffect } from "react"
import styles from "../styles/LanguageAndRegion.module.css"
import standardStyles from "../styles/UserPreference.module.css"
import TimezoneSelect from "react-timezone-select"
import  Select from "react-select"
import { authAxios } from "../utils/Api"
import { ProfileContext } from "../context/ProfileModal"


const options = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'du', label: 'Deutch' },
];

const LanguageAndRegion = () => {
  const { user, orgId } = useContext(ProfileContext)
  const [langreg, setLangreg] = useState(user.settings.languages_and_regions);
  const [selectedTimezone, setSelectedTimezone] = useState({})
  //CHECKBOXES
  const [spellCheck, setSpellCheck] = useState(true);
  const handleSpellCheck = () => {
    setSpellCheck(!spellCheck)
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

  const langSpellCheck = langreg.languages_zuri_should_spell_check;
  //  const defVal = langSpellCheck.map(i=> i )
  
   
  return (
    <div className={standardStyles.modalContent}>
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
            <div className={styles.subhead}>
              Time zone
            </div>        
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
              <span className={styles.checkmark}>
              Set time zone automatically
              </span>
            

            <TimezoneSelect
                  styles = {customStyles}
                  className={styles.optSelect}
                  placeholder="Select Timezone"
                  value={selectedTimezone}
                  defaultValue="badbitches"
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
              <span className={styles.checkmark}>
              Enable spellcheck on your message
              </span>
            </label>
            <Select
            className={styles.optSelect}
          isMulti
          name="colors"
          // defaultValue= {defVal[0]}
          styles={customStyles}
          options={options}
          classNamePrefix="select"
          placeholder="Type a language..."
          onChange={(selectedOptions) => {
            handleSelect(selectedOptions)
          }}
        />
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
    minHeight: "2.5rem",
    border: "1px solid #DADADA",
    borderRadius: "4px",
    marginTop:"10px",
    fontSize: "15px",
    "&:hover": {
      borderColor: "#00B87C"
    },
    "&:active": {
      borderColor: "#00B87C"
    }
  })
}