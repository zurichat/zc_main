import React, { useState, useContext, useEffect } from "react"
import styles from "../styles/NotificationPreference.module.css"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { authAxios } from "../utils/Api"
import { ProfileContext } from "../context/ProfileModal"

const NotificationPreference = () => {
  const [active, setActive] = useState("")
  const [active1, setActive1] = useState("")
  const [keywordInput, setKeywordInput] = useState("")
  const [durations] = useState([
    { name: "Duration" },
    { name: "Everyday" },
    { name: "Weekdays" },
    { name: "Custom" }
  ])
  const [durationPeriod, setDurationPeriod] = useState("")
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
  ])
  const [notificationSend, setNotificationSend] = useState("")
  const { user, orgId } = useContext(ProfileContext)
  const [dataState, setDataState] = useState({
    notify_me_about: "",
    use_different_settings_mobile: false,
    channel_hurdle_notification: false,
    meeting_replies_notification: false,
    thread_replies_notification: false,
    my_keywords: [""],
    notification_schedule: {
      day: "",
      from: "",
      to: ""
    },
    custom_notification_schedule: [
      {
        day: "",
        from: "",
        to: ""
      }
    ],
    message_preview_in_each_notification: false,
    set_message_notifications_right: "",
    set_lounge_notifications_right: "",
    mute_all_sounds: false,
    flash_window_when_notification_comes: "",
    deliver_notifications_via: "",
    when_iam_not_active_on_desktop: "",
    email_notifications_for_mentions: false
  })
  // const [dataState, setDataState] = useState({
  //   // channel_hurdle_notification: channel_hurdle,
  //   email_notifications_for_mentions_and_dm: false,
  //   message_preview_in_each_notification: false,
  //   mute_all_sounds: false,
  //   my_keywords: "",
  //   notification_schedule: "",
  //   notify_me_about: "",
  //   thread_replies_notification: false,
  //   use_different_settings_mobile: false,
  //   when_iam_not_active_on_desktop: "",
  //   notify_me_meeting_set: false
  // })

  useEffect(() => {
    if (sessionStorage.getItem("notificationSettings")) {
      let settings = JSON.parse(sessionStorage.getItem("notificationSettings"))
      setDataState(settings)
    } else {
      sessionStorage.setItem("notificationSettings", JSON.stringify(dataState))
    }
  }, [])

  const setData = () => {
    authAxios
      .patch(
        `/organizations/${orgId}/members/${user._id}/settings/notifications`,
        dataState
      )
      .then(res => {
        // console.log(res)
        // setState({ loading: false })
      })
      .catch(err => {
        console.error(err?.response?.data)
        // setState({ loading: false })
      })

    // localStorage.setItem("settings", JSON.stringify(dataState))
  }

  const handleKeywordChange = e => {
    setKeywordInput(e.target.value)
    let newKeyword = keywordInput
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        my_keywords: [newKeyword]
      })
    )
    setDataState({
      ...dataState,
      my_keywords: [newKeyword]
    })
    setData()
  }

  const handleSelect = e => {
    setDurationPeriod(e.target.value)
    setNotificationSend(e.target.value)
    setDataState({
      ...dataState,
      when_iam_not_active_on_desktop: notificationSend
    })
    setData()
  }

  const handleAllMessages = e => {
    setActive1(e.target.value)
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        notify_me_about: "all-messages"
      })
    )
    setDataState({
      ...dataState,
      notify_me_about: "all-messages"
    })
    setData()
  }
  const handleDirectMessages = e => {
    setActive1(e.target.value)
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        notify_me_about: "direct-message"
      })
    )
    setDataState({
      ...dataState,
      notify_me_about: "direct-message"
    })
    setData()
  }

  const handleNothingChange = e => {
    setActive1(e.target.value)
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        notify_me_about: "none"
      })
    )
    setDataState({ ...dataState, notify_me_about: "none" })
    setData()
  }

  const handleMobileDeviceSettings = () => {
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        use_different_settings_mobile: !dataState.use_different_settings_mobile
      })
    )
    setDataState({
      ...dataState,
      use_different_settings_mobile: !dataState.use_different_settings_mobile
    })
    setData()
  }

  const handleNotifyMeeting = () => {
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        meeting_replies_notification: !dataState.meeting_replies_notification
      })
    )
    setDataState({
      ...dataState,
      meeting_replies_notification: !dataState.meeting_replies_notification
    })
    setData()
  }

  const handleThreadReplies = () => {
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        thread_replies_notification: !dataState.thread_replies_notification
      })
    )
    setDataState({
      ...dataState,
      thread_replies_notification: !dataState.thread_replies_notification
    })
    setData()
  }

  //Look at this with Samuel
  const handleMessagePreview = () => {
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        message_preview_in_each_notification:
          !dataState.message_preview_in_each_notification
      })
    )
    setDataState({
      ...dataState,
      message_preview_in_each_notification:
        !dataState.message_preview_in_each_notification
    })
    setData()
  }

  // Look at this with Samuel
  const handleMuteAll = () => {
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        mute_all_sounds: !dataState.mute_all_sounds
      })
    )
    setDataState({
      ...dataState,
      mute_all_sounds: !dataState.mute_all_sounds
    })
    setData()
  }

  const handleFlashNotificationNever = e => {
    setActive(e.target.value)
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        notification_schedule: "never"
      })
    )
    setDataState({
      ...dataState,
      notification_schedule: "never"
    })
    setData()
  }
  const handleFlashNotificationIdle = e => {
    setActive(e.target.value)
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        notification_schedule: "when-idle"
      })
    )
    setDataState({
      ...dataState,
      notification_schedule: "when-idle"
    })
    setData()
  }
  const handleFlashNotificationMute = e => {
    setActive(e.target.value)
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        notification_schedule: "mute-all"
      })
    )
    setDataState({
      ...dataState,
      notification_schedule: "mute-all"
    })
    setData()
  }

  //Look at it with Samuel
  const handleEmailNotifications = e => {
    setActive1(e.target.value)
    sessionStorage.setItem(
      "notificationSettings",
      JSON.stringify({
        ...dataState,
        email_notifications_for_mentions_and_dm:
          !dataState.email_notifications_for_mentions_and_dm
      })
    )
    setDataState({
      ...dataState,
      email_notifications_for_mentions_and_dm:
        !dataState.email_notifications_for_mentions_and_dm
    })
    setData()
  }

  useEffect(() => {
    setData()
    // console.log(dataState)
    // console.log(user)
  }, [dataState])

  return (
    <div>
      {/*  THE SECTION OF THE CONTENT */}
      <div className={styles.notifyContent}>
        <div className={styles.itemTitle1}>
          <h4 className={styles.titleLarge}>Notify me about </h4>{" "}
          <span className={styles.spanL}>
            <AiOutlineQuestionCircle className={styles.quest} />
            Learn about notifications
          </span>
        </div>
        <form>
          <div className={styles.radioBox}>
            <div className={styles.radio}>
              {" "}
              <input
                type="radio"
                value="all-messages"
                checked={dataState.notify_me_about === "all-messages"}
                onChange={handleAllMessages}
              />{" "}
              <label htmlFor="all-messages">All messages</label>
            </div>

            <div className={styles.radio}>
              <input
                type="radio"
                value="direct-messages"
                checked={dataState.notify_me_about === "direct-message"}
                onChange={handleDirectMessages}
              />
              <label htmlFor="direct-messages">Direct messages</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="none"
                checked={dataState.notify_me_about === "none"}
                onChange={handleNothingChange}
              />
              <label htmlFor="none">Nothing</label>
            </div>
          </div>
          <div className={styles.markbox}>
            <input
              type="checkbox"
              className={styles.check}
              value="for-mobile"
              checked={dataState.use_different_settings_mobile}
              onClick={handleMobileDeviceSettings}
            />
            <label htmlFor="for-mobile">
              {" "}
              Use different settings for my mobile device
            </label>
          </div>
          <hr
            style={{
              border: "block",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              marginLeft: "15px",
              marginRight: "auto",
              borderStyle: "inset",
              width: "800px",
              borderWidth: "1px"
            }}
          />
          <div className={styles.markbox}>
            <input
              type="checkbox"
              className={styles.check}
              value="for-meeting"
              checked={dataState.meeting_replies_notification}
              onClick={handleNotifyMeeting}
            />
            <label htmlFor="for-meeting">Notify me when a meeting is set</label>
          </div>
          <div className={styles.markbox}>
            <input
              type="checkbox"
              className={styles.check}
              value="for-thread"
              checked={dataState.thread_replies_notification}
              onClick={handleThreadReplies}
              // onClick={() => {
              //   setDataState({ use_different_settings_mobile: "yes" })
              //   setData()
              // }}
            />
            <label htmlFor="for-thread">Notify me of replies to thread</label>
          </div>
        </form>
        <hr
          style={{
            border: "block",
            marginTop: "1.5em",
            marginBottom: "0.5em",
            marginLeft: "15px",
            marginRight: "auto",
            borderStyle: "inset",
            width: "800px",
            borderWidth: "1px"
          }}
        />
        <div className={styles.itemTitle2}>
          {/* <div className={styles.line}></div> */}
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
        </div>
        <hr
          style={{
            border: "block",
            marginTop: "1.5em",
            marginBottom: "0.5em",
            marginLeft: "15px",
            marginRight: "auto",
            borderStyle: "inset",
            width: "800px",
            borderWidth: "1px"
          }}
        />
        {/* <div className={styles.line} /> */}
        <div className={styles.itemTitle2}>
          <h4 className={styles.titleSmall}>Schedule Notification </h4>{" "}
          <span className={styles.spanBlock}>
            You'll only receive notifications in the hours that you choose.
            Outside of those times, notifications will be paused.{" "}
            <span className={styles.spanSmall}>Learn more</span>
          </span>
        </div>
        <div className={styles.schedule}>
          <ul className={styles.list}>
            <li className={styles.listChild}>
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
            <li className={styles.listChild}>
              <TextInput label="From" />
            </li>

            <li className={styles.listChild}>
              <TextInput label="to" />
            </li>
          </ul>
        </div>
        {/* <div className={styles.line} /> */}
        <hr
          style={{
            border: "block",
            marginTop: "1.5em",
            marginBottom: "0.5em",
            marginLeft: "15px",
            marginRight: "auto",
            borderStyle: "inset",
            width: "800px",
            borderWidth: "1px"
          }}
        />

        {/* Michael's sound check code */}
        <div className={styles.itemTitle2}>
          <h4 className={styles.titleSmall}>Sound checks</h4>
          <span className={styles.spanBlock}>
            Choose your notification sound
          </span>
          <button className={styles.button}>Example Sound</button>
        </div>

        <div className={styles.mute}>
          <div className={styles.markbox}>
            <input
              type="checkbox"
              checked={dataState.message_preview_in_each_notification}
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
              checked={dataState.mute_all_sounds}
              onClick={handleMuteAll}
              className={styles.check}
            />
            <label htmlFor="for-muteall">Mute all</label>
          </div>
        </div>

        <div className={styles.picksound}>
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
        </div>
        <hr
          style={{
            border: "block",
            marginTop: "1.5em",
            marginBottom: "0.5em",
            marginLeft: "15px",
            marginRight: "auto",
            borderStyle: "inset",
            width: "800px",
            borderWidth: "1px"
          }}
        />

        <div className={styles.section2}>
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
                checked={dataState.notification_schedule === "never"}
                onClick={handleFlashNotificationNever}
              />
              <label htmlFor="never">Never</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="when-idle"
                checked={dataState.notification_schedule === "when-idle"}
                onClick={handleFlashNotificationIdle}
              />
              <label htmlFor="direct-messages">When idle</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="mute-all"
                checked={dataState.notification_schedule === "mute-all"}
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
        </div>
        {/* <div className={styles.line} /> */}
        <hr
          style={{
            border: "block",
            marginTop: "1.5em",
            marginBottom: "0.5em",
            marginLeft: "15px",
            marginRight: "auto",
            borderStyle: "inset",
            width: "800px",
            borderWidth: "1px"
          }}
        />
        <div className={styles.section3}>
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
        </div>
        <div className={styles.markbox}>
          <input
            type="checkbox"
            checked={dataState.email_notifications_for_mentions_and_dm}
            onClick={handleEmailNotifications}
            className={styles.check}
          />{" "}
          <label className="emailNot">
            Send me email notifications for mentions{" "}
          </label>
        </div>
      </div>
    </div>
  )
}

export default NotificationPreference

const TextInput = ({ type = "text", label }) => {
  const [value, setValue] = useState("")

  function handleChange(e) {
    setValue(e.target.value)
  }
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={styles.textInput}
        value={value}
        onChange={handleChange}
      />
      <label style={{ color: "#B0AFB0" }} className={value && "filled"}>
        {label}
      </label>
    </div>
  )
}
