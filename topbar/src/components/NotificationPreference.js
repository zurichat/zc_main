import React, { useState } from 'react'
import styles from '../styles/NotificationPreference.module.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const NotificationPreference = () => {
  const [state, setState] = useState({
    name: 'React',
    value: 'duration'
  })

  const handleChange = event => {
    setState({ value: event.target.value })
  }

  const onValueChange = event => {
    setState({
      name: event.target.value
    })
  }

  return (
    <div>
      {/*  THE SECTION OF THE CONTENT */}
      <div className={styles.notifyContent}>
        <div className={styles.itemTitle1}>
          <h4 className={styles.titleLarge}>Notify me about </h4>{' '}
          <span>
            <AiOutlineQuestionCircle />
            Learn about notifications
          </span>
        </div>
        <form>
          <div className={styles.radioBox}>
            <div className={styles.radio}>
              <input
                type="radio"
                value="all-messages"
                checked={state.selectedOption === 'all-messages'}
                onChange={onValueChange}
              />
              <label htmlFor="all-messages">All messages</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="direct-messages"
                checked={state.selectedOption === 'direct-messages'}
                onChange={onValueChange}
              />
              <label htmlFor="direct-messages">
                Direct messages, mentions & network
              </label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="none"
                checked={state.selectedOption === 'none'}
                onChange={onValueChange}
              />
              <label htmlFor="none">Nothing</label>
            </div>
          </div>
          <div className={styles.checkbox}>
            <label htmlFor="for-mobile">
              {' '}
              <input type="checkbox" value="for-mobile" />
              Use different settings for my mobile device
            </label>{' '}
          </div>
          <div className={styles.line}></div>
          {/* <hr />  */}
          <div className={styles.checkbox}>
            <label htmlFor="for-meeting">
              <input type="checkbox" value="for-meeting" />
              Notify me when a meeting is set
            </label>
          </div>
          <div className={styles.checkbox}>
            <label htmlFor="for-thread">
              <input type="checkbox" value="for-thread" />
              Notify me of replies to thread
            </label>
          </div>
        </form>
        <div className={styles.line}></div>
        <div className={styles.itemTitle2}>
          <h4 class={styles.titleSmall}>My Keywords</h4>{' '}
          <span>
            Show a badge (1) in my channel list when someone uses one of my
            keywords:
          </span>
          <textarea className={styles.textarea}></textarea>
          <span>
            Use commas to separate each keyword. Keywords are not case
            sensitive.
          </span>
        </div>
        <div className={styles.line} />
        <div className={styles.itemTitle2}>
          <h4 class={styles.titleSmall}>Notification Schedule</h4>{' '}
          <span>
            You'll only receive notifications in the hours that you choose.
            Outside of those times, notifications will be paused
            <span className={styles.spanSmall}>Learn more</span>
          </span>
          <h4 class={styles.titleSmall}>Allow Notification</h4>
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
                    Everyday
                  </option>
                </select>
              </div>
            </li>
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
                    12:00AM
                  </option>
                </select>
              </div>
            </li>
            <li className={styles.listChild}>
              <p>to</p>
            </li>
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
                    Everyday
                  </option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.line} />

        {/* Michael's sound check code */}
        <div className={styles.itemTitle2}>
          <h4 className={styles.titleSmall}>Sound & appearance</h4>
          <span>Choose your notification sound</span>
          <button className={styles.button}>Show example</button>
        </div>

        <form className={styles.mute}>
          <div className={styles.checkbox}>
            <label htmlFor="for-includepreview">
              {' '}
              <input type="checkbox" />
              Include a preview of the message in each notification (disable
              this for extra privacy)
            </label>
          </div>
          <div className={styles.checkbox}>
            <label htmlFor="for-muteall">
              <input type="checkbox" />
              Mute all sounds from Slack
            </label>
          </div>
        </form>

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
                // checked={state.selectedOption === 'all-messages'}
                // onChange={onValueChange}
              />
              <label htmlFor="never">Never</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                value="direct-messages"
                checked={state.selectedOption === 'direct-messages'}
                onChange={onValueChange}
              />
              <label htmlFor="direct-messages">
                When left idle <br />
                <span>(inactive for at least 10 seconds)</span>
              </label>
            </div>
          </form>
          <div className={styles.deliver}>
            <div className={styles.when}>Deliver notifications via</div>
            <div className={styles.dropdown3}>
              <select className={styles.button4}>
                <option selected value="pick-sound">
                  Windows Action Center
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
            <div className={styles.when}>
              Send notifications to my mobile devices
            </div>
            <div className={styles.dropdown3}>
              <select className={styles.button4}>
                <option selected value="pick-sound">
                  as soon as I'm inactive
                </option>
              </select>
            </div>
          </div>
        </div>
        <form>
          <div className={styles.checkbox}>
            <label>
              <input type="checkbox" /> Send me email notifications for mentions{' '}
            </label>
          </div>
        </form>
        <div className={styles.line} />
      </div>
    </div>
  )
}

export default NotificationPreference
