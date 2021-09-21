import React from 'react'
import styles from '../styles/MarkAsRead.module.css'

const MarkAsRead = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h5 className={styles.subhead}>When i view a channel:</h5>
          <form action="">
            <div>
              <input
                className={styles.viewChannel}
                type="radio"
                name="view-channel"
                value="Start me where i left off and mark the channel read"
              />
              <label
                className={styles.option}
                htmlFor="Start me where i left off and mark the channel read"
              >
                Start me where i left off and mark the channel read
              </label>
            </div>
            <div>
              <input
                className={styles.viewChannel}
                type="radio"
                name="view-channel"
                value="Start me at the newest message and amrk the channel read"
                checked
              />
              <label
                className={styles.option}
                htmlFor="Start me at the newest message and amrk the channel read"
              >
                Start me at the newest message and amrk the channel read
              </label>
            </div>
            <div>
              <input
                className={styles.viewChannel}
                type="radio"
                name="view-channel"
                value="Start me at the newest message but leave unseen messages unread"
              />
              <label
                className={styles.option}
                htmlFor="Start me at the newest message but leave unseen messages unread"
              >
                Start me at the newest message but leave unseen messages unread
              </label>
            </div>
          </form>
        </div>
        <div>
          <h5 className={styles.subhead}>When i mark everything as read:</h5>
          <form action="">
            <div>
              <label className={styles.markAll} htmlFor="prompt to confirm">
                <input
                  className={styles.prompt}
                  type="checkbox"
                  value="Prompt to confirm"
                  checked="checked"
                />
                <span className={styles.checkmark}></span>
                Prompt to confirm
              </label>
            </div>
          </form>
        </div>
        <div>
          <h5 className={styles.subhead}>Keyboard shortcuts</h5>
          <div>
            <ul>
              <li className={styles.shortcut}>
                Mark all messages in current channel as read
                <span className={styles.esc}>Esc</span>
              </li>
              <li className={styles.shortcut}>
                Mark all messages as read
                <span className={styles.esc}>Shift</span>{' '}
                <span className={styles.esc}>Esc</span>{' '}
              </li>
              <li className={styles.shortcut}>
                Mark a message as unread
                <span className={styles.esc}>Alt </span> and click message
              </li>
            </ul>
            <p className={styles.shortcutP}>
              And that’s just the beginning. To view the full list of keywords
              shortcuts, just press <br />
              <span className={styles.esc}> Ctrl </span> +
              <span className={styles.esc}> / </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarkAsRead
