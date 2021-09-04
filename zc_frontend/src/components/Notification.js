import React from 'react'
// import { Notify, Head, Text, SubText, Button, Preview, CheckBox, CheckBox2, Msg, Mute, Msg2, DropDown } from './NotificationElements';
import styles from '../styles/Notification.module.css'

const Notification = () => {
  return (
    <div className={styles.notify}>
      <div className={styles.notifywrapper}>
        <div className={styles.head}>
          <div className={styles.text}>Sound checks</div>
          <div className={styles.subtext}>Choose your notification sound</div>
        </div>
        <button className={styles.button}>Example sound</button>
        <form className={styles.preview}>
          <div className={styles.checkbox}>
            <input type="checkbox" />
          </div>
          <div className={styles.msg}>
            Include preview message in notification
          </div>
        </form>
        <form className={styles.mute}>
          <div className={styles.checkbox2}>
            <input type="checkbox" />
          </div>
          <div className={styles.msg2}>Mute all</div>
        </form>
        <div className={styles.picksound}>
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
            <div className={styles.msg4}>
              Set your notifications right (Lounge)
            </div>
            <div className={styles.dropdown2}>
              <select className={styles.button3}>
                <option value="evening-tune">Evening Tune</option>
                <option value="top-hill">Top Hill</option>
                <option selected value="pick-sound">
                  Pick Sound
                </option>
                <option value="bells">Bells</option>
              </select>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.head2}>
              <div className={styles.text2}>
                Flash window when notification comes
              </div>
            </div>
            <form className={styles.flash}>
              <div className={styles.radio}>
                <input type="radio" />
              </div>
              <div className={styles.never}>Never</div>
            </form>
            <form className={styles.flash2}>
              <div className={styles.radio2}>
                <input type="radio" />
              </div>
              <div className={styles.idle}>When idle</div>
            </form>
            <form className={styles.flash3}>
              <div className={styles.radio}>
                <input type="radio" />
              </div>
              <div className={styles.always}>Always</div>
            </form>
            <div className={styles.deliver}>
              <div className={styles.when}>Deliver notifications via</div>
              <div className={styles.dropdown3}>
                <select className={styles.button4}>
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
          <div className={styles.section3}>
            <div className={styles.head3}>
              <div className={styles.text3}>
                When I am not active on desktop
              </div>
            </div>
            <div className={styles.mobile}>
              <div className={styles.send}>Send notifications to my mobile</div>
              <div className={styles.dropdown4}>
                <select className={styles.button5}>
                  <option value="offline">When I am offline</option>
                  <option selected value="online">
                    When I am online
                  </option>
                </select>
              </div>
            </div>
            <form className={styles.email}>
              <div className={styles.checkbox3}>
                <input type="checkbox" />
              </div>
              <div className={styles.msg5}>
                Send me email notifications for mentions
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
