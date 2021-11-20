import React, { useState, useContext, useEffect } from "react";
import styles from "../styles/LanguageAndRegion.module.css";
import standardStyles from "../styles/UserPreference.module.css";
// import TimezoneSelect from "react-timezone-select";
import Select from "react-select";
import { authAxios } from "../utils/Api";
import { ProfileContext } from "../context/ProfileModal";

const ssKey = "language-and-region";

const options = [
  { value: "en", label: "English (US)" },
  { value: "fr", label: "French (FR)" },
  { value: "du", label: "Deutch (DU)" },
  { value: "zh", label: "Chinese (ZH)" },
  { value: "ar", label: "Arabic (AR)" }
];

const LanguageAndRegion = () => {
  const { user, orgId } = useContext(ProfileContext);
  const [langreg, setLangreg] = useState(user.settings.languages_and_regions);
  const [selectedTimezone, setSelectedTimezone] = useState(
    user.settings.languages_and_regions.time_zone
      ? JSON.parse(user.settings.languages_and_regions.time_zone)
      : user.settings.languages_and_regions.time_zone
  );
  //CHECKBOXES
  const [spellCheck, setSpellCheck] = useState(true);
  const handleSpellCheck = () => {
    setSpellCheck(!spellCheck);
  };

  const handleData = langreg => {
    authAxios
      .patch(
        `organizations/${user.org_id}/members/${user._id}/settings/languages-and-region`,
        langreg
      )
      .then(res => {
        sessionStorage.setItem(ssKey, JSON.stringify(langreg));
      })
      .catch(err => {
        // error
      });
  };
  const handleSelect = selectedOptions => {
    let options = [];
    selectedOptions.forEach(option => {
      options.push(option.value);
    });
    let newSpell = { ...langreg, languages_zuri_should_spell_check: options };
    handleData(newSpell);
  };
  useEffect(() => {
    let timeZone = { ...langreg, time_zone: JSON.stringify(selectedTimezone) };
    setLangreg(timeZone);
    handleData(timeZone);
  }, [selectedTimezone]);

  //  const langSpellCheck = user.settings.languages_and_regions.languages_zuri_should_spell_check;
  //  const defVal = langSpellCheck.map(i => i )
  const langSpellCheck = langreg.languages_zuri_should_spell_check || [];

  const checkLang = lang => {
    switch (lang) {
      case "en":
        return "English";
      case "fr":
        return "French";
      case "du":
        return "Deutch";
      default:
        return "English";
    }
  };
  const defaultValue = [];
  const defVal = langSpellCheck.forEach(i => {
    defaultValue.push({ value: i, label: checkLang(i) });
  });

  useEffect(() => {
    if (sessionStorage.getItem(ssKey)) {
      setLangreg(JSON.parse(sessionStorage.getItem(ssKey)));
      setSelectedTimezone(JSON.parse(sessionStorage.getItem(ssKey)).time_zone);
    } else {
      sessionStorage.setItem(
        ssKey,
        JSON.stringify(user.settings.languages_and_regions)
      );
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={standardStyles.modalContent}>
        <form>
          <div className={styles.section}>
            <label className={styles.subhead} htmlFor="language">
              Language
            </label>
            <select
              className={styles.selectbox}
              value={langreg.language}
              onChange={e => {
                setLangreg({ ...langreg, language: e.target.value });
                handleData({ ...langreg, language: e.target.value });
              }}
              name="language"
              id="language"
            >
              {options.map((option, index) => {
                return (
                  <option value={option.value} key={index}>
                    {option.label}
                  </option>
                );
              })}
            </select>
            <p className={styles.note}>
              Choose the language you want to use in Zurichat.
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.subhead}>Time zone</div>
            <input
              type="checkbox"
              className={styles.cbox}
              checked={langreg.set_time_zone_automatically}
              onClick={() => {
                if (langreg !== undefined) {
                  setLangreg({
                    ...langreg,
                    set_time_zone_automatically:
                      !langreg.set_time_zone_automatically
                  });
                  handleData({
                    ...langreg,
                    set_time_zone_automatically:
                      !langreg.set_time_zone_automatically
                  });
                }
              }}
            />
            <span className={styles.checkmark}>
              Set time zone automatically
            </span>
            {/* <TimezoneSelect
              styles={customStyles}
              className={styles.optSelect}
              placeholder="Select Timezone"
              value={selectedTimezone}
              defaultValue="badbitches"
              onChange={setSelectedTimezone}
            /> */}
            <p className={`${styles.note} my-2`}>
              Zurichat uses your time zone to send summary and notification
              emails, for times in your activity feeds and for reminders.
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.subhead} htmlFor="spell-check">
              Spell check
            </div>
            <input
              type="checkbox"
              className={styles.cbox}
              checked={langreg.spell_check}
              onClick={() => {
                if (langreg !== undefined) {
                  setLangreg({
                    ...langreg,
                    spell_check: !langreg.spell_check
                  });
                  handleData({
                    ...langreg,
                    spell_check: !langreg.spell_check
                  });
                }
              }}
            />
            <span className={styles.checkmark}>
              Enable spellcheck on your message
            </span>
            <Select
              className={styles.optSelect}
              isMulti
              name="colors"
              defaultValue={defaultValue}
              styles={customStyles}
              options={options}
              classNamePrefix="select"
              placeholder="Type a language..."
              onChange={selectedOptions => {
                handleSelect(selectedOptions);
              }}
            />
            <p className={styles.note}>
              Choose the languages you’d like Zurichat to spellcheck as you
              type.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LanguageAndRegion;
const customStyles = {
  control: base => ({
    ...base,
    height: "2.5rem",
    minHeight: "2.5rem",
    border: "1px solid #DADADA",
    borderRadius: "4px",
    marginTop: "10px",
    fontSize: "15px",
    "&:hover": {
      borderColor: "#00B87C"
    },
    "&:active": {
      borderColor: "#00B87C"
    }
  })
};
