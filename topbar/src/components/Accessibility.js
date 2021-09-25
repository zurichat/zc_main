import React, { useState } from 'react'
import styles from '../styles/Accessibility.module.css'

function Accessibility() {
  return (
    <div>
      <div className={styles.containerAccessibility}>
        <div>
          <h3 className={styles.animationH3}>Animation</h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                checked="checked"
                name=""
                value="Allow animated images and emojis"
              />
              <label className={styles.accessibilityLabel}>
                Allow animated images and emojis
              </label>
            </div>
          </form>
        </div>
        <hr className={styles.hrLine} />

        <div>
          <h3 className={styles.directH3}>Direct message announcement</h3>
          <p className={styles.accessibilityP}>
            Choose which sounds and announcements you'd like to receive while
            using a
            <br />
            screen reader inside a direct message.
          </p>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                name=""
                value="Play a sound when a message is received"
              />
              <label className={styles.accessibilityLabel}>
                Play a sound when a message is received
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                name=""
                value="Play a sound when a message is sent"
              />
              <label className={styles.accessibilityLabel}>
                Play a sound when a message is sent
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                type="checkbox"
                checked="checked"
                name=""
                value="Read incoming message out loud"
              />
              <label className={styles.accessibilityLabel}>
                Read incoming message out loud
              </label>
            </div>
          </form>
        </div>
        <hr className={styles.hrLine} />

        <div>
          <h3 className={styles.keyboardH3}>Keyboard</h3>
          <p className={styles.accessibilityP}>
            You can improve the way you use Zurichat by learning our{' '}
            <span id={styles.handyKeyboard}>handy keyboard shortcuts.</span>
          </p>

          <hr className={styles.hrLine} />

          <h3 className={styles.pressH3}>
            Press in the empty message field to:
          </h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityRadio}
                type="radio"
                checked="checked"
                name="accessradio"
                value="Move focus to the message list"
              />
              <label className={styles.accessibilityRadioLabel}>
                Move focus to the message list
              </label>
              <p className={styles.accessibilityP} id={styles.accessibilityPId}>
                The last visible message in the list will be selected
              </p>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityRadio}
                type="radio"
                name="accessradio"
                value="Edit your last message"
              />
              <label className={styles.accessibilityRadioLabel}>
                Edit your last message
              </label>
              <p
                className={styles.accessibilityP}
                id={styles.accessibilityPId2}
              >
                The last visible message you sent will be selected and in the
                editing mode
              </p>
            </div>
          </form>

          <p className={styles.accessibilityP} id={styles.noteP}>
            Note: press
            <span className={styles.accessibilityEsc}> Ctrl </span>
            <span className={styles.accessibilityEsc} id={styles.exclamation}>
              {' '}
              !{' '}
            </span>{' '}
            to edit your last message, with either option.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accessibility
