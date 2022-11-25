import React, { useContext, useReducer, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import SkeletonLoader from "../../sidebar/components/SkeletonLoader";
import useSidebarItems from "../../sidebar/hooks/useSidebarItems";
import { ProfileContext } from "../context/profile-modal.context";
import styles from "../styles/AdvancedSettings.module.css";
import standardStyles from "../styles/UserPreference.module.css";
import { authAxios } from "../utils/api";
import { useTranslation } from "react-i18next";

const colorOptions = [
  { value: "Anouncement", label: "Anouncement" },
  { value: "random", label: "random" },
  { value: "general", label: "general" }
];

const customStyles = {
  control: base => ({
    ...base,
    height: "3.5rem",
    minHeight: "3.5rem",
    border: "1px solid #DADADA",
    borderRadius: "4px",
    fontSize: ".75rem",
    "&:hover": {
      borderColor: "#00B87C"
    },
    "&:active": {
      borderColor: "#00B87C"
    }
  })
};

const AdvancedSettings = () => {
  const { t } = useTranslation();

  const { user } = useContext(ProfileContext);
  const { categorizedItems, singleItems } = useSidebarItems();

  const allItems = [
    ...categorizedItems.map(c => ({
      id: c.id,
      name: c.id
    })),
    ...singleItems
  ];

  return (
    <div className={standardStyles.modalContent}>
      <div className={styles.container}>
        <h5 className={standardStyles.labelTextHeader}>
          {t("plugin_options")}
        </h5>
        <p className={styles.note}>{t("plugins")}</p>

        {allItems?.length > 0 ? (
          <div className={styles.pluginOptionsContainer}>
            {allItems?.map(item => {
              return <PluginOptionsDropdown key={item.id} label={item.name} />;
            })}
          </div>
        ) : (
          <SkeletonLoader COUNTER={2} />
        )}
      </div>
    </div>
  );
};

export default AdvancedSettings;

const PluginOptionsDropdown = ({ options, label }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const { t } = useTranslation();

  return (
    <div className={styles.pluginOptionWrapper}>
      <button className={styles.dropdownContainer} onClick={toggleDropdown}>
        <TiArrowSortedDown
          className={styles.dropdownIcon}
          style={{
            transform: open ? "rotate(0deg)" : "rotate(270deg)"
          }}
        />
        <div className={styles.dropdownTitle}>{label}</div>
      </button>
      {open && (
        <div className={styles.dropdownContent}>
          {/* Not implemented yet */}
          <p className={styles.note}>{t("no_options")}</p>
        </div>
      )}
    </div>
  );
};

/**
 * Old component code
 */

// console.log("user", user.settings.advanced)
// const [advance, setAdvance] = useState(user.settings.advanced);

// const updateAdvanceSettings = advance => {
//   authAxios
//     .patch(
//       `/organizations/${user.org_id}/members/${user._id}/settings/advanced`,
//       advance
//     )
//     .then(res => {
//       // console.log(res)
//     })
//     .catch(err => {
//       // console.log(err)
//     });
// };

// const handleSelect = selectedOptions => {
//   let options = [];

//   selectedOptions.forEach(option => {
//     options.push(option.value);
//   });

//   let newAdvance = { ...advance, excluded_channels: options };

//   updateAdvanceSettings(newAdvance);
// };

{
  /* <div className={styles.spacingLeft}> */
}
{
  /* <h5 className={styles.head}>Input options</h5> */
}

{
  /* <div className={styles.checkInputGroup}>
          <input 
            type="checkbox" 
            checked={advance.input_option.dont_send_with_enter}
            onClick={() => {
              if(advance !== undefined) {
                const newAdvance = {...advance, input_option: {...advance.input_option, dont_send_with_enter: !advance.input_option.dont_send_with_enter}, press_enter_to: "send_message"}
                setAdvance(newAdvance)
                updateAdvanceSettings(newAdvance)
              }
            }}
            name="" id="" 
            className={styles.chekedInput} 
          />
          <div className={styles.inputText}>
            <p className={styles.inputParagraph}>
              When typing code with ‘’’’, should send the message
            </p>
            <p className={styles.inputParagraph60}>With this ticked, use <span className={styles.highlights}>Shift</span> to send</p>
          </div>
        </div> */
}
{
  /* <div className={styles.checkInputGroup}>
          <input type="checkbox" 
            name="" id="" 
            className={styles.chekedInput} 
            checked={advance.input_option.format_messages}
            onClick={() => {
              if(advance !== undefined) {
                const newAdvance = {...advance, input_option: {...advance.input_option, format_messages: !advance.input_option.format_messages}, press_enter_to: "send_message"}
                setAdvance(newAdvance)
                updateAdvanceSettings(newAdvance)
              }
            }}
          />
          <div className={styles.inputText}>
            <p className={styles.inputParagraph}>
              Format messages with markup
            </p>
            <p className={styles.inputParagraph40}>
              The text formatting toolbar won’t show in the composer
            </p>
          </div>
        </div> */
}
{
  /* <p className={styles.head}>When writing a message, press </p> */
}

{
  /* <div className={styles.radioInputContainer}>
          <input 
            className={styles.radioInput} 
            type="radio" 
            name="writting_message" 
            id="writting_message1" 
            checked={advance.press_enter_to === "send_message"}
            onClick={() => {
              if(advance !== undefined) {
                const newAdvance = {...advance, press_enter_to: "send_message"}
                setAdvance(newAdvance)
                updateAdvanceSettings(newAdvance)
              }
            }}
          />
          <div className={styles.radioInfo} htmlFor="writting_message1">Send the message</div>
        </div> */
}
{
  /* <div className={styles.radioInputContainer}>
          <input 
            className={styles.radioInput} 
            type="radio" 
            name="writting_message" 
            id="writting_message2" 
            checked={advance.press_enter_to === "start_new_line"}
            onClick={() => {
              if(advance !== undefined) {
                const newAdvance = {...advance, press_enter_to: "start_new_line"}
                setAdvance(newAdvance)
                updateAdvanceSettings(newAdvance)
              }
            }}
          />
          <div className={styles.radioInfo} htmlFor="writting_message2">Start a new line ( use <span className={styles.highlights}>Ctrl</span> <span className={styles.highlights}>Enter</span> to send )</div>
        </div> */
}

{
  /* </div> */
}
{
  /* <div className={styles.line}></div> */
}

{
  /* <div className={styles.spacingLeft}> */
}
{
  /* <h5 className={styles.head}>Search Options</h5> */
}

{
  /* <div className={styles.checkInputGroup2}>
          <input 
            type="checkbox" 
            name="" id="" 
            className={styles.chekedInput} 
            checked={advance.search_option.start_slack_search}
            onClick={() => {
              if(advance !== undefined) {
                const newAdvance = {...advance, search_option: { ...advance.search_option, start_slack_search: !advance.search_option.start_slack_search}}
                setAdvance(newAdvance)
                updateAdvanceSettings(newAdvance)
              }
            }}
          />
          <div className={styles.inputText2}>
            <p className={styles.inputParagraph}>
              <span className={styles.highlights}>Ctrl</span> <span className={styles.highlights}>F</span> Starts a Zurichat search
            </p>
            <p className={styles.inputParagraph60}>Overrides normal behavaiour in search behaviour</p>
          </div>
        </div> */
}
{
  /* <div className={styles.checkInputGroup2}>
          <input 
            type="checkbox" 
            name="" id="" 
            className={styles.chekedInput} 
            checked={advance.search_option.start_quick_switcher}
            onClick={() => {
              if(advance !== undefined) {
                const newAdvance = {...advance, search_option: { ...advance.search_option, start_quick_switcher: !advance.search_option.start_quick_switcher}}
                setAdvance(newAdvance)
                updateAdvanceSettings(newAdvance)
              }
            }}
          />
          <div className={styles.inputText2}>
            <p className={styles.inputParagraph}>
              <span className={styles.highlights}>Ctrl</span> <span className={styles.highlights}>K</span> Starts the quick switcher
            </p>
            <p className={styles.inputParagraph60}>Overrides normal behavaiour in some browsers</p>
          </div>
        </div> */
}

{
  /* <h5 className={styles.head}>Exclude these channels from search results:</h5> */
}
{
  /* <Select
          isMulti
          name="colors"
          styles={customStyles}
          options={colorOptions}
          className={styles.multiSelect}
          classNamePrefix="select"
          placeholder="Type a channel name..."
          onChange={(selectedOptions) => {
            handleSelect(selectedOptions)
          }}
        /> */
}
{
  /* </div> */
}

{
  /* <div className={styles.line}></div> */
}

{
  /* <div className={styles.checkInputGroup2}>
          <input 
            type="checkbox" 
            name="" id="" 
            className={styles.chekedInput}
            checked={advance.other_option.key_scroll_messages}
            onClick={() => {
              if(advance !== undefined) {
                const newAdvance = {...advance, other_option: { ...advance.other_option, key_scroll_messages: !advance.other_option.key_scroll_messages}}
                setAdvance(newAdvance)
                updateAdvanceSettings(newAdvance)
              }
            }}
          />
          <div className={styles.inputText2}>
            <p className={styles.inputParagraph}>
              <span className={styles.highlights}>Page Up</span> 
              <span className={styles.highlights}>Page Down</span>
              <span className={styles.highlights}>Home</span>
              <span className={styles.highlights}>End</span>
              keys always scroll messages
            </p>
          </div>
        </div> */
}

{
  /* <h5 className={standardStyles.labelTextHeader}>Input Options</h5> */
}
{
  /* <div className={standardStyles.labelContainer}>
          <input
            type="checkbox"
            name=""
            id=""
            className={standardStyles.labelRadioButton}
            checked={advance.other_option.toggle_away_status}
            onClick={() => {
              if (advance !== undefined) {
                const newAdvance = {
                  ...advance,
                  other_option: {
                    ...advance.other_option,
                    toggle_away_status: !advance.other_option.toggle_away_status
                  }
                };
                setAdvance(newAdvance);
                updateAdvanceSettings(newAdvance);
              }
            }}
          />
          <div className={standardStyles.labelSubtext}>
            Ask if I want to toggle my away status when I log in after having
            set myself away
          </div>
        </div> */
}
{
  /* <div className={standardStyles.labelContainer}>
          <input
            type="checkbox"
            name=""
            id=""
            className={standardStyles.labelRadioButton}
            checked={advance.other_option.send_survey}
            onClick={() => {
              if (advance !== undefined) {
                const newAdvance = {
                  ...advance,
                  other_option: {
                    ...advance.other_option,
                    send_survey: !advance.other_option.send_survey
                  }
                };
                setAdvance(newAdvance);
                updateAdvanceSettings(newAdvance);
              }
            }}
          />
          <div className={standardStyles.labelSubtext}>
            Send me occassional survey via Zurichat bot
          </div>
        </div> */
}
{
  /* <div className={standardStyles.labelContainer}>
          <div className={styles.alonetext}>
            We’re working to make Zurichat better. We’d love to hear your
            thoughts
          </div>
        </div> */
}
{
  /* <div className={standardStyles.labelContainer}>
          <input
            type="checkbox"
            name=""
            id=""
            className={standardStyles.labelRadioButton}
            checked={advance.other_option.warn_against_links}
            onClick={() => {
              if (advance !== undefined) {
                const newAdvance = {
                  ...advance,
                  other_option: {
                    ...advance.other_option,
                    warn_against_links: !advance.other_option.warn_against_links
                  }
                };
                setAdvance(newAdvance);
                updateAdvanceSettings(newAdvance);
              }
            }}
          />
          <div className={standardStyles.labelSubtext}>
            Warn me about potential malicious links
          </div>
        </div> */
}
