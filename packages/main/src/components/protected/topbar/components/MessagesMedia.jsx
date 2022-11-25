/* eslint-disable no-undef */
import React, { useState, useContext } from "react";
import { BASE_API_URL } from "@zuri/utilities";
import { ProfileContext } from "../context/profile-modal.context";
import { authAxios } from "../utils/api";
import styles from "../styles/MessagesMedia.module.css";
import standardStyles from "../styles/UserPreference.module.css";
import theme13 from "../assets/images/theme9.png";
import theme14 from "../assets/images/theme10.png";
import theme15 from "../assets/images/theme11.png";
import theme16 from "../assets/images/theme12.png";
import theme17 from "../assets/images/theme13.png";
import theme18 from "../assets/images/theme14.png";

import { useTranslation } from "react-i18next";

const MessagesMedia = () => {
  const { t } = useTranslation();

  const [isChecked, setIsChecked] = useState(false);
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(1);
  const { user } = useContext(ProfileContext);
  // console.log("user", user.settings.messages_and_media)
  const [message, setMessage] = useState(user?.settings.messages_and_media);
  // console.log(message.theme)
  // handleSubmit function on the form
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(isChecked)
  };
  const updateMessageSettings = message => {
    authAxios
      .patch(
        `/organizations/${user.org_id}/members/${user._id}/settings/message-media`,
        message
      )
      .then(res => {
        //console.log(res)
      })
      .catch(err => {
        // console.log(err)
      });
  };
  React.useEffect(() => {
    fetch(BASE_API_URL, {
      method: "POST",
      headers: {
        // authorization if any
        "Content-Type": "application/json"
      },
      body: JSON.stringify(isChecked)
    })
      .then(res => {
        // console.log(res)
      })
      .catch(error => console.error(error));
  });
  return (
    <div className={standardStyles.modalContent}>
      <div className={styles.title}>{t("messages")}</div>
      {/* <div className={styles.clean}> */}
      {/* <div className={styles.radio}>
          <input
            className={styles.radioInput}
            type="radio"
            value="cln"
            checked={message.theme === "clean"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  theme: "clean"
                }
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div> */}
      {/* <div className={styles.cln}>Clean</div> */}
      {/* </div> */}
      {/* <div className={styles.compact}>
        <div className={styles.radio1}>
          <input
            className={styles.radioInput}
            type="radio"
            value="com"
            checked={message.theme === "compact"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  theme: "compact"
                }
                setMessage(newMessage)
                updateMessageSettings(newMessage)
              }
            }}
          />
        </div>
        <div className={styles.compt}>Compact</div>
      </div> */}
      {/* <div className={styles.text}>Here is an example</div> */}
      {/* <div className={styles.img11}>
        {active1 == 0 && (
          <div className={styles.previewCard}>
            <img src={zuriBot} alt="bot" />
            <div className={styles.previewInfo}>
              <div className={styles.previewName}>
                <p className={styles.name}>ZuriBot</p>
                <p className={styles.time}>9:25pm</p>
              </div>
              <p className={styles.message}>Feeling great</p>
            </div>
          </div>
        )}
        {active1 == 1 && (
          <div className={styles.previewCard1}>
            <p className={styles.time}>9:25pm</p>
            <p className={styles.name}>ZuriBot</p>
            <p className={styles.message}>Feeling great</p>
          </div>
        )}
      </div> */}
      {/* <div className={styles.bottom}></div> */}
      <div className={standardStyles.labelTextHeader}>{t("names")}</div>
      <div className={standardStyles.labelContainer}>
        <div>
          <input
            className={standardStyles.labelRadioButton}
            type="radio"
            value="ful"
            checked={message.names === "Zuri Ananda"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  names: "Zuri Ananda"
                };
                setMessage(newMessage);
                updateMessageSettings(newMessage);
              }
            }}
          />
        </div>
        <div className={standardStyles.labelSubtext}>{t("full_names")}</div>
      </div>
      <div className={standardStyles.labelContainer}>
        <div>
          <input
            className={standardStyles.labelRadioButton}
            type="radio"
            value="jst"
            checked={message.names === "Zuri"}
            onClick={() => {
              if (message !== undefined) {
                const newMessage = {
                  ...message,
                  names: "Zuri"
                };
                setMessage(newMessage);
                updateMessageSettings(newMessage);
              }
            }}
          />
        </div>
        <div className={standardStyles.labelSubtext}>{t("display_names")}</div>
      </div>
      {/* <div className={styles.img12}>
        {active1 == 0 && (
          <div className={styles.previewCard}>
            <img src={zuriPerson} alt="bot" />
            <div className={styles.previewInfo}>
              <div className={styles.previewName}>
                {active2 == 0 && <p className={styles.name}>Zuri Ananda</p>}
                {active2 == 1 && <p className={styles.name}>Zuri</p>}
                <p className={styles.time}>9:25pm</p>
              </div>
              <p className={styles.message}>👋 Hi I'm Zuri</p>
            </div>
          </div>
        )}
        {active1 == 1 && (
          <div className={styles.previewCard1}>
            <p className={styles.time}>9:25pm</p>
            {active2 == 0 && <p className={styles.name}>Zuri Ananda</p>}
            {active2 == 1 && <p className={styles.name}>Zuri</p>}
            <p className={styles.message}>👋 Hi I'm Zuri</p>
          </div>
        )}
      </div> */}
      <div className={styles.change}>
        {t("change_display_name")}
        <span style={{ color: "#00B87C", cursor: "pointer" }}>
          {" "}
          {t("your_profile")}
        </span>
      </div>
      <div className={standardStyles.hrLine}></div>
      {/* <div className={styles.add}>Additional options</div> */}
      {/* <div className={styles.info}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="add"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.additional_options.currently_typing}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    additional_options: {
                      ...message.additional_options,
                      currently_typing: !currently_typing
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.current}>
          Display information about who is currently typing a message
        </div>
      </div> */}
      {/* <div className={styles.timed}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox2}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="time"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.additional_options.clock}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    additional_options: {
                      ...message.additional_options,
                      clock: !clock
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.hour}>Show times with 24-hour clock</div>
      </div> */}
      {/* <div className={styles.hexa}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox3}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="hex"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.additional_options.color_swatches}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    additional_options: {
                      ...message.additional_options,
                      color_swatches: !color_swatches
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.color}>
          Display color swatches next to hexadecimal values
        </div>
      </div> */}
      {/* <div className={styles.bottom3}></div> */}
      <div className={standardStyles.labelTextHeader}>{t("emoji")}</div>
      <div className={styles.tone}>{t("skin_tone")}</div>
      <p className={styles.choose}>{t("choose_skin")}</p>
      <p className={standardStyles.labelTextHeader}>
        {t("reactions_messages")}
      </p>
      <div className={styles.hands}>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme13} alt="theme13" className={styles.theme13} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme14} alt="theme14" className={styles.theme14} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme15} alt="theme15" className={styles.theme15} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme16} alt="theme16" className={styles.theme16} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme17} alt="theme17" className={styles.theme17} />
        </div>
        <div tabIndex="-1" className={styles.emojiBox}>
          <img src={theme18} alt="theme18" className={styles.theme18} />
        </div>
      </div>
      {/* <div className={styles.plntxt}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox4}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="pln"
              checked={message.emoji_as_text}
              onChange={e => setIsChecked(e.target.checked)}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    emoji_as_text: !emoji_as_text
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.plain}>Display emoji in plain text</div>
      </div> */}
      {/* <div className={styles.jumb}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox5}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              checked={message.show_jumbomoji}
              name="jum"
              onChange={e => setIsChecked(e.target.checked)}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    show_jumbomoji: !show_jumbomoji
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.jumbomoji}>Show JUMBOMOJI</div>
      </div> */}
      {/* <p className={styles.versions}>
        Display the jumbo versions of emoji (up to 23 at a time!) in messages
        without text.
      </p> */}
      {/* <p className={styles.example}>Here is an example</p> */}
      {/* <img src={theme19} alt="theme19" className={styles.theme19} />
      <div className={styles.bottom4}></div> */}
      {/* <div className={styles.media}>In-line media and links</div> */}
      {/* <div className={styles.images}> */}
      {/* <form onSubmit={handleSubmit}>
          <div className={styles.checkbox6}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              checked={
                message.inline_media_and_links
                  .show_images_and_files_uploaded_to_zurichat
              }
              name="img"
              onChange={e => setIsChecked(e.target.checked)}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      show_images_and_files_uploaded_to_zurichat:
                        !show_images_and_files_uploaded_to_zurichat
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form> */}
      {/* <div className={styles.files}>
          Show images and files uploaded to Zurichat
        </div> */}
      {/* </div> */}
      {/* <div className={styles.websites}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox7}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="web"
              onChange={e => setIsChecked(e.target.checked)}
              checked={
                message.inline_media_and_links
                  .show_images_and_files_from_linked_websites
              }
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      show_images_and_files_from_linked_websites:
                        !show_images_and_files_from_linked_websites
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.linked}>
          Show images and files from linked websites
        </div>
      </div> */}
      {/* <div className={styles.larger}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox8}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="lrg"
              onChange={e => setIsChecked(e.target.checked)}
              checked={message.inline_media_and_links.larger_than_2_mb}
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      larger_than_2_mb: !larger_than_2_mb
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.than}>Even if they're larger than 2 MB</div>
      </div> */}
      {/* <div className={styles.previews}>
        <form onSubmit={handleSubmit}>
          <div className={styles.checkbox9}>
            <input
              type="checkbox"
              className={styles.inputCheckBox}
              name="pre"
              onChange={e => setIsChecked(e.target.checked)}
              checked={
                message.inline_media_and_links
                  .show_text_previews_of_linked_websites
              }
              onClick={() => {
                if (message !== undefined) {
                  const newMessage = {
                    ...message,
                    inline_media_and_links: {
                      ...message.inline_media_and_links,
                      show_text_previews_of_linked_websites:
                        !show_text_previews_of_linked_websites
                    }
                  }
                  setMessage(newMessage)
                  updateMessageSettings(newMessage)
                }
              }}
            />
          </div>
        </form>
        <div className={styles.of}>Show text previews of linked websites</div>
      </div> */}
    </div>
  );
};
export default MessagesMedia;
