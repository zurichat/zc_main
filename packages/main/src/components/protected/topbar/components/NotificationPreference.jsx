import React, { useState, useContext, useEffect } from "react";
import styles from "../styles/NotificationPreference.module.css";
import standardStyles from "../styles/UserPreference.module.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { authAxios } from "../utils/api";
import { ProfileContext } from "../context/profile-modal.context";

import { useTranslation } from "react-i18next";

const NotificationPreference = () => {
  const { t } = useTranslation();

  const { user, orgId } = useContext(ProfileContext);
  const [active, setActive] = useState("");
  const [active1, setActive1] = useState("");
  const [notificationSettings, setNotificationSettings] = useState(
    user.settings?.notifications
  );
  const [keywordInput, setKeywordInput] = useState("");
  const [durationInput, setDurationInput] = useState("");
  const [durations] = useState([
    { name: "Duration" },
    { name: "Everyday" },
    { name: "Weekdays" },
    { name: "Custom" }
  ]);
  const [durationPeriod, setDurationPeriod] = useState("");
  const [notifications, setNotifications] = useState([
    { name: "when i'm online" },
    { name: "immediately, even if i'm active" },
    { name: "after i've been inactive for 1 minute" },
    { name: "after i've been inactive for 2 minute" },
    { name: "after i've been inactive for 5 minute" },
    { name: "after i've been inactive for 10 minute" },
    { name: "after i've been inactive for 15 minute" },
    { name: "after i've been inactive for 20 minute" },
    { name: "after i've been inactive for 30 minute" }
  ]);
  const [notificationSend, setNotificationSend] = useState("");
  // const [dataState, setDataState] = useState({
  //   notify_me_about: "",
  //   use_different_settings_mobile: false,
  //   channel_hurdle_notification: false,
  //   meeting_replies_notification: false,
  //   thread_replies_notification: false,
  //   my_keywords: [""],
  //   notification_schedule: {
  //     day: "",
  //     from: "",
  //     to: ""
  //   },
  //   custom_notification_schedule: [
  //     {
  //       day: "",
  //       from: "",
  //       to: ""
  //     }
  //   ],
  //   message_preview_in_each_notification: false,
  //   set_message_notifications_right: "",
  //   set_lounge_notifications_right: "",
  //   mute_all_sounds: false,
  //   flash_window_when_notification_comes: "",
  //   deliver_notifications_via: "",
  //   when_iam_not_active_on_desktop: "",
  //   email_notifications_for_mentions: false
  // })

  const setData = notification => {
    authAxios.patch(
      `/organizations/${user.org_id}/members/${user._id}/settings/notification`,
      notification
    );
  };

  const handleKeywordChange = e => {
    setKeywordInput(e.target.value);
    let newKeyword = keywordInput;
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        my_keywords: [newKeyword]
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleSelect = e => {
    setDurationPeriod(e.target.value);
    setNotificationSend(e.target.value);
    setNotificationSettings({
      ...notificationSettings,
      when_iam_not_active_on_desktop: notificationSend
    });
  };

  const handleDurationChange = e => {
    setDurationInput(e.target.value);
  };

  const handleAllMessages = e => {
    setActive1(e.target.value);
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        notify_me_about: "all-messages"
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };
  const handleDirectMessages = e => {
    setActive1(e.target.value);
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        notify_me_about: "direct-message"
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleNothingChange = e => {
    setActive1(e.target.value);
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        notify_me_about: "none"
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleMobileDeviceSettings = () => {
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        use_different_settings_mobile:
          !notificationSettings.use_different_settings_mobile
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleNotifyMeeting = () => {
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        meeting_replies_notification:
          !notificationSettings.meeting_replies_notification
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleThreadReplies = () => {
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        thread_replies_notification:
          !notificationSettings.thread_replies_notification
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleMessagePreview = () => {
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        message_preview_in_each_notification:
          !notificationSettings.message_preview_in_each_notification
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleMuteAll = () => {
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        mute_all_sounds: !notificationSettings.mute_all_sounds
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleFlashNotificationNever = e => {
    setActive(e.target.value);
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        flash_window_when_notification_comes: "never"
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };
  const handleFlashNotificationIdle = e => {
    setActive(e.target.value);
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        flash_window_when_notification_comes: "when-idle"
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };
  const handleFlashNotificationMute = e => {
    setActive(e.target.value);
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        flash_window_when_notification_comes: "mute-all"
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  const handleEmailNotifications = e => {
    setActive1(e.target.value);
    if (notificationSettings !== undefined) {
      let newNotification = {
        ...notificationSettings,
        email_notifications_for_mentions:
          !notificationSettings.email_notifications_for_mentions
      };
      setNotificationSettings(newNotification);
      setData(newNotification);
    }
  };

  return (
    <>
      {/*  THE SECTION OF THE CONTENT */}
      <div className={standardStyles.modalContent}>
        <div className={styles.itemTitle1}>
          <h4 className={styles.titleLarge}>{t("notify_me_about")}</h4>{" "}
          <span className={styles.spanL}>
            <AiOutlineQuestionCircle className={styles.quest} />
            {t("learn_more_notifications")}
          </span>
        </div>
        <form>
          <div className={styles.radioBox}>
            <div className={styles.radio}>
              {" "}
              <input
                type="radio"
                value="all-messages"
                checked={
                  notificationSettings?.notify_me_about === "all-messages"
                }
                onChange={handleAllMessages}
              />{" "}
              <label htmlFor="all-messages">{t("notify_all")}</label>
            </div>

            <div className={styles.radio}>
              <input
                type="radio"
                value="direct-messages"
                checked={
                  notificationSettings?.notify_me_about === "direct-message"
                }
                onChange={handleDirectMessages}
              />
              <label htmlFor="direct-messages">{t("notify_dm")}</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="none"
                checked={notificationSettings?.notify_me_about === "none"}
                onChange={handleNothingChange}
              />
              <label htmlFor="none">{t("notify_nothing")}</label>
            </div>
          </div>
          {/* <div className={styles.markbox}>
            <input
              type="checkbox"
              className={styles.check}
              value="for-mobile"
              checked={notificationSettings.use_different_settings_mobile}
              onClick={handleMobileDeviceSettings}
            />
            <label htmlFor="for-mobile">
              {" "}
              Use different settings for my mobile device
            </label>
          </div> */}
          {/* <hr className={styles.hrNot} /> */}
          {/* <div className={styles.markbox}>
            <input
              type="checkbox"
              className={styles.check}
              value="for-meeting"
              checked={notificationSettings.meeting_replies_notification}
              onClick={handleNotifyMeeting}
            />
            <label htmlFor="for-meeting">Notify me when a meeting is set</label>
          </div> */}
          {/* <div className={styles.markbox}>
            <input
              type="checkbox"
              className={styles.check}
              value="for-thread"
              checked={notificationSettings.thread_replies_notification}
              onClick={handleThreadReplies}
            />
            <label htmlFor="for-thread">Notify me of replies to thread</label>
          </div> */}
        </form>
        {/* <hr className={standardStyles.hrLine} /> */}
        {/* <div className={styles.itemTitle2}>
          <h4 className={styles.titleSmall}>Keywords</h4>{" "}
          <span className={styles.spanBlock}>
            You will be notified anything, someone uses these keywords in a
            thread
          </span>
          <textarea
            type="text"
            value={keywordInput}
            onChange={handleKeywordChange}
            className={styles.textarea}
          />
        </div> */}
        {/* <hr className={styles.hrNot} /> */}

        {/* <div className={styles.itemTitle2}>
          <h4 className={styles.titleSmall}>Schedule Notification </h4>{" "}
          <span className={styles.spanBlock}>
            You'll only receive notifications in the hours that you choose.
            Outside of those times, notifications will be paused. <br />{" "}
            <span className={styles.spanSmall}>Learn more</span>
          </span>
        </div> */}
        {/* <div className={styles.schedule}>
          <ul className={styles.list} style={{ paddingLeft: "0" }}>
            <li className={standardStyles.spacingRight}>
              <div className={styles.select}>
                <select
                  className={styles.selectButton}
                  id=""
                  onChange={handleSelect}
                >
                  <option selected>Choose here</option>
                  {durations.map((item, index) => (
                    <option
                      className={styles.optionDuration}
                      key={index}
                      value={item.name}
                    >
                      {`${item.name}`}
                    </option>
                  ))}
                </select>
              </div>
            </li>
            <li className={standardStyles.spacingRight}>
              <TextInput
                type="text"
                label="From"
                value={durationInput}
                placeholder="From"
                onChange={handleDurationChange}
              />
            </li>

            <li className={standardStyles.spacingRight}>
              <TextInput label="to" />
            </li>
          </ul>
        </div> */}

        {/* <hr className={styles.hrNot} /> */}

        {/* <div className={styles.itemTitle2}>
          <h4 className={styles.titleSmall}>Sound checks</h4>
          <span className={styles.spanBlock}>
            Choose your notification sound
          </span>
          <button className={styles.button}>Example Sound</button>
        </div> */}

        {/* <div className={styles.mute}>
          <div className={styles.markbox}>
            <input
              type="checkbox"
              checked={
                notificationSettings.message_preview_in_each_notification
              }
              onClick={handleMessagePreview}
              className={styles.check}
            />
            <label htmlFor="for-includepreview">
              Include preview message in notification
            </label>
          </div>
          <div className={styles.markbox}>
            <input
              type="checkbox"
              checked={notificationSettings.mute_all_sounds}
              onClick={handleMuteAll}
              className={styles.check}
            />
            <label htmlFor="for-muteall">Mute all</label>
          </div>
        </div> */}

        {/* <div className={styles.picksound}>
          <div className={styles.share}>
            <div className={styles.sound}>
              <div className={styles.msg3}>
                Set your notifications right (Messages)
              </div>
              <div className={styles.dropdown}>
                <select className={styles.button2}>
                  <option value="rising-tune">Rising Tune</option>
                  <option value="ding-dong">Ding Dong</option>
                  <option selected value="pick-sound">
                    Pick Sound
                  </option>
                  <option value="ring">Ring</option>
                </select>
              </div>
            </div>

            <div className={styles.lounge}>
              <div className={styles.msg3}>
                Set your notifications right (Lounge)
              </div>
              <div className={styles.dropdown}>
                <select className={styles.button2}>
                  <option value="evening-tune">Evening Tune</option>
                  <option value="top-hill">Top Hill</option>
                  <option selected value="pick-sound">
                    Pick Sound
                  </option>
                  <option value="bells">Bells</option>
                </select>
              </div>
            </div>
          </div>
        </div> */}
        {/* <hr className={standardStyles.hrLine} /> */}

        {/* <div className={styles.section2}>
          <div className={styles.itemTitle2}>
            <div className={styles.titleSmall}>
              Flash window when notification comes
            </div>
          </div>
          <form>
            <div className={styles.radio}>
              <input
                type="radio"
                value="never"
                checked={
                  notificationSettings.flash_window_when_notification_comes ===
                  "never"
                }
                onClick={handleFlashNotificationNever}
              />
              <label htmlFor="never">Never</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="when-idle"
                checked={
                  notificationSettings.flash_window_when_notification_comes ===
                  "when-idle"
                }
                onClick={handleFlashNotificationIdle}
              />
              <label htmlFor="direct-messages">When idle</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="mute-all"
                checked={
                  notificationSettings.flash_window_when_notification_comes ===
                  "mute-all"
                }
                onClick={handleFlashNotificationMute}
              />
              <label htmlFor="direct-messages">Mute all</label>
            </div>
          </form>
          <div className={styles.deliver}>
            <div className={styles.when}>Deliver notifications via</div>
            <div className={styles.dropdown3}>
              <select className={styles.button4}>
                <option selected disabled value="pick-sound">
                  Pick Sound
                </option>
              </select>
            </div>
          </div>
        </div> */}

        {/* <hr className={styles.hrNot} /> */}
        {/* <div className={styles.section3}>
          <div className={styles.itemTitle2}>
            <div className={styles.titleSmall}>
              When I am not active on desktop
            </div>
          </div>
          <div className={styles.deliver}>
            <div className={styles.when}>Send notifications to my mobile</div>
            <div className={styles.dropdown3}>
              <select className={styles.button4} onChange={handleSelect}>
                {notifications.map((item, index) => (
                  <option
                    key={index}
                    value={item.name}
                  >{`${item.name}`}</option>
                ))}
              </select>
            </div>
          </div>
        </div> */}
        {/* <div className={styles.markbox}>
          <input
            type="checkbox"
            checked={notificationSettings.email_notifications_for_mentions}
            onClick={handleEmailNotifications}
            className={styles.check}
          />{" "}
          <label className="emailNot">
            Send me email notifications for mentions{" "}
          </label>
        </div> */}
      </div>
    </>
  );
};

export default NotificationPreference;

const TextInput = ({ type = "text", label }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={styles.textInput}
        value={value}
        onChange={handleChange}
      />
      <label
        style={{ color: "#B0AFB0", textAlign: "center", marginTop: "4px" }}
        className={value && "filled"}
      >
        {label}
      </label>
    </div>
  );
};
