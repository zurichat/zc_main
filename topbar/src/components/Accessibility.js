import React, { useState, useEffect } from "react"
import styles from "../styles/Accessibility.module.css"
import image1 from "../assets/images/up_icon.jpeg"
import { GetUserInfo } from "../../../control/src/zuri-control"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setUserAccessibilitySettings } from "../../src/redux/userAction/userActions"

function Accessibility() {
  const dispatch = useDispatch()
  const { accessibility } = useSelector(state => state.rootReducer)
  const [accessbilitySettings, setAccessibilitySettings] = useState({
    animation: false,
    receivedSound: false,
    sentSound: false,
    readOutLoud: true,
    messageControl: { bool: true, message: "focus_on_last_message" }
  })
  const [info, setInfo] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const userInfo = await GetUserInfo()
        if (userInfo === {}) throw new Error("No user info")
        const orgId = userInfo[0].org_id
        const memId = userInfo[0]._id
        const userAccessibiltySettings = {
          links: true,
          animation: accessbilitySettings.animation,
          direct_message_announcement: {
            receive_sound: accessbilitySettings.receivedSound,
            send_sound: accessbilitySettings.sentSound,
            read_message: accessbilitySettings.readOutLoud
          },
          press_empty_message_field: accessbilitySettings.messageControl.message
        }
        const userHeader = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
        dispatch(
          setUserAccessibilitySettings(
            `https://api.zuri.chat/organizations/${orgId}/members/${memId}/settings/accessibility`,
            userAccessibiltySettings,
            userHeader
          )
        )
        setInfo(userInfo)
      } catch (err) {
        setError(err)
      }
    })()
    return () => {}
  }, [accessbilitySettings])

  return (
    <div>
      <div className={styles.containerAccessibility}>
        <div>
          <h3 className={styles.animationH3}>Animation</h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                id="animation"
                className={styles.accessibilityCheckbox}
                type="checkbox"
                checked={accessbilitySettings.animation}
                name="animation"
                onChange={() =>
                  setAccessibilitySettings({
                    ...accessbilitySettings,
                    animation: !accessbilitySettings.animation
                  })
                }
                value="Allow animated images and emojis"
              />
              <span className={styles.customCheckbox}></span>
              <label htmlFor="animation" className={styles.accessibilityLabel}>
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
            using a screen reader inside a direct message.
          </p>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                id="receivedSound"
                type="checkbox"
                checked={accessbilitySettings.receivedSound}
                onChange={() =>
                  setAccessibilitySettings({
                    ...accessbilitySettings,
                    receivedSound: !accessbilitySettings.receivedSound
                  })
                }
                name="receivedSound"
                value="Play a sound when a message is received"
              />
              <label
                htmlFor="receivedSound"
                className={styles.accessibilityLabel}
              >
                Play a sound when a message is received
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                id="sentSound"
                type="checkbox"
                name="sentSound"
                checked={accessbilitySettings.sentSound}
                onChange={() =>
                  setAccessibilitySettings({
                    ...accessbilitySettings,
                    sentSound: !accessbilitySettings.sentSound
                  })
                }
                value="Play a sound when a message is sent"
              />
              <label htmlFor="sentSound" className={styles.accessibilityLabel}>
                Play a sound when a message is sent
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityCheckbox}
                id="readOutLoud"
                type="checkbox"
                checked={accessbilitySettings.readOutLoud}
                onChange={() =>
                  setAccessibilitySettings({
                    ...accessbilitySettings,
                    readOutLoud: !accessbilitySettings.readOutLoud
                  })
                }
                name="readOutLoud"
                value="Read incoming message out loud"
              />
              <label
                htmlFor="readOutLoud"
                className={styles.accessibilityLabel}
              >
                Read incoming message out loud
              </label>
            </div>
          </form>
        </div>
        <hr className={styles.hrLine} />

        <div>
          <h3 className={styles.keyboardH3}>Keyboard</h3>
          <p className={styles.accessibilityP}>
            You can improve the way you use Zurichat by learning our{" "}
            <span id={styles.handyKeyboard}>handy keyboard shortcuts.</span>
          </p>

          <hr className={styles.hrLine} />

          <h3 className={styles.pressH3}>
            Press <img src={image1} alt="upicon" className={styles.image1} /> in
            the empty message field to:
          </h3>
          <form action="">
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityRadio}
                id="messageList"
                type="radio"
                checked={
                  accessbilitySettings.messageControl.message ===
                  "focus_on_last_message"
                }
                onChange={() => {
                  setAccessibilitySettings({
                    ...accessbilitySettings,
                    messageControl: {
                      bool: true,
                      message: "focus_on_last_message"
                    }
                  })
                }}
                name="accessradio"
                value="focus_on_last_message"
              />
              <label
                htmlFor="messageList"
                className={styles.accessibilityRadioLabel}
              >
                <span>Move focus to the message list</span>
                <br />
                <span className={styles.accessbilityText}>
                  The last visible message in the list will be selected
                </span>
              </label>
            </div>
            <div className={styles.imagesAndEmojis}>
              <input
                className={styles.accessibilityRadio}
                id="editMessage"
                type="radio"
                checked={
                  accessbilitySettings.messageControl.message ===
                  "edit_last_message"
                }
                onChange={() => {
                  setAccessibilitySettings({
                    ...accessbilitySettings,
                    messageControl: { bool: true, message: "edit_last_message" }
                  })
                }}
                name="accessradio"
                value="edit_last_message"
              />
              <label
                htmlFor="editMessage"
                className={styles.accessibilityRadioLabel}
              >
                <span>Edit your last message</span>
                <br />
                <span className={styles.accessbilityText}>
                  The last visible message you sent will be selected and in the
                  editing mode
                </span>
              </label>
            </div>
          </form>

          <p
            className={styles.accessibilityQ}
            id={styles.noteP}
            style={{ marginTop: "10px" }}
          >
            Note: press <span className={styles.accessibilityEsc}> Ctrl </span>
            <span
              className={styles.accessibilityEsc}
              id={styles.exclamation}
              style={{ marginRight: "5px" }}
            >
              {" "}
              !{" "}
            </span>{" "}
            to edit your last message, with either option.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accessibility
