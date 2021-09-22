import React, { useState, useContext, useEffect } from 'react'
import styles from '../styles/NotificationPreference.module.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { authAxios } from '../utils/Api'
import { ProfileContext } from '../context/ProfileModal'

const NotificationPreference = () => {
  const [active, setActive] = useState(0)
  const [active1, setActive1] = useState(0)
  const { user, orgId } = useContext(ProfileContext)

  const [dataState, setDataState] = useState({
    // channel_hurdle_notification: channel_hurdle,
    email_notifications_for_mentions_and_dm: null,
    message_preview_in_each_notification: false,
    mute_all_sounds: false,
    my_keywords: '',
    notification_schedule: '',
    notify_me_about: '',
    thread_replies_notification: false,
    use_different_settings_mobile: '',
    when_iam_not_active_on_desktop: ''
  })

  const setData = () => {
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/settings`, {
        settings: {
          notifications: dataState
        }
      })
      .then(res => {
        console.log(res)
        // setState({ loading: false })
      })
      .catch(err => {
        console.log(err?.response?.data)
        // setState({ loading: false })
      })
  }
  const [state, setState] = useState({
    name: 'React',
    value: 'duration'
  })

  const handleChange = event => {
    setState({ value: event.target.value })
  }

  useEffect(() => {
    setData()
    console.log(dataState)
    console.log(user)
  }, [dataState])

  return (
    <div>
      {/*  THE SECTION OF THE CONTENT */}
      <div className={styles.notifyContent}>
        <div className={styles.itemTitle1}>
          <h4 className={styles.titleLarge}>Notify me about </h4>{' '}
          <span className={styles.spanL}>
            <AiOutlineQuestionCircle className={styles.quest} />
            Learn about notifications
          </span>
        </div>
        <form>
          <div className={styles.radioBox}>
            <div className={styles.radio}>
              <input
                type="radio"
                value="all-messages"
                checked={active1 === 0}
                onClick={() => {
                  setActive1(0)
                  setDataState({ notify_me_about: 'all-messages' })
                  setData()
                }}
              />
              <label htmlFor="all-messages">All messages</label>
            </div>

            <div className={styles.radio}>
              <input
                type="radio"
                value="direct-messages"
                checked={active1 === 1}
                onClick={() => {
                  setActive1(1)
                  setDataState({ notify_me_about: 'direct-message' })
                  setData()
                }}
              />
              <label htmlFor="direct-messages">Direct messages</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="none"
                checked={active1 === 2}
                onClick={() => {
                  setActive1(2)
                  setDataState({ thread_replies_notification: 'none' })
                  setData()
                }}
              />
              <label htmlFor="none">Nothing</label>
            </div>
          </div>
          <div className={styles.markbox}>
            <label htmlFor="for-mobile">
              {' '}
              <input
                type="checkbox"
                className={styles.check}
                value="for-mobile"
              />
              Use different settings for my mobile device
            </label>
          </div>
          {/* <div className={styles.line} /> */}

          <div className={styles.markbox}>
            <label htmlFor="for-meeting">
              <input
                type="checkbox"
                value="for-meeting"
                onClick={() => {
                  setDataState({ use_different_settings_mobile: 'yes' })
                  setData()
                }}
              />
              Notify me when a meeting is set
            </label>
          </div>
          <div className={styles.markbox}>
            <label htmlFor="for-thread">
              <input
                type="checkbox"
                value="for-thread"
                onClick={() => {
                  setDataState({ use_different_settings_mobile: 'yes' })
                  setData()
                }}
              />
              Notify me of replies to thread
            </label>
          </div>
        </form>
        <div className={styles.itemTitle2}>
          <div className={styles.line}></div>
          <h4 class={styles.titleSmall}>Keywords</h4>{' '}
          <span className={styles.spanBlock}>
            You will be notified anything, someone uses these keywords in a
            thread
          </span>
          <textarea className={styles.textarea}></textarea>
        </div>
        <div className={styles.line} />
        <div className={styles.itemTitle2}>
          <h4 class={styles.titleSmall}>Notification Schedule</h4>{' '}
          <span className={styles.spanBlock}>
            You'll only receive notifications in the hours that you choose.
            Outside of those times, notifications will be paused.
            <span className={styles.spanSmall}>Learn more</span>
          </span>
        </div>
        <div className={styles.schedule}>
          <ul className={styles.list}>
            <li className={styles.listChild}>
              <div className={styles.select}>
                <select
                  name="duration"
                  className={styles.selectButton}
                  id=""
                  value={state.value}
                  onChange={handleChange}
                >
                  <option selected value="duration">
                    Duration
                  </option>
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
        <div className={styles.line} />

        {/* Michael's sound check code */}
        <div className={styles.itemTitle2}>
          <h4 className={styles.titleSmall}>Sound & appearance</h4>
          <span className={styles.spanBlock}>
            Choose your notification sound
          </span>
          <button className={styles.button}>Example Sound</button>
        </div>

        <div className={styles.mute}>
          <div className={styles.markbox}>
            <label htmlFor="for-includepreview">
              <input type="checkbox" />
              Include preview message in notification
            </label>
          </div>
          <div className={styles.markbox}>
            <label htmlFor="for-muteall">
              <input
                type="checkbox"
                onClick={() => {
                  setDataState({ mute_all_sounds: 'yes' })
                  setData()
                }}
              />
              Mute all
            </label>
          </div>
        </div>

        <div className={styles.picksound}>
          <div className={styles.share}>
            <div className={styles.sound}>
              <div className={styles.msg3}>
                Set your notifications right (Message)
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
          {/* <hr/> */}
        </div>

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
                checked={active === 0}
                onClick={() => {
                  setActive(0)
                  setDataState({ notify_me_about: 'all-messages' })
                  setData()
                }}
              />
              <label htmlFor="never">Never</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="direct-messages"
                checked={active === 1}
                onClick={() => setActive(1)}
              />
              <label htmlFor="direct-messages">When idle</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="direct-messages"
                checked={active === 2}
                onClick={() => setActive(2)}
              />
              <label htmlFor="direct-messages">Mute all</label>
            </div>
          </form>
          <div className={styles.deliver}>
            <div className={styles.when}>Deliver notifications via</div>
            <div className={styles.dropdown3}>
              <select className={styles.button4}>
                <option selected value="pick-sound">
                  Pick Sound
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.section3}>
          <div className={styles.itemTitle2}>
            <div className={styles.titleSmall}>
              When I am not active on desktop
            </div>
          </div>
          <div className={styles.deliver}>
            <div className={styles.when}>Send notifications to my mobile</div>
            <div className={styles.dropdown3}>
              <select className={styles.button4}>
                <option selected value="pick-sound">
                  When i am online
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.markbox}>
          <label>
            <input
              type="checkbox"
              onClick={() => {
                setDataState({ notify_me_about: 'all-messages' })
                setData()
              }}
            />{' '}
            Send me email notifications for mentions{' '}
          </label>
        </div>
      </div>
    </div>
  )
}

export default NotificationPreference

const TextInput = ({ type = 'text', label }) => {
  const [value, setValue] = useState('')

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
      <label className={value && 'filled'}>{label}</label>
    </div>
  )
}
